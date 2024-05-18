'use client';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fab,
  faFacebook,
  faInstagram,
  faPinterest,
  faTumblr,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Social() {
  return (
    <div>
      <div className="container mx-0">
        <div className="grid grid-cols-6 gap-4 text-center py-2">
          <div>
            <Link
              href="https://www.facebook.com/emirates.auto.parts"
              title="used car parts"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-blue-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.instagram.com/emiratescar_parts/"
              title="car trends"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-purple-800 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://twitter.com/emiratescarpart"
              title="emirates car parts news"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-blue-400 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://emirates-car.tumblr.com/"
              title="emirates car parts"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <FontAwesomeIcon
                icon={faTumblr}
                className="text-black text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://in.pinterest.com/emiratesautomobileparts/"
              title="emirates car parts"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                className="text-red-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"
              />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.linkedin.com/in/emirates-car-771929232/"
              title="emirates car parts career"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <i className="fab fa-linkedin text-blue-500 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
