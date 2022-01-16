import React, { Component } from "react";
import Image from "next/image";
import { produc } from "../car-logos";

export default class AutoPartImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carlogos: produc,
    };
  }
  render() {
    return this.state.carlogos.map((post) => {
      return (
        <main key={post.id} className="border p-5">
          <Image
            alt={post.name}
            src={"/img/car-logos/" + post.logo}
            className="object-scale-down xs:object-fit xs:ml-4"
            height={60}
            width={60}
          />
          <p className="text-gray-500 text-center hover:text-blue-800 focus:text-blue-800 text-xs">
            {post.name}
          </p>
        </main>
      );
    });
  }
}
