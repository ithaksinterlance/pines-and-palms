import Nav from '../../../nav';
import Footer from '../../../footer';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import avatar1 from '../../../../public/img/avatar1.jpeg';
import avatar2 from '../../../../public/img/avatar2.jpg';
import avatar3 from '../../../../public/img/avatar3.jpg';
import HondaOfferButton from '../../../HondaOfferButton';
import ABS from '../../../../public/img/honda-eighth-gen/ABS.webp';
import AirFilter from '../../../../public/img/honda-eighth-gen/Air_Filter.webp';
import AirSuspension from '../../../../public/img/honda-eighth-gen/Air_Suspension_Module.webp';
import AxleAssembly from '../../../../public/img/honda-eighth-gen/Axle_Assembly_Rear.webp';
import BrakePads from '../../../../public/img/honda-eighth-gen/Brake_Pads.webp';
import CatalyticConverter from '../../../../public/img/honda-eighth-gen/Catalytic_Converter.webp';
import CylinderHead from '../../../../public/img/honda-eighth-gen/Cylinder_Head.webp';
import Distributor from '../../../../public/img/honda-eighth-gen/Distributor.webp';
import Engine from '../../../../public/img/honda-eighth-gen/Engine.webp';
import ExhaustManifold from '../../../../public/img/honda-eighth-gen/Exhaust_Manifold.webp';
import GearBox from '../../../../public/img/honda-eighth-gen/Gearbox.webp';
import Grille from '../../../../public/img/honda-eighth-gen/Grille.webp';
import Headlight from '../../../../public/img/honda-eighth-gen/Headlight.webp';
import MasterCylinderKit from '../../../../public/img/honda-eighth-gen/Master_Cylinder.webp';
import Radiator from '../../../../public/img/honda-eighth-gen/Radiator.webp';
import RearBumper from '../../../../public/img/honda-eighth-gen/Rear_Bumper_Assembly.webp';
import ReverseLight from '../../../../public/img/honda-eighth-gen/Reverse_Light.webp';
import Rim from '../../../../public/img/honda-eighth-gen/Rim.webp';
import SeatBelt from '../../../../public/img/honda-eighth-gen/Seat_Belt.webp';
import ShockAbsorber from '../../../../public/img/honda-eighth-gen/Shock_Absorber.webp';
import SideMirror from '../../../../public/img/honda-eighth-gen/Side_Mirror.webp';
import SteeringWheel from '../../../../public/img/honda-eighth-gen/Steering_Wheel.webp';
import Wheel from '../../../../public/img/honda-eighth-gen/Wheel.webp';
import MudFlap from '../../../../public/img/honda-eighth-gen/Mud_Flap.webp';

