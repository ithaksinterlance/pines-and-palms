import React, { useState } from 'react';
import Nav from '../../nav';
import Footer from '../../footer';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/legacy/image";
import Slider from 'react-slick';
import avatar1 from '../../../public/img/avatar1.jpeg';
import avatar2 from '../../../public/img/avatar2.jpg';
import avatar3 from '../../../public/img/avatar3.jpg';
import Social from '../../Social';

export default function Parts({ data, cities, posts }) {
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [Address, setAddress] = useState('');
  const [Partname, setPartname] = useState(data.parts);
  const [Name, setName] = useState('');
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
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  function handlePartChange(event) {
    setPartname(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
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
      <Nav />
      <Head>
        <title>
          {data.parts} Car Auto Spare Parts Order Online in UAE |
          Emirates-car.com
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            'Buy Online and Get delivered ' +
            data.parts +
            ' Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE at best price.'
          }
        />
        <meta
          property="og:title"
          content={
            data.parts +
            ' Car Auto Spare Parts  Order Online in UAE | Emirates-car.com'
          }
        />
        <meta
          property="keywords"
          content={
            data.parts +
            ' in uae,' +
            'genuine ' +
            data.parts +
            ' in uae,' +
            'aftermarket ' +
            data.parts +
            ' in uae,' +
            'used ' +
            data.parts +
            ' in uae,' +
            'New ' +
            data.parts +
            ' in uae'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={
            'https://www.emirates-car.com/search-by-part-name/' + data.parts
          }
        />
        <meta
          property="og:description"
          content={
            'Secure your ' +
            data.parts +
            ' from us your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content={
            'https://www.emirates-car.com/search-by-part-name/' + data.parts
          }
        />
        <meta
          property="twitter:title"
          content={
            data.parts +
            ' Car Auto Spare Parts Order Online in UAE | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Secure your ' +
            data.parts +
            ' from us your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <link
          rel="canonical"
          href={
            'https://www.emirates-car.com/search-by-part-name/' + data.parts
          }
        />
      </Head>
      <div className="flex place-content-center mx-auto">
        <h1 className="text-3xl font-extrabold mx-auto my-5 xs:text-xl">
          {data.parts}
        </h1>
      </div>
      <div className="flex xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full s:w-full">
          <main className="mx-10 xs:mx-auto 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <div className="container place-content-center mx-1 py-6">
              <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5">
                FILL OUT THE INQUIRY FOR
                <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                  &nbsp;{data.parts}{' '}
                </nobr>
                BELOW
              </div>
              <div className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:m-3 underline pb-3 ">
                <nobr className="text-blue-400 no-underline">
                  <i className="fal fa-car-garage"></i> Current
                  path:&nbsp;&nbsp;
                </nobr>
                index{'>>>'}
                {data.parts}
                {'>>>'}
              </div>
              <div className="uppercase xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 mx-10 bg-blue-200 font-serif text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
                <Social />
                <div>
                  <span>
                    <Link
                      href="https://emirates-car.com/search-by-part-name"
                      className="underline hover:text-blue-500 xs:text-sm"
                      title="car spare parts online"
                    >
                      SEARCH BY PART NAME
                    </Link>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <Link
                      href="https://emirates-car.com/search-by-cities-in-uae"
                      className="underline hover:text-blue-500 xs:text-sm"
                    >
                      Spare parts near me
                    </Link>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <Link
                      href="https://emirates-car.com/search-by-make"
                      className="underline hover:text-blue-500 xs:text-sm"
                    >
                      SEARCH BY MAKE
                    </Link>{' '}
                    &nbsp;
                  </span>
                </div>
              </div>
              <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 xs:mx-4 s:mx-4 2xs:mx-4 md:mx-5 mx-10">
                <div className="w-1/3 bg-blue-700 s:hidden md:hidden 2xs:hidden xs:py-5 xs:hidden">
                  <Slider {...settings} className="py-10 p-2">
                    <div>
                      <div className="text-xl font-bold text-center">
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
                      </div>
                      <div className="text-sm text-center pt-5 text-white">
                        Honestly a genuine dealing it was. The rate was so
                        genuine. My order received on time.
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-center">
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
                      </div>
                      <div className="text-sm text-center pt-5 text-white">
                        {' '}
                        I replaced my Backup light with their Used backup light.
                        It was just as new and it was good quality too.
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-center">
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
                      </div>
                      <div className="text-sm text-center pt-5 text-white">
                        {' '}
                        Got my Gearbox, AC Compressor, Battery, Radiator at best
                        deal! It was a very good rate and dealing.
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-center">
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
                      </div>
                      <div className="text-sm text-center pt-5 text-white">
                        The dealings was simply world-class. My parts were of
                        good quality and was very genuine too.
                      </div>
                    </div>
                  </Slider>
                  <div className="py-5 p-10">
                    <div className="text-base font-bold text-blue-100 text-center pt-5">
                      EMIRATES-CAR
                    </div>
                    <div className="text-sm text-white text-center pt-5">
                      We are dealing with auto spare parts for car, heavy truck,
                      van, buses, coupe, SUV, prime, Petrol based vehicles,
                      Diesel based vehicles, Used spare parts, After market
                      parts, Genuine spare parts and New parts etc. Contact us
                      for any inquiry.
                    </div>
                  </div>

                  <div className="p-5 pt-10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.3860201286!2d51.71183150969869!3d24.337497293019872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1641654109734!5m2!1sen!2sin"
                      title={data.parts + ' parts'}
                      width="100%"
                      height="100%"
                      style={{ border: '0' }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 md:grid md:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-5 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2 mx-10">
                  <div className="text-base font-medium  xs:text-sm md:text-base p-5 s:p-2">
                    Searching for {data.parts.toUpperCase()} Auto Spare Parts in
                    U.A.E? Fill out the inquiry down below.
                  </div>
                  <form
                    onSubmit={handleSubmit}
                    className="shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4 s:py-4 s:px-1"
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
                    <div className="flex flex-wrap -mx-3 mb-2 s:mb-1">
                      <div className="w-full px-3 mb-6 s:mb-1  xs:mb-0 md:mb-0">
                        <label
                          htmlFor="make"
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 s:mb-1 s:mt-1 xs:mt-3"
                        >
                          Make
                        </label>
                        <input
                          id="make"
                          name="entry.741646505"
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 s:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                          type="text"
                          onChange={handleMakeChange}
                          placeholder="Your car Make"
                          value={Make}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2 s:mb-1">
                      <div className="w-full px-3 mb-6 s:mb-1 xs:mb-0 md:mb-0">
                        <label
                          htmlFor="model"
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 s:mb-1 s:mt-1 xs:mt-3"
                        >
                          Model
                        </label>
                        <input
                          id="model"
                          name="entry.44547744"
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 s:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                          type="text"
                          placeholder="Your car Model"
                          onChange={handleModelChange}
                          value={Model}
                          required
                        />
                      </div>
                    </div>
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

                    <div className="flex flex-wrap -mx-3 mb-2 s:mb-1">
                      <div className="w-full px-3 mb-6 s:mb-1  xs:mb-0 md:mb-0">
                        <label
                          htmlFor="email"
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 s:mb-1 s:mt-1 xs:mt-3"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="entry.113755516"
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 s:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
                          type="email"
                          placeholder="Mail ID"
                          onChange={handleEmailChange}
                          value={Email}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                      <div className="w-full px-3 mb-6 xs:mb-0">
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
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-2 s:mb-1">
                      <div className="w-full px-3 mb-6 s:mb-1  xs:mb-0 md:mb-0">
                        <label
                          htmlFor="partname"
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 s:mb-1 s:mt-1 xs:mt-3"
                        >
                          Part Name
                        </label>
                        <textarea
                          id="partname"
                          name="entry.1660104041"
                          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 s:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
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

                    <div className="flex flex-wrap -mx-3 mb-2 s:mb-1">
                      <div className="w-full px-3 mb-6 s:mb-1  xs:mb-0 md:mb-0">
                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 s:py-1 px-4 rounded-full xs:text-xs"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="flex float-left text-xs text-gray-400">
                      <Link
                        href="https://emirates-car.com/privacy-policy"
                        target="_newtab"
                        className="underline"
                      >
                        Privacy policy
                      </Link>
                      &nbsp;
                      <Link
                        href="https://emirates-car.com/terms-and-condition"
                        target="_newtab"
                        className="underline"
                      >
                        Terms and conditions
                      </Link>
                    </div>
                    <div className="flex float-right text-xs text-gray-400">
                      100% secure and trusted
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs s:text-xs mx-10 my-10">
                SEARCH BY MAKE
              </div>
              <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
                {posts.map((post, i) => (
                  <div key={i}>
                    <Link
                      href="https://emirates-car.com/search-by-make/[make]"
                      as={
                        'https://emirates-car.com/search-by-make/' + post.make
                      }
                      title={post.make + ' ' + data.parts}
                    >
                      <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                        <div className="flex justify-center">
                          <Image
                            alt={post.make + ' spare parts'}
                            src={'/img/car-logos/' + post.img}
                            className="object-scale-down shadow-xl"
                            height={60}
                            width={60}
                          />
                          <br />
                        </div>
                        <div className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                          {data.parts.toUpperCase()} for{' '}
                          {post.make.toUpperCase()}
                        </div>
                      </main>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
                <div className="text-base font-medium text-gray-500 p-5">
                  We deal with any country auto spare parts including japanese,
                  american, german, chinese, indian, Korean, french, british in
                  UAE. We also operate in main cities such as dubai, sharjah,
                  abu dhabi, ajman, al quoz, jumeirah, deira etc. You can check
                  our catalogue at{' '}
                  <Link
                    href="https://emirates-car.com/search-by-part-name"
                    className="text-blue-400 underline"
                  >
                    https://emirates-car.com/search-by-part-name
                  </Link>
                  . We provide auto spare parts for any vehicles including :
                  <ul className="list-disc">
                    <li>{data.parts} New auto spare parts in uae</li>
                    <li>{data.parts} Used auto spare parts in uae</li>
                    <li>{data.parts} Genuine auto spare parts in uae</li>
                    <li>{data.parts} Aftermarket auto spare parts in uae</li>
                  </ul>
                </div>
                <div className="text-base font-medium text-gray-500 p-5">
                  UAE Automobile industry is slowly shifting towards a service
                  oriented business model based on consumer data and customer
                  experience. Now companies are trying to adapt to the current
                  need of the trends Markets. They rely on consumer data for
                  knowing the sale interest of the customers based on the
                  experience through analytics software. Owners are now thinking
                  ways to accommodate the market through the trends analytics in
                  order to keep the company into their targeted level.
                  Previously there were cars running on petrol in which UAE is
                  one of the largest producer and diesel. Since the beginning
                  era of electric vehicle have started, many people are opting
                  for electric vehicles in spite of its shortcomings because it
                  is more affordable comapared to vehicle running on diesel or
                  petrol. By this transition there is no difference in usage of
                  irreversible energy.
                </div>
                <div className="text-base font-medium text-gray-500 p-5"></div>
              </div>
            </div>
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans s:w-full xs:w-full 2xs:w-full sm:w-full my-5">
          <div className="xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 s:w-full 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xs s:text-xs  xl:text-lg 2xs:text-2xl px-5  text-justify font-sans">
            SEARCH PARTS BY COUNTRIES (U.A.E)
          </div>
          <div className="xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 2xs:w-full s:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 px-5 s:px-3">
            {cities.map((post, i) => (
              <div key={i}>
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae/[city]"
                  as={
                    'https://emirates-car.com/search-by-cities-in-uae/' +
                    post.city
                  }
                  title={data.parts + ' in ' + post.city}
                >
                  <div className="text-base hover:text-blue-700 focus:text-blue-700 xs:text-sm xl:text-lg 2xs:text-xs text-gray-500 font-sans s:text-xs underline">
                    <i className="far fa-compass"></i> {data.parts} in{' '}
                    {post.city}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/parts`);
  const data = await res.json();
  const paths = data.map(post => ({
    params: { parts: post.parts }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { parts } = params;

  const res = await fetch(`https://rozy.vercel.app/api/parts/${parts}`);
  const data = await res.json();

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const dat = await resp.json();
  let uniqueMakeArray = [
    ...new Map(dat.map(item => [item['make'], item])).values()
  ];

  if (!data) {
    return {
      notFound: true
    };
  }

  return {
    props: { data, cities, posts: uniqueMakeArray }
  };
}
