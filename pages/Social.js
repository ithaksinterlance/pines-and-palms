import React from 'react';
import Link from 'next/link';

export default function Social() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl pb-5">
          FOLLOW US ON SOCIAL MEDIA
        </div>
        <div className="grid grid-cols-6 gap-4 py-2">
          <div>
            <Link href={`https://www.facebook.com/emirates.auto.parts`}>
              <a
                title="used car parts"
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              >
                <i className="fab fa-facebook text-blue-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.instagram.com/emiratescar_parts/`}
              title="car trends"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <a>
                <i className="fab fa-instagram text-purple-800 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={`https://twitter.com/emiratescarpart`}
              title="emirates car parts news"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <a>
                <i className="fab fa-twitter text-blue-400 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={`https://emirates-car.tumblr.com/`}
              title="emirates car parts"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <a>
                <i className="fab fa-tumblr text-black text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={`https://in.pinterest.com/emiratesautomobileparts/`}
              title="emirates car parts"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <a>
                <i className="fab fa-pinterest text-red-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link
              href={`https://www.linkedin.com/in/emirates-car-771929232/`}
              title="emirates car parts career"
              className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
              target="_newtab"
            >
              <a>
                <i className="fab fa-linkedin text-blue-500 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
