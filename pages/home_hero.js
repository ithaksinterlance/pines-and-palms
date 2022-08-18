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
import Link from "next/link";
import Hand from "../public/img/hand-wave.png"
import Battery from "../public/img/car-auto-parts/battery.png";
import Slider from "react-slick";

const settings = {
  autoplay: true,
  arrows: false,
  centerMode: true,
  autopalySpeed: 500,
  dotsClass: "slick-dots",
  pauseOnHover: "true",
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default class home_hero extends Component {
  render() {
    return (
      <div className="xs:py-7 s:py-6">
        <div className="bg-cover">
          <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto xs:text-center sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
            <div>
              <div className="mt-10 ml-8 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20 xs:mt-2 xs:text-left 2xs:mt-2 s:mt-2">
                <div className="sm:ml-5 lg:text-left xs:text-center">
                  <h1 className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-2xl s:text-xl xs:font-sans">
                    <p className="text-yellow-300 text-6xl font-sans pb-6">
                      Hi <Image src={Hand} alt="Auto Spare parts in UAE" height={53} width={53}/>
                    </p>
                    <span className="block xl:inline">
                      Auto Spare Parts for&nbsp;
                      <span className="block text-blue-600 xl:inline">
                        Your Vehicle&apos;s need
                      </span>
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-black sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
                    Dealt in UAE, delivered all over the world.
                  </p>
                  <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
                    We are the best dealer in Auto Spare parts for Cars in UAE. If you are in need of any
                    Spare parts contact us.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex lg:justify-start xs:pb-20 s:pb-20">
                    <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-auto 2xs:mx-auto rounded-lg shadow-md">
                      <Link href="/#myForm">
                        <a className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125">
                          Inquire Now
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-5 hero_section_blob xs:hidden s:hidden 2xs:hidden">
              <Image src={Hero_img} alt="genuine auto spare parts" />
            </div>
          </div>
        </div>
        <div className="container text-center mx-auto pt-10">
          <div className="grid grid-cols-4 text-center gap-2 xs:grid xs:grid-cols-2 s:grid s:grid-cols-2  xs:gap-1 2xs:text-sm 2xs:grid 2xs:grid-cols-2 md:px-2 xs:pb-10 s:pb-10 2xs:pb-10 mx-8 2xs:mx-5 s:mx-4 xs:mx-5">
            <div className="font-extrabold text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:text-xs s:text-xs xs:shadow-none sm:shadow-none">
              <Image
                src={NewCar}
                alt="auto spare parts in dubai"
                width={60}
                height={60}
                className="object-scale-down h-40 w-full xs:object-none"
              />
              <br />
              New parts
            </div>
            <div className="font-extrabold text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 shadow-2xl xs:shadow-none s:shadow-none sm:shadow-none xs:text-xs s:text-xs">
              <Image
                src={UsedCar}
                alt="auto spare parts in dubai"
                className="object-scale-down xs:object-none s:object-none"
                width={60}
                height={60}
              />
              <br />
              Used parts
            </div>
            <div className="font-extrabold text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2  shadow-2xl xs:text-xs s:text-xs s:shadow-none xs:shadow-none sm:shadow-none">
              <Image
                src={Genuine}
                alt="auto spare parts in dubai"
                width={60}
                height={60}
                className="object-scale-down w-full xs:object-none"
              />
              <br />
              Genuine parts
            </div>
            <div className="font-extrabold text-xl lg:text-base sm:text-xs md:text-sm uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:text-xs s:text-xs s:shadow-none xs:shadow-none sm:shadow-none">
              <Image
                src={AfterMarket}
                alt="auto spare parts in dubai"
                width={60}
                height={60}
                className="object-scale-down w-full xs:object-none s:object-none"
              />
              <br />
              Aftermarket parts
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
                  hyundai, subaru, Suzuki, honda, toyota, suzuki,
                  nissan, Mitsubishi, Honda, Nissan, Toyota United Arab Emirates.
                  Wholesale spare parts, parts of the emirates, auto parts in
                  bulk from the UAE, truck parts wholesale.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
                  <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-48 2xs:mx-auto sm:w-48 rounded-lg shadow-md">
                    <Link href="/#myForm">
                      <a className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md lg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 s:py-2 s:text-xs s:my-2 2xs:text-sm 2xs:my-2 2xs:mb-10 focus:filter brightness-125">
                        Inquire Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 xs:grid xs:grid-cols-3 s:grid s:grid-cols-3 ml-8 xs:py-10 sm:py-10 s:py-10 2xs:py-10 s:mx-5 xs:mx-3 2xs:mx-5">
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:shadow-none s:border-none">
              <Link href="./country-vehicles-spare-parts/british-auto-spare-parts"><a>
                <Image
                  src={Britain}
                  alt="british car auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">BRITAIN</p></a></Link>
              </div>
              <div className="text-center shadow-lg boder-r-2 border-b-2 border-gray-800 xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Image
                  src={Indian}
                  alt="indian car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">INDIAN</p>
              </div>
              <div className="text-center border-l-2 border-b-2 border-gray-800 xs:border-none shadow-lg xs:shadow-none s:border-none s:shadow-none">
              <Link href="./country-vehicles-spare-parts/japanese-auto-spare-parts"><a>
                <Image
                  src={Japan}
                  alt="japan car auto spare parts"
                  className="object-scale-down w-full xs:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">JAPANESE</p></a></Link>
              </div>
              <div className="text-center border-r-2 border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
              <Link href="./country-vehicles-spare-parts/korean-auto-spare-parts"><a>
                <Image
                  src={Korean}
                  alt="korean car auto spare parts"
                  className="object-scale-down h-40 w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">KOREAN</p></a></Link>
              </div>
              <div className="text-center border-b-2 border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
              <Link href="./country-vehicles-spare-parts/american-auto-spare-parts"><a>
                <Image
                  src={USA}
                  alt="united state car auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">USA</p></a></Link>
              </div>
              <div className="text-center border-b-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
              <Link href="./country-vehicles-spare-parts/german-auto-spare-parts"><a>
                <Image
                  src={Germany}
                  alt="germany car auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">GERMAN</p></a></Link>
              </div>
              <div className="text-center border-r-2 border-gray-800 shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
                <Image
                  src={China}
                  alt="chinese car auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm">CHINESE</p>
              </div>
              <div className="text-center shadow-lg xs:border-none xs:shadow-none s:border-none s:shadow-none">
              <Link href="./country-vehicles-spare-parts/french-auto-spare-parts">
                <a>
                <Image
                  src={France}
                  alt="france auto spare parts"
                  className="object-scale-down w-full xs:object-fit s:object-fit"
                  height={70}
                  width={70}
                />
                <p className="text-gray-500 text-sm xs:text-xs s:text-xs">
                  FRANCE
                </p></a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto xs:text-center sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
        <div>
          <div className="mt-10 ml-8 max-w-full sm:mt-12 sm:ml-6 md:mt-16 lg:mt-20 lg:ml-1 lg:px-8 xl:mt-28 md:ml-7 xl:ml-20 xs:mt-2 xs:text-left 2xs:mt-2 s:mt-2">
            <div className="sm:ml-5 lg:text-left xs:text-center">
              <h1 className="tracking-tight font-extrabold xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl xs:text-2xl s:text-xl xs:font-sans">
                <span className="block xl:inline">
                  Car Battery Replacement &nbsp;
                  <span className="block text-blue-600 xl:inline">
                    Services in UAE
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
                The only inquiry form you will need to get your car battery replacement
                change Services right away on your spot in Dubai, Sharjah, Abu dhabi, Al
                quoz, Ajman, Ras al Khaimah and all the locations in uae.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex lg:justify-start xs:pb-20 s:pb-20">
                <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-auto 2xs:mx-auto rounded-lg shadow-md">
                  <Link href="/car-battery-replacement-services-in-uae">
                    <a className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125">
                      Order Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-5 ">
          <Slider {...settings} className="py-10 p-2">
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {" "}
                  <div>AMARON</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                The top level brand for replacing your battery which is more
                recommended for any vehicle makes used largely by many car
                owners in UAE.
              </p>
            </div>
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {" "}
                  <div>ACDELCO</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                {" "}
                Acdelco battery replacement in UAE are a "on-highly-demanded
                service" that we came across throughout our orders from
                different customers.
              </p>
            </div>
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {" "}
                  <div>SOLITE</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                {" "}
                Solite automotive batteries in UAE at best price with us are
                most reliable battery provided with best standards.
              </p>
            </div>
            <div>
              <p className="text-4xl xs:text-base md:text-base lg:text-xl font-extrabold  text-center">
                <div>
                  {" "}
                  <div>VARTA</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                Varta provides the best durability of the battery and we have it
                at high standard and deliverable across UAE.
              </p>
            </div>
            <div>
              <p className="text-4xl font-extrabold  text-center">
                <div>
                  {" "}
                  <div>SEBANG</div>
                  <Image
                    alt="emirates car"
                    src={Battery}
                    width={300}
                    height={300}
                  />
                </div>
              </p>
              <p className="text-sm font-bold font-serif text-center pt-5">
                Sebang battery are used excessively in UAE marking it as one of
                the best korean battery running on the roads of UAE with high
                standards.
              </p>
            </div>
          </Slider>
        </div>
      </div>

      </div>
    );
  }
}
