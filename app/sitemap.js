import React from 'react';
import { Sitemap } from '../links';

const SitemapComponent = () => {
  return (
    <>
      {Sitemap.map(p => (
        <main key={p.links}>
          {'<url>'}
          <br />
          {'<loc>'}
          {p.links}
          {'</loc>'}
          <br />
          {'<lastmod>'}
          {new Date().toISOString()}
          {'</lastmod>'}
          <br />
          {'<changefreq>'}monthly{'</changefreq>'}
          <br />
          {'<priority>'}1.0{'</priority>'}
          <br />
          {'</url>'}
        </main>
      ))}
    </>
  );
};

export default SitemapComponent;
