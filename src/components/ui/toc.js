import React from 'react';
import { Link } from 'gatsby';

export default function TOC({ toc }) {
  if (!toc || !toc.items.length) return null;
  return (
    <div className="toc">
      <ul>
        {toc.items.map((item) => (
          <li key={item.url}>
            <Link to={item.url}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
