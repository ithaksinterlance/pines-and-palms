import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../nav';
import Footer from '../../footer';
import React, { useState, useEffect } from 'react';
import Social from '../../Social';
import HondaOfferButton from '../../HondaOfferButton';
import Image from "next/legacy/image";
import ABS from '../../../public/img/honda-eighth-gen/Anti_Lock_Braking_System.webp';
import AirFilter from '../../../public/img/honda-eighth-gen/Air_Filter.webp';
import AirSuspension from '../../../public/img/honda-eighth-gen/Air_Suspension_Module.webp';
import AxleAssembly from '../../../public/img/honda-eighth-gen/Axle_Assembly_Rear.webp';
import BrakePads from '../../../public/img/honda-eighth-gen/Brake_Pads.webp';
import CatalyticConverter from '../../../public/img/honda-eighth-gen/Catalytic_Converter.webp';
import CylinderHead from '../../../public/img/honda-eighth-gen/Cylinder_Head.webp';
import Distributor from '../../../public/img/honda-eighth-gen/Distributor.webp';
import Engine from '../../../public/img/honda-eighth-gen/Engine.webp';
import ExhaustManifold from '../../../public/img/honda-eighth-gen/Exhaust_Manifold.webp';
import GearBox from '../../../public/img/honda-eighth-gen/Gearbox.webp';
import Grille from '../../../public/img/honda-eighth-gen/Grille.webp';
import Headlight from '../../../public/img/honda-eighth-gen/Headlight.webp';
import MasterCylinderKit from '../../../public/img/honda-eighth-gen/Master_Cylinder.webp';
import Radiator from '../../../public/img/honda-eighth-gen/Radiator.webp';
import RearBumper from '../../../public/img/honda-eighth-gen/Rear_Bumper_Assembly.webp';
import ReverseLight from '../../../public/img/honda-eighth-gen/Reverse_Light.webp';
import Rim from '../../../public/img/honda-eighth-gen/Rim.webp';
import SeatBelt from '../../../public/img/honda-eighth-gen/Seat_Belt.webp';
import ShockAbsorber from '../../../public/img/honda-eighth-gen/Shock_Absorber.webp';
import SideMirror from '../../../public/img/honda-eighth-gen/Side_Mirror.webp';
import SteeringWheel from '../../../public/img/honda-eighth-gen/Steering_Wheel.webp';
import Wheel from '../../../public/img/honda-eighth-gen/Wheel.webp';
import MudFlap from '../../../public/img/honda-eighth-gen/Mud_Flap.webp';

