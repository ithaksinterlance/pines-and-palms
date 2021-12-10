import React, { Component } from "react";
import AutoPartsImages from "./AutoPartsImages";

export default class about extends Component {
  render() {
    return (
      <div>
        <div className="grid grid-cols-6 xs:grid xs:grid-cols-2 2xs:grid 2xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 gap-1 shadow-2xl my-10 mx-5">
          <AutoPartsImages />
        </div>
        <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8  xs:mx-1">
          <h1 className="text-blue-600 font-extrabold xs:text-base 2xs:text-xl">
            ABOUT BRAND NAME
          </h1>
          <p className="text-lg text-gray-400 py-4 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5 text-justify">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of &quo; de Finibus Bonorum et Malorum &quo;
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, &quo; Lorem ipsum dolor
            sit amet..&quo;, comes from a line in section 1.10.32. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of &quo; de Finibus Bonorum
            et Malorum &quo; (The Extremes of Good and Evil) by Cicero, written
            in 45 BC. This book is a treatise on the theory of ethics, very
            popular during the Renaissance. The first line of Lorem Ipsum, &quo;
            Lorem ipsum dolor sit amet..&quo;, comes from a line in section
            1.10.32.
          </p>
        </div>
      </div>
    );
  }
}
