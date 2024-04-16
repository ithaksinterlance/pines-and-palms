"use client";
import React, { Component } from "react";
import { Sitemap } from "../links";

export default class sitemap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: Sitemap,
    };
  }
  render() {
    return this.state.site.map((p) => {
      return (
        <main key={p.links}>
          {"<url>"}
          <br />
          {"<loc>"}
          {p.links}
          {"</loc>"}
          <br />
          {"<lastmod>"}
          {new Date().toISOString()}
          {"</lastmod>"}<br/>
          {"<changefreq>"}monthly{"</changefreq>"}<br/>
          {"<priority>"}1.0{"</priority>"}
          <br />
          {"</url>"}
        </main>
      );
    });
  }
}
