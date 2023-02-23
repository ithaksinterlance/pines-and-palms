import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faTwitter,
  fab
} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Link from 'next/link';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="flex relative flex-wrap items-center justify-between px-2 py-2 bg-purple-800">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between">
          <Link
            className="text-md leading-snug inline-block mr-4 py-2 whitespace-nowrap uppercase text-white xs:-ml-2 2xs:ml-1"
            href={`${'/#spare_parts'}`}
          >
            Emirates-car
          </Link>
          <button
            type="button"
            className="cursor-pointer text-xl px-5 py-5 rounded bg-transparent block xl:hidden outline-none focus:outline-none bg-white text-black"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={fab} className="text-xl leading-xl" />
          </button>
        </div>

        <div
          className={
            'xl:flex flex-grow items-center lg:flex 2xl:flex' +
            (navbarOpen ? 'flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col xl:flex-row list-none xl:ml-auto 2xs:ml-auto xs:ml-auto">
            <li className="nav-item">
              <Link
                href={`${'/'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <span className="ml-2 text-base leading-xl text-white opacity-75">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'/blog'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <span className="ml-2 text-base leading-xl text-white opacity-75">
                  Blog
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'/contact'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <span className="ml-2 text-base leading-xl text-white opacity-75">
                  Contact
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'/search-by-make'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <span className="ml-2 text-base leading-xl text-white opacity-75">
                  Search parts by make
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'/search-by-cities-in-uae'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <span className="ml-2 text-base leading-xl text-white opacity-75">
                  Search parts in your cities
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'/search-by-part-name'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <span className="ml-2 text-base leading-xl text-white opacity-75">
                  Search parts by Part name
                </span>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col xl:flex-row list-none xl:ml-auto 2xs:ml-auto xs:ml-auto">
            <li className="nav-item">
              <Link
                href={`${'https://www.facebook.com/emirates.auto.parts/'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <i className="fab fa-facebook ml-2 text-xl leading-xl text-white opacity-75"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'https://www.instagram.com/emiratescar_parts/'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <i className="fab fa-instagram ml-2 text-xl leading-xl text-white opacity-75 "></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'https://twitter.com/emiratescarpart'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <i className="fab fa-twitter ml-2 text-xl leading-xl text-white opacity-75 "></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`${'https://emirates-car.tumblr.com/'}`}
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                passHref
              >
                <i className="fab fa-tumblr ml-2 text-xl leading-xl text-white opacity-75"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export async function getStaticProps() {
  const resp = await fetch(`https://rozy.vercel.app/api/parts`);
  const posts = await resp.json();

  return {
    props: { posts }
  };
}
