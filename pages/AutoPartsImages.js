import React, { Component } from 'react';
import Image from 'next/image';
import { produc } from '../AutoPartsData';
import Link from 'next/link';

export default class AutoPartImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AutoPartsData: produc
    };
  }
  render() {
    return this.state.AutoPartsData.map(image => {
      return (
        <main key={image.title} className="border p-1 py-5 px-5">
          <Link href={image.href} passHref legacyBehavior>

            <Image
              alt={image.title}
              src={'/img/car-auto-parts/' + image.image}
              className="object-scale-down xs:object-fit xs:ml-4 rounded-xl bg-blue-400"
              priority
              height={70}
              width={70}
            />
            <p className="text-base  text-blue-600 py-2 font-semibold underline">
              {image.title + '>>'}
            </p>
            <p className="text-xs text-gray-500">{image.description}</p>
          </Link>
        </main>
      );
    });
  }
}
