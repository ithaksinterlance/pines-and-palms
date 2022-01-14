import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

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
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://www.facebook.com/autoparts.haks"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="ml-2 text-xl leading-xl text-blue-900 opacity-75"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="#"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="ml-2 text-xl leading-xl text-blue-900 opacity-75"
                />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-blue-700 hover:opacity-75"
                href="#"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="ml-2 text-xl leading-xl text-blue-900 opacity-75"
                />
              </a>
            </li>
          </ul>
          <hr className="py-1 mt-2" />
          <div className="text-xs text-center uppercase">RELATED POST</div>
          <ul>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <Link href="/blog/Ferrari%20F8%20Spider%202022">
                <a>
                  Ferrari F8 Spider 2022
                  <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                    18 days ago - 10 min read
                  </p>
                </a>
              </Link>
            </li>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <Link href="/blog/Ferrari%20Portofino%20M">
                <a>
                  Ferrari Portofino M
                  <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                    3 days ago - 10 min read
                  </p>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