export default function Car({
  make,
  model,
  partspost,
  uniqueMakeArray,
  makeArray,
  imageMake,
  description
}) {
  const images = [
    {
      images: ABS,
      name: 'ABS',
      alt: `${make} ${model} "anti lock braking system"`,
      link:
        'https://emirates-car.com/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)'
    },
    {
      images: AirFilter,
      name: 'Air Filter',
      alt: `${make} ${model} "air filter"`,
      link: 'https://emirates-car.com/get-in-touch'
    },

    {
      images: AirSuspension,
      name: 'Air Suspension',
      alt: `${make} ${model} "air suspension"`,
      link: 'https://emirates-car.com/get-in-touch'
    },

    {
      images: AxleAssembly,
      name: 'Axle',
      alt: `${make} ${model} " axle"`,
      link:
        'https://emirates-car.com/search-by-part-name/Axle%20Assembly%20(Front,%204WD)'
    },
    {
      images: BrakePads,
      name: 'Brake Pads',
      alt: `${make} ${model} "brake pads"`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CatalyticConverter,
      name: 'Catalytic Convertor',
      alt: `${make} ${model} "catalytic convertor"`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: CylinderHead,
      name: 'Cylinder Head',
      alt: `${make} ${model} "cylinder"`,
      link: 'https://emirates-car.com/search-by-part-name/Cylinder%20Head)'
    },
    {
      images: Distributor,
      name: 'Distributor',
      alt: 'honda accord distributor',
      link: 'https://emirates-car.com/search-by-part-name/Distributor'
    },
    {
      images: Engine,
      name: 'Engine',
      alt: `${make} ${model} "engine"`,
      link: 'https://emirates-car.com/search-by-part-name/Engine%20Assembly'
    },
    {
      images: ExhaustManifold,
      name: 'Exhaust Manifold',
      alt: `${make} ${model} "exhaust system"`,
      link: 'https://emirates-car.com/search-by-part-name/Exhaust%20Manifold'
    },
    {
      images: GearBox,
      name: 'Gearbox / Transmission',
      alt: `${make} ${model} "gearbox"`,
      link:
        'https://emirates-car.com/search-by-part-name/Transmission%20Control%20Module'
    },
    {
      images: Grille,
      name: 'Grille',
      alt: `${make} ${model} " grill"`,
      link: 'https://emirates-car.com/search-by-part-name/Grille'
    },
    {
      images: Headlight,
      name: 'Headlight',
      alt: `${make} ${model} " headlight bulb"`,
      link: 'https://emirates-car.com/search-by-part-name/Headlight%20Assembly'
    },
    {
      images: MasterCylinderKit,
      name: 'Master Cylinder',
      alt: `${make} ${model} " master cylinder"`,
      link:
        'https://emirates-car.com/search-by-part-name/Master%20Cylinder%20(Clutch)'
    },
    {
      images: MudFlap,
      name: 'Mud Flap',
      alt: `${make} ${model} " mud flaps"`,
      link: 'https://emirates-car.com/get-in-touch'
    },
    {
      images: Radiator,
      name: 'Radiator',
      alt: `${make} ${model} " radiator"`,
      link: 'https://emirates-car.com/search-by-part-name/Radiator'
    },
    {
      images: RearBumper,
      name: 'Rear Bumper',
      alt: `${make} ${model}" rear bumper"`,
      link:
        'https://emirates-car.com/search-by-part-name/Bumper%20Assembly%20(Rear)'
    },
    {
      images: ReverseLight,
      name: 'Reverse Light',
      alt: `${make} ${model} " reverse light bulb"`,
      link: 'https://emirates-car.com/search-by-part-name/Reverse%20Light'
    },
    {
      images: Rim,
      name: 'Rims',
      alt: `${make} ${model} " rims for sale"`,
      link: 'https://emirates-car.com/search-by-part-name/Rim'
    },
    {
      images: SeatBelt,
      name: 'Seat Belt',
      alt: `${make} ${model} " seat belt"`,
      link: 'https://emirates-car.com/search-by-part-name/Seat%20Belt'
    },
    {
      images: ShockAbsorber,
      name: 'Shock Absorber',
      alt: `${make} ${model} " shock absorber"`,
      link: 'https://emirates-car.com/search-by-part-name/Shock%20Absorber'
    },
    {
      images: SideMirror,
      name: 'Mirror',
      alt: `${make} ${model}" mirrors"`,
      link:
        'https://emirates-car.com/search-by-part-name/Mirror%20(Rear%20View)'
    },
    {
      images: SteeringWheel,
      name: 'Steering Wheel',
      alt: `${make} ${model} " steering wheel"`,
      link: 'https://emirates-car.com/search-by-part-name/Steering%20Wheel'
    },
    {
      images: Wheel,
      name: 'Wheels',
      alt: `${make} ${model} " wheels"`,
      link: 'https://emirates-car.com/search-by-part-name/Wheel'
    }
  ];
  const [Make, setMake] = useState(make);
  const [Model, setModel] = useState(model);
  const [Email, setEmail] = useState('');
  const [Whatsappno, setWhatsappno] = useState('');
  const [Partname, setPartname] = useState('');
  const [Address, setAddress] = useState('');
  const [Name, setName] = useState('');
  const [Year, setYear] = useState('');
  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [formPartname, setFormPartname] = useState('');
  const [Code, setCode] = useState('');

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
  }, [partspost]);

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
    setMake(Make);
  }
  function handleModelChange(event) {
    setModel(Model);
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
  function handlePartChange(event) {
    setPartname(event.target.value);
  }
  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleCodeChange(event) {
    setCode(event.target.value);
  }
  function handleYearChange(event) {
    setYear(event.target.value);
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
          {`${make} - ${model} Car Auto Spare Parts Order Online in UAE from
          Dubai - Best Prices`}
        </title>
        <meta
          name="description"
          content={
            'Buy' +
            make +
            ' ' +
            model +
            '  auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket ' +
            ' in UAE'
          }
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={
            make +
            ' - ' +
            model +
            ' Car Auto Spare Parts in UAE from Dubai - Best Prices | Emirates-car.com'
          }
        />
        <meta
          name="keywords"
          content={
            make +
            ' ' +
            model +
            ' spare parts,' +
            make +
            ' ' +
            model +
            ' spare parts sharjah,' +
            make +
            ' ' +
            model +
            ' used spare parts dubai,' +
            'sharjah ' +
            make +
            ' ' +
            model +
            ' spare parts,' +
            'used ' +
            make +
            ' ' +
            model +
            ' spare parts,' +
            make +
            ' ' +
            model +
            ' car spare parts,' +
            model +
            ' auto parts,' +
            model +
            ' auto parts,' +
            make +
            ' ' +
            model +
            ' auto parts in uae '
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={
            'https://www.emirates-car.com/search-by-make/' + make + '/' + model
          }
        />
        <meta
          property="og:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your' +
            make +
            model +
            ' automobile spare parts needs - Car / Jeep / Van / Truck / Buses in Your city.'
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
            'https://www.emirates-car.com/search-by-make/' + make + '/' + model
          }
        />
        <meta
          property="twitter:title"
          content={
            make +
            ' - ' +
            model +
            ' Car Auto Spare Parts in UAE Order Online from Dubai - Best Prices | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your ' +
            make +
            ' ' +
            model +
            ' automobile spare parts needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <div className="w-3/4 xs:w-4/5 mx-auto">
        <Image
          src={`${'/img/car-logos/' + imageMake}`}
          alt={make + ' spare parts'}
          className="mx-auto"
          priority
          width={100}
          height={100}
        />
        <h1 className="text-4xl font-extrabold mx-auto my-5 xs:text-lg 2xs:text-xs">
          {make} {model} spare parts - Buy Premium High Quality Used, Genuine,
          OEM and Aftermarket from Dubai to all over UAE and World
        </h1>
        <Link
          href={`${'#makemodelform'}`}
          className="w-1/4 xs:w-4/5 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-base xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
        >
          Inquire Now
        </Link>
        <p className="text-xl font-mono text-gray-700 mx-auto xs:text-base xl:text-lg 2xs:text-xs">
          Emirates-car.com is the online Dealers specialist in {make} {model}{' '}
          and almost any car brands running on roads of UAE. We find pleasure in
          finding the best used, genuine (otherwise called OEM parts) and
          aftermarket parts for any cars. We have experienced professional who
          can find the parts at affordable and reasonable price. We deal in
          genuine honda parts and aftermarket honda parts such as engine parts,
          mechanical parts, electrical and electronic parts, body parts and
          lights, AC parts and service and maintenance parts. You can order
          Honda spare parts by simply submitting the online inquiry form{' '}
          <Link
            href="https://emirates-car.com"
            className="text-blue-500 underline hover:text-blue-900"
            target="_newtab"
          >
            here
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </p>
        <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-base xl:text-lg 2xs:text-xs px-5">
          FILL OUT THE INQUIRY FOR
          <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
            &nbsp;{make} {model}{' '}
          </nobr>
          BELOW
        </div>
        <div>
          <div
            className="flex w-full s:grid s:grid-cols-1 xs:grid xs:grid-cols-1  2xs:grid 2xs:grid-cols-1 sm:w-auto sm:mx-3 shadow-2xl xs:shadow-none 2xs:shadow-none sm:shadow-sm py-10 xs:py-5"
            id="makemodelform"
          >
            <div className="w-1/3 bg-blue-700 2xs:hidden xs:hidden sm:hidden md:hidden">
              <Slider {...settings} className="py-10 p-2">
                <div>
                  <p className="text-xl font-bold text-center">
                    <div>
                      {' '}
                      <Image
                        alt="spare parts market in uae"
                        className="rounded-full"
                        src={avatar1}
                        width={50}
                        height={50}
                      />
                    </div>
                    Jamal
                  </p>
                  <p className="text-sm text-center pt-5 text-white">
                    Honestly a genuine dealing it was. The rate was so genuine.
                    My order received on time.
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
                    Got my Gearbox, AC Compressor, Battery, Radiator at best
                    deal! It was a very good rate and dealing.
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
                  {make} {model} spare parts
                </h1>
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
            <div className="w-2/3 xs:w-full s:w-full md:w-full 2xs:w-full sm:w-full">
              <p className="text-base font-medium text-gray-500 xs:text-base md:text-base p-8 ">
                Searching for {make} - {model} auto spare parts in U.A.E? Fill
                out the inquiry down below.
              </p>
              <form
                onSubmit={handleSubmit}
                className=" px-8 py-8 xs:py-3 xs:px-4 2xs:px-4 sm:px-4"
                method="POST"
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
                <div className="flex flex-wrap mb-2">
                  <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="model"
                    >
                      Year
                    </label>
                    <div className="relative">
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        id="name"
                        type="text"
                        placeholder="Year"
                        onChange={handleYearChange}
                        value={Year}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mb-2">
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

                <div className="flex flex-wrap mb-2">
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
                <div className="flex flex-wrap mb-2">
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

                <div className="flex flex-wrap mb-2">
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
                      placeholder="Mail ID"
                      onChange={handleEmailChange}
                      value={Email}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap">
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

                <div className="flex flex-wrap mb-2">
                  <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
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

                <div className="flex flex-wrap mb-2">
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
                    href={`${'./privacy-policy'}`}
                    className="underline"
                    target="_newtab"
                  >
                    Privacy policy
                  </Link>
                  &nbsp;
                  <Link
                    href={`${'./terms-and-condition'}`}
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
        <p
          className="text-xl font-mono text-gray-700 mx-auto my-5"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <div>
          <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
            <main className="xs:mx-auto 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
              <div className="container place-content-center py-6">
                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10 ">
                  <h3 className="text-center font-bold text-4xl">
                    Spare parts for All {make} Models:
                  </h3>
                  <div className="grid grid-cols-4 xs:grid xs:grid-cols-1  sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 ">
                    {uniqueMakeArray.map(post => (
                      <div key={post.id}>
                        <Link
                          href={`${'/search-by-make/[make]/[model]'}`}
                          as={`${'/search-by-make/' +
                            post.make +
                            '/' +
                            post.model}`}
                          passHref
                        >
                          <main className=" xs:text-center font-mono text-blue-800 underline hover:text-blue-700 focus:text-blue-700">
                            {post.make}&nbsp;{post.model.replace('%2F', '/')}
                            &nbsp;Parts
                          </main>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
                  <h3 className="text-base font-medium text-gray-500 p-5">
                    We deal with any country auto spare parts including
                    japanese, american, german, chinese, indian, Korean, french,
                    british in UAE. We also operate in main cities such as
                    dubai, sharjah, abu dhabi, ajman, al quoz, jumeirah, deira
                    etc. You can check our catalogue at{' '}
                    <Link
                      href={`${'https://emirates-car.com/search-by-part-name'}`}
                      className="text-blue-400 underline"
                    >
                      https://emirates-car.com/search-by-part-name
                    </Link>
                    . We provide auto spare parts for any vehicles including :
                    <ul className="list-disc">
                      <li>New auto spare parts in uae</li>
                      <li>Used auto spare parts in uae</li>
                      <li>Genuine auto spare parts in uae</li>
                      <li>Aftermarket auto spare parts in uae</li>
                    </ul>
                  </h3>
                </div>
                <p className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs text-center py-5 xs:hidden sm:hidden s:hidden 2xs:hidden">
                  WE ALSO DEAL IN OTHER BRANDS
                </p>
                <div className="grid grid-cols-12 md:grid md:grid-cols-7 sm:ml-0 xs:hidden sm:hidden s:hidden 2xs:hidden gap-1 mx-5 2xs:mx-4 md:mx-5 my-10">
                  {makeArray.map(p => (
                    <div key={p.id}>
                      <Link
                        href={`${'/search-by-make/[make]'}`}
                        as={`${'/search-by-make/' + p.make}`}
                        passHref
                      >
                        <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                          <div className="flex justify-center">
                            <Image
                              alt={p.make + ' parts'}
                              src={'/img/car-logos/' + p.img}
                              className="object-scale-down"
                              priority
                              height={70}
                              width={70}
                            />
                            <br />
                          </div>
                          <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                            {p.make.toUpperCase()}
                          </p>
                        </main>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>

          <div className="d-flex py-10 xs:pt-5 mx-8 xs:mx-5">
            <div>
              <h3
                className="text-3xl font-extrabold mx-auto my-5"
                id="oemvsaftermarket"
              >
                Team Genuine {make} {model}part VS Team Aftermarket {make}{' '}
                {model} part
              </h3>
              <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
                {make} {model} aftermarket parts are better to buy for many
                reasons:
              </p>
              <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
                <li>It is more affordable than genuine parts</li>
                <li>Some genuine parts are similar to genuine parts itself.</li>
                <li>
                  It is readily available because it is equivalently
                  manufactured to genuine parts.
                </li>
                <li>
                  Aftermarket parts can have more manufacturers than genuine
                  parts which can be only from one main manufacturer
                </li>
              </ol>
              <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
                {make} {model} Genuine parts are better to buy for many reasons:
              </p>
              <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
                <li>
                  Aftermarket parts are not regularized or standardized because
                  it is manufactured as a duplicate to genuine parts.
                </li>
                <li>
                  Genuine parts are best in quality than aftermarket parts.{' '}
                </li>
                <li>
                  Genuine parts have warranty unlike aftermarket parts which has
                  no Warranty
                </li>
              </ol>
              <p className="text-xl font-mono text-gray-700 mx-auto">
                However, if you weigh your pros and cons and which kind of parts
                you really need, you can come to the best conclusion yourself.
                And we can serve you with both kind of parts.
              </p>
            </div>
          </div>

          <div className="d-flex justify-center text-center py-10 xs:pt-5 mx-8 xs:mx-5">
            <div>
              <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
                Availability of {make} parts in UAE:
              </p>
              <div className="grid grid-cols-5 xs:grid-cols-1 gap-3 mx-auto p-5 border-2 border-gray-500">
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Dubai"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp; DUBAI
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="/search-by-cities-in-uae/Sharjah"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp; SHARJAH
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="search-by-cities-in-uae/Ajman"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;AJMAN
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="/search-by-cities-in-uae/Ras%20al%20Khaimah"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;RAS AL KHAIMAH
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Al%20Quoz%20(Dubai)"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;Al QUOZ
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Abu%20Dhabi"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;ABU DHABI
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Deira%20(Dubai)"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    &nbsp;DEIRA
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
            <Link
              href={`"/search-by-make/${make}"`}
              className="text-blue-500 underline hover:text-blue-900"
            ></Link>
            other honda models, Infiniti models, BMW models, Audi models and
            many other brands. Visit to search parts you need.
          </div>
          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
              Special Deals on the following parts for {make} {model}
            </p>
            <div className="grid grid-cols-5 gap-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
              {images.map(i => (
                <div key={i.name} className="border-2 p-5 relative">
                  <sup className="absolute top-0 right-0 text-sm font-bold text-white bg-red-600 rounded-l-xl rounded-r-xl p-1">
                    Sale!
                  </sup>
                  <div className="h-50">
                    <h1 className="text-xl font-bold font-sans">{i.name}</h1>
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
                    title={{ make } + ' ' + { model } + i.name}
                    className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                  >
                    Inquire Now
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center text-xl underline font-bold text-red-600">
            <HondaOfferButton />
          </div>
          <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
            {/*Parts list */}
            <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 sm:mt-5 lg:mx-2 ">
              <div className="xs:grid xs:grid-cols-1 text-gray-900 font-bold 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5 font-sans">
                SEARCH BY PART NAME
              </div>
              {partspost.map(post => (
                <div key={post.id}>
                  <Link
                    href={`${'/search-by-part-name/[parts]'}`}
                    as={`${'/search-by-part-name/' + post.parts}`}
                    title={make + ' ' + model + ' ' + post.parts}
                    passHref
                  >
                    <p className="text-gray-700 hover:text-blue-700 focus:text-blue-700 text-xl xs:text-lg font-mono mx-auto my-5 xs:my-0">
                      <i className="far fa-compass"></i>
                      {' ' + make} {' ' + model} {post.parts}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/palms`);
  const data = await res.json();
  const paths = data.map(post => ({
    params: { make: post.make.toString(), model: post.model.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { make, model } = params;

  const response = await fetch(`https://rozy.vercel.app/api/grooves/${make}`);
  const dat = await response.json();
  let uniqueMakeArray = [
    ...new Map(dat.map(item => [item['model'], item])).values()
  ];
  const re = await fetch(
    `https://rozy.vercel.app/api/grooves/${make}/${model}`
  );
  const reDat = await re.json();
  let uniqueMkeArray = [
    ...new Map(reDat.map(item => [item['img'], item])).values()
  ];
  const imageMake = uniqueMkeArray.map(function(i) {
    return i.img;
  });

  let uniqueDescriptionArray = [
    ...new Map(reDat.map(item => [item['description'], item])).values()
  ];
  const description = uniqueDescriptionArray.map(function(i) {
    return i.description;
  });

  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let makeArray = [...new Map(data.map(item => [item['make'], item])).values()];

  const partsres = await fetch(`https://rozy.vercel.app/api/parts`);
  const partspost = await partsres.json();

  return {
    props: {
      make,
      model,
      partspost,
      uniqueMakeArray,
      makeArray,
      imageMake: imageMake || null,
      description
    }
  };
}
