import React, { Component } from 'react';
import Image from "next/legacy/image";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default class relatedpost extends Component {
  render() {
    return (
      <div>
        <div className="m-4 xs:m-1 ">
          <div className="flex justify-center items-center">
            <Image
              alt="emirates car"
              className="rounded-full"
              src="/img/avatar.png"
              width={70}
              height={70}
            />
          </div>
          <div className="text-sm text-blue-800 m-3">
            We are dealing with auto spare parts for car, heavy truck, van,
            buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
            vehicles, Used spare parts, After market parts, Genuine spare parts
            and New parts etc. Contact us for any inquiry.
          </div>
          <ul className="flex flex-col xl:flex-row list-none xl:ml-auto">
            <li className="nav-item">
              <Link
                href="https://www.facebook.com/emirates.auto.parts"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                legacyBehavior>

                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="ml-2 text-xl leading-xl text-blue-900 opacity-75"
                  />

              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://www.instagram.com/emiratescar_parts/"
                legacyBehavior>

                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="ml-2 text-xl leading-xl text-blue-900 opacity-75"
                  />

              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="https://twitter.com/emiratescarpart"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                legacyBehavior>

                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="ml-2 text-xl leading-xl text-blue-900 opacity-75"
                  />

              </Link>
            </li>
          </ul>
          <hr className="py-1 mt-2" />
          <div className="text-xs text-center uppercase">RELATED POST</div>
          <ul>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <Link
                href="https://emirates-car.com/blog/5%20Ways%20to%20Buy%20car%20spare%20parts%20Online%20Its%20Pros%20and%20Cons"
                legacyBehavior>

                  5 ways you can buy car spare parts
                  <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                    12 days ago - 10 min read
                  </p>

              </Link>
            </li>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <Link
                href="https://emirates-car.com/blog/How%20to%20Buy%20Auto%20Parts%20Online"
                legacyBehavior>

                  How to Buy Car Spare Parts Online
                  <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                    5 days ago - 10 min read
                  </p>

              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
