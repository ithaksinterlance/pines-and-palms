import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";

export default class footer extends Component {
  render() {
    return (
      <div className="py-6 bg-blue-500">
        <div className="pb-6 xs:pb-3 p-2 sm:pb-3 2xs:pb-3">
          <h1 className="text-3xl xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl s:text-sm">
            COULD&apos;NT FIND YOUR DESIRED AUTO PARTS?{" "}
            <Link href="/contact">
              <a className="underline text-blue-900">CONTACT US NOW {">>"}</a>
            </Link>
          </h1>
        </div>
        <div className=" bg-purple-700 py-10 xs:py-5 2xs:py-5 sm:py-5">
          <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
            <div className="text-center">
              <p className="pt-5 text-white font-extrabold">
                ABOUT Emirates-car
              </p>
              <p className="text-sm xs:text-xs pt-5 m-1 text-center font-medium text-yellow-400">
                We are dealing with auto spare parts for car, heavy truck, van,
                buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
                vehicles, Used spare parts, After market parts, Genuine spare
                parts and New parts etc. Contact us for any inquiry.
              </p>
            </div>
            <div className="pt-10 xs:pt-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">
                SOCIAL LINKS
              </p>
              <p>
                <a
                  className="text-xl leading-xl text-white"
                  href="https://www.facebook.com/autoparts.haks"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <br />
                <a
                  className="text-xl leading-xl text-white"
                  href="https://www.instagram.com/haksinterlance/"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <br />
                <a
                  className="text-xl leading-xl text-white"
                  href="https://api.whatsapp.com/send?phone=+971551478994&text=Hey%20Team!%I'm%20in%20need%20of%20____"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </p>
            </div>
            <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">
                SHORTCUT LINKS
              </p>
              <Link href="/search-by-part-name">
                <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                  Search parts by part name in UAE
                </a>
              </Link>
              <br />
              <Link href="/search-by-make">
                <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                  Search parts by Car make in UAE
                </a>
              </Link>
              <br />
              <Link href="/search-by-cities-in-uae">
                <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                  Search parts by cities in UAE
                </a>
              </Link>
            </div>
          </div>
          <div className="text-center text-purple-200 py-10">
            <a
              href="https://emirates-car.com"
              className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              <i className="fa fa-copyright" aria-hidden="true"></i>
              Copyright © 2022 Emirates-car. All rights reserved.            </a>
          </div>
        </div>
      </div>
    );
  }
}