export default function Car({ car, cities, make, partspost, posts }) {
  const images = [
    {
      images: ABS,
      name: `${make} ABS`,
      alt: `${make} anti lock braking system`,
      link:
        'https://emirates-car.com/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)'
    },
    {
      images: AirFilter,
      name: `${make} Air Filter`,
      alt: `${make} air filter`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: AirSuspension,
      name: `${make} Air Suspension`,
      alt: `${make} Air suspension`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: AxleAssembly,
      name: `${make} Axle`,
      alt: `${make} axle`,
      link:
        'https://emirates-car.com/search-by-part-name/Axle%20Assembly%20(Front,%204WD)'
    },
    {
      images: BrakePads,
      name: `${make} Brake Pads`,
      alt: `${make} brake pads`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CatalyticConverter,
      name: `${make} Catalytic Convertor`,
      alt: `${make} catalytic convertor`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CylinderHead,
      name: `${make} Cylinder Head`,
      alt: `${make} cylinder`,
      link: 'https://emirates-car.com/search-by-part-name/Cylinder%20Head)'
    },
    {
      images: Distributor,
      name: `${make} Distributor`,
      alt: `${make} distributor`,
      link: 'https://emirates-car.com/search-by-part-name/Distributor'
    },
    {
      images: Engine,
      name: `${make} Engine`,
      alt: `${make} Engine`,
      link: 'https://emirates-car.com/search-by-part-name/Engine%20Assembly'
    },
    {
      images: ExhaustManifold,
      name: `${make} Exhaust Manifold`,
      alt: `${make} exhaust system`,
      link: 'https://emirates-car.com/search-by-part-name/Exhaust%20Manifold'
    },
    {
      images: GearBox,
      name: `${make} Gearbox / Transmission`,
      alt: `${make} gearbox`,
      link:
        'https://emirates-car.com/search-by-part-name/Transmission%20Control%20Module'
    },
    {
      images: Grille,
      name: `${make} grill`,
      alt: `${make} grill`,
      link: 'https://emirates-car.com/search-by-part-name/Grille'
    },
    {
      images: Headlight,
      name: `${make} Headlight`,
      alt: `${make} headlight bulb`,
      link: 'https://emirates-car.com/search-by-part-name/Headlight%20Assembly'
    },
    {
      images: MasterCylinderKit,
      name: `${make} Master Cylinder`,
      alt: `${make} master cylinder`,
      link:
        'https://emirates-car.com/search-by-part-name/Master%20Cylinder%20(Clutch)'
    },
    {
      images: MudFlap,
      name: `${make} Mud Flaps`,
      alt: `${make} mud flaps`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: Radiator,
      name: `${make} Radiator`,
      alt: `${make} radiator`,
      link: 'https://emirates-car.com/search-by-part-name/Radiator'
    },
    {
      images: RearBumper,
      name: `${make} Rear Bumper`,
      alt: `${make} rear bumper`,
      link:
        'https://emirates-car.com/search-by-part-name/Bumper%20Assembly%20(Rear)'
    },
    {
      images: ReverseLight,
      name: `${make} Reverse Light`,
      alt: `${make} reverse light`,
      link: 'https://emirates-car.com/search-by-part-name/Reverse%20Light'
    },
    {
      images: Rim,
      name: `${make} Rims`,
      alt: `${make} Rims for sale`,
      link: 'https://emirates-car.com/search-by-part-name/Rim'
    },
    {
      images: SeatBelt,
      name: `${make} Seat Belt`,
      alt: `${make} seat belt`,
      link: 'https://emirates-car.com/search-by-part-name/Seat%20Belt'
    },
    {
      images: ShockAbsorber,
      name: `${make} Shock Absorber`,
      alt: `${make} shock absorber`,
      link: 'https://emirates-car.com/search-by-part-name/Shock%20Absorber'
    },
    {
      images: SideMirror,
      name: `${make} Mirror`,
      alt: `${make} mirrors`,
      link:
        'https://emirates-car.com/search-by-part-name/Mirror%20(Rear%20View)'
    },
    {
      images: SteeringWheel,
      name: `${make} Steering Wheel`,
      alt: `${make} steering wheel`,
      link: 'https://emirates-car.com/search-by-part-name/Steering%20Wheel'
    },
    {
      images: Wheel,
      name: `${make} wheels`,
      alt: `${make} wheels`,
      link: 'https://emirates-car.com/search-by-part-name/Wheel'
    }
  ];
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
  const [searchModel, setSearchModel] = useState('');
  const [recommend, setRecommend] = useState('');
  const [formModelChange, setFormModelChange] = useState('');

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in partspost) {
        var filtered = partspost[i].parts;
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

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in car) {
        if (car[i].make === make) {
          var filter = car[i].model;
          part.push(filter);
        }
      }
      setFormModelChange(part);
    };
    loadPart();
  });

  const onModelSuggestionHandler = searchModel => {
    setSearchModel(searchModel);
    setRecommend([]);
  };
  const onModelFormChange = searchModel => {
    let matches = [];
    if (searchModel.length > 0) {
      matches = formModelChange.filter(part => {
        const regex = new RegExp(`${searchModel}`, 'gi');
        return part.match(regex);
      });
    }
    setRecommend(matches);
    setSearchModel(searchModel);
  };

  const ma = [
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
  const mke = ma.sort();
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
      <Head>
        <title>
          {make} - Car Auto Spare Parts Order Online from Dubai Dealers in UAE -
          Best Prices
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            'Buy ' +
            make +
            ' Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket ' +
            make +
            ' spare parts from Dubai Dealer to all over UAE and world Online'
          }
        />
        <meta
          property="og:title"
          content={
            make +
            ' - Auto Spare Parts Order Online in UAE - Best Prices | Emirates-car.com'
          }
        />
        <meta
          name="keywords"
          content={
            make +
            ' spare parts dubai' +
            make +
            ' car spare parts' +
            make +
            ' parts uae' +
            make +
            ' ' +
            ' uae' +
            make +
            ' parts' +
            make +
            ' spare part prices in uae'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={'https://www.emirates-car.com/search-by-make/' + make}
        />
        <meta
          property="og:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your' +
            make +
            "'s needs - Car / Jeep / Van / Truck / Buses in Your city."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content={'https://www.emirates-car.com/search-by-make/' + make}
        />
        <meta
          property="twitter:title"
          content={
            make +
            ' - Car Auto Spare Parts Order Online in UAE - Best Prices | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your' +
            make +
            "'s needs - Car / Jeep / Van / Truck / Buses in Your city."
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>

      <main className="d-flex justify-center  pt-10 xs:pt-5 mx-8">
        <article>
          <div>
            <h1 className="text-blue-600 text-4xl md:text-md lg:text-md font-extrabold  xs:text-base 2xs:text-xs text-center">
              Buy {make} Car Parts - Used, Genuine, OEM (Original parts) and
              Aftermarket {make} spare parts from Dubai Dealer to all over UAE
              and world Online - Body Parts, Performance Parts, Mechanical
              parts, Electronic parts, Engine parts and more..
            </h1>
            <Link href={"https://emirates-car.com/search-by-make/"+make+"#myForm"} className="w-1/4 xs:w-full mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5">
                Inquire Now

            </Link>
          </div>

          <div>
            <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5 text-justify">
              CHOOSE YOUR
              <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                &nbsp;{make}{' '}
              </nobr>
              MODEL
            </div>

            <p className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 underline pb-3">
              <nobr className="text-blue-400 no-underline">
                <i className="fal fa-car-garage"></i>
                Current path:&nbsp;&nbsp;
              </nobr>
              index{'>>>'}
              {make}
              {'>>>'}
            </p>
            <div className="flex justify-center">
              <div className="pt-3">
                <input
                  className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
                  id="partname"
                  type="search"
                  placeholder={'Search Your ' + make + ' Model'}
                  onChange={e => onModelFormChange(e.target.value)}
                  value={searchModel}
                  autoComplete="off"
                  required
                />
                <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
                  {recommend &&
                    recommend.map((recommend, i) => (
                      <div
                        key={i}
                        className="cursor-pointer  text-base p-1 bg-white"
                        onClick={() => onModelSuggestionHandler(recommend)}
                        width="100%"
                      >
                        <Link
                          href={"https://emirates-car.com/search-by-make/"+make+"/"+recommend}
                          rel="noopener noreferrer"
                          target="_newtab"
                          title={recommend}
                          >
                         {recommend}
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 md:grid md:grid-cols-1 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
            <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 text-red-600">
              Want to Get Prices for {make} spare parts uae online? Submit your
              inquiry here
            </p>
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
                      {mke.map((m, i) => (
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
                <Link href="https://emirates-car.com/privacy-policy}" target="_newtab" className="underline">
                  Privacy policy
                </Link>
                &nbsp;
                <Link href="https://emirates-car.com/terms-and-condition" target="_newtab" className="underline">
                  Terms and conditions
                </Link>
              </div>

              <div className="flex float-right text-xs text-gray-400 ">
                100% secure and trusted
              </div>
            </form>
            <div className="uppercase bg-blue-200 font-serif text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
              <Social />
              <div>
                <span>
                  <Link
                    href="https://emirates-car.com/search-by-part-name"
                    className="underline hover:text-blue-500 xs:text-sm"
                    >
                      {' '}
                      SEARCH BY PART NAME

                  </Link>{' '}
                  &nbsp;|
                </span>
                <span>
                  <Link href="https://emirates-car.com/search-by-cities-in-uae" className="underline hover:text-blue-500 xs:text-sm">
                      SEARCH BY CITY

                  </Link>{' '}
                  &nbsp;|
                </span>
                <span>
                  <Link href="https://emirates-car.com/search-by-make" className="underline hover:text-blue-500 xs:text-sm">
                      SEARCH BY MAKE

                  </Link>{' '}
                  &nbsp;
                </span>
              </div>
            </div>
          </div>
          <h3
            className="text-3xl font-extrabold mx-auto my-5"
            id="oemvsaftermarket1"
          >
            Why choose {make} genuine parts ?
          </h3>
          <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
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
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            {make} Genuine parts are better to buy for many reasons:
          </p>
          <p className="text-xl font-mono text-gray-700 mx-auto">
            However, if you weigh your pros and cons and which kind of parts you
            really need, you can come to the best conclusion yourself. And we
            can serve you with both kind of parts.
          </p>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
            Availability of {make} parts in UAE:
          </p>
          <h3
            className="text-3xl font-extrabold mx-auto my-5"
            id="oemvsaftermarket"
          >
            Why choose {make} aftermarket parts ?
          </h3>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            {make} aftermarket parts are better to buy for many reasons:
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
          <div>
            <p className="text-3xl font-extrabold mx-auto my-5">
              5 ways you can find parts for your car.
            </p>
            There are 5 ways you can try finding spare parts for your car.
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Traditional way its pros and cons
            </p>
            You find a spare parts shop nearby and go and purchase and the work
            is done. In this case, the pros is that you find nearby shop to have
            similar brands you have and thats it you purchase it with ease. But
            the cons is when you don't find the nearby shop to have the car
            brand which you are using. There are shop who only deal with certain
            parts like the shop A sells only in honda, Mazda, BMW and shop B
            sells only Audi, Lincoln and Ferrari. So to see for next option, you
            can opt for shopping from Giant E-commerce company like Amazon,
            EBay, Flipkart etc.
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Giant E-commerce Company its pros and cons:
            </p>
            If you don't find spare parts nearby your house location, generally
            we move on to search on internet. You search for top companies
            selling spare parts online and you end up in giant e-commerce
            company like Amazon, Flipkart,Ebay etc. Now you see the review of
            person who has already ordered spare parts. Most of the reviews says
            the parts were broken. These giant company has a very big logistics
            that they are vulnerable to be broken during or even get lost during
            the check-in process. So it is not always safe to buy spare parts
            from giant e-commerce company. Hence we see for other option which
            is the Local dealers.
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Local Dealers
            </p>
            Local dealers are known through other person like through friends
            and family. Or he gives you his business card and he explains you
            directly the car brands he deals with. However with the current
            digital advancement, the local dealers are decreasing gradually. So
            we move to the next option to search on online marketplace.
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Online Marketplace (Only CONS!)
            </p>
            Through Online marketplace we find spare parts for our car easily.
            But it also has lots of cons. If you search for very latest model
            used spare parts, it will not be available on marketplace. In this
            case you have to contact the car brand company directly. If you
            search for very old model, it will not be available with most of the
            car brands company itself. And also there are more spam issues
            reported from those who purchase from small vendor marketplace and
            also the larger companies. In this case you should go for Online
            dealer website.
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Online Dealer Website ONLY PROS!
            </p>
            Online dealers website is the easiest way to order spare parts. You
            visit a bunch of site online and submit your inquiries therein and
            dealers will contact you back through the contact information you
            submitted. If one website didnt reply you, then other website will
            do. So there is plenty of website and options. Emirates-car.com is
            one such website which accept online inquiries. It deals with parts
            and accessories for honda accord, Honda civic and{' '}
            <Link href="/search-by-make/Honda" className="text-blue-500 underline hover:text-blue-900">
                other honda models

            </Link>
            , Infiniti models, BMW models, Audi models and many other brands.
            Visit to search parts you need.
          </div>
          <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-2  sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
            {car.map((post, i) => (
              <div key={i}>
                <Link
                  href="https://emirates-car.com/search-by-make/[make]/[model]"
                  as={"https://emirates-car.com/search-by-make/"+post.make+"/"+post.model}
                  title={post.make + post.model + ' spare parts'}
                  >
                    <main className="border border-blue-800 h-full p-3 ">
                      <p className="text-center text-lg xs:text-xl xs:text-center font-mono text-blue-800 underline hover:text-gray-800 focus:text-gray-800 font-bold ">
                        {make + ' ' + post.model.replace('%2F', '/') + ' parts'}{' '}
                      </p>
                    </main>

                </Link>
              </div>
            ))}{' '}
          </div>
        </article>
        <div className="text-center mt-2 text-red-400 text-sm xs:text-xs py-5">
          **Model not found above?
          <Link href="https://emirates-car.com/get-in-touch" >
            <nobr className="text-blue-500 text-sm underline">
              {' '}
              Get in touch with us {'>>'}**
            </nobr>
          </Link>{' '}
        </div>
        <div className="text-center">
          <HondaOfferButton />
        </div>

        <div className="text-xl font-mono text-gray-700 mx-auto xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-5">
          Emirates-car.com is the online Dealers specialist in {make} spare
          parts running on roads of UAE. We find pleasure is finding the best
          genuine (otherwise called OEM parts) and aftermarket parts for any
          cars. We have experienced professional who can find the parts at
          affordable and reasonable price. We deal in genuine {make}
          parts and aftermarket {make} parts such as engine parts, mechanical
          parts, electrical and electronic parts, body parts and lights, AC
          parts and service and maintenance parts. You can order {make} spare
          parts by simply submitting the online inquiry form{' '}
          <Link
            href="https://emirates-car.com"
            className="underline text-blue-500 hover:text-blue-900"
            title="auto spare parts"
          >
            here
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </div>
        <p className="text-xl font-mono text-gray-700 mx-auto font-extrabold xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10">
          Availability of {make} parts in UAE:
        </p>
        <div className="grid grid-cols-4 xs:grid-cols-1 gap-3 p-5 border-2 border-gray-500 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
          <div>
            <Link
              href="/search-by-cities-in-uae/Dubai"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts dubai'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                {make} Parts Dubai

            </Link>
          </div>
          <div>
            {' '}
            <Link
              href="/search-by-cities-in-uae/Sharjah"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts dubai'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                {make} Parts Sharjah

            </Link>
          </div>
          <div>
            {' '}
            <Link
              href="/search-by-cities-in-uae/Ajman"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts ajman'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {make} Parts Ajman

            </Link>
          </div>
          <div>
            {' '}
            <Link
              href="/search-by-cities-in-uae/Ras%20al%20Khaimah"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts ras al khaimah'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {make} Parts Ras Al Khaimah

            </Link>
          </div>
          <div>
            <Link
              href="/search-by-cities-in-uae/Al%20Quoz%20(Dubai)"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts al quoz'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {make} Parts Al Quoz

            </Link>
          </div>
          <div>
            <Link
              href="/search-by-cities-in-uae/Sheikh%20Zayed%20Road%20(Dubai)"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts dubai sheikh zayed road'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {make} Parts Sheikh Zayed Road, Dubai

            </Link>
          </div>
          <div>
            <Link
              href="/search-by-cities-in-uae/Deira%20(Dubai)"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              title={make + ' spare parts deira'}
              >

                <i className="fa fa-map-marker" aria-hidden="true"></i>
                {make} Parts Deira

            </Link>
          </div>
        </div>
        <div className="d-flex justify-center pt-10 xs:pt-5 mx-8 xs:mx-3">
          <div>
            <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center">
              Popular Used, Genuine and Aftermarket {make} spare parts for sale
              in UAE
            </p>

            <div className="grid grid-cols-5 gap-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
              {images.map((i, k) => (
                <div key={k} className="border-2 p-5 relative">
                  <sup className="absolute top-0 right-0 text-sm font-bold text-white bg-red-600 rounded-l-xl rounded-r-xl p-1">
                    Sale!
                  </sup>
                  <div className="h-50">
                    <div className="text-xl font-bold font-sans xs:text-base">
                      {i.name}
                    </div>
                  </div>

                  <hr className="py-1" />
                  <Image
                    src={i.images}
                    alt={i.alt}
                    height={250}
                    width={250}
                    className="object-none object-center p-1"
                    priority
                  />

                  <Link
                    href={i.link}
                    className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                    title={make + i.name}
                  >
                    Inquire Now
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="https://emirates-car.com/get-in-touch"
              target="_newtab"
              className="w-1/4 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
            >
              View All Parts
            </Link>
          </div>
        </div>
        <p className="text-3xl font-extrabold mx-auto my-5 xs:text-xl md:text-2xl">
          Shop for {make} performance parts, {make} genuine parts, {make + ' '}
          aftermarket parts, {make} body parts, {make} mechanical parts,{' '}
          {make + ' '}
          electrical parts, {make} engine parts, {make} replacement parts,{' '}
          {make + ' '}
          AC parts and more
        </p>
        <div className="grid grid-cols-3 xs:grid-cols-1">
          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} Engine parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Assembly"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Engine Assembly
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Block"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Engine Block
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Mount"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Engine Mount
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Block"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Engine Block
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Cylinder%20Head"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Cylinder Head
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Cylinder%20Block"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Cylinder Block
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Crankshaft" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Crankshaft

                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Camshaft"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Camshaft
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Piston"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Piston
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Exhaust%20Manifold"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Exhaust Manifold
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Intake%20Manifold"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Intake Manifold
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Ignition%20Switch"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Ignition Switch
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Ignition%20Control%20Module"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Ignition Control Module
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Transmission%20Control%20Module"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  TCM
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} Mechanical parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/Engine%20Assembly" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Engine

                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Assembly"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Battery
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Assembly"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Alternator
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Brake%20Pads"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Brake Pads
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Radiator"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Radiator
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Transmission%20Control%20Module"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Transmission
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Shock%20Absorber"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Shock Absorber
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Convertible%20Top%20Motor"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Catalytic Converter
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Power%20Steering%20Box"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Power Steering
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} Body Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link
                  href="/search-by-part-name/Bonnet"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Bonnet
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Fender%20(Front)"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Fender
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Decklid"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Decklid
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Grille"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Grille
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Wheel"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Wheel
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} Electrical Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/Spark%20Plug" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Spark Plug

                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Alternator" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Alternator

                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Battery" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Battery

                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Ignition%20Switch" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Ignition Switch

                </Link>
              </li>
              <li>
                <Link href="/get-in-touch" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Many more...

                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} AC Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link
                  href="/search-by-part-name/AC%20Compressor"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    {' '}
                    AC Compressor

                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/AC%20Condenser" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Condenser

                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/AC%20Selector" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Selector

                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/AC%20Controls" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Controls

                </Link>
              </li>
              <li>
                <Link href="/get-in-touch" className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Many more...

                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="place-content-center ">
          <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center">
            List of Genuine and Aftermarket {make} spare parts in UAE
          </p>
          <div className="grid grid-cols-5 gap-2 s:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 font-medium text-gray-500 p-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
            {partspost.map((p, i) => (
              <div key={i}>
                <Link
                  href="https://emirates-car.com/search-by-part-name/[parts]"
                  as={"https://emirates-car.com/search-by-part-name/"+p.parts}
                  className="text-blue-800 hover:text-gray-800 underline"
                  title={p.parts}
                  >
                    {make + ' ' + p.parts + ' parts'}

                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-black font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  text-justify font-sans">
          {make} spare parts Onine in UAE - Order Now and get best Quote prices
          !
        </div>
        <div className="grid grid-cols-4 xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 xs:text-xs xl:text-lg 2xs:text-xs px-5 font-sans xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
          {cities.map((post, i) => (
            <div key={i}>
              <Link
                href="https://emirates-car.com/search-by-cities-in-uae/[city]"
                as={"https://emirates-car.com/search-by-cities-in-uae/"+post.city}
                title={make + ' spare parts ' + post.city}
                >
                  <p className="text-base hover:text-gray-800 focus:text-gray-800 border border-gray-700  text-blue-800 m-2 p-2">
                    <i className="far fa-compass"></i>&nbsp;
                    {post.city}{' '}
                  </p>

              </Link>
            </div>
          ))}{' '}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/palms`);
  const data = await res.json();
  const paths = data.map(post => ({
    params: {
      make: post.make
    }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { make } = params;

  const res = await fetch(`https://rozy.vercel.app/api/grooves/${make}`);
  const data = await res.json();

  let uniqueObjectArray = [
    ...new Map(data.map(item => [item['model'], item])).values()
  ];
  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  const parts = await fetch(`https://rozy.vercel.app/api/parts`);
  const partspost = await parts.json();

  const response = await fetch(`https://rozy.vercel.app/api/palms`);
  const posts = await response.json();

  return {
    props: {
      car: uniqueObjectArray,
      cities,
      make,
      partspost,
      posts
    }
  };
}
