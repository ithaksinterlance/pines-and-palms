import React, { useState, useEffect } from 'react';
import Navbar from '../nav';
import Image from "next/legacy/image";
import Link from 'next/link';
import Germany from '../../public/img/icons/germany.png';
import Footer from '../footer';
import Head from 'next/head';
import Count from '../service-countup';
import Social from '../Social';
import 'react-accessible-accordion/dist/fancy-example.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';

export default function German({ partsposts, posts }) {
  const [Year, setYear] = useState('');
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [Address, setAddress] = useState('');
  const [Name, setName] = useState('');
  const [Code, setCode] = useState('');

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in partsposts) {
        var filtered = partsposts[i].parts;
        part.push(filtered);
      }
      setFormPartname(part);
    };
    loadPart();
  });

  const onSuggestionHandler = text => {
    setText(text);
    setSuggestion([]);
  };

  const onPartFormChange = text => {
    let matches = [];
    if (text.length > 0) {
      matches = formPartname.filter(part => {
        const regex = new RegExp(`${text}`, 'gi');
        return part.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };
  const mke = [
    'Ford',
    'Chrysler',
    'Citroen',
    'Hillman',
    'Chevrolet',
    'Cadillac',
    'BMW',
    'Austin',
    'Fairthorpe',
    'Fillmore',
    'Pontiac',
    'Studebaker',
    'Buick',
    'Rambler',
    'Plymouth',
    'Volkswagen',
    'Jensen',
    'Oldsmobile',
    'Mercury',
    'Dodge',
    'Shelby',
    'Porsche',
    'Toyota',
    'Mercedes-Benz',
    'MG',
    'Nissan',
    'German',
    'Mazda',
    'Renault',
    'Audi',
    'Lincoln',
    'Lotus',
    'Maserati',
    'Mitsubishi',
    'Saab',
    'Subaru',
    'Suzuki',
    'Lamborghini',
    'Merkur',
    'Land Rover',
    'Acura',
    'Lexus',
    'Eagle',
    'Alfa Romeo',
    'Daihatsu',
    'Geo',
    'GMC',
    'Hyundai',
    'Infiniti',
    'Isuzu',
    'Jaguar',
    'Jeep',
    'Saturn',
    'Volvo',
    'Kia',
    'Holden',
    'Corbin',
    'Daewoo',
    'MINI',
    'Maybach',
    'Scion',
    'Spyker',
    'Aston Martin',
    'Bentley',
    'Panoz',
    'Rolls-Royce',
    'Spyker Cars',
    'Ferrari',
    'Hummer',
    'Morgan',
    'Peugeot',
    'Foose',
    'Aptera',
    'Smart',
    'Bugatti',
    'Tesla',
    'Ram',
    'Fiat',
    'McLaren',
    'BYD',
    'McLaren Automotive',
    'Mobility Ventures LLC',
    'Pagani',
    'Roush Performance',
    'smart',
    'SRT',
    'Genesis',
    'Karma',
    'Koenigsegg',
    'RUF Automobile',
    'STI',
    'Polestar',
    'Kandi'
  ];
  const make = mke.sort();
  function handleYearChange(event) {
    setYear(event.target.value);
  }
  function handleMakeChange(event) {
    setMake(event.target.value);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
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
  async function handleSubmit(event) {
    event.preventDefault();
    const today = new Date();
    const date =
      today.getFullYear() +
      '-' +
      (today.getMonth() + 1) +
      '-' +
      today.getDate();
    const time =
      today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    const response = fetch(`/api/g_sheet`, {
      method: 'POST',
      body: JSON.stringify({
        Timestamp: dateTime,
        brand: Make,
        contact: '971' + Whatsappno,
        name: Name,
        description:
          'Customer Name: ' +
          Name +
          '\n' +
          'Address: ' +
          Address +
          '\n' +
          'Vehicle: ' +
          Make +
          ' ' +
          Model +
          ' ' +
          Year +
          '\n' +
          'Part List: ' +
          text,
        email: Email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert('Form submitted. We will contact you shortly ;)');
    setName('');
    setCode('');
    setYear('');
    setMake('');
    setModel('');
    setAddress('');
    setEmail('');
    setText('');
    setWhatsappno('');
  }
  return (
    <div>
      <Head>
        <title>German Auto Spare Parts in UAE from Dubai dealer</title>
        <meta
          name="description"
          content={
            'Buy Online and Get delivered German Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in uae'
          }
        />
        <meta
          name="keywords"
          content="german spare parts uae, german auto parts, german car parts"
        />
        <meta
          property="og:title"
          content="Online German Auto Spare Parts Hunt in UAE - New | Used | Genuine | Aftermarket"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/spare-parts/german-auto-spare-parts"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket German auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in your city at best price"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/spare-parts/german-auto-spare-parts"
        />
        <meta
          property="twitter:title"
          content="Online German Auto Spare Parts Hunt in UAE - New | Used | Genuine | Aftermarket"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket German auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in your city at best price"
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <link
          rel="canonical"
          href="https://www.emirates-car.com/spare-parts/german-auto-spare-parts"
        />
      </Head>
      <Navbar />
      <div className="bg-cover">
        <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
          <div>
            <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <Image
                src={Germany}
                alt="genuine spare parts"
                height={50}
                width={50}
              />
              GERMAN AUTO SPARE PARTS - Body Parts, Performance Parts,
              Mechanical parts, Electronic parts, Engine parts and more
            </h1>
            <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <a href="https://emirates-car.com/search-by-make/Mercedes-Benz">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Mercedes Benz spare parts in uae"
                        src="/img/car-logos/mercedesbenz.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Mercedes Benz
                    </p>
                  </main>
                </a>
              </div>
              <div>
                <a href="https://emirates-car.com/search-by-make/BMW">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="BMW spare parts in uae"
                        src="/img/car-logos/BMW.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      BMW
                    </p>
                  </main>
                </a>
              </div>
              <div>
                <a href="https://emirates-car.com/search-by-make/Volkswagen">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Volkswagen spare parts in uae"
                        src="/img/car-logos/volkswagon.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Volkswagen
                    </p>
                  </main>
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <a href="https://emirates-car.com/search-by-make/Jaguar">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Jaguar spare parts in uae"
                        src="/img/car-logos/jaguar.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Jaguar
                    </p>
                  </main>
                </a>
              </div>
              <div>
                <a href="https://emirates-car.com/search-by-make/Land%20Rover">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="land rover spare parts in uae"
                        src="/img/car-logos/land_rover.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Land Rover
                    </p>
                  </main>
                </a>
              </div>
              <div>
                <a href="https://emirates-car.com/search-by-make/Porsche">
                  <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                    <div className="flex justify-center">
                      <Image
                        alt="Porsche spare parts dubai"
                        src="/img/car-logos/porsche.webp"
                        className="object-scale-down shadow-xl"
                        height={30}
                        width={30}
                      />
                      <br />
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                      Porsche
                    </p>
                  </main>
                </a>
              </div>
            </div>
            <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">
              **Make not found above?
              <a href="https://emirates-car.com/get-in-touch">
                <nobr className="text-blue-500 text-sm underline">
                  {' '}
                  Get in touch with us {'>>'}**
                </nobr>
              </a>{' '}
            </div>
            <p className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base  xs:text-sm md:text-base p-5 mx-10">
              Used parts? New parts? Aftermarket Parts? Genuine parts? Yes we
              are dealing with all german brands including{' '}
              <a
                href="https://emirates-car.com/search-by-make"
                className="text-blue-400 underline"
              >
                BMW
              </a>
              <nobr />
              <a
                href="https://emirates-car.com/search-by-make/Mercedes-Benz"
                className="text-blue-400 underline"
              >
                Mercedes-Benz
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/get-in-touch"
                className="text-blue-400 underline"
              >
                Bosch
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/BMW"
                className="text-blue-400 underline"
              >
                BMW
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Volkswagen"
                className="text-blue-400 underline"
              >
                Volkswagen
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Land%20Rover"
                className="text-blue-400 underline"
              >
                Land Rover
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Porsche"
                className="text-blue-400 underline"
              >
                Porsche
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Jaguar"
                className="text-blue-400 underline"
              >
                Jaguar
              </a>
              ,<nobr />
              <a
                href="https://emirates-car.com/search-by-make/Mini%20Cooper"
                className="text-blue-400 underline"
              >
                Mini Cooper
              </a>
              . In recent years, there has been an high interest in car
              modification and Upgrade. If you are interested too, then simply
              submit your inquiry at our website. Our Part finding Professionals
              has the largest database of supplier and stockist as well. We
              offer shipping to Dubai, Sharjah, Ajman, Ras al Khaimah and other
              places in UAE. Have a look at our return and refund policy{' '}
              <a
                href="https://emirates-car.com/return-and-refund-policy"
                className="text-blue-400 underline"
              >
                here
              </a>
              .
            </p>
            <div className="grid grid-cols-4 xs:grid-cols-1 gap-3 p-5 border-2 border-gray-500 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <div>
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Dubai"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'German spare parts dubai'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                  German Parts Dubai
                </Link>
              </div>
              <div>
                {' '}
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Sharjah"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'German spare parts dubai'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                  German Parts Sharjah
                </Link>
              </div>
              <div>
                {' '}
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Ajman"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'german parts ajman'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  German Parts Ajman
                </Link>
              </div>
              <div>
                {' '}
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Ras%20al%20Khaimah"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'German spare parts ras al khaimah'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  German Parts Ras Al Khaimah
                </Link>
              </div>
              <div>
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Al%20Quoz%20(Dubai)"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'German spare parts al quoz'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  German Parts Al Quoz
                </Link>
              </div>
              <div>
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Sheikh%20Zayed%20Road%20(Dubai)"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'German spare parts dubai sheikh zayed road'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  German Parts Sheikh Zayed Road, Dubai
                </Link>
              </div>
              <div>
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/Deira%20(Dubai)"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  title={'German spare parts deira'}
                >
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  German Parts Deira
                </Link>
              </div>
            </div>
            <div className="mx-auto">
              <Count />
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
                <Social />
                <div>
                  <span>
                    <a
                      href="https://emirates-car.com/search-by-part-name"
                      className="underline hover:text-blue-500 xs:text-sm"
                    >
                      SEARCH BY PART NAME
                    </a>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <a
                      href="https://emirates-car.com/search-by-cities-in-uae"
                      className="underline hover:text-blue-500  xs:text-sm"
                    >
                      SEARCH BY CITY
                    </a>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <a
                      href="https://emirates-car.com/search-by-make"
                      className="underline hover:text-blue-500  xs:text-sm"
                    >
                      SEARCH BY MAKE
                    </a>{' '}
                    &nbsp;
                  </span>
                </div>
              </div>
              <form
                id="myForm"
                className="w-full shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4"
                method="POST"
                onSubmit={handleSubmit}
                target="hidden_iframe"
              >
                <div className="grid grid-cols-1 pt-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                    htmlFor="model"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="name"
                      type="text"
                      placeholder="Name"
                      onChange={handleNameChange}
                      value={Name}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 pt-3">
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="year"
                    >
                      Year
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        id="year"
                        type="text"
                        placeholder="Year"
                        name="entry.902626710"
                        onChange={handleYearChange}
                        value={Year}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div>
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
                        name="entry.741646505"
                        required="required"
                        onChange={handleMakeChange}
                        value={Make}
                      >
                        <option value="" disabled>
                          Select your Make
                        </option>
                        {make.map((m, i) => (
                          <option key={i}>{m}</option>
                        ))}{' '}
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
                  <div>
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
                        name="entry.402947466"
                        required
                        onChange={handleModelChange}
                        value={Model}
                      >
                        <option value="" disabled>
                          Select your Model
                        </option>
                        {posts
                          .filter(s => s.make === Make)
                          .map((s, i) => (
                            <option key={i} value={s.model}>
                              {s.model}{' '}
                            </option>
                          ))}{' '}
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
                <div className="grid grid-cols-3 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 pt-3">
                  <div className="flex flex-wrap -mx-3 mb-2">
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
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="city"
                    >
                      Location
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="city"
                      type="text"
                      placeholder="(Area, Emirates) or (City, Country)"
                      onChange={handleAddressChange}
                      value={Address}
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="email"
                    >
                      Email(Optional)
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="email"
                      type="text"
                      placeholder="Mail ID"
                      onChange={handleEmailChange}
                      value={Email}
                      autoComplete="off"
                      name="entry.113755516"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-3">
                  <div>
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="partname"
                    >
                      PART NAME
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="partname"
                      type="text"
                      placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
                      rows={5}
                      name="entry.1660104041"
                      onChange={e => onPartFormChange(e.target.value)}
                      value={text}
                      autoComplete="off"
                      required
                    />{' '}
                    {suggestion &&
                      suggestion.map((suggestion, i) => (
                        <div
                          key={i}
                          className="cursor-pointer border-gray-400 p-4"
                          onClick={() => onSuggestionHandler(suggestion)}
                        >
                          {suggestion}{' '}
                        </div>
                      ))}{' '}
                  </div>
                </div>
                <div className="grid grid-cols-1 pt-3">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl xs:text-xs"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex float-left text-xs text-gray-400">
                  <a
                    href="https://emirates-car.com/privacy-policy"
                    target="_newtab"
                    className="underline"
                  >
                    Privacy policy
                  </a>
                  &nbsp;
                  <a
                    href="https://emirates-car.com/terms-and-condition"
                    target="_newtab"
                    className="underline"
                  >
                    Terms and conditions
                  </a>
                </div>

                <div className="flex float-right text-xs text-gray-400 ">
                  100% secure and trusted
                </div>
              </form>
            </div>
            <h3 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10 my-10">
              {' '}
              We provide auto spare parts for any German vehicles including :
              <ul className="list-disc">
                <li>New German vehicle auto spare parts</li>
                <li>Used German vehicle auto spare parts</li>
                <li>Genuine German vehicle auto spare parts</li>
                <li>Aftermarket German vehicle auto spare parts</li>
              </ul>
            </h3>
            <div className="place-content-center text-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
                FAQ SESSION
              </p>
              <Accordion className="my-10">
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can I place order?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      You can simply place order by Submitting your details in
                      the form.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Do you provide international shipping?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Yes, we do provide.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the return policy?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Check out the return policy here{' '}
                      <a href="https://emirates-car.com/return-an-refund-policy">
                        here
                      </a>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Do you offer warranties for the parts?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>We do provide warrantees only for some parts.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can I return a part if it doesn't fit my vehicle?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>Yes you can return or also replace withe other one.</p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can i place order for brands and parts that are not
                      included in the website?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, the forms are designed in a way that accepts any
                      parts for any cars. If you dont find your desired parts or
                      brand in the dropdown in the form, then submit your
                      inquiries at{' '}
                      <a href="https://emirates-car.com/get-in-touch">here.</a>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <div className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        SEARCH FOR AUTO SPARE PARTS IN UAE
      </div>
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
            onChange={e => onPartFormChange(e.target.value)}
            value={text}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {suggestion &&
              suggestion.map((suggestion, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onSuggestionHandler(suggestion)}
                  width="100%"
                >
                  <a
                    href={
                      'https://emirates-car.com/search-by-part-name/' +
                      suggestion
                    }
                    rel="noopener noreferrer"
                    target="_newtab"
                  >
                    {suggestion}
                  </a>
                </div>
              ))}{' '}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {partsposts.map((post, i) => (
          <div key={i}>
            <Link
              href="https://emirates-car.com/search-by-part-name/[parts]"
              as={'https://emirates-car.com/search-by-part-name/' + post.parts}
              title={'german ' + post.parts}
              prefetch={false}
            >
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  {post.parts.toUpperCase()}{' '}
                </p>
              </main>
            </Link>
          </div>
        ))}{' '}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const respnse = await fetch(`https://rozy.vercel.app/api/parts`);
  const partsposts = await respnse.json();

  const resp = await fetch(`https://rozy.vercel.app/api/palms`);
  const data = await resp.json();

  return {
    props: {
      partsposts,
      posts: data
    }
  };
}
