import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Hero_img from '../public/img/car-spare-parts.png';
import Hero from './home_hero';
import Slider from 'react-slick';
import Featured from './featured';
import Footer from './footer';
import Link from 'next/link';
import avatar1 from '../public/img/avatar1.jpeg';
import avatar2 from '../public/img/avatar2.jpg';
import avatar3 from '../public/img/avatar3.jpg';
import Image from 'next/image';
import Count from './service-countup';
import Head from 'next/head';
import Social from './Social';

export default function Home({ forms, partsposts, posts, cities }) {
  const [Year, setYear] = useState('');
  const [Make, setMake] = useState('');
  const [Model, setModel] = useState('');
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState('');
  const [Name, setName] = useState('');
  const [searchMake, setSearchMake] = useState('');
  const [recommendmake, setRecommendmake] = useState('');
  const [formMakeChange, setFormMakeChange] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [recommendcities, setRecommendCity] = useState('');
  const [formCityChange, setFormCityChange] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [Address, setAddress] = useState('');
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
  }, []);
  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in cities) {
        var filtered = cities[i].city;
        part.push(filtered);
      }
      setFormCityChange(part);
    };
    loadPart();
  }, []);

  const onSuggestionHandler = (text) => {
    setText(text);
    setSuggestion([]);
  };

  const onPartFormChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = formPartname.filter((part) => {
        const regex = new RegExp(`${text}`, 'gi');
        return part.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };
  const onCityFormChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = formCityChange.filter((part) => {
        const regex = new RegExp(`${text}`, 'gi');
        return part.match(regex);
      });
    }
    setRecommendCity(matches);
    setSearchCity(text);
  };

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in posts) {
        var filtered = posts[i].make;
        part.push(filtered);
      }
      setFormMakeChange(part);
    };
    loadPart();
  }, []);

  const onMakeSuggestionHandler = (searchMake) => {
    setSearchMake(searchMake);
    setRecommendmake([]);
  };

  const onCitySuggestionHandler = (searchCity) => {
    setSearchCity(searchCity);
    setRecommendCity([]);
  };

  const onMakeFormChange = (searchMake) => {
    let matches = [];
    if (searchMake.length > 0) {
      matches = formMakeChange.filter((part) => {
        const regex = new RegExp(`${searchMake}`, 'gi');
        return part.match(regex);
      });
    }
    setRecommendmake(matches);
    setSearchMake(searchMake);
  };

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
    slidesToScroll: 1,
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
    'Kandi',
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
          text,
        email: Email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    alert('Form submitted. We will contact you shortly ;)');
    setCode('');
    setName('');
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
          Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com
        </title>
        <meta
          property="og:title"
          content="Quick Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          name="keywords"
          content="car parts, spare parts, auto spare parts online, best auto parts, auto spare parts in dubai, auto spare parts uae"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta property="og:url" content="https://www.emirates-car.com" />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta property="twitter:url" content="https://www.emirates-car.com" />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <Nav />
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
            onChange={(e) => onPartFormChange(e.target.value)}
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
                    href={`https://emirates-car.com/search-by-part-name/${suggestion}`}
                    rel="noopener noreferrer"
                    target="_newtab"
                  >
                    {suggestion}{' '}
                  </a>
                </div>
              ))}{' '}
          </div>
        </div>
      </div>

      <Hero />
      <div className="place-content-center text-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
          ABOUT Emirates-car
        </p>
        <p className="text-lg py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          Emirates-car.com is Online platform to Buy/Order Auto spare parts
          Online. We have spare parts for american brand car such as Ford, GMC,
          Cadillac, Chevrolet, Dodge, Chysler and{' '}
          <a className="text-blue-500 hover:text-blue-800 list-none underline">
            <Link href="/country-vehicles-spare-parts/american-auto-spare-parts">
              Other American Brands
            </Link>
          </a>
          . Japanese brand cars Such as Toyota, Mitsubishi, Honda, Infinity,
          Daihatsu, Nissan and{' '}
          <a className="text-blue-500 hover:text-blue-800 list-none underline">
            <Link href="/country-vehicles-spare-parts/japanese-auto-spare-parts">
              Other Japanese car brands.
            </Link>
          </a>
          We have spare parts for Korean car brands such as Hyundai, Kia and{' '}
          <a className="text-blue-500 hover:text-blue-800 list-none underline">
            <Link href="/country-vehicles-spare-parts/korean-auto-spare-parts">
              Other Korean Car brands
            </Link>
          </a>
          . We have spare parts for german brand car such as Mercedes-Benz, BMW,
          Volkswagen, Land Rover, Porsche, Jaguar, Mini Cooper, and{' '}
          <a className="text-blue-500 hover:text-blue-800 list-none underline">
            <Link href="/country-vehicles-spare-parts/german-auto-spare-parts">
              Other German Car brands.
            </Link>{' '}
          </a>
          We became a prominent Auto spare parts Dealers Online.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          We deal in Used / New / Aftermarket / Genuine / OEM parts online. We
          deliver to all over UAE like Dubai, Abu Dhabi, Ajman, Ras Al Khaimah,
          Sharjah and{' '}
          <a className="text-blue-500 hover:text-blue-800 list-none underline">
            <Link href="/search-by-cities-in-uae">Other Cities in UAE</Link>{' '}
          </a>
          and also to other countries on demand. We offer Cash On delivery(COD)
          in UAE. If you are looking for car spare parts, you can buy/Order to
          us Online by submitting Inquiries on our website and Our team will get
          back to you with best price quote through whatsapp.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          You can search Your spare parts by:
          <li className="text-blue-500 hover:text-blue-800 list-none underline">
            {' '}
            <i className="fas fa-car"></i>{' '}
            <Link href="./search-by-make">Car Make Model</Link>
          </li>
          <li className="text-blue-500 hover:text-blue-800 list-none underline">
            {' '}
            <i className="fas fa-bolt"></i>{' '}
            <Link href="./search-by-part-name">Car Spare parts</Link>
          </li>
          <li className="text-blue-500 hover:text-blue-800 list-none underline">
            {' '}
            <i className="fas fa-map-pin"></i>{' '}
            <Link href="./search-by-cities-in-uae">Location in UAE</Link>
          </li>
        </p>
      </div>
      <div className="mx-auto py-10">
        <Count />
      </div>
      <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
        POPULAR BRANDS
      </p>
      <div className="grid grid-cols-7 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
        <div>
          <Link href="https://emirates-car.com/search-by-make/Ford">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts in uae"
                    src="/img/car-logos/toyota.png"
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
          <Link href="/search-by-make/Mitsubishi">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Mitsubishi spare parts in uae"
                    src="/img/car-logos/mitsubishi.png"
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
          <Link href="/search-by-make/Mercedes-benz">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Mercedes-benz spare parts in uae"
                    src="/img/car-logos/mercedesbenz.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Mercedes-benz
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Nissan">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts in uae"
                    src="/img/car-logos/nissan.png"
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
          <Link href="/search-by-make/Ford">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Ford spare parts in uae"
                    src="/img/car-logos/Ford.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Ford
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Hyundai">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Hyundai spare parts in uae"
                    src="/img/car-logos/hyundai.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Hyundai
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Ford">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Volkswagon spare parts in uae"
                    src="/img/car-logos/volkswagon.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Volkswagon
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Honda">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Honda spare parts in uae"
                    src="/img/car-logos/honda.png"
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
          <Link href="/search-by-make/Lexus">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts in uae"
                    src="/img/car-logos/lexus.png"
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
          <Link href="/search-by-make/Acura">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts in uae"
                    src="/img/car-logos/acura.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Acura
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Kia">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Kia spare parts in uae"
                    src="/img/car-logos/kia.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Kia
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Porsche">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="porsche spare parts in uae"
                    src="/img/car-logos/porsche.png"
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
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Chevrolet">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Chevrolet spare parts in uae"
                    src="/img/car-logos/chevrolet.png"
                    className="object-scale-down shadow-xl"
                    height={30}
                    width={30}
                  />
                  <br />
                </div>
                <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                  Chevrolet
                </p>
              </main>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/search-by-make/Land Rover">
            <a>
              <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                <div className="flex justify-center">
                  <Image
                    alt="Land Rover spare parts in uae"
                    src="/img/car-logos/land_rover.png"
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
          </Link>
        </div>
      </div>
      <div className="place-content-center py-6 xl:mx-auto lg:mx-auto md:mx-auto xs:py-0">
        <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
          <Social />
          <div>
            <span>
              <Link href="/search-by-part-name">
                <a className="underline hover:text-blue-500 xs:text-sm">
                  SEARCH BY PART NAME
                </a>
              </Link>{' '}
              &nbsp;|
            </span>
            <span>
              <Link href="/search-by-cities-in-uae">
                <a className="underline hover:text-blue-500  xs:text-sm">
                  SEARCH BY CITY
                </a>
              </Link>{' '}
              &nbsp;|
            </span>
            <span>
              <Link href="/search-by-make">
                <a className="underline hover:text-blue-500  xs:text-sm">
                  SEARCH BY MAKE
                </a>
              </Link>{' '}
              &nbsp;
            </span>
          </div>
        </div>
        <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 xl:mx-10 lg:mx-7 md:mx-5 xs:w-screen s:w-screen 2xs:grid 2xs:grid-cols-1 sm:w-auto sm:mx-3 shadow-2xl xs:shadow-none 2xs:shadow-none sm:shadow-sm">
          <div className="w-1/3 bg-blue-700 2xs:w-full xs:w-full s:w-full xs:py-5 s:py-5 xs:hidden">
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
                <p className="text-sm text-center pt-5">
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
                <p className="text-sm text-center pt-5">
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
                <p className="text-sm text-center pt-5">
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
                <p className="text-sm text-center pt-5">
                  The dealings was simply world-class. My parts were of good
                  quality and was very genuine too.
                </p>
              </div>
            </Slider>
            <div className="py-5 p-10 xs:p-3 s:p-3 sm:p-3">
              <p className="text-base font-bold text-blue-100 text-center pt-5">
                EMIRATES-CAR
              </p>
              <p className="text-sm text-white text-center pt-5">
                We are dealing with auto spare parts for car, heavy truck, van,
                buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
                vehicles, Used spare parts, After market parts, Genuine spare
                parts and New parts etc. Contact us for any inquiry.
              </p>
            </div>

            <div className="p-5 pt-10 sm:p-3">
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
          <div className="w-2/3 xs:w-auto md:w-auto md:mx-5 s:w-auto s:mx-3 xs:mx-4 2xs:w-auto 2xs:mx-4">
            <form
              id="myForm"
              className="w-full shadow-xl px-8 py-8 xs:px-2 xs:py-3 2xs:px-4 sm:px-4"
              action="https://docs.google.com/forms/d/e/1FAIpQLSeIJu3dIAVWI2YjuO2bv31unQiJf4frrpb3IyVObr_05fmxoA/formResponse"
              method="POST"
              onSubmit={handleSubmit}
              target="hidden_iframe"
            >
              <div className="flex flex-wrap  mb-2">
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
              <div className="flex flex-wrap  mb-2">
                <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0 xs:mb-0">
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
                      name="entry.44547744"
                      onChange={handleYearChange}
                      value={Year}
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="w-1/2 md:w-1/2 pr-3">
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
                      {make.map((m) => (
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
              </div>

              <div className="flex flex-wrap  mb-2">
                <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
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
                      {forms
                        .filter((s) => s.make === Make)
                        .map((s) => (
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

              <div className="flex flex-wrap">
                <div className="w-1/5 xs:w-2/5 px-3 mb-6 xs:mb-0 md:mb-0">
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
                <div className="w-4/5 xs:w-3/5 px-3 mb-6 xs:mb-0 md:mb-0">
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
              <div className="flex flex-wrap ">
                <div className="w-full px-3 mb-6 xs:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                    htmlFor="city"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    id="city"
                    type="text"
                    name="entry.1212961542"
                    placeholder="Mail ID"
                    onChange={handleEmailChange}
                    value={Email}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex flex-wrap ">
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
                    name="entry.1212961542"
                    placeholder="(Area, Emirates) or (City, Country)"
                    onChange={handleAddressChange}
                    value={Address}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="flex flex-wrap ">
                <div className="w-full px-3 mb-6">
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
                    onChange={(e) => onPartFormChange(e.target.value)}
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

              <div className="flex flex-wrap ">
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
                  <a
                    href="./privacy-policy"
                    className="underline"
                    target="_newtab"
                  >
                    Privacy policy
                  </a>
                </Link>
                &nbsp;
                <Link href="./terms-and-condition">
                  <a
                    href="./privacy-policy"
                    className="underline"
                    target="_newtab"
                  >
                    Terms and conditions
                  </a>
                </Link>
              </div>

              <div className="flex float-right text-xs text-gray-400 ">
                100% secure and trusted
              </div>
            </form>
          </div>
        </div>
      </div>
      <Featured />
      <p className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs s:text-xs mx-10">
        SEARCH BY BRANDS
      </p>
      {/*Search by make input box */}
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder="Eg. Toyota, Ford, BMW, Audi..."
            onChange={(e) => onMakeFormChange(e.target.value)}
            value={searchMake}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {recommendmake &&
              recommendmake.map((recommendmake, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onMakeSuggestionHandler(recommendmake)}
                  width="100%"
                >
                  <a
                    href={`https://emirates-car.com/search-by-make/${recommendmake}`}
                    rel="noopener noreferrer"
                    target="_newtab"
                  >
                    {recommendmake}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-9 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
        {posts.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-make/[make]"
              as={'/search-by-make/' + post.make}
            >
              <a>
                <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                  <div className="flex justify-center">
                    <Image
                      alt={post.make}
                      src={'/img/car-logos/' + post.img}
                      className="object-scale-down shadow-xl"
                      height={30}
                      width={30}
                    />
                    <br />
                  </div>
                  <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                    {post.make.toUpperCase()}{' '}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}{' '}
      </div>
      <p className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY LOCATION IN UAE
      </p>
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder="Eg. Abu dhabi, Dubai, Ajman..."
            onChange={(e) => onCityFormChange(e.target.value)}
            value={searchCity}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {recommendcities &&
              recommendcities.map((recommendcities, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onCitySuggestionHandler(recommendcities)}
                  width="100%"
                >
                  <a
                    href={`https://emirates-car.com/search-by-part-name/${recommendcities}`}
                    rel="noopener noreferrer"
                    title={"spare parts online in "+recommendcities}
                    target="_newtab"
                  >
                    {recommendcities}
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {cities.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-cities-in-uae/[city]"
              as={'/search-by-cities-in-uae/' + post.city}
            >
              <a>
                <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                  <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                    {post.city.toUpperCase()}{' '}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}{' '}
      </div>
      <p className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH AUTO SPARE PARTS BY NAME IN UAE
      </p>
      {/*Search by parts input box */}
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
            onChange={(e) => onPartFormChange(e.target.value)}
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
                    href={`https://emirates-car.com/search-by-part-name/${suggestion}`}
                    rel="noopener noreferrer"
                    target="_newtab"
                  >
                    {suggestion}{' '}
                  </a>
                </div>
              ))}{' '}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {partsposts.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-cities-in-uae/[city]"
              as={'/search-by-part-name/' + post.parts}
            >
              <a>
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
      <div className="py-6 bg-blue-500">
        <div className="pb-6 xs:pb-3 p-2 sm:pb-3 2xs:pb-3">
          <h1 className="text-3xl xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl s:text-sm">
            COULD&apos;NT FIND YOUR DESIRED AUTO PARTS?{' '}
            <Link href="/contact">
              <a className="underline text-blue-900">CONTACT US NOW {'>>'}</a>
            </Link>
          </h1>
        </div>
        {/*Footer*/}
        <div className=" bg-purple-700 py-10 xs:py-5 2xs:py-5 sm:py-5">
          <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
            <div className="text-center">
              <div className="items-center justify-center">
                <Image
                  src={Hero_img}
                  alt="spare parts in uae"
                  height={50}
                  width={50}
                />
              </div>
              <p className="pt-5 text-white font-extrabold">
                ABOUT Emirates-car
              </p>
              <p className="text-sm xs:text-xs pt-5 m-1 text-center font-medium text-purple-400">
                We are dealing with auto spare parts for car, heavy truck, van,
                buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
                vehicles, Used spare parts, After market parts, Genuine spare
                parts and New parts etc. Contact us for any inquiry.
              </p>
            </div>
            <div className="pt-10 xs:pt-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
              <p className="pt-5 text-white font-extrabold">SOCIAL LINKS</p>
              <p>
                <a
                  className="text-xl leading-xl text-blue-900"
                  href="https://www.facebook.com/Emirates-carcom-101113659165158/"
                >
                  <i className="fab fa-2x fa-facebook"></i>
                </a>
                &nbsp;
                <a
                  className="text-xl leading-xl text-purple-900"
                  href="https://www.instagram.com/haksinterlance/"
                >
                  <i className="fab fa-2x fa-instagram"></i>
                </a>
                &nbsp;
                <a
                  className="text-xl leading-xl text-black"
                  href="https://emirates-car.tumblr.com/"
                >
                  <i className="fab fa-2x fa-tumblr"></i>
                </a>
                &nbsp;
                <a
                  className="text-xl leading-xl text-blue-300"
                  href="https://twitter.com/uaeautoparts"
                >
                  <i className="fab fa-2x fa-twitter"></i>
                </a>
                &nbsp;
                <a
                  className="text-xl leading-xl text-red-700"
                  href="https://in.pinterest.com/emiratesautomobileparts/"
                >
                  <i className="fab fa-2x fa-pinterest"></i>
                </a>
                &nbsp;
                <a
                  className="text-xl leading-xl text-blue-500"
                  href="https://in.pinterest.com/emiratesautomobileparts/"
                >
                  <i className="fab fa-2x fa-linkedin"></i>
                </a>
              </p>
            </div>

            <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
              <p className="pt-5 text-white font-extrabold">SHORTCUT LINKS</p>
              <Link href="/search-by-part-name">
                <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                  Search parts by part name in UAE
                </a>
              </Link>
              <br />
              <Link href="/search-by-make">
                <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                  Search parts by Car make in UAE
                </a>
              </Link>
              <br />
              <Link href="/search-by-cities-in-uae">
                <a className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline">
                  Search parts by cities in UAE
                </a>
              </Link>
            </div>
          </div>
          <p className="pt-5 text-white font-extrabold text-center xs:hidden sm:hidden 2xs:hidden">
            Auto spare parts
          </p>
          <div className="grid grid-cols-10 md:grid-cols-7 xs:hidden sm:hidden 2xs:hidden p-3">
            {posts.map((post) => (
              <div key={post.id}>
                <Link
                  href="/search-by-make/[make]"
                  as={'/search-by-make/' + post.make}
                >
                  <a>
                    <p className="text-xs text-white font-medium hover:text-gray-800 underline">
                      {post.make + ' spare parts'}{' '}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center underline text-xs">
            <a href="http://www.happal.com/">Happal Directory</a>
            <a
              href="https://www.ontoplist.com/auto-services/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.ontoplist.com/images/ontoplist31.png?id=627cdc5911365"
                alt="Auto Services - OnToplist.com"
                border="0"
              />
            </a>
            <a href="https://list-directories.com/Niche-Directory/Outdoor-Recreation/" target="_blank" rel="noreferrer"> Directory List</a>
            <a href="https://411freedirectory.com/">411 Free Directory.com</a>
            <a href="http://www.lemon-directory.com/">Lemon Directory .com</a>
            <a href="http://www.alive-directory.com/">Alive Directory</a>
            <a href="http://www.canadawebdir.com/shopping/home_and_garden/">
              home_and_garden com
            </a>
            <a href="http://www.interesting-dir.com/">Interesting Dir</a>
            <a href="http://car.ellysdirectory.com">car</a>
            <a href="https://huludirectory.com/">HuLu Directory .com</a>
            <a href="https://activdirectory.net/">Activ Directory .net</a>
            <a href="https://upsdirectory.com/">Ups Directory .com</a>
            <a href="http://www.yellowlinker.com/">
              YellowLinker - Free Link Directory
            </a>
            <a href="http://www.qualityinternetdirectory.com/science_and_technology/information_technology/">qualityinternetdirectory</a>
            <a href="http://www.brownlinker.com/">
              BrownLinker - Seo Directory
            </a>
            <a href="http://www.craigslistdir.org/">CraigsList Dir.org</a>
            <a href="http://www.ranaf.com/">Ranaf Directory</a>
            <a href="http://www.addlinkzfree.com">Add Linkz Free</a>
            <a href="https://abstractdirectory.net/">Abstract Directory .net</a>
            <a href="http://www.abstractdirectory.com">Abstract Directory</a>
            <a
              href="http://www.transfercases.com/
"
            >
              <b>Transfer Cases for Four Wheel Drive</b>
            </a>{' '}
            ??? Transfercases for Chevy, Dodge, Ford, Hummer and more???Transfer
            Case Express.
            <a href="https://www.fruity-directory.com/">Fruity Directory.com</a>
            <a href="http://www.gtawebdirectory.com">
              Directory of Toronto and GTA
            </a>
            <a href="https://mydirectory.jksfinancial.info" id="R0">
              Mydirectory Free Web Directory
            </a>
            <a href="http://www.addbusiness.net/">Business Directory</a>
            <a href="https://www.1directory.org/">1Directory.org</a>
            <a
              href="http://www.webs.svirski.com/"
              target="_blank"
              rel="noreferrer"
            >
              webs.svirski.com Welcome!
            </a>
            <a href="/">Quality Web Directory</a>
            <a href="https://www.greenydirectory.com/">Greeny Directory.com</a>
            <a href="https://www.sitepromotiondirectory.com/latest-links.html">
              sitepromotiondirectory.com latest-links
            </a>
            <a href="http://www.usawebsitesdirectory.com/computers_and_internet/">
              http://www.usawebsitesdirectory.com/computers_and_internet/
            </a>
            <a href="https://www.gmawebdirectory.com/computers_and_internet/">
              Web Directory gma
            </a>
            <a href="https://www.searchenginelinks.co.uk/">
              Search Engine Links - Directory of Search Engines
            </a>
            <a
              href="http://www.irkawebpromotions.com/"
              title="Website Promotion Guide"
            >
              Website Promotion Guide
            </a>
          </div>

          <div className="text-center text-purple-200 py-10">
            <a
              href="https://emirates-car.com"
              className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              <i className="fa fa-copyright" aria-hidden="true"></i>
              Copyright ?? 2022 Emirates-car. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  // forms
  const respo = await fetch(`https://rozy.vercel.app/api/palms`);
  const forms = await respo.json();

  const respnse = await fetch(`https://rozy.vercel.app/api/parts`);
  const partsposts = await respnse.json();

  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map((item) => [item['make'], item])).values(),
  ];

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  return {
    props: {
      forms,
      partsposts,
      posts: uniqueMakeArray,
      cities,
    },
  };
}
