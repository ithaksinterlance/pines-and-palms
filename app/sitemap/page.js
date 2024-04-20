import React from 'react';

async function getObjects() {
  const res = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await res.json();
  return data;
}

export default async function Sitemap() {
  const sitemap = await getObjects();
  const uniqueURLs = {};
  sitemap.forEach(car => {
    const { make, model, year } = car;
    const url = `https://emirates-car.com/${make}/${model}/${year}`;

    // Use the URL as a key to ensure uniqueness
    uniqueURLs[url] = true;
  });

  // Convert unique URLs to an array of JSX elements
  const urlElements = Object.keys(uniqueURLs).map(url => (
    <div key={url}>
      {'<url>'}
      <br />
      {`<loc>${url.encodeURIComponent()}</loc>`}
      <br />
      {`<lastmod>${new Date().toISOString()}</lastmod>`}
      <br />
      {`<changefreq>monthly</changefreq>`}
      <br />
      {`<priority>1.0</priority>`}
      <br />
      {`</url>`}
    </div>
  ));
  return <div>{urlElements}</div>;
}
