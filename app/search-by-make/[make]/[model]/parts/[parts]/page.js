import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SearchModel from '../../../../../SearchModel';
import FormComponent from '../../../../../FormComponent';
import { getCity, getFormModel, getParts } from '../../../../../page';
import Social from '../../../../../Social';
import ABS from '../../../../../../public/img/honda-eighth-gen/Anti_Lock_Braking_System.webp';
import AirFilter from '../../../../../../public/img/honda-eighth-gen/Air_Filter.webp';
import AirSuspension from '../../../../../../public/img/honda-eighth-gen/Air_Suspension_Module.webp';
import AxleAssembly from '../../../../../../public/img/honda-eighth-gen/Axle_Assembly_Rear.webp';
import BrakePads from '../../../../../../public/img/honda-eighth-gen/Brake_Pads.webp';
import CatalyticConverter from '../../../../../../public/img/honda-eighth-gen/Catalytic_Converter.webp';
import CylinderHead from '../../../../../../public/img/honda-eighth-gen/Cylinder_Head.webp';
import Distributor from '../../../../../../public/img/honda-eighth-gen/Distributor.webp';
import Engine from '../../../../../../public/img/honda-eighth-gen/Engine.webp';
import ExhaustManifold from '../../../../../../public/img/honda-eighth-gen/Exhaust_Manifold.webp';
import GearBox from '../../../../../../public/img/honda-eighth-gen/Gearbox.webp';
import Grille from '../../../../../../public/img/honda-eighth-gen/Grille.webp';
import Headlight from '../../../../../../public/img/honda-eighth-gen/Headlight.webp';
import MasterCylinderKit from '../../../../../../public/img/honda-eighth-gen/Master_Cylinder.webp';
import Radiator from '../../../../../../public/img/honda-eighth-gen/Radiator.webp';
import RearBumper from '../../../../../../public/img/honda-eighth-gen/Rear_Bumper_Assembly.webp';
import ReverseLight from '../../../../../../public/img/honda-eighth-gen/Reverse_Light.webp';
import Rim from '../../../../../../public/img/honda-eighth-gen/Rim.webp';
import SeatBelt from '../../../../../../public/img/honda-eighth-gen/Seat_Belt.webp';
import ShockAbsorber from '../../../../../../public/img/honda-eighth-gen/Shock_Absorber.webp';
import SideMirror from '../../../../../../public/img/honda-eighth-gen/Side_Mirror.webp';
import SteeringWheel from '../../../../../../public/img/honda-eighth-gen/Steering_Wheel.webp';
import Wheel from '../../../../../../public/img/honda-eighth-gen/Wheel.webp';
import MudFlap from '../../../../../../public/img/honda-eighth-gen/Mud_Flap.webp';
import HondaOfferButton from '../../../../../HondaOfferButton';
import Contents from '../../../../../Contents';
import Footer from "../../../../../footer";

