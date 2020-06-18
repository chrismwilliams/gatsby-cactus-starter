const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/post.js`);
  return graphql(
    `
      {
        allMdx(
          sort: {
            fields: [frontmatter___date, frontmatter___title]
            order: DESC
          }
          limit: 1000
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                slug
              }
              body
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog posts pages.
    const posts = result.data.allMdx.edges;

    posts.forEach(({ node: post }, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      const { slug } = post.frontmatter;

      createPage({
        path: slug,
        component: postTemplate,
        context: {
          id: post.id,
          previousId: previous ? previous.node.id : undefined,
          nextId: next ? next.node.id : undefined,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `slug`,
      node,
    });
  }
};
