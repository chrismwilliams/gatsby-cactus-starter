import { useStaticQuery, graphql } from 'gatsby';

export default function useSiteMetadata() {
  const { site } = useStaticQuery(siteMetadataQuery);

  return site.siteMetadata;
}

const siteMetadataQuery = graphql`
  query SiteMetaData {
    site {
      siteMetadata {
        author
        title
        description
        siteUrl
        lang
        social {
          name
          url
        }
      }
    }
  }
`;
