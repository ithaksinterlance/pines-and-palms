'use client';
import React, { Component } from 'react';
import Hero_img from '../public/img/car-spare-parts.png';
import Image from 'next/image';
import NewCar from '../public/img/icons/new-car.png';
import UsedCar from '../public/img/icons/used-car.png';
import Genuine from '../public/img/icons/genuine.png';
import AfterMarket from '../public/img/icons/aftermarket.png';
import Britain from '../public/img/icons/united-kingdom.png';
import Indian from '../public/img/icons/india.png';
import Japan from '../public/img/icons/japan.png';
import Korean from '../public/img/icons/south-korea.png';
import USA from '../public/img/icons/usa.png';
import Germany from '../public/img/icons/germany.png';
import China from '../public/img/icons/china.png';
import France from '../public/img/icons/france.png';
import Link from 'next/link';

export default class home_hero extends Component {
  render() {
    return (
      <div className="xs:py-7 s:py-6 xs:mx-2 xxs:mx-2 font-sans">
        <div className="bg-cover">
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:text-center sm:grid sm:grid-cols-2 xxs:grid xxs:grid-cols-1 xs:pt-5 s:pt-5">
            <div>
              <div className="ml-8 md:ml-4 xs:ml-1 sm:ml-6 lg:ml-1 xl:ml-20 sm:mx-auto mt-10  sm:mt-12 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 xs:mt-2 xs:text-left xxs:mt-2 s:mt-2">
                <div className="lg:text-left">
                  <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl xs:text-4xl xxs:text-4xl md:text-6xl lg:text-6xl lg:leading-tight dark:text-white">
                    <span class="block">
                      Car spare Parts&nbsp;
                      <span class="block text-blue-600 xl:inline">in UAE</span>
                    </span>
                  </h1>
                  <p className="mt-3 text-lg font-extralight">
                    Buy Premium High Quality Used, Genuine, OEM and Aftermarket
                    parts in Dubai, Sharjah, Ajman, Ras al khaimah, Abu dhabi
                    and all over the world. We are dealers in Auto Spare parts
                    in UAE. If you are in need of any Spare parts click on Get
                    Free Quote and get best prices now.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
                    <div className="py-3 px-4 w-1/2 lg:w-full xs:w-full xxs:w-full xs:mx-auto s:w-full sm:w-full md:w-full md:mx-auto md:px-0 md:py-0 sm:mx-auto sm:py-0 xs:py-0 xs:px-0 xxs:px-0 xxs:py-0 lg:px-0 lg:py-0 xl:px-0 xl:py-0 xxl:px-0 xxl:py-0 rounded-lg shadow-md">
                      <a
                        href="/#myForm"
                        title="vehicle parts online"
                        className="flex items-center justify-center py-2 text-xl xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md md:text-lg md:px-5 xs:text-md xxs:text-sm xxs:my-2 lg:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                      >
                        Get Free Quote
                        <svg
                          class="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="mt-1">
                    <div className="w-1/2 lg:w-full md:w-full xs:w-full sm:w-full xs:mx-auto s:w-full s:mx-auto xxs:w-auto xxs:mx-auto rounded-lg shadow-md">
                      <a
                        href="/honda-accord-8th-gen-body-parts"
                        className="flex items-center justify-center py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-red-700 hover:bg-red-900 md:py-2 text-xl md:text-lg md:px-5 xs:py-2 xs:text-md xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                      >
                        Best Deals On Honda Parts
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-16 lg:mt-5 hero_section_blob xs:hidden s:hidden xxs:hidden">
              <Image src={Hero_img} alt="car spare parts online" priority />
            </div>
          </div>
        </div>
        <div className="container text-center mx-auto pt-10">
          <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 s:grid s:grid-cols-2  xs:gap-1 xxs:text-sm xxs:grid xxs:grid-cols-2 md:px-2 xs:pb-10 s:pb-10 xxs:pb-10 mx-8 xxs:mx-5 s:mx-4 xs:mx-5">
            <div className="flex items-center justify-center font-extrabold text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:text-xs s:text-xs xs:shadow-none sm:shadow-none">
              <div>
                <Image
                  src={NewCar}
                  alt="automotive parts store"
                  priority
                  width={60}
                  height={60}
                />
                New parts
              </div>
            </div>
            <div className="font-extrabold flex items-center justify-center text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 shadow-2xl xs:shadow-none s:shadow-none sm:shadow-none xs:text-xs s:text-xs">
              <div>
                <Image
                  src={UsedCar}
                  alt="auto spare parts in dubai"
                  priority
                  width={60}
                  height={60}
                />
                Used parts
              </div>
            </div>
            <div className="font-extrabold flex items-center justify-center text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2  shadow-2xl xs:text-xs s:text-xs s:shadow-none xs:shadow-none sm:shadow-none">
              <div>
                <Image
                  src={Genuine}
                  alt="automobile spare parts"
                  priority
                  width={60}
                  height={60}
                />
                Genuine parts
              </div>
            </div>
            <div className="font-extrabold flex items-center justify-center text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:text-xs s:text-xs s:shadow-none xs:shadow-none sm:shadow-none">
              <div>
                <Image
                  src={AfterMarket}
                  alt="aftermarket auto body parts"
                  priority
                  width={60}
                  height={60}
                />
                Aftermarket parts
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover">
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 md:grid md:grid-cols-1 xxs:grid xxs:grid-cols-1 xxs:mx-4 sm:grid sm:grid-cols-2 s:grid s:grid-cols-1 mt-20 xs:mt-5 xs:text-xs xs:mx-3 sm:mx-3 xl:ml-8 xs:gap-1 s:mt-5 s:text-xs s:gap-1 s:mx-2">
            <div className="mt-10 max-w-full sm:mt-12 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-18  xs:mt-2 s:mt-2 xs:text-left xxs:mt-2">
              <div>
                <h6 className="block text-3xl font-bold sm:text-4xl xs:text-4xl xxs:text-4xl md:text-6xl lg:text-6xl lg:leading-tight dark:text-white">
                  <span className="block xl:inline">
                    Get spare parts for any&nbsp;
                    <span className="block text-blue-600 xl:inline">
                      country vehicle
                    </span>
                  </span>
                </h6>
                <p className="mt-3 text-lg font-normal">
                  Emirates-car.com sells auto parts in bulk from the Emirates.
                  In the presence of popular parts for Japanese, Korean and
                  American cars. The main brands that we deal are Honda,
                  Volkswagen, Audi, Porsche, Infiniti, Volvo, Toyota, Nissan,
                  Lexus, Mini, BMW, Mercedes Benz, Renault, Peugot, Kia,
                  Hyundai, Genesis, Jaguar, Ford, Hummer, Dodge, Cadillac, GMC,
                  Jeep and Lincoln.
                  <span className="block text-black">
                    Tags:{' '}
                    <span className="block text-blue-600 xl:inline underline">
                      #auto_parts, #car_spare_parts, #autoparts,
                      #spare_parts_online , #car_spare_parts_dubai ,
                      #car_parts_in_uae , #auto_parts_dubai ,
                      #auto_parts_sharjah , #dubai_auto_parts_online.
                    </span>
                  </span>
                </p>
                <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
                  <div className="w-1/2 lg:w-full xs:w-full xxs:w-full xs:mx-auto s:w-full s:mx-auto xxs:mx-auto sm:w-full rounded-lg shadow-md">
                    <Link
                      href="/#myForm"
                      className="flex items-center justify-center py-2 text-xl xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md md:text-lg md:px-5 xs:text-md xxs:text-sm xxs:my-2 lg:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 xs:grid xs:grid-cols-3 s:grid s:grid-cols-3 ml-8 xs:py-10 sm:py-10 s:py-10 xxs:py-10 s:mx-5 xs:mx-3 xxs:mx-5">
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:shadow-none s:border-none">
                <Link href="/spare-parts/british-auto-spare-parts">
                  <Image
                    src={Britain}
                    alt="british car auto spare parts"
                    className="object-scale-down w-full xs:object-fit s:object-fit"
                    priority
                    height={50}
                    width={50}
                  />
                  <p className="text-gray-500 text-sm">BRITAIN</p>
                </Link>
              </div>
              <div className="text-center shadow-lg boder-r-2 border-b-2 border-gray-800 xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Image
                  src={Indian}
                  alt="indian car auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  priority
                  height={50}
                  width={50}
                />
                <p className="text-gray-500 text-sm">INDIAN</p>
              </div>
              <div className="text-center border-l-2 border-b-2 border-gray-800 xs:border-none shadow-lg xs:shadow-none s:border-none s:shadow-none">
                <Link href="/spare-parts/japanese-auto-spare-parts">
                  <Image
                    src={Japan}
                    alt="japan car auto spare parts"
                    className="object-scale-down w-full xs:object-fit"
                    priority
                    height={50}
                    width={50}
                  />
                  <p className="text-gray-500 text-sm">JAPANESE</p>
                </Link>
              </div>
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Link href="/spare-parts/korean-auto-spare-parts">
                  <Image
                    src={Korean}
                    alt="korean car auto spare parts"
                    className="object-scale-down w-full xs:object-fit s:object-fit"
                    priority
                    height={50}
                    width={50}
                  />
                  <p className="text-gray-500 text-sm">KOREAN</p>
                </Link>
              </div>
              <div className="text-center border-b-2 border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Link href="/spare-parts/american-auto-spare-parts">
                  <Image
                    src={USA}
                    alt="united state car auto spare parts"
                    className="object-scale-down w-full xs:object-fit s:object-fit"
                    priority
                    height={50}
                    width={50}
                  />
                  <p className="text-gray-500 text-sm">USA</p>
                </Link>
              </div>
              <div className="text-center border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Link href="/spare-parts/german-auto-spare-parts">
                  <Image
                    src={Germany}
                    alt="german car auto spare parts"
                    className="object-scale-down w-full xs:object-fit s:object-fit"
                    priority
                    height={50}
                    width={50}
                  />
                  <p className="text-gray-500 text-sm">GERMAN</p>
                </Link>
              </div>
              <div className="text-center border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Image
                  src={China}
                  alt="chinese car auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  priority
                  height={50}
                  width={50}
                />
                <p className="text-gray-500 text-sm">CHINESE</p>
              </div>
              <div className="text-center shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Link href="/spare-parts/french-auto-spare-parts">
                  <Image
                    src={France}
                    alt="france auto spare parts"
                    className="object-scale-down w-full xs:object-fit s:object-fit"
                    priority
                    height={50}
                    width={50}
                  />
                  <p className="text-gray-500 text-sm xs:text-xs s:text-xs">
                    FRANCE
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
