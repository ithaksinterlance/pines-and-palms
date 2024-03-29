import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/legacy/image";
import avatar1 from '../public/img/avatar1.jpeg';
import avatar2 from '../public/img/avatar2.jpg';
import avatar3 from '../public/img/avatar3.jpg';
import Nav from './nav';
import Slider from 'react-slick';
import Footer from './footer';
import Head from 'next/head';
import Social from './Social';

export default function Forms() {
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [Partname, setPartname] = useState('');
  const [Name, setName] = useState('');
  const [Address, setAddress] = useState('');
  const [Year, setYear] = useState('');
  const [Code, setCode] = useState('');

  const settings = {
    autoplay: true,
    arrows: false,
    centerMode: true,
    autopalySpeed: 3000,
    dotsClass: 'slick-dots',
    pauseOnHover: 'true',
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  function handleMakeChange(event) {
    setMake(event.target.value);
    console.log(Make);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
    console.log(Address);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
    console.log(Model);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
    console.log(Whatsappno);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(Email);
  }
  function handlePartChange(event) {
    setPartname(event.target.value);
    console.log(Partname);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleYearChange(event) {
    setYear(event.target.value);
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
    fetch(`/api/g_sheet`, {
      method: 'POST',
      body: JSON.stringify({
        Timestamp: dateTime,
        brand: Make,
        contact: Code + Whatsappno,
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
          Partname,
        email: Email
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert('Form submitted. We will contact you shortly ;)');
    setCode('');
    setName('');
    setYear('');
    setMake('');
    setModel('');
    setAddress('');
    setEmail('');
    setPartname('');
    setWhatsappno('');
  }
  return (
    <div>
      <Head>
        <title>
          Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com
        </title>
        <meta
          name="description"
          content={
            'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE'
          }
        />
        <meta
          name="keywords"
          content="honda accord spare parts sharjah, honda accord spare parts, honda accord 2008 brake pads, honda accord 2009 distributor, honda accord wheel, honda accord 2012 abs, honda accord engine, honda accord gearbox, honda accord axle, honda accord air filter, honda accord carburetor"
        />
        <meta
          property="og:title"
          content="Quick Car Auto Spare Parts Order Online in UAE | Emirates-car.com"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/get-in-touch"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/get-in-touch"
        />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Parts Order Online in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/get-in-touch"
        />
        <link
          rel="canonical"
          href="https://www.emirates-car.com/get-in-touch"
        />
      </Head>
      <Nav />
      <div className="container place-content-center mx-auto py-6">
        <div className="uppercase bg-blue-200 font-serif p-5 text-center text-3xl text-blue-900 font-extrabold xs:text-base xs:w-screen s:text-2xl 2xs:text-2xl ">
          <Social />
          <div>
            &nbsp;
            <span>
              <Link
                href="/search-by-part-name"
                className="underline xs:no-underline hover:text-blue-500 text-2xl text-blue-900 font-extrabold xs:text-base s:text-base 2xs:text-base"
              >
                SEARCH BY PART NAME
              </Link>
            </span>
            | &nbsp;
            <span>
              <Link
                href="/search-by-cities-in-uae"
                className="underline xs:no-underline hover:text-blue-500 text-2xl text-blue-900 font-extrabold xs:text-base s:text-base 2xs:text-base"
              >
                SEARCH BY CITY
              </Link>
            </span>
            | &nbsp;
            <span>
              <Link
                href="/search-by-make"
                className="underline xs:no-underline hover:text-blue-500 text-2xl text-blue-900 font-extrabold xs:text-base s:text-base 2xs:text-base "
              >
                SEARCH BY MAKE
              </Link>
            </span>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/honda-accord-8th-gen-parts"
            className="underline animate-pulse text-red-600 hover:text-red-800"
          >
            Check Offers On Honda Accord 8th Generation 2008, 2009, 2010, 2011,
            2012
          </Link>
        </div>

        <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 shadow-2xl ">
          <div className="w-1/3 bg-blue-700 2xs:w-full xs:w-full xs:py-5 ">
            <Slider {...settings} className="py-10 p-2">
              <div>
                <p className="text-xl font-bold text-center">
                  <div>
                    {' '}
                    <Image
                      alt="emirates car"
                      className="rounded-full"
                      src={avatar1}
                      width={50}
                      height={50}
                    />
                  </div>
                  Jamal
                </p>
                <p className="text-sm text-center pt-5 text-white">
                  Honestly a genuine dealing it was. The rate was so genuine. My
                  order received on time.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-center">
                  <div>
                    {' '}
                    <Image
                      alt="emirates car"
                      className="rounded-full"
                      src={avatar2}
                      width={50}
                      height={50}
                    />
                  </div>
                  Mohammed
                </p>
                <p className="text-sm text-center pt-5 text-white">
                  {' '}
                  I replaced my Backup light with their Used backup light. It
                  was just as new and it was good quality too.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-center">
                  <div>
                    {' '}
                    <Image
                      alt="emirates car"
                      className="rounded-full"
                      src={avatar3}
                      width={50}
                      height={50}
                    />
                  </div>
                  Abdul
                </p>
                <p className="text-sm text-center pt-5 text-white">
                  {' '}
                  Got my Gearbox, AC Compressor, Battery, Radiator at best deal!
                  It was a very good rate and dealing.
                </p>
              </div>
              <div>
                <p className="text-xl font-bold text-center">
                  <div>
                    {' '}
                    <Image
                      alt="emirates car"
                      className="rounded-full"
                      src={avatar1}
                      width={50}
                      height={50}
                    />
                  </div>
                  Anonymous
                </p>
                <p className="text-sm text-center pt-5 text-white">
                  The dealings was simply world-class. My parts were of good
                  quality and was very genuine too.
                </p>
              </div>
            </Slider>
            <div className="py-5 p-10">
              <h1 className="text-base font-bold text-blue-100 text-center pt-5">
                EMIRATES-CAR
              </h1>
              <p className="text-sm text-white text-center pt-5">
                We are dealing with auto spare parts for car, heavy truck, van,
                buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
                vehicles, Used spare parts, After market parts, Genuine spare
                parts and New parts etc. Contact us for any inquiry.
              </p>
            </div>

            <div className="p-5 pt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.3860201286!2d51.71183150969869!3d24.337497293019872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1641654109734!5m2!1sen!2sin"
                title="auto spare parts dubai"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="w-2/3 xs:w-full md:w-full 2xs:w-full sm:w-full">
            <form
              onSubmit={handleSubmit}
              className="shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4"
              method="POST"
            >
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
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
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <label
                    htmlFor="model"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  >
                    Year
                  </label>
                  <input
                    id="model"
                    name="entry.44547744"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    type="text"
                    placeholder="Your car Year"
                    onChange={handleYearChange}
                    value={Year}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <label
                    htmlFor="make"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  >
                    Make
                  </label>
                  <input
                    id="make"
                    name="entry.741646505"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    type="text"
                    onChange={handleMakeChange}
                    placeholder="Your car Make"
                    value={Make}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <label
                    htmlFor="model"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  >
                    Model
                  </label>
                  <input
                    id="model"
                    name="entry.44547744"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    type="text"
                    placeholder="Your car Model"
                    onChange={handleModelChange}
                    value={Model}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <label
                    htmlFor="address"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  >
                    Address
                  </label>
                  <input
                    id="address"
                    name="entry.44547744"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    type="text"
                    placeholder="(Area, City, Country)"
                    onChange={handleAddressChange}
                    value={Address}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-1/5 px-3 mb-6 xs:mb-0 md:mb-0">
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
                <div className="w-4/5 px-3 mb-6 xs:mb-0 md:mb-0">
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

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <label
                    htmlFor="email"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="entry.113755516"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
                    type="email"
                    placeholder="We won't leak your mail id"
                    onChange={handleEmailChange}
                    value={Email}
                    required
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <label
                    htmlFor="partname"
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  >
                    Part Name
                  </label>
                  <textarea
                    id="partname"
                    name="entry.1660104041"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    type="text"
                    rows={5}
                    placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
                    onChange={handlePartChange}
                    value={Partname}
                    required
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="flex float-left text-xs text-gray-400">
                <Link
                  href="/privacy-policy"
                  target="_newtab"
                  className="underline"
                >
                  Privacy policy
                </Link>
                &nbsp;
                <Link
                  href="/terms-and-condition"
                  target="_newtab"
                  className="underline"
                >
                  Terms and conditions
                </Link>
              </div>

              <div className="flex float-right text-xs text-gray-400 ">
                100% secure and trusted
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
