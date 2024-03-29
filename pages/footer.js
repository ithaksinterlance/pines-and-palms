import React from 'react';
import Link from 'next/link';

export default function footer() {
  return (
    <div className="py-6 bg-blue-500">
      <div className="pb-6 xs:pb-3 p-2 sm:pb-3 2xs:pb-3">
        <h3 className="text-3xl xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl s:text-sm">
          COULD&apos;NT FIND YOUR DESIRED AUTO PARTS?{' '}
          <Link
            href="https://emirates-car.com/contact"
            className="underline text-blue-900"
            >
            CONTACT US NOW {'>>'}
          </Link>
        </h3>
      </div>
      <div className=" bg-purple-700 py-10 xs:py-5 2xs:py-5 sm:py-5">
        <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
          <div className="text-center">
            <p className="pt-5 text-white font-extrabold">ABOUT Emirates-car</p>
            <p className="text-sm xs:text-xs pt-5 m-1 text-center font-medium text-yellow-400">
              We are dealing with auto spare parts for car, heavy truck, van,
              buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
              vehicles, Used spare parts, After market parts, Genuine spare
              parts and New parts etc. Contact us for any inquiry.
            </p>
          </div>
          <div className="pt-10 xs:pt-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">SOCIAL LINKS</p>
            <p>
              <Link
                className="text-xl leading-xl text-blue-900"
                href="https://www.facebook.com/emirates.auto.parts"
                passHref
                >
                <i className="fab fa-2x fa-facebook"></i>
              </Link>
              &nbsp;
              <Link
                className="text-xl leading-xl text-purple-900"
                href="https://www.instagram.com/emiratescar_parts/"
                >
                <i className="fab fa-2x fa-instagram"></i>
              </Link>
              &nbsp;
              <Link
                className="text-xl leading-xl text-black"
                href="https://emirates-car.tumblr.com/"
                >
                <i className="fab fa-2x fa-tumblr"></i></Link>

              &nbsp;
              <Link
                className="text-xl leading-xl text-blue-300"
                href="https://twitter.com/emiratescarpart"
                >
                <i className="fab fa-2x fa-twitter"></i></Link>

              &nbsp;
              <Link
                className="text-xl leading-xl text-red-700"
                href="https://in.pinterest.com/emiratesautomobileparts/"
                >
                <i className="fab fa-2x fa-pinterest"></i></Link>

              &nbsp;
              <Link
                className="text-xl leading-xl text-blue-500"
                href="https://in.pinterest.com/emiratesautomobileparts/"
                >
                <i className="fab fa-2x fa-linkedin"></i></Link>

            </p>
          </div>
          <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">SHORTCUT LINKS</p>
            <Link
              href="https://emirates-car.com/search-by-part-name"
              className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              Search parts by part name in UAE
            </Link>
            <br />
            <Link
              href="https://emirates-car.com/search-by-make"
              className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              Search parts by car brands in uae
            </Link>
            <br />
            <Link
              href="https://emirates-car.com/search-by-cities-in-uae"
              className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              Search parts by cities in UAE
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
          <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
            <p className="pt-5 text-white font-extrabold">Email Address</p>
            <p className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
              emiratesautomobileparts@gmail.com
            </p>
          </div>
        </div>

        <div className="text-center text-purple-200 py-10">
          <Link
            href="https://emirates-car.com"
            className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              <i className="fa fa-copyright" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
