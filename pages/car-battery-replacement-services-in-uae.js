import React, { useState, useEffect } from "react";
import Navbar from "./nav";
import Head from "next/head";
import Link from "next/link";
import Footer from "./footer";
import Slider from "react-slick";
import Battery from "../public/img/car-auto-parts/battery.png";
import Image from "next/image";
import Social from "./Social";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

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

export default function CarBatteryDubai({ forms }) {
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [Address, setAddress] = useState("");
  const [Name, setName] = useState("");
  const [Code, setCode] = useState("");

  function handleMakeChange(event) {
    setMake(event.target.value);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  const mke = [
    "Ford",
    "Chrysler",
    "Citroen",
    "Hillman",
    "Chevrolet",
    "Cadillac",
    "BMW",
    "Austin",
    "Fairthorpe",
    "Fillmore",
    "Pontiac",
    "Studebaker",
    "Buick",
    "Rambler",
    "Plymouth",
    "Volkswagen",
    "Jensen",
    "Oldsmobile",
    "Mercury",
    "Dodge",
    "Shelby",
    "Porsche",
    "Toyota",
    "Mercedes-Benz",
    "MG",
    "Nissan",
    "Honda",
    "Mazda",
    "Renault",
    "Audi",
    "Lincoln",
    "Lotus",
    "Maserati",
    "Mitsubishi",
    "Saab",
    "Subaru",
    "Suzuki",
    "Lamborghini",
    "Merkur",
    "Land Rover",
    "Acura",
    "Lexus",
    "Eagle",
    "Alfa Romeo",
    "Daihatsu",
    "Geo",
    "GMC",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Saturn",
    "Volvo",
    "HUMMER",
    "Kia",
    "Holden",
    "Corbin",
    "Daewoo",
    "MINI",
    "Maybach",
    "Scion",
    "Spyker",
    "Aston Martin",
    "Bentley",
    "Panoz",
    "Rolls-Royce",
    "Spyker Cars",
    "Ferrari",
    "Hummer",
    "Morgan",
    "Peugeot",
    "Foose",
    "Aptera",
    "Smart",
    "Bugatti",
    "Tesla",
    "Ram",
    "FIAT",
    "Fiat",
    "McLaren",
    "BYD",
    "McLaren Automotive",
    "Mobility Ventures LLC",
    "Pagani",
    "Roush Performance",
    "smart",
    "SRT",
    "Genesis",
    "Karma",
    "Koenigsegg",
    "RUF Automobile",
    "STI",
    "Polestar",
    "Kandi",
  ];
  const make = mke.sort();

  function Submission(e) {
    e.preventDefault();
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    const response = fetch(`/api/g_sheet`, {
      method: "POST",
      body: JSON.stringify({
        Timestamp: dateTime,
        brand: Make,
        contact: Code + Whatsappno,
        name: Name,
        description:
          "Customer Name: " +
          Name +
          "\n" +
          "Address: " +
          Address +
          "\n" +
          "Vehicle: " +
          Make +
          " " +
          Model +
          " " +
          "Part List: " +
          "Battery",
        email: "Email",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let message =
      "Timestamp: " +
      dateTime +
      "\n" +
      "Brand: " +
      Make +
      "\n" +
      "Model: " +
      Model +
      "\n" +
      "Customer Name: " +
      Name +
      "\n" +
      "Address: " +
      Address;
    alert("Form submitted. We will contact you shortly ;)");
    let messageURI = encodeURI(message);
    setName("");
    setMake("");
    setCode("");
    setModel("");
    setAddress("");
    setWhatsappno("");
    window
      .open(
        `https://api.whatsapp.com/send?phone=+971551478994&text=${messageURI}`,
        "_blank"
      )
      .focus();
  }

  return (
    <div>
      <Head>
        <title>
          Quick Car Battery Replacement services in UAE | Emirates-car.com
        </title>
        <meta
          property="og:title"
          content="Quick Car Battery Replacement services in UAE | Emirates-car.com"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta property="og:url" content="https://www.emirates-car.com" />
        <meta
          property="og:description"
          content="Don't panic, we know your car battery dead. Contact us right away to get your helping hands in Dubai, sharjah, Abu dhabi, Ajman, Al quoz and other cities irrespective of any car brands."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-auto-parts/battery.png"
        />
        <meta property="twitter:url" content="https://www.emirates-car.com" />
        <meta
          property="twitter:title"
          content="Quick Car Battery Replacement services in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Don't panic, we know your car battery dead. Contact us right away to get your helping hands in Dubai, sharjah, Abu dhabi, Ajman, Al quoz and other cities irrespective of any car brands."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <Navbar />
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
                The only inquiry form you will need to get your car battery
                change right away on your spot in Dubai, Sharjah, Abu dhabi, Al
                quoz, Ajman, Ras al Khaimah and all the locations in uae.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex lg:justify-start xs:pb-20 s:pb-20">
                <div className="w-1/2 lg:w-40 xs:w-48 xs:mx-auto s:w-48 s:mx-auto 2xs:w-auto 2xs:mx-auto rounded-lg shadow-md">
                  <Link href="/#myForm">
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
      <div className="container mx-auto xl:px-10 xs:px-3 md:px-5 lg:px-6 mt-10">
        <div className=" brightness-200" style={{ backgroundColor: "yellow" }}>
          <p
            className="font-extrabold text-5xl xs:text-base md:text-2xl lg:text-2xl text-center p-2"
            style={{ color: "red" }}
          >
            QUICKLY FILL IN YOUR DETAILS TO GET IT REPLACED ON SPOT!
          </p>
        </div>
        <form
          id="myForm"
          className="w-full shadow-xl px-8 py-8 xs:px-2 xs:py-3 2xs:px-4 sm:px-4"
          method="POST"
          onSubmit={Submission}
          target="hidden_iframe"
        >
          <div className="flex flex-wrap ">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="whatsappno"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="name"
                type="text"
                placeholder="Your name"
                name="entry.1153362739"
                value={Name}
                onChange={handleNameChange}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap  mb-2">
            <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="make"
              >
                Make
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 xs:py-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                  id="make"
                  name="entry.1911907904"
                  required="required"
                  value={Make}
                  onChange={handleMakeChange}
                >
                  <option value="" disabled>
                    Select your Make
                  </option>
                  {make.map((m) => (
                    <option key={m}>{m}</option>
                  ))}{" "}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-1/2 md:w-1/2 pr-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="model"
              >
                Model
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                  id="model"
                  name="entry.1541894897"
                  value={Model}
                  onChange={handleModelChange}
                  required
                >
                  <option value="" disabled>
                    Select your Model
                  </option>
                  {forms
                    .filter((s) => s.make === Make)
                    .map((s) => (
                      <option key={s.id} value={s.model}>
                        {s.model}{" "}
                      </option>
                    ))}{" "}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap ">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="whatsappno"
              >
                Area Name, Emirates
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="whatsappno"
                type="text"
                placeholder="Area Name, Emirates"
                name="entry.1153362739"
                value={Address}
                onChange={handleAddressChange}
                autoComplete="off"
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap ">
            <div className="w-2/5 px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                htmlFor="Code"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              >
                CODE
              </label>
              <input
                id="Code"
                name="entry.44547744"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                type="text"
                placeholder="Eg. +971, +27 ..."
                onChange={handleCodeChange}
                value={Code}
                required
              />
            </div>
            <div className="w-3/5 px-3 mb-6 xs:mb-0 md:mb-0">
              <label
                htmlFor="whatsappno"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              >
                WhatsApp no
              </label>
              <input
                id="whatsappno"
                name="entry.902626710"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
                type="text"
                placeholder="WhatsApp No"
                onChange={handleWhatsAppNoChange}
                value={Whatsappno}
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap py-3">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex float-left text-xs text-gray-400">
            <Link href="./privacy-policy">
              <a href="./privacy-policy" className="underline" target="_newtab">
                Privacy policy
              </a>
            </Link>
            &nbsp;
            <Link href="./terms-and-condition">
              <a href="./privacy-policy" className="underline" target="_newtab">
                Terms and conditions
              </a>
            </Link>
          </div>

          <div className="flex float-right text-xs text-gray-400 ">
            100% secure and trusted
          </div>
        </form>
      </div>
      <div className="uppercase bg-blue-300 font-serif p-5 xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-base xs:w-screen s:text-2xl 2xs:text-2xl my-10">
        <Social />
        <div>
          &nbsp;
          <span>
            <Link href="/search-by-part-name">
              <a className="underline xs:no-underline hover:text-blue-500">
                SEARCH BY PART NAME
              </a>
            </Link>{" "}
          </span>
          | &nbsp;
          <span>
            <Link href="/search-by-cities-in-uae">
              <a className="underline xs:no-underline hover:text-blue-500">
                SEARCH BY CITY{" "}
              </a>
            </Link>{" "}
          </span>
          | &nbsp;
          <span>
            <Link href="/search-by-make">
              <a className="underline xs:no-underline hover:text-blue-500">
                SEARCH BY MAKE
              </a>
            </Link>{" "}
          </span>
        </div>
      </div>
      <div className="place-content-center text-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
          FAQ SESSION
        </p>
        <Accordion className="my-10">
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is CCA(cold cranking amps)?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The car battery with more CCA, has high chance of starting the
                engine very soon than the car battery which has less CCA value.
                So when buying battery make sure that your battery has a good
                cold cranking Amp value.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What are the types of battery?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Car battery are of AGM types or of EFB types. Some other
                batteries are mostly the variation of lead acid batteries. It
                works by chemical reaction between lead plates, sulphuric acid
                and distilled water to create electrical power.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is the recommended time period to change your car battery?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Recommended time period to replace your car battery is 2 years.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Is dimming light the sign to change the car battery?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Yes, when you see your car indicator is dimming its light, it
                has more probability to get its car battery replaced.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do you maintain your car battery from corroding?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To maintain car battery from corrosion, use distilled water to
                clean it very often.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Big rides are better than Small rides for the longetivity of the
                battery. Is it true?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Yes, Big rides at once are better than frequent small rides for
                the longetivity of the car battery.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="place-content-center text-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
          EMIRATES-CAR.COM | WHY ARE WE SPECIAL?
        </p>
        <div className="grid grid-cols-3 text-center gap-2 xs:grid xs:grid-cols-1 xs:gap-1 2xs:text-sm 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 md:px-2 pt-10 xs:pt-5 mx-8 2xs:mx-5 s:mx-4 xs:mx-5">
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
            <h1 className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
              <i className="fas fa-check-circle fa-2x"></i>
            </h1>

            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold p-1">
              Warranty Guaranteed
            </h1>
          </div>
          <div className="font-extrabold  uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
            <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-extrabold">
              <i className="fas fa-money-check fa-2x"></i>
            </h1>

            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
              Easy payment
            </h1>
          </div>
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
            <h1 className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
              <i className="fas fa-wrench fa-2x"></i>
            </h1>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
              Professional Services
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 text-center gap-2 xs:grid xs:grid-cols-1 xs:gap-1 2xs:text-sm 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 md:px-2 pt-10 xs:pt-5 mx-8 2xs:mx-5 s:mx-4 xs:mx-5">
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
            <h1 className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
              <i className="fas fa-phone fa-2x"></i>
            </h1>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold p-1">
              Quick response
            </h1>
          </div>
          <div className="font-extrabold  uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
            <h1 className="text-2xl text-blue-800 lg:text-base sm:text-xs md:text-sm font-extrabold">
              <i className="fas fa-clock fa-2x"></i>
            </h1>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
              24/7 Support
            </h1>
          </div>
          <div className="font-extrabold uppercase bg-gradient-to-r from-blue-500 via-blue-200 to-blue-500 rounded-xl lg:mx-6 py-2 shadow-2xl xs:shadow-none sm:shadow-none xs:text-xs text-center">
            <h1 className="text-2xl text-blue-800 lg:text-base  font-semibold font-mono">
              <i className="fas fa-truck fa-2x"></i>
            </h1>
            <h1 className="text-xl lg:text-xl sm:text-base xs:text-base s:text-base 2xs:text-base md:text-sm font-extrabold">
              Delivery On the Spot
            </h1>
          </div>
        </div>
      </div>
      <div className="place-content-center text-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
          ABOUT Emirates-car
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          We also are dealing with auto spare parts for car, heavy truck, van,
          buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
          vehicles, Used spare parts, After market parts, Genuine spare parts
          and New parts etc in UAE. Contact us for any inquiry.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          Explore from our immensively large-scale auto spare parts website,
          your New / Used / Genuine / Aftermarket auto spare parts for your
          Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city in UAE
          especially in the main cities like Dubai, Sharjah, Abu dhabi, Ajman
          and other city.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          You can search Your spare parts by:
          <li className="text-blue-500 hover:text-blue-800 list-none underline">
            {" "}
            <i className="fas fa-car"></i>{" "}
            <Link href="./search-by-make">Car Make Model</Link>
          </li>
          <li className="text-blue-500 hover:text-blue-800 list-none underline">
            {" "}
            <i className="fas fa-bolt"></i>{" "}
            <Link href="./search-by-part-name">Car Spare parts</Link>
          </li>
          <li className="text-blue-500 hover:text-blue-800 list-none underline">
            {" "}
            <i className="fas fa-map-pin"></i>{" "}
            <Link href="./search-by-cities-in-uae">Location in UAE</Link>
          </li>
        </p>
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  // forms
  const respo = await fetch(`https://rozy.vercel.app/api/palms`);
  const forms = await respo.json();

  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];

  return {
    props: {
      forms,
      posts: uniqueMakeArray,
    },
  };
}
