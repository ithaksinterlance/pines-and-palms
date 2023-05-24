import React, { useState, useEffect } from 'react';
import Nav from './nav';
import Hero_img from '../public/img/car-spare-parts.png';
import Hero from './home_hero';
import Featured from './featured';
import Link from 'next/link';
import Image from 'next/legacy/image';
import Count from './service-countup';
import Head from 'next/head';
import Social from './Social';
import Slider from 'react-slick';
import avatar1 from '../public/img/avatar1.jpeg';
import avatar2 from '../public/img/avatar2.jpg';
import avatar3 from '../public/img/avatar3.jpg';
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
  });
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
  const onCityFormChange = text => {
    let matches = [];
    if (text.length > 0) {
      matches = formCityChange.filter(part => {
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
  });

  const onMakeSuggestionHandler = searchMake => {
    setSearchMake(searchMake);
    setRecommendmake([]);
  };

  const onCitySuggestionHandler = searchCity => {
    setSearchCity(searchCity);
    setRecommendCity([]);
  };

  const onMakeFormChange = searchMake => {
    let matches = [];
    if (searchMake.length > 0) {
      matches = formMakeChange.filter(part => {
        const regex = new RegExp(`${searchMake}`, 'gi');
        return part.match(regex);
      });
    }
    setRecommendmake(matches);
    setSearchMake(searchMake);
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
    setText('');
    setWhatsappno('');
  }
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>
            Quick Auto Spare Parts Order Online in UAE from Dubai dealers |
            Emirates-car.com
          </title>
          <meta
            property="og:title"
            content="Quick Auto Spare Parts Order Online in UAE from Dubai dealers | Emirates-car.com"
          />
          <meta
            name="description"
            content={
              'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models'
            }
          />
          <meta
            name="keywords"
            content="spare parts dealers in dubai, spare parts online, auto spare parts online, best auto parts, auto spare parts in dubai, auto spare parts uae, honda accord parts, used engine parts, headlight parts, genuine parts, aftermarket spare parts, bumper parts, sensors, camera"
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
            content="Quick Auto Spare Part Order Online in UAE from Dubai dealers | Emirates-car.com"
          />
          <meta
            property="twitter:description"
            content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
          />
          <meta
            property="twitter:image"
            content="https://emirates-car.com/img/car-spare-parts.png"
          />
          <link rel="canonical" href="https://www.emirates-car.com" />
        </Head>

        <div className="flex justify-center">
          <div className="pt-3">
            <input
              className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
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
                      target="_newtab"
                    >
                      <div>{suggestion}</div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <Hero />
        {/*American */}
        <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
          Top American Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`https://emirates-car.com/search-by-make/Ford`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="ford spare parts dubai"
                    src="/img/car-logos/ford.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Ford
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/GMC`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="GMC spare parts in uae"
                    src="/img/car-logos/gmc.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  GMC
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Chevrolet`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Chevrolet spare parts in uae"
                    src="/img/car-logos/chevrolet.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Chevrolet
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Jeep`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="jeep spare parts in uae"
                    src="/img/car-logos/jeep.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Jeep
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Hummer`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="hummer parts online"
                    src="/img/car-logos/hummer.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Hummer
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Cadillac`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Cadillac spare parts sharjah"
                    src="/img/car-logos/cadillac.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Cadillac
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Lincoln`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lincoln spare parts sharjah"
                    src="/img/car-logos/lincoln.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lincoln
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Dodge`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="dodge spare parts dubai"
                    src="/img/car-logos/dodge.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Dodge
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Chrysler`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Chrysler spare parts in uae"
                    src="/img/car-logos/chrysler.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Chrysler
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mercury`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="mercury spare parts in dubai"
                    src="/img/car-logos/mercury.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mercury
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Buick`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="buick spare parts in uae"
                    src="/img/car-logos/buick.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Buick
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Ram`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="ram spare parts in uae"
                    src="/img/car-logos/ram.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Ram
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*Japanese */}
        <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
          Top Japanese Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`https://emirates-car.com/search-by-make/Ford`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="auto parts toyota"
                    src="/img/car-logos/toyota.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Toyota
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mitsubishi`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mitsubishi spare parts in uae"
                    src="/img/car-logos/mitsubishi.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mitsubishi
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Lexus`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lexus spare parts in uae"
                    src="/img/car-logos/lexus.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lexus
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Nissan`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="spare parts toyota"
                    src="/img/car-logos/nissan.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Nissan
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Infiniti`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="infinity spare parts in uae"
                    src="/img/car-logos/infiniti.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Infinity
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Honda`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Honda spare parts in uae"
                    src="/img/car-logos/honda.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Honda
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mazda`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="mazda spare parts in uae"
                    src="/img/car-logos/mazda.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mazda
                </p>
              </main>
            </Link>
          </div>

          <div>
            <Link href={`/search-by-make/Subaru`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="subaru spare parts in uae"
                    src="/img/car-logos/subaru.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Subaru
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Suzuki`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="suzuki spare parts in uae"
                    src="/img/car-logos/suzuki.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Suzuki
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Daihatsu`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="daihatsu spare parts in uae"
                    src="/img/car-logos/daihat.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Daihatsu
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Isuzu`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="isuzu spare parts in uae"
                    src="/img/car-logos/isuzu.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Isuzu
                </p>
              </main>
            </Link>
          </div>
        </div>

        {/*Britain */}
        <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
          Top Britain Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`https://emirates-car.com/search-by-make/Aston Martin`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="aston martin spare parts in uae"
                    src="/img/car-logos/aston_martin.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Aston Martin
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Bentley`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="bentley spare parts in uae"
                    src="/img/car-logos/bentley.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Bentley
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Jaguar`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Jaguar spare parts in uae"
                    src="/img/car-logos/jaguar.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Jaguar
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Land Rover`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="land rover spare parts in uae"
                    src="/img/car-logos/land_rover.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Land Rover
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Lotus`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lotus spare parts in uae"
                    src="/img/car-logos/lotus.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lotus
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/McLaren`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mclaren spare parts in uae"
                    src="/img/car-logos/mclaren.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  McLaren
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mini`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="mini spare parts in uae"
                    src="/img/car-logos/mini.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mini
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Rolls-Royce`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="rolls royce spare parts in uae"
                    src="/img/car-logos/rolls-royce.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Rolls Royce
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*French */}
        <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
          Top French Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`https://emirates-car.com/search-by-make/Peugeot`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Peugeot spare parts in uae"
                    src="/img/car-logos/peugeot.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Peugeot
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Citroen`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Citroen spare parts in uae"
                    src="/img/car-logos/citroen.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Citroen
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Renault`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Renault spare parts in uae"
                    src="/img/car-logos/renault.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Renault
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mobility Ventures LLC`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="venturi spare parts in uae"
                    src="/img/car-logos/venturi.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mobility Ventures LLC
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Bugatti`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Bugatti spare parts in uae"
                    src="/img/car-logos/bugatti.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Bugatti
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*German */}
        <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
          Top German Spare parts
        </h3>
        <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`/search-by-make/Mercedes-Benz`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mercedes Benz spare parts in uae"
                    src="/img/car-logos/mercedesbenz.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mercedes Benz
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/BMW`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="BMW spare parts in uae"
                    src="/img/car-logos/BMW.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  BMW
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Volkswagen`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Volkswagen spare parts in uae"
                    src="/img/car-logos/volkswagon.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Volkswagen
                </p>
              </main>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`/search-by-make/Jaguar`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Jaguar spare parts in uae"
                    src="/img/car-logos/jaguar.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Jaguar
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Land%20Rover`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="land rover spare parts in uae"
                    src="/img/car-logos/land_rover.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Land Rover
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Porsche`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Porsche spare parts in uae"
                    src="/img/car-logos/porsche.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Porsche
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*Korean */}
        <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
          Top Korean Spare parts
        </h3>
        <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`/search-by-make/Hyundai`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="hyundai spare parts in uae"
                    src="/img/car-logos/hyundai.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Hyundai
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Kia`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="kia spare parts in uae"
                    src="/img/car-logos/kia.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Kia
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Daewoo`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="daewoo spare parts in uae"
                    src="/img/car-logos/daewoo.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Daewoo
                </p>
              </main>
            </Link>
          </div>
        </div>
        {/*Forms */}
        <div className="place-content-center py-6 xl:mx-auto lg:mx-auto md:mx-auto xs:py-0">
          <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
            <Social />
            <div>
              <span>
                <Link
                  href={`/search-by-part-name`}
                  className="underline hover:text-blue-500 xs:text-sm"
                >
                  SEARCH BY PART NAME
                </Link>{' '}
                &nbsp;|
              </span>
              <span>
                <Link
                  href={`/search-by-cities-in-uae`}
                  className="underline hover:text-blue-500 xs:text-sm"
                >
                  SEARCH BY CITY
                </Link>{' '}
                &nbsp;|
              </span>
              <span>
                <Link
                  href={`/search-by-make`}
                  className="underline hover:text-blue-500 xs:text-sm"
                >
                  SEARCH BY MAKE
                </Link>{' '}
                &nbsp;
              </span>
            </div>
          </div>

          <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 xl:mx-10 lg:mx-7 md:mx-5 xs:w-screen s:w-screen 2xs:grid 2xs:grid-cols-1 sm:w-auto sm:mx-3 shadow-2xl xs:shadow-none 2xs:shadow-none sm:shadow-sm">
            <div className="w-1/3 bg-blue-700 2xs:w-full xs:w-screen s:w-screen s:py-5">
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
                  <p className="text-sm text-center pt-5">
                    Honestly a genuine dealing it was. The rate was so genuine.
                    My order received on time.
                  </p>
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
                  <p className="text-sm text-center pt-5">
                    {' '}
                    I replaced my Backup light with their Used backup light. It
                    was just as new and it was good quality too.
                  </p>
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
                  <p className="text-sm text-center pt-5">
                    {' '}
                    Got my Gearbox, AC Compressor, Battery, Radiator at best
                    deal! It was a very good rate and dealing.
                  </p>
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
                  <p className="text-sm text-center pt-5">
                    The dealings was simply world-class. My parts were of good
                    quality and was very genuine too.
                  </p>
                </div>
              </Slider>
              <div className="py-5 p-10">
                <h6 className="text-base font-bold text-blue-100 text-center pt-5">
                  EMIRATES-CAR
                </h6>
                <p className="text-sm text-white text-center pt-5">
                  We are dealing with auto spare parts for car, heavy truck,
                  van, buses, coupe, SUV, prime, Petrol based vehicles, Diesel
                  based vehicles, Used spare parts, After market parts, Genuine
                  spare parts and New parts etc. Contact us for any inquiry.
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
                  <Link
                    href={`/privacy-policy`}
                    className="underline"
                    target="_newtab"
                  >
                    Privacy policy
                  </Link>
                  &nbsp;
                  <Link
                    href={`/terms-and-condition`}
                    className="underline"
                    target="_newtab"
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
        <div className="place-content-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
          <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
            ABOUT Emirates-car
          </p>
          <p className="text-lg py-4 sm:mt-5 sm:text-base md:mt-5 md:text-base lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
            Emirates-car.com is Online platform to Buy / Order Auto spare parts
            Online. We have spare parts for american brand car such as Ford,
            GMC, Cadillac, Chevrolet, Dodge, Chysler and{' '}
            <Link
              href={`/spare-parts/american-auto-spare-parts`}
              className="text-blue-700 hover:text-blue-900 list-none underline"
              title="american car parts"
            >
              American car parts
            </Link>
            . Japanese brand cars Such as Toyota, Mitsubishi, Honda, Infiniti,
            Daihatsu, Nissan and{' '}
            <Link
              href={`/spare-parts/japanese-auto-spare-parts`}
              className="text-blue-700 hover:text-blue-900 list-none underline"
              title="japan car parts"
            >
              japanese car parts
            </Link>
            We have spare parts for Korean car brands such as Hyundai, Kia and{' '}
            <Link
              href={`/spare-parts/korean-auto-spare-parts`}
              className="text-blue-700 hover:text-blue-900 list-none underline"
              title="korean car parts"
            >
              korean car parts
            </Link>
            . We have spare parts for german brand car such as Mercedes-Benz,
            BMW, Volkswagen, Land Rover, Porsche, Jaguar, Mini Cooper, and{' '}
            <Link
              href={`/spare-parts/german-auto-spare-parts`}
              className="text-blue-700 hover:text-blue-900 list-none underline"
              title="german car parts"
            >
              german car parts
            </Link>
            We became a prominent Auto spare parts Dealers Online.
          </p>
          <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
            We deal in Used / New / Aftermarket / Genuine / OEM parts online. We
            deliver to all over UAE like Dubai, Abu Dhabi, Ajman, Ras Al
            Khaimah, Sharjah and{' '}
            <Link
              href={`/search-by-cities-in-uae`}
              className="text-blue-500 hover:text-blue-800 list-none underline"
            >
              car parts in uae
            </Link>
            &nbsp; and also to other countries on demand. We offer Cash On
            delivery(COD) in UAE. If you are looking for car spare parts, you
            can buy/Order to us Online by submitting Inquiries on our website
            and Our team will get back to you with best price quote through
            whatsapp.
          </p>
          <div className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
            You can search Your spare parts by:
            <ul>
              <li className="text-blue-700 hover:text-blue-900 list-none underline">
                {' '}
                <i className="fas fa-car"></i>{' '}
                <Link href={`/search-by-make`}>Car Make Model</Link>
              </li>
              <li className="text-blue-700 hover:text-blue-900 list-none underline">
                {' '}
                <i className="fas fa-bolt"></i>{' '}
                <Link href={`/search-by-part-name`}>Car Spare parts</Link>
              </li>
              <li className="text-blue-700 hover:text-blue-900 list-none underline">
                {' '}
                <i className="fas fa-map-pin"></i>{' '}
                <Link href={`/search-by-cities-in-uae`}>Location in UAE</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto py-10">
          <Count />
        </div>
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
          POPULAR BRANDS
        </p>
        <div className="grid grid-cols-7 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href={`https://emirates-car.com/search-by-make/Toyota`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts sharjah"
                    src="/img/car-logos/toyota.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Toyota
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mitsubishi`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Mitsubishi parts dubai"
                    src="/img/car-logos/mitsubishi.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mitsubishi
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Mercedes-benz`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda parts sharjah"
                    src="/img/car-logos/mercedesbenz.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Mercedes-benz
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Nissan`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda parts dubai"
                    src="/img/car-logos/nissan.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Nissan
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Ford`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda parts ajman"
                    src="/img/car-logos/ford.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Ford
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Hyundai`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda accord spare parts dubai"
                    src="/img/car-logos/hyundai.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Hyundai
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Volkswagen`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="honda spare parts sharjah"
                    src="/img/car-logos/volkswagon.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Volkswagen spare parts sharjah
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Honda`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Honda"
                    src="/img/car-logos/honda.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Honda
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Lexus`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="lexus spare parts sharjah"
                    src="/img/car-logos/lexus.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Lexus
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Acura`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="toyota spare parts in uae"
                    src="/img/car-logos/acura.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Acura
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Kia`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Kia spare parts in uae"
                    src="/img/car-logos/kia.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Kia
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Porsche`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="porsche spare parts in uae"
                    src="/img/car-logos/porsche.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Porsche
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Chevrolet`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Chevrolet spare parts in uae"
                    src="/img/car-logos/chevrolet.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Chevrolet
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href={`/search-by-make/Land Rover`}>
              <main className="border h-full  hover:border-blue-600 py-3 ">
                <div className="flex justify-center">
                  <Image
                    alt="Land Rover spare parts in uae"
                    src="/img/car-logos/land_rover.webp"
                    className="object-scale-down "
                    height={50}
                    width={50}
                  />
                  <br />
                </div>
                <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                  Land Rover
                </p>
              </main>
            </Link>
          </div>
        </div>

        <Featured />
        <div className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs s:text-xs mx-10">
          SEARCH BY BRANDS
        </div>
        {/*Search by make input box */}
        <div className="flex justify-center">
          <div className="pt-3">
            <input
              className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
              type="search"
              placeholder="Eg. Toyota, Ford, BMW, Audi..."
              onChange={e => onMakeFormChange(e.target.value)}
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
                    <Link
                      href={`https://emirates-car.com/search-by-make/${recommendmake}`}
                      target="_newtab"
                    >
                      {recommendmake}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9 md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
          {posts.map((post, i) => (
            <div key={i}>
              <Link
                href={`/search-by-make/[make]`}
                as={`/search-by-make/${post.make}`}
              >
                <main className="border h-full  hover:border-blue-600 py-3 ">
                  <div className="flex justify-center">
                    <Image
                      alt={post.make}
                      src={'/img/car-logos/' + post.img}
                      priority
                      className="object-scale-down "
                      height={50}
                      width={50}
                    />
                    <br />
                  </div>
                  <p className="text-center m-1 bg-blue-500 hover:bg-blue-400 text-white font-medium hover:text-gray-800 rounded-lg">
                    {post.make.toUpperCase()}{' '}
                  </p>
                </main>
              </Link>
            </div>
          ))}{' '}
        </div>
        <div className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs mx-10">
          SEARCH BY LOCATION IN UAE
        </div>
        <div className="flex justify-center">
          <div className="pt-3">
            <input
              className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
              type="search"
              placeholder="Eg. Abu dhabi, Dubai, Ajman..."
              onChange={e => onCityFormChange(e.target.value)}
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
                    <Link
                      href={`https://emirates-car.com/search-by-part-name/${recommendcities}`}
                      target="_newtab"
                      title={'spare parts online in ' + recommendcities}
                    ><div>
                      {recommendcities}</div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
          {cities.map((post, i) => (
            <div key={i}>
              <Link
                href="/search-by-cities-in-uae/[city]"
                as={`${'/search-by-cities-in-uae/' + post.city}`}
              >
                <main className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
                  <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                    {post.city.toUpperCase()}{' '}
                  </p>
                </main>
              </Link>
            </div>
          ))}{' '}
        </div>

        <div className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs mx-10">
          SEARCH AUTO SPARE PARTS BY NAME IN UAE
        </div>
        {/*Search by parts input box */}
        <div className="flex justify-center">
          <div className="pt-3">
            <input
              className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
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
                      target="_newtab"
                    ><div>{suggestion}</div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
          {partsposts.map((post, i) => (
            <div key={i}>
              <Link
                href={`/search-by-part-name/[parts]`}
                as={`/search-by-part-name/${post.parts}`}
                title={post.parts + ' in uae'}
              >
              <main className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
                  <p className="text-lg text-center text-blue-500 font-medium hover:text-gray-800">
                    {post.parts}
                  </p>
                </main>
              </Link>
            </div>
          ))}
        </div>
        {/*Contents */}
        <h1 className="text-2xl xs:text-lg font-bold font-sans pt-5 mx-auto m-5">
          Car spare Parts Online in UAE - Buy Premium High Quality Used,
          Genuine, OEM and Aftermarket from Dubai to all over UAE and World
        </h1>
        <div>
          <p className="text-3xl font-extrabold mx-auto my-5">
            5 ways you can find parts for your car.
          </p>
          There are 5 ways you can try finding spare parts for your car.
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Traditional way its pros and cons
          </p>
          You find a spare parts shop nearby and go and purchase and the work is
          done. In this case, the pros is that you find nearby automotive store
          to have similar brands you have and thats it you purchase it with
          ease. But the cons is when you don't find the nearby shop to have the
          car brand which you are using. There are shop who only deal with
          certain parts like the shop A sells only in honda, Mazda, BMW and shop
          B sells only Audi, Lincoln and Ferrari. So to see for next option, you
          can opt for shopping from Giant E-commerce company like Amazon, EBay,
          Flipkart etc.
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Giant E-commerce Company its pros and cons:
          </p>
          If you don&apos;t find spare parts nearby your house location,
          generally we move on to search on internet. You search for top
          companies selling spare parts online and you end up in giant
          e-commerce company like Amazon, Flipkart,Ebay etc. Now you see the
          review of person who has already ordered spare parts. Most of the
          reviews says the parts were broken. These giant company has a very big
          logistics that they are vulnerable to be broken during or even get
          lost during the check-in process. So it is not always safe to buy
          spare parts from giant e-commerce company. Hence we see for other
          option which is the Local dealers.
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Local Dealers
          </p>
          Local dealers are known through other person like through friends and
          family. Or he gives you his business card and he explains you directly
          the car brands he deals with. However with the current digital
          advancement, the local dealers are decreasing gradually. So we move to
          the next option to search on online marketplace.
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Online Marketplace (Only CONS!)
          </p>
          Through Online marketplace we find spare parts for our car easily. But
          it also has lots of cons. If you search for very latest model used
          spare parts, it will not be available on marketplace. In this case you
          have to contact the car brand company directly. If you search for very
          old model, it will not be available with most of the car brands
          company itself because old models are mostly out of stock and they
          concentrate on new latest models for the best sale. And also there are
          more spam issues reported from those who purchase from small vendor
          marketplace and also the larger companies. In this case you should go
          for Online dealer website.
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Online Dealer Website ONLY PROS!
          </p>
          Online dealers website is the easiest way to order spare parts. You
          visit a bunch of site online and submit your inquiries therein and
          dealers will contact you back through the contact information you
          submitted. If one website didnt reply you, then other website will do.
          So there is plenty of website and options. Emirates-car.com is one
          such website which accept online inquiries. It deals with parts and
          accessories for honda accord, Honda civic and{' '}
          <Link
            href="/search-by-make/Honda"
            className="text-blue-500 underline hover:text-blue-900"
          >
            other honda models, Infiniti models, BMW models, Audi models and
            many other brands. Visit to search parts you need.
          </Link>
        </div>
        <div>
          <p className="text-3xl font-extrabold mx-auto my-5">
            Team Genuine Vs Team Aftermarket
          </p>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Aftermarket parts are better to buy for many reasons:
          </p>
          <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
            <li>It is more affordable than genuine parts</li>
            <li>Some genuine parts are similar to genuine parts itself.</li>
            <li>
              It is readily available because it is equivalently manufactured to
              genuine parts.
            </li>
            <li>
              Aftermarket parts can have more manufacturers than genuine parts
              which can be only from one main manufacturer
            </li>
          </ol>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Aftermarket parts are better to buy for many reasons:
          </p>
          <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
            <li>It is more affordable than genuine parts</li>
            <li>
              Aftermarket parts are not regularized or standardized because it
              is manufactured as a duplicate to genuine parts.
            </li>
            <li>Genuine parts are best in quality than aftermarket parts. </li>
            <li>
              Genuine parts have warranty unlike aftermarket parts which has no
              Warranty
            </li>
          </ol>
          <p className="text-xl font-mono text-gray-700 mx-auto">
            However, if you weigh your pros and cons and which kind of parts you
            really need, you can come to the best conclusion yourself. And we
            can serve you with both kind of parts.
          </p>
        </div>
        <div>
          <p className="text-3xl font-extrabold mx-auto my-5">
            Best Auto Parts with High Quality standards:
          </p>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            We deal in all Automotive GCC parts Online:
          </p>
          The geographic scope of GCC includes Saudi Arabia, United Arab
          Emirates, Kuwait, Qatar, Oman and Bahrain. They have automotive scope
          of Suppliers of Original Equipment and Original Equipment Manufacturer
          for aftermarket auto body parts. 6 Auto parts categories were analysed
          and high focus were given to replacement parts. The six auto parts
          includes, crash repair parts, Wear & Tear parts, Mechanical parts,
          Electrical and electronic parts, consumables and accessories and
          service parts. After analysis, the following parts were considered the
          most High replacement parts.
          <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
            <li>Brake Pads sets</li>
            <li>Brake disc sets</li>
            <li>Shock absorbers</li>
            <li>Fan / Drive belts</li>
            <li>Timing belts</li>
            <li>Batteries</li>
            <li>Wiper blade sets</li>
            <li>Spark plug sets</li>
            <li>Fuel filters</li>
            <li>Oil filters</li>
            <li>Transmission filters </li>
            <li>Air filters</li>
            And the following parts were considered the most re-manufacturing
            parts:
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>Air Conditioning Compressor</li>
              <li>Starters</li>
              <li>Alternators</li>
              <li>Wiper Motors</li>
              <li>Water Pumps</li>
              <li>Engine parts</li>
              <li>ECUs</li>
            </ol>
          </ol>
        </div>
      </div>
      <div className="py-6 bg-blue-500">
        <div className="pb-6 xs:pb-3 p-2 sm:pb-3 2xs:pb-3">
          <h3 className="text-3xl xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl s:text-sm">
            COULD&apos;NT FIND YOUR DESIRED AUTO PARTS?{' '}
            <Link href={`/contact`} className="underline text-blue-900">
              CONTACT US NOW {'>>'}
            </Link>
          </h3>
        </div>
        {/*Footer*/}
        <div className=" bg-purple-700 py-10 xs:py-5 2xs:py-5 sm:py-5">
          <div className="grid grid-cols-3 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 sm:grid sm:grid-cols-1 ">
            <div className="text-center">
              <div className="items-center justify-center">
                <Image
                  src={Hero_img}
                  alt="auto spare parts in uae"
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
                <Link
                  className="text-xl leading-xl text-blue-900"
                  href={`https://www.facebook.com/emirates.auto.parts`}
                >
                  <i className="fab fa-2x fa-facebook"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-purple-900"
                  href={`https://www.instagram.com/emiratescar_parts/`}
                >
                  <i className="fab fa-2x fa-instagram"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-black"
                  href={`https://emirates-car.tumblr.com/`}
                >
                  <i className="fab fa-2x fa-tumblr"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-blue-300"
                  href={`https://twitter.com/emiratescarpart`}
                >
                  <i className="fab fa-2x fa-twitter"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-red-700"
                  href={`https://in.pinterest.com/emiratesautomobileparts/`}
                >
                  <i className="fab fa-2x fa-pinterest"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-blue-500"
                  href={`https://in.pinterest.com/emiratesautomobileparts/`}
                >
                  <i className="fab fa-2x fa-linkedin"></i>
                </Link>
              </p>
            </div>

            <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
              <p className="pt-5 text-white font-extrabold">SHORTCUT LINKS</p>
              <Link
                href={`/search-by-part-name`}
                className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
              >
                Spare parts in UAE
              </Link>
              <br />
              <Link
                href={`/search-by-make`}
                className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
              >
                Search parts by Car make in UAE
              </Link>
              <br />
              <Link
                href={`/search-by-cities-in-uae`}
                className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
              >
                Search parts by cities in UAE
              </Link>
            </div>
          </div>
          <p className="pt-5 text-white font-extrabold text-center xs:hidden sm:hidden 2xs:hidden">
            Auto spare parts
          </p>
          <div className="grid grid-cols-10 md:grid-cols-7 xs:hidden sm:hidden 2xs:hidden p-3">
            {posts.map((post, i) => (
              <div key={i}>
                <Link
                  href={`/search-by-make/[make]`}
                  as={'/search-by-make/' + post.make}
                >
                  <p className="text-xs text-white font-medium hover:text-gray-800 underline">
                    {post.make + ' spare parts'}{' '}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center text-purple-200 py-10">
            <Link
              href={`https://emirates-car.com`}
              className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
            >
              <i className="fa fa-copyright" aria-hidden="true"></i>
              Copyright © 2023 Emirates-car. All rights reserved.
            </Link>
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
    ...new Map(data.map(item => [item['make'], item])).values()
  ];

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  return {
    props: {
      forms,
      partsposts,
      posts: uniqueMakeArray,
      cities
    }
  };
}
