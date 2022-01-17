import React, { Component } from "react";
import AutoPartsImages from "./AutoPartsImages";
import Link from "next/link";
import VisibilitySensor from "react-visibility-sensor";

export default class about extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <VisibilitySensor
        onChange={this.onVisibilityChange}
        offset={{
          top: 10,
        }}
        delayedCall
      >
        <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8">
          <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs">
            FEATURED PARTS
          </h1>
          <div className="grid grid-cols-6 xs:grid xs:grid-cols-2 s:grid s:grid-cols-1 2xs:grid 2xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 gap-1 shadow-2xl my-10 mx-5 xs:mx-2 s:mx-2 sm:mx-3">
            <AutoPartsImages />
            <Link href="/search-by-part-name"><a>
            <main className="border-4 p-1 py-5 px-5 border-blue-700">
              <i className="fas fa-car-garage fa-4x bg-blue-500 text-gray-900 font-thin p-1 rounded-lg"></i>
              <p className="text-base text-blue-600 py-2 font-semibold underline">
                View all Parts
                {">>"}
              </p>
              <p className="text-xs text-gray-500">
                We deal with almost any parts. In case if you dont find your
                desired parts, you can contact us directly.
              </p>
            </main></a>
              </Link>
          </div>
        </div>
      </VisibilitySensor>
    );
  }
}
