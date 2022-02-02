import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  fab,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="flex relative flex-wrap items-center justify-between px-2 py-2 bg-purple-800">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full flex justify-between">
          <a
            className="text-md leading-snug inline-block mr-4 py-2 whitespace-nowrap uppercase text-white xs:-ml-2 2xs:ml-1"
            href="#spare_parts"
          >
            Emirates-car
          </a>
          <button
            className="cursor-pointer text-xl px-5 py-5 rounded bg-transparent block xl:hidden outline-none focus:outline-none bg-white text-black"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={fab} className="text-xl leading-xl" />
          </button>
        </div>

        <div
          className={
            "xl:flex flex-grow items-center lg:flex" +
            (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col xl:flex-row list-none xl:ml-auto 2xs:ml-auto xs:ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Home
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Blog
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Contact
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/search-by-make">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Search parts by make
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/search-by-cities-in-uae">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Search parts in your cities
                  </span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/search-by-part-name">
                <a className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75">
                  <span className="ml-2 text-base leading-xl text-white opacity-75">
                    Search parts by Part name
                  </span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col xl:flex-row list-none xl:ml-auto 2xs:ml-auto xs:ml-auto">
            <li className="nav-item">
              <Link href="https://www.facebook.com/autoparts.haks">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="https://www.facebook.com/autoparts.haks"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="ml-2 text-xl leading-xl text-white opacity-75"
                  />
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://instagram.com/haksinterlance">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="#"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="ml-2 text-xl leading-xl text-white opacity-75"
                  />
                </a>
              </Link>
            </li>
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                  href="https://api.whatsapp.com/send?phone=+971551478994&text=Hey%20Team!%I'm%20in%20need%20of%20____"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="ml-2 text-xl leading-xl text-white opacity-75"
                  />
                </a>
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
    props: { posts },
  };
}
