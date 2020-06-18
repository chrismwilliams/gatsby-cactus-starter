import React from 'react';
import 'twin.macro';

import { Underline } from './ui';

function TechItem({ href, linkText, desc }) {
  return (
    <li>
      <Underline>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </Underline>
      : <p tw="inline-block">{desc}</p>
    </li>
  );
}

export default function Technologies() {
  return (
    <section>
      <a
        href="https://github.com/chrismwilliams/gatsby-cactus-starter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 tw="title">Technologies</h2>
      </a>
      <ul tw="space-y-2">
        <TechItem
          href="https://www.gatsby.org"
          linkText="Gatsby"
          desc="A blazing fast React framework for building websites & apps"
        />
        <TechItem
          href="https://github.com/react-icons/react-icons"
          linkText="React Icons"
          desc="SVG icons from popular icon packs"
        />
        <TechItem
          href="https://mdxjs.com/"
          linkText="MDX"
          desc="Markdown for the component era"
        />
        <TechItem
          href="https://github.com/FormidableLabs/prism-react-renderer"
          linkText="Prism React"
          desc="Prism code block styling"
        />
        <TechItem
          href="https://github.com/ben-rogerson/twin.macro"
          linkText="Twin"
          desc="Tailwind CSS babel-macro library for simple variant styling"
        />
      </ul>
    </section>
  );
}
