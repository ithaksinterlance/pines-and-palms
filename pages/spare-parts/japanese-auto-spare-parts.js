import React, { useState, useEffect } from 'react';
import Navbar from '../nav';
import Image from 'next/image';
import Link from 'next/link';
import Japanese from '../../public/img/icons/japan.png';
import Footer from '../footer';
import Head from 'next/head';
import Count from '../service-countup';
import Social from '../Social';

export default function Japan({ partsposts, posts }) {
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
    'Honda',
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
        <title>
          Online Japanese Auto Spare Parts in UAE - New | Used | Genuine |
          Aftermarket
        </title>
        <meta
          name="description"
          content={
            'Buy Online and Get delivered Japanese Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in uae'
          }
        />
        <meta
          name="keywords"
          content="japan spare parts uae, japan auto parts, japan car parts"
        />
        <meta
          property="og:title"
          content="Online Japanese Auto Spare Parts Hunt in UAE - New | Used | Genuine | Aftermarket"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/country-vehicles-spare-parts/japanese-auto-spare-parts"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket Japanese auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in your city at best price"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/country-vehicles-spare-parts/japanese-auto-spare-parts"
        />
        <meta
          property="twitter:title"
          content="Online Japanese Auto Spare Parts Hunt in UAE - New | Used | Genuine | Aftermarket"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket Japanese auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in your city at best price"
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <Navbar />
      <div className="bg-cover">
        <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
          <div>
            <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <Image
                src={Japanese}
                alt="genuine auto spare parts"
                height={50}
                width={50}
              />
              JAPANESE VEHICLE AUTO SPARE PARTS
            </h1>
            <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <Link
                  href={`https://emirates-car.com/search-by-make/Toyota`}
                  passHref
                >
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="toyota spare parts in uae"
                          src="/img/car-logos/toyota.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Toyota
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Mitsubishi`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="Mitsubishi spare parts in uae"
                          src="/img/car-logos/mitsubishi.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Mitsubishi
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Lexus`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="lexus spare parts in uae"
                          src="/img/car-logos/lexus.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Lexus
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Nissan`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="toyota spare parts in uae"
                          src="/img/car-logos/nissan.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Nissan
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Infiniti`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="infinity spare parts in uae"
                          src="/img/car-logos/infiniti.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Infiniti
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Honda`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="Honda spare parts in uae"
                          src="/img/car-logos/honda.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Honda
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Mazda`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="mazda spare parts in uae"
                          src="/img/car-logos/mazda.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Mazda
                      </p>
                    </main>
                  </a>
                </Link>
              </div>

              <div>
                <Link href={`/search-by-make/Subaru`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="subaru spare parts in uae"
                          src="/img/car-logos/subaru.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Subaru
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Suzuki`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="suzuki spare parts in uae"
                          src="/img/car-logos/suzuki.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Suzuki
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Daihatsu`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="daihatsu spare parts in uae"
                          src="/img/car-logos/daihat.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Daihatsu
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href={`/search-by-make/Isuzu`} passHref>
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="isuzu spare parts in uae"
                          src="/img/car-logos/isuzu.webp"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Isuzu
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">
              **Make not found above?
              <Link href={`/get-in-touch`} passHref>
                <a>
                  <nobr className="text-blue-500 text-sm underline">
                    {' '}
                    Get in touch with us {'>>'}**
                  </nobr>
                </a>
              </Link>{' '}
            </div>
            <h1 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10">
              Explore from our immensively large-scale auto spare parts website,
              your japanese auto spare parts for your Vehicle needs - Car / Jeep
              / Van / Truck / Buses in Your city in UAE especially in Abu al
              Bukhoosh,Abu Dhabi,Abu Musa,Ahmed Bin Rashid Port,Ajman,Al Ain,Al
              Barsha,Al Dhafra,Al Fujayrah,Al Hamriyah,Al Jazeera Port,Al Jeer
              Port,Al Mafraq,Al Quoz,Al Sufouh,Ar Ruways,Arzanah Island,Das
              Island,Deira,Dibba,Dubai,Dubai World Central Apt,Esnnad,Sea Port
              (Fateh Terminal),Free Port,Habshan,Hail,Hamriya Free Zone Port,Al
              Jarf (Hassyan),Hatta,Sea Port (Hulaylah Terminal),Sea Port
              (Indooroodilly),Jebel Ali,Jebel Ali Free Zone,Jebel
              Dhanna,Jumayrah,Kalba,Khalidia,Khor al Fakkan,Masfut,Khalid
              Port,Khalifa City - Abu Dhabi,Mina Rashid Port,Mina Saqr,Mina
              Zayed - Abu Dhabi,Minhad,Mirfa,Mubarek Terminal,Mubarras
              Island,Musafa,Mussafah,Offshore Fujairah,Port Rashid,Rak Khor
              Port,Rak Maritime City,Ras al Khaimah,Ras Al Khor,Al Ras,Reem
              Island,Ruwais = Ar Ruways,Ruwais Port,Sadiyat
              Island,Sharjah,Sila,Stevin Rock,Swaihan,The Palm Jumeirah,Umm Al
              Nar,Umm al Quwain,Al Qurayyah,Yas Island,Zirku Island in UAE. You
              can check our catalogue at{' '}
              <Link href={`https://emirates-car.com/search-by-part-name`}>
                <a className="text-blue-400 underline">
                  https://emirates-car.com/search-by-part-name
                </a>
              </Link>
              . Submit your inquiry to us, our dealer will get back to you based
              on stock availability.
            </h1>
            <div className="mx-auto">
              <Count />
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
                <Social />
                <div>
                  <span>
                    <Link href={`/search-by-part-name`}>
                      <a className="underline hover:text-blue-500 xs:text-sm">
                        SEARCH BY PART NAME
                      </a>
                    </Link>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <Link href={`/search-by-cities-in-uae`}>
                      <a className="underline hover:text-blue-500 xs:text-sm">
                        {' '}
                        SEARCH BY CITY
                      </a>
                    </Link>{' '}
                    &nbsp;|
                  </span>
                  <span>
                    <Link href={`/search-by-make`}>
                      <a className="underline hover:text-blue-500 xs:text-sm">
                        SEARCH BY MAKE
                      </a>
                    </Link>{' '}
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
                        {make.map(m => (
                          <option key={m}>{m}</option>
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
                          .map(s => (
                            <option key={s.id} value={s.model}>
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
                  <Link href={`/privacy-policy`} target="_newtab">
                    <a className="underline"> Privacy policy</a>
                  </Link>
                  &nbsp;
                  <Link href={`/terms-and-condition`} target="_newtab">
                    <a className="underline">Terms and conditions</a>
                  </Link>
                </div>

                <div className="flex float-right text-xs text-gray-400 ">
                  100% secure and trusted
                </div>
              </form>
            </div>
            <h1 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10 my-10">
              {' '}
              We provide auto spare parts for any japanese vehicles including :
              <ul className="list-disc">
                <li>New japanese vehicle auto spare parts</li>
                <li>Used japanese vehicle auto spare parts</li>
                <li>Genuine japanese vehicle auto spare parts</li>
                <li>Aftermarket japanese vehicle auto spare parts</li>
              </ul>
            </h1>
          </div>
        </div>
      </div>

      <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        SEARCH FOR AUTO SPARE PARTS IN UAE
      </h1>
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
                  <Link
                    href={`https://emirates-car.com/search-by-part-name/${suggestion}`}
                    rel="noopener noreferrer"
                    target="_newtab"
                  >
                    {suggestion}
                  </Link>
                </div>
              ))}{' '}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {partsposts.map(post => (
          <div key={post.id}>
            <Link
              href={`/search-by-cities-in-uae/[city]`}
              as={`/search-by-part-name/ ${post.parts}`}
              passHref
            >
              <a title={post.parts + ' in uae'}>
                <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                  <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                    {post.parts.toUpperCase()}{' '}
                  </p>
                </main>
              </a>
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
