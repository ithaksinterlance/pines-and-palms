import React, { Component } from "react";
import Hero_img from "../public/img/car-spare-parts.png";
import Image from "next/image";
import NewCar from "../public/img/icons/new-car.png";
import UsedCar from "../public/img/icons/used-car.png";
import Genuine from "../public/img/icons/genuine.png";
import AfterMarket from "../public/img/icons/aftermarket.png";
import Britain from "../public/img/icons/united-kingdom.png";
import Indian from "../public/img/icons/india.png";
import Japan from "../public/img/icons/japan.png";
import Korean from "../public/img/icons/south-korea.png";
import USA from "../public/img/icons/usa.png";
import Germany from "../public/img/icons/germany.png";
import China from "../public/img/icons/china.png";
import France from "../public/img/icons/france.png";

export default class home_hero extends Component {
  render() {
    return (
      <div>
        <div className="bg-cover">
          <div className="grid grid-cols-2">
            <div>
              <div className="mt-10 ml-8 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20 xs:ml-4 xs:mt-2 xs:text-left 2xs:mt-2 2xs:ml-8">
                <div className="sm:text-center lg:text-left">
                  <h1 className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-base 2xs:text-xl">
                    <span className="block xl:inline">
                      Auto Spare Parts for&nbsp;
                      <span className="block text-blue-600 xl:inline">
                        Any Vehicle&apos;s need
                      </span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="w-1/2 lg:w-40 xs:w-auto 2xs:w-auto rounded-lg shadow-md">
                      <a
                        href="#"
                        className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 2xs:mb-10 focus:filter brightness-125"
                      >
                        Inquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-5  xs:mt-3 hero_section_blob">
              <Image src={Hero_img} alt="genuine auto spare parts" />
            </div>
          </div>
        </div>
        <div className="container text-center pt-5 mx-auto">
          <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 xs:mx-5 xs:gap-1 2xs:text-sm 2xs:mx-7 2xs:grid 2xs:grid-cols-2 md:px-2">
            <div className="font-extrabold text-xl uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:text-xs xs:shadow-none sm:shadow-none">
              <Image
                src={NewCar}
                alt="auto spare parts in dubai"
                className="object-scale-down h-40 w-full xs:object-none"
              />
              <br />
              New parts
            </div>
            <div className="font-extrabold text-xl uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs">
              <Image
                src={UsedCar}
                alt="auto spare parts in dubai"
                className="object-scale-down h-40 w-full xs:object-none"
              />
              <br />
              Used parts
            </div>
            <div className="font-extrabold text-xl uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 s shadow-2xl xs:text-xs xs:shadow-none sm:shadow-none">
              <Image
                src={Genuine}
                alt="auto spare parts in dubai"
                className="object-scale-down h-40 w-full xs:object-none"
              />
              <br />
              Genuine parts
            </div>
            <div className="font-extrabold text-xl uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:text-xs xs:shadow-none sm:shadow-none">
              <Image
                src={AfterMarket}
                alt="auto spare parts in dubai"
                className="object-scale-down h-40 w-full xs:object-none"
              />
              <br />
              Aftermarket parts
            </div>
          </div>
        </div>
        <div className="bg-cover">
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 2xs:mx-4 sm:grid sm:grid-cols-1 mt-20 ml-8 xs:ml-2 xs:text-xs xs:gap-1">
            <div className="grid grid-cols-3 xs:grid xs:grid-cols-3 ml-8 xs:mx-5">
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none">
                <Image
                  src={Britain}
                  alt="british car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">BRITAIN</p>
              </div>
              <div className="text-center shadow-lg boder-r-2 border-b-2 border-gray-800 xs:border-none xs:shadow-none">
                <Image
                  src={Indian}
                  alt="indian car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">INDIAN</p>
              </div>
              <div className="text-center border-l-2 border-b-2 border-gray-800 xs:border-none shadow-lg xs:shadow-none">
                <Image
                  src={Japan}
                  alt="japan car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">JAPANESE</p>
              </div>
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none">
                <Image
                  src={Korean}
                  alt="korean car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">KOREAN</p>
              </div>
              <div className="text-center border-b-2 border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none">
                <Image
                  src={USA}
                  alt="united state car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">USA</p>
              </div>
              <div className="text-center border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none">
                <Image
                  src={Germany}
                  alt="germany car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">GERMAN</p>
              </div>
              <div className="text-center border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none">
                <Image
                  src={China}
                  alt="chinese car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">CHINESE</p>
              </div>
              <div className="text-center shadow-lg xs:border-none xs:shadow-none">
                <Image
                  src={France}
                  alt="france auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm xs:text-xs">FRANCE</p>
              </div>
            </div>
            <div className="mt-10 ml-8 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20 xs:ml-2 xs:mt-2 xs:text-left 2xs:mt-2 2xs:ml-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-base 2xs:text-xl">
                  <span className="block xl:inline">
                    <span className="block text-blue-600 xl:inline">
                      Get spare parts for any country vehicle
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="w-1/2 lg:w-40 xs:w-auto 2xs:w-auto rounded-lg shadow-md">
                    <a
                      href="#"
                      className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 2xs:mb-10 focus:filter brightness-125"
                    >
                      Inquire Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
