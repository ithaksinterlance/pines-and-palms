import React, { Component } from 'react';
import Hero_img from '../public/img/car-spare-parts.png';
import Image from "next/legacy/image";
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
import Hand from '../public/img/hand-wave.png';

export default class home_hero extends Component {
  render() {
    return (
      <div className="xs:py-7 s:py-6">
        <div className="bg-cover">
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto xs:text-center sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
            <div>
              <div className="mt-10 ml-8 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20 xs:mt-2 xs:text-left 2xs:mt-2 s:mt-2">
                <div className="sm:ml-5 lg:text-left xs:text-center">
                  <div className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-2xl s:text-xl xs:font-sans">
                    <p className="text-yellow-500 text-6xl font-sans pb-6">
                      Hi
                      <Image
                        src={Hand}
                        alt="automobile spare parts"
                        height={53}
                        width={53}
                        priority
                      />
                    </p>
                    <span className="block xl:inline">
                      Auto Spare Parts for&nbsp;
                      <span className="block text-blue-600 xl:inline">
                        Your Vehicle&apos;s need
                      </span>
                    </span>
                  </div>
                  <p className="mt-3 text-base text-black sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
                    Dealt in UAE, delivered all over the world.
                  </p>
                  <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
                    We are the best dealer in Auto Spare parts for Cars in UAE.
                    If you are in need of any Spare parts click on Inquire Now.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex lg:justify-start xs:pb-20 s:pb-20">
                    <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-auto 2xs:mx-auto rounded-lg shadow-md">
                      <Link href="https://emirates-car.com/#myForm" title="vehicle parts online" className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-md xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125">
                          Get Free Quote Now

                      </Link>
                    </div>
                  </div>
                  <div className="mt-5 xs:mt-0 sm:flex lg:justify-start s:pb-20">
                    <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-auto 2xs:mx-auto rounded-lg shadow-md">
                      <Link href="https://emirates-car.com/honda-accord-8th-gen-body-parts" className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-red-700 hover:bg-red-900 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-md 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 animate-pulse">
                          Best Deals On Honda !!

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-5 hero_section_blob xs:hidden s:hidden 2xs:hidden">
              <Image src={Hero_img} alt="automotive parts online" priority />
            </div>
          </div>
        </div>
        <div className="container text-center mx-auto pt-10">
          <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 s:grid s:grid-cols-2  xs:gap-1 2xs:text-sm 2xs:grid 2xs:grid-cols-2 md:px-2 xs:pb-10 s:pb-10 2xs:pb-10 mx-8 2xs:mx-5 s:mx-4 xs:mx-5">
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
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 2xs:mx-4 sm:grid sm:grid-cols-2 s:grid s:grid-cols-1 mt-20 s:mx-5  xs:mt-5 xl:ml-8 xs:text-xs xs:gap-1 s:mt-5 s:text-xs s:gap-1">
            <div className="mt-10 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20  xs:mt-2 s:mt-2 xs:text-left 2xs:mt-2 2xs:ml-8">
              <div className="sm:ml-5 lg:text-left xs:text-center">
                <h1 className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-2xl 2xs:text-xl s:text-3xl">
                  <span className="block xl:inline">
                    Get spare parts for any&nbsp;
                    <span className="block text-blue-600 xl:inline">
                      country vehicle
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-xs s:text-xs xl:text-lg 2xs:text-xs s:text-center">
                  Emirates-car.com sells auto parts in bulk from the Emirates.
                  In the presence of popular parts for Japanese, Korean and
                  American cars. The main brands that we offer - spare parts
                  hyundai, subaru, Suzuki, honda, toyota, suzuki, nissan,
                  Mitsubishi, Honda, Nissan, Toyota United Arab Emirates.
                  Wholesale spare parts, parts of the emirates, auto parts in
                  bulk from the UAE, truck parts wholesale.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
                  <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-48 2xs:mx-auto sm:w-48 rounded-lg shadow-md">
                    <Link href="https://emirates-car.com/#myForm" className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md lg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 s:py-2 s:text-xs s:my-2 2xs:text-sm 2xs:my-2 2xs:mb-10 focus:filter brightness-125">
                        Inquire Now

                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 xs:grid xs:grid-cols-3 s:grid s:grid-cols-3 ml-8 xs:py-10 sm:py-10 s:py-10 2xs:py-10 s:mx-5 xs:mx-3 2xs:mx-5">
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:shadow-none s:border-none">
                <Link href="https://emirates-car.com/spare-parts/british-auto-spare-parts" >
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
                  className="object-scale-down h-40 w-full xs:object-fit s:object-fit"
                  priority
                  height={50}
                  width={50}
                />
                <p className="text-gray-500 text-sm">INDIAN</p>
              </div>
              <div className="text-center border-l-2 border-b-2 border-gray-800 xs:border-none shadow-lg xs:shadow-none s:border-none s:shadow-none">
                <Link href="https://emirates-car.com/spare-parts/japanese-auto-spare-parts" >

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
                <Link href="https://emirates-car.com/spare-parts/korean-auto-spare-parts" >

                    <Image
                      src={Korean}
                      alt="korean car auto spare parts"
                      className="object-scale-down h-40 w-full xs:object-fit s:object-fit"
                      priority
                      height={50}
                      width={50}
                    />
                    <p className="text-gray-500 text-sm">KOREAN</p>

                </Link>
              </div>
              <div className="text-center border-b-2 border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Link href="https://emirates-car.com/spare-parts/american-auto-spare-parts" >

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
                <Link href="https://emirates-car.com/spare-parts/german-auto-spare-parts" >

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
                <Link href="https://emirates-car.com/spare-parts/french-auto-spare-parts" >

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