export async function generateMetadata({ params }) {
  const { make, model, parts } = params;
  return {
    title: `${make} ${decodeURIComponent(model)} ${decodeURIComponent(
      parts
    )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
    description: `Buy ${make} - ${decodeURIComponent(
      model
    )} ${decodeURIComponent(
      parts
    )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
    openGraph: {
      images: '/favicon.png',
      title: `${make} - ${decodeURIComponent(model)} ${decodeURIComponent(
        parts
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
      description: `Buy ${make} - ${decodeURIComponent(
        model
      )} ${decodeURIComponent(
        parts
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      url:
        'https://emirates-car.com/search-by-make/' +
        make +
        model +
        '/' +
        'parts' +
        '/' +
        parts,
      image: 'https://emirates-car.com/img/car-spare-parts.png',
      siteName: 'Emirates car Auto spare Parts',
      images: [
        {
          url: 'https://emirates-car.com/icon-192x192.png',
          width: 192,
          height: 192
        },
        {
          url: 'https://emirates-car.com/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'car parts'
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${make} - ${decodeURIComponent(model)} ${decodeURIComponent(
        parts
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
      url: 'https://emirates-car.com/search-by-make/' + make + '/' + model,
      description: `Buy ${make} - ${decodeURIComponent(
        model
      )} ${decodeURIComponent(
        parts
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      images: ['https://emirates-car.com/favicon.png']
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/icons/icon-96x96.png',
      apple: '/icons/icon-192x192.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/icon-152x152.png'
      }
    },
    alternates: {
      canonical: `https://emirates-car.com/search-by-make/${make}/${model}/parts/${parts}`
    },
    category: `${make} ${decodeURIComponent(model)} ${decodeURIComponent(
      parts
    )} parts`,
    keywords: `${make} ${decodeURIComponent(model)} ${decodeURIComponent(
      parts
    )} ${decodeURIComponent(
      parts
    )} sharjah, used ${make} ${model} spare parts, ${make} ${decodeURIComponent(
      model
    )} ${decodeURIComponent(parts)} parts online, ${make} ${decodeURIComponent(
      model
    )} spare parts near me, ${make} ${decodeURIComponent(
      model
    )} ${decodeURIComponent(parts)}, ${make} ${decodeURIComponent(
      model
    )} distributor, ${make} ${decodeURIComponent(
      model
    )} shock absorber, ${make} ${decodeURIComponent(
      model
    )} spark plugs, ${make} ${decodeURIComponent(
      model
    )} fuse box, ${make} ${decodeURIComponent(
      model
    )} radiator, ${make} ${decodeURIComponent(model)} fuel pump`
  };
}

async function getMakeImage(make, model) {
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
  return imageMake;
}
async function getModel(make) {
  const res = await fetch(`https://rozy.vercel.app/api/grooves/${make}`);
  const data = await res.json();

  let uniqueObjectArray = [
    ...new Map(data.map(item => [item['model'], item])).values()
  ];
  return uniqueObjectArray;
}
export default async function Parts({ params }) {
  const { make, model, parts } = params;
  const carmodel = await getModel(make);
  const imageMake = await getMakeImage(make, model);
  const partspost = await getParts();
  const cities = await getCity();
  const modelsform = await getFormModel();
  const images = [
    {
      images: ABS,
      name: `${make} ABS`,
      alt: `${make} anti lock braking system`,
      link: '/search-by-part-name/Anti-Lock%20Brake%20Control%20Module%20(ABS)'
    },
    {
      images: AirFilter,
      name: `${make} Air Filter`,
      alt: `${make} air filter`,
      link: '/get-in-touch'
    },
    {
      images: AirSuspension,
      name: `${make} Air Suspension`,
      alt: `${make} Air suspension`,
      link: '/get-in-touch'
    },
    {
      images: AxleAssembly,
      name: `${make} Axle`,
      alt: `${make} axle`,
      link: '/search-by-part-name/Axle%20Assembly%20(Front,%204WD)'
    },
    {
      images: BrakePads,
      name: `${make} Brake Pads`,
      alt: `${make} brake pads`,
      link: '/get-in-touch'
    },
    {
      images: CatalyticConverter,
      name: `${make} Catalytic Convertor`,
      alt: `${make} catalytic convertor`,
      link: '/get-in-touch'
    },
    {
      images: CylinderHead,
      name: `${make} Cylinder Head`,
      alt: `${make} cylinder`,
      link: '/search-by-part-name/Cylinder%20Head)'
    },
    {
      images: Distributor,
      name: `${make} Distributor`,
      alt: `${make} distributor`,
      link: '/search-by-part-name/Distributor'
    },
    {
      images: Engine,
      name: `${make} Engine`,
      alt: `${make} Engine`,
      link: '/search-by-part-name/Engine%20Assembly'
    },
    {
      images: ExhaustManifold,
      name: `${make} Exhaust Manifold`,
      alt: `${make} exhaust system`,
      link: '/search-by-part-name/Exhaust%20Manifold'
    },
    {
      images: GearBox,
      name: `${make} Gearbox / Transmission`,
      alt: `${make} gearbox`,
      link: '/search-by-part-name/Transmission%20Control%20Module'
    },
    {
      images: Grille,
      name: `${make} grill`,
      alt: `${make} grill`,
      link: '/search-by-part-name/Grille'
    },
    {
      images: Headlight,
      name: `${make} Headlight`,
      alt: `${make} headlight bulb`,
      link: '/search-by-part-name/Headlight%20Assembly'
    },
    {
      images: MasterCylinderKit,
      name: `${make} Master Cylinder`,
      alt: `${make} master cylinder`,
      link: '/search-by-part-name/Master%20Cylinder%20(Clutch)'
    },
    {
      images: MudFlap,
      name: `${make} Mud Flaps`,
      alt: `${make} mud flaps`,
      link: '/get-in-touch'
    },
    {
      images: Radiator,
      name: `${make} Radiator`,
      alt: `${make} radiator`,
      link: '/search-by-part-name/Radiator'
    },
    {
      images: RearBumper,
      name: `${make} Rear Bumper`,
      alt: `${make} rear bumper`,
      link: '/search-by-part-name/Bumper%20Assembly%20(Rear)'
    },
    {
      images: ReverseLight,
      name: `${make} Reverse Light`,
      alt: `${make} reverse light`,
      link: '/search-by-part-name/Reverse%20Light'
    },
    {
      images: Rim,
      name: `${make} Rims`,
      alt: `${make} Rims for sale`,
      link: '/search-by-part-name/Rim'
    },
    {
      images: SeatBelt,
      name: `${make} Seat Belt`,
      alt: `${make} seat belt`,
      link: '/search-by-part-name/Seat%20Belt'
    },
    {
      images: ShockAbsorber,
      name: `${make} Shock Absorber`,
      alt: `${make} shock absorber`,
      link: '/search-by-part-name/Shock%20Absorber'
    },
    {
      images: SideMirror,
      name: `${make} Mirror`,
      alt: `${make} mirrors`,
      link: '/search-by-part-name/Mirror%20(Rear%20View)'
    },
    {
      images: SteeringWheel,
      name: `${make} Steering Wheel`,
      alt: `${make} steering wheel`,
      link: '/search-by-part-name/Steering%20Wheel'
    },
    {
      images: Wheel,
      name: `${make} wheels`,
      alt: `${make} wheels`,
      link: '/search-by-part-name/Wheel'
    }
  ];
  return (
    <div>
      <div className="d-flex justify-center pt-10 xs:pt-5 mx-8">
        <Image
          src={'/img/car-logos/' + imageMake}
          alt={make + ' spare parts'}
          className="mx-auto"
          priority
          width={100}
          height={100}
        />
        <h1 className="block text-3xl font-bold sm:text-4xl xs:text-4xl xxs:text-4xl md:text-6xl lg:text-6xl lg:leading-tight dark:text-white text-center">
          <span className="block">
            {make} {model} {decodeURIComponent(parts)} spare parts&nbsp;
            <span className="block text-blue-600 xl:inline">in UAE</span>
          </span>
        </h1>
        <p className="w-3/4 md:w-4/5 mx-auto xs:w-full xs:mx-1 xxs:w-full xxs:mx-1 sm:w-full sm:mx-1 mt-3 text-lg font-normal">
          Buy Premium High Quality {decodeURIComponent(parts)} for {make}{' '}
          {model} Used, Genuine, OEM and Aftermarket parts in Dubai, Sharjah,
          Ajman, Ras al khaimah, Abu dhabi and all over the world. We are
          dealers in Auto Spare parts in UAE. If you are in need of any Spare
          parts Submit your inquiry now.
        </p>
        <Link
          href="#myForm"
          className="w-1/4 xs:w-4/5 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-base xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
          title={decodeURIComponent(parts) + make + ' ' + model}
        >
          Inquire Now
        </Link>
        <p className="text-xl font-mono text-gray-700 mx-auto xs:text-base xl:text-lg 2xs:text-xs">
          Emirates-car.com is the online Dealers specialist in{' '}
          {decodeURIComponent(parts)} for {make} {decodeURIComponent(model)} and
          almost any car brands running on roads of UAE. We find pleasure in
          finding the best used, genuine (otherwise called OEM parts) and
          aftermarket parts for any cars. We have experienced professional who
          can find the parts at affordable and reasonable price. We deal in
          genuine honda parts and aftermarket honda parts such as engine parts,
          mechanical parts, electrical and electronic parts, body parts and
          lights, AC parts and service and maintenance parts. You can order
          Honda spare parts by simply submitting the online inquiry form{' '}
          <Link
            href="/"
            target="_newtab"
            className="text-blue-500 underline hover:text-blue-900"
            title={decodeURIComponent(parts) + make + ' ' + model + ' parts'}
          >
            here
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </p>
        <div>
          <div className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs xxs:text-xs mx-10 xs:ml-3 underline pb-3">
            <nobr className="text-blue-400 no-underline">
              <i className="fal fa-car-garage"></i>
              Current path:&nbsp;&nbsp;
            </nobr>
            Home{'/'}
            {make}
            {'/'}
            {model}
            {'/'}
            {parts}
          </div>

          <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 md:grid md:grid-cols-1 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
            <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 text-red-600">
              Want to Get Prices for {make} {model} {decodeURIComponent(parts)}{' '}
              spare parts uae online? Submit your inquiry here
            </p>
            <FormComponent formsData={modelsform} postFilter={partspost} />
            <div className="uppercase bg-blue-200 font-serif text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto xxs:w-auto s:w-auto s:text-2xl xxs:text-2xl p-3">
              <Social />
              <div>
                <span>
                  <Link
                    href="/search-by-part-name"
                    className="underline hover:text-blue-500 xs:text-sm"
                  >
                    {' '}
                    SEARCH BY PART NAME
                  </Link>{' '}
                  &nbsp;|
                </span>
                <span>
                  <Link
                    href="/search-by-cities-in-uae"
                    className="underline hover:text-blue-500 xs:text-sm"
                  >
                    SEARCH BY CITY
                  </Link>{' '}
                  &nbsp;|
                </span>
                <span>
                  <Link
                    href="/search-by-make"
                    className="underline hover:text-blue-500 xs:text-sm"
                  >
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
            Why choose {make} {model} genuine {decodeURIComponent(parts)} parts
            ?
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
            {make} {model}
            {decodeURIComponent(parts)} Genuine parts are better to buy for many
            reasons:
          </p>
          <p className="text-xl font-mono text-gray-700 mx-auto">
            However, if you weigh your pros and cons and which kind of parts you
            really need, you can come to the best conclusion yourself. And we
            can serve you with both kind of parts.
          </p>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
            Availability of {make} {model} {decodeURIComponent(parts)} parts in
            UAE:
          </p>
          <h3
            className="text-3xl font-extrabold mx-auto my-5"
            id="oemvsaftermarket"
          >
            Why choose {make} {model} {decodeURIComponent(parts)} aftermarket
            parts ?
          </h3>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            {make} {model} {decodeURIComponent(parts)} aftermarket parts are
            better to buy for many reasons:
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
          <Contents />
          <SearchModel make={make} car={carmodel} />
          <h6 className="text-3xl font-extrabold mx-auto my-5 xs:text-xl md:text-2xl text-center">
            {decodeURIComponent(parts)} for All {make} models
          </h6>
          <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-2  sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 xxs:grid xxs:grid-cols-3 gap-1 xxs:mx-4 md:ml-11 mr-3 my-10 ">
            {carmodel.map((post, i) => (
              <div key={i}>
                <Link
                  href="/search-by-make/[make]/[model]"
                  as={
                    '/search-by-make/' +
                    post.make +
                    '/' +
                    post.model +
                    '/' +
                    'parts' +
                    '/' +
                    parts
                  }
                  title={post.make + post.model + ' spare parts'}
                >
                  <main className="border border-blue-800 h-full p-3 ">
                    <p className="text-center text-lg xs:text-xl xs:text-center font-mono text-blue-800 underline hover:text-gray-800 focus:text-gray-800 font-bold ">
                      {make +
                        ' ' +
                        post.model.replace('%2F', '/') +
                        ' ' +
                        decodeURIComponent(parts)}
                    </p>
                  </main>
                </Link>
              </div>
            ))}{' '}
          </div>
        </div>
        <div className="text-center mt-2 text-red-400 text-sm xs:text-xs py-5">
          **Model not found above?
          <Link href="/get-in-touch">
            <nobr className="text-blue-500 text-sm underline">
              {' '}
              Get in touch with us {'>>'}**
            </nobr>
          </Link>{' '}
        </div>
        <div className="text-center">
          <HondaOfferButton />
        </div>
        <div className="text-xl font-mono text-gray-700 mx-auto xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-5">
          Emirates-car.com is the online Dealers specialist in {make} spare
          parts. We find pleasure is finding the best genuine (otherwise called
          OEM parts) and aftermarket parts for any cars. We have experienced
          professional who can find the parts at affordable and reasonable
          price. We deal in genuine {make}
          parts and aftermarket {make} parts such as engine parts, mechanical
          parts, electrical and electronic parts, body parts and lights, AC
          parts and service and maintenance parts. You can order {make} spare
          parts by simply submitting the online inquiry form{' '}
          <Link
            href="/"
            className="underline text-blue-500 hover:text-blue-900"
            title="auto spare parts"
          >
            here
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </div>
        <h6 className="text-xl font-mono text-gray-700 mx-auto font-extrabold xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-10">
          Availability of {make} {model} {decodeURIComponent(parts)} in UAE:
        </h6>
        <div className="grid grid-cols-4 xs:grid-cols-1 gap-3 p-5 border-2 border-gray-500 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
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
                    className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                    title={make + i.name}
                  >
                    Inquire Now
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="/get-in-touch"
              target="_newtab"
              className="w-1/4 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 xxs:text-sm xxs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
            >
              View All Parts
            </Link>
          </div>
        </div>
        <h6 className="text-3xl font-extrabold mx-auto my-5 xs:text-xl md:text-2xl">
          Shop for {make} {model} performance parts, {make} {model} genuine parts,{' '}
          {make} {model}
          aftermarket parts, {make} {model} body parts, {make} {model} mechanical
          parts, {make} {model}
          electrical parts, {make} {model} engine parts, {make} {model}{' '}
          replacement parts, {make} {model}
          AC parts and more
        </h6>
        <div className="grid grid-cols-3 xs:grid-cols-1">
          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} {model} Engine parts
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
                <Link
                  href="/search-by-part-name/Crankshaft"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
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
              {make} {model} Mechanical parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link
                  href="/search-by-part-name/Engine%20Assembly"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
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
              {make} {model} Body Parts
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
              {make} {model} Electrical Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link
                  href="/search-by-part-name/Spark%20Plug"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Spark Plug
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Alternator"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Alternator
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/Battery"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Battery
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
                  href="/get-in-touch"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Many more...
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              {make} {model} AC Parts
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
                <Link
                  href="/search-by-part-name/AC%20Condenser"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  AC Condenser
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/AC%20Selector"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  AC Selector
                </Link>
              </li>
              <li>
                <Link
                  href="/search-by-part-name/AC%20Controls"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  AC Controls
                </Link>
              </li>
              <li>
                <Link
                  href="/get-in-touch"
                  className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                >
                  Many more...
                </Link>
              </li>
            </ol>
          </div>
        </div>
        <div className="place-content-center ">
          <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center">
            List of Genuine and Aftermarket {make} {model} spare parts in UAE
          </p>
          <div className="grid grid-cols-5 gap-2 s:grid-cols-1 xs:grid-cols-1 md:grid-cols-3 font-medium text-gray-500 p-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
            {partspost.map((p, i) => (
              <div key={i}>
                <Link
                  href={
                    '/search-by-make/[make]/[model]' +
                    '/' +
                    'parts' +
                    '/' +
                    '[parts]'
                  }
                  as={'/search-by-make/' + make + '/' + model + '/' + p.parts}
                  className="text-blue-800 hover:text-gray-800 underline"
                  title={p.parts}
                >
                  {make + ' ' + model + ' ' + p.parts + ' parts'}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="xs:grid xs:grid-cols-1 xxs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-black font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg xxs:text-2xl px-5  text-justify font-sans">
          {make} {model} {decodeURIComponent(parts)} Onine in UAE - Order Now and
          get best Quote prices !
        </div>
        <div className="grid grid-cols-4 xs:grid xs:grid-cols-1 xxs:w-full sm:w-full md:w-full xxs:grid xxs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 xs:text-xs xl:text-lg xxs:text-xs px-5 font-sans xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 xxs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
          {cities.map((post, i) => (
            <div key={i}>
              <Link
                href="/search-by-cities-in-uae/[city]"
                as={'/search-by-cities-in-uae/' + post.city}
                title={make + ' spare parts ' + post.city}
              >
                <p className="text-base hover:text-gray-800 focus:text-gray-800 border border-gray-700  text-blue-800 m-2 p-2">
                  <i className="far fa-compass"></i>&nbsp;
                  {decodeURIComponent(parts)} in{post.city}{' '}
                </p>
              </Link>
            </div>
          ))}{' '}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
