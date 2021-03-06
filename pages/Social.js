import React from "react";
import Link from "next/link";

export default function Social() {
  return (
    <div>
      <div className="container mx-auto">
      <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl pb-5">
          FOLLOW US ON SOCIAL MEDIA
        </p>
        <div className="grid grid-cols-6 gap-4">
          <div>
            <Link href="https://www.facebook.com/Emirates-carcom-101113659165158/">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://www.facebook.com/Emirates-carcom-101113659165158/" target="_newtab"
              >
                <i className="fab fa-facebook text-blue-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.instagram.com/emiratescar_parts/">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://www.instagram.com/emiratescar_parts/" target="_newtab"
              >
                <i className="fab fa-instagram text-purple-800 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/uaeautoparts">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://twitter.com/uaeautoparts" target="_newtab"
              >
                <i className="fab fa-twitter text-blue-400 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://emirates-car.tumblr.com/">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://emirates-car.tumblr.com/" target="_newtab"
              >
                <i className="fab fa-tumblr text-black text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://in.pinterest.com/emiratesautomobileparts/">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://in.pinterest.com/emiratesautomobileparts/" target="_newtab"
              >
                <i className="fab fa-pinterest text-red-700 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/emirates-car-771929232/">
              <a
                className="px-3 py-2 flex items-center text-xl leading-snug text-white hover:opacity-75"
                href="https://www.linkedin.com/in/emirates-car-771929232/" target="_newtab"
              >
                <i className="fab fa-linkedin text-blue-500 text-4xl xs:text-3xl sm:text-xl md:text-4xl lg:text-4xl"></i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
