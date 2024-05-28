import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HondaOfferButton from '../../../../../HondaOfferButton';
import ABS from '../../../../../../public/img/honda-eighth-gen/ABS.webp';
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
import FormComponent from '../../../../../FormComponent';
import Footer from '../../../../../footer';
import { getFormModel, getParts } from '../../../../../page';

async function getPartsData(parts) {
  const res = await fetch(`https://rozy.vercel.app/api/parts/${parts}`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data;
}
async function getGrooves(make, model, year) {
  const res = await fetch(
    `https://rozy.vercel.app/api/grooves/${make}/${model}/${year}`,
    { cache: 'no-store' }
  );
  const data = await res.json();
  return data;
}
async function getMakeImage(make, model) {
  const re = await fetch(
    `https://rozy.vercel.app/api/grooves/${make}/${model}`,
    { cache: 'no-store' }
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
async function getYear(make, model) {
  const response = await fetch(
    `https://rozy.vercel.app/api/grooves/${make}/${model}`
  );
  const dat = await response.json();
  let uniqueYearArray = [
    ...new Map(dat.map(item => [item['year'], item])).values()
  ];
  return uniqueYearArray;
}
async function getDescription(make, model, year) {
  const re = await fetch(
    `https://rozy.vercel.app/api/grooves/${make}/${model}/${year}`,
    { cache: 'no-store' }
  );
  const reDat = await re.json();
  let uniqueDescriptionArray = [
    ...new Map(reDat.map(item => [item['description'], item])).values()
  ];
  const description = uniqueDescriptionArray.map(function(i) {
    return i.description;
  });
}
async function getModel(make, model) {
  const response = await fetch(`https://rozy.vercel.app/api/grooves/${make}`, {
    cache: 'no-store'
  });
  const dat = await response.json();
  let uniqueMakeArray = [
    ...new Map(dat.map(item => [item['model'], item])).values()
  ];
  return uniqueMakeArray;
}
async function getMake() {
  const resp = await fetch(`https://rozy.vercel.app/api/grooves`, {
    cache: 'no-store'
  });
  const data = await resp.json();
  let makeArray = [...new Map(data.map(item => [item['make'], item])).values()];
  return makeArray;
}

export default async function Parts({ params }) {
  const { make, model, year, parts } = params;
  const imageMake = await getMakeImage(make, model);
  const description = await getDescription(make, model, year);
  const uniqueMakeArray = await getModel(make);
  const makeArray = await getMake();
  const partsposts = await getParts();
  const modelsform = await getFormModel();
  const yearData = await getYear(make, model);
  const partspost = await getPartsData(parts);
  const getGroovesData = await getGrooves(make, model, year);

  const imgpartspost = await partspost.img;

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
  return (
    <div>
      <div className="d-flex justify-center pt-10 xs:pt-5 mx-8">
        <Image
          src={'/img/car-logos/' + imageMake}
          alt={make + ' spare parts'}
          className="mx-auto"
          priority
          width={150}
          height={150}
        />
        <h1 className="text-4xl font-extrabold mx-auto my-5 xs:text-lg 2xs:text-xs ">
          {decodeURIComponent(parts)} for {year} {make}{' '}
          {decodeURIComponent(model)} - Buy Premium High Quality Used, Genuine/OEM and Aftermarket from Dubai dealers to Dubai, Sharjah, Abu dhabi,
          Ras al Khaimah and Ajman and World
        </h1>
        <Link
          href="#myForm"
          className="w-1/4 xs:w-4/5 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-base xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
          title={'spare parts for ' + make + ' ' + model}
        >
          Inquire Now
        </Link>
        <p className="text-xl font-mono text-gray-700 mx-auto xs:text-base xl:text-lg 2xs:text-xs">
          Emirates-car.com is the online Dealers specialist in{' '}
          {decodeURIComponent(parts)} for {make} {decodeURIComponent(model)}{' '}
          {year} and almost any car brands running on roads of UAE. We find
          pleasure in finding the best used, genuine (otherwise called OEM
          parts) and aftermarket parts for any cars. We have experienced
          professional who can find the parts at affordable and reasonable
          price. We deal in genuine honda parts and aftermarket honda parts such
          as engine parts, mechanical parts, electrical and electronic parts,
          body parts and lights, AC parts and service and maintenance parts. You
          can order Honda spare parts by simply submitting the online inquiry
          form{' '}
          <Link
            href="https://emirates-car.com"
            target="_newtab"
            className="text-blue-800 underline hover:text-blue-900"
            title={make + ' ' + model + ' parts'}
          >
            here
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </p>
        <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-base xl:text-lg 2xs:text-xs px-5">
          FILL OUT THE INQUIRY FOR &nbsp;
          <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
            {decodeURIComponent(parts)} for &nbsp;{year} {make}{' '}
            {decodeURIComponent(model)}{' '}
          </nobr>
          BELOW
          <FormComponent formsData={modelsform} postFilter={partsposts} />
        </div>
        <p
          className="text-xl font-mono text-gray-700 mx-auto my-5"
          dangerouslySetInnerHTML={{ __html: description || '' }}
        ></p>
        <div>
          <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
            <main className="xs:mx-auto 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
              <div className="container place-content-center py-6">
                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10 ">
                  <h3 className="text-center font-bold text-4xl">
                    {decodeURIComponent(parts)} for All {make} Models:
                  </h3>
                  <div className="grid grid-cols-4 xs:grid xs:grid-cols-1  sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 ">
                    {uniqueMakeArray.map((post, i) => (
                      <div key={i}>
                        <Link
                          href="https://emirates-car.com/search-by-make/[make]/[model]"
                          as={
                            'https://emirates-car.com/search-by-make/' +
                            post.make +
                            '/' +
                            post.model
                          }
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
                <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10 ">
                  <h3 className="text-center font-bold text-4xl">
                    Search your {decodeURIComponent(parts)} for {make} {decodeURIComponent(model)}{' '}
                    parts by Years
                  </h3>
                  <div className="grid grid-cols-4 xs:grid xs:grid-cols-1  sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 ">
                    {yearData.map((post, i) => (
                      <div key={i}>
                        <Link
                          href="https://emirates-car.com/search-by-make/[make]/[model]"
                          as={
                            'https://emirates-car.com/search-by-make/' +
                            post.make +
                            '/' +
                            post.model +
                            '/' +
                            post.year
                          }
                        >
                          <main className=" xs:text-center font-mono text-blue-800 underline hover:text-blue-700 focus:text-blue-700">
                            {post.make}&nbsp;{post.model.replace('%2F', '/')}
                            &nbsp;{post.year}
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
                      href="https://emirates-car.com/search-by-part-name"
                      className="text-blue-400 underline"
                      title={make + ' ' + model}
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
                <h3 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs text-center py-5 xs:hidden sm:hidden s:hidden 2xs:hidden">
                  WE ALSO DEAL IN OTHER BRANDS
                </h3>
                <div className="grid grid-cols-12 md:grid md:grid-cols-7 sm:ml-0 xs:hidden sm:hidden s:hidden 2xs:hidden gap-1 mx-5 2xs:mx-4 md:mx-5 my-10">
                  {makeArray.map((p, i) => (
                    <div key={i}>
                      <Link
                        href="https://emirates-car.com/search-by-make/[make]"
                        as={'https://emirates-car.com/search-by-make/' + p.make}
                        title={p.make + ' spare parts'}
                      >
                        <main className="border h-full  hover:border-blue-900 py-3 bg-gray-300">
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
                          <p className="text-xs text-center font-medium hover:text-gray-800">
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
                Team Genuine {make} {decodeURIComponent(model)}part VS Team
                Aftermarket {make} {decodeURIComponent(model)} part
              </h3>
              <h3 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
                {make} {decodeURIComponent(model)} aftermarket parts are better
                to buy for many reasons:
              </h3>
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
              <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
                {make} {decodeURIComponent(model)} Genuine parts are better to
                buy for many reasons:
              </h6>
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
              <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
                Availability of {make} parts in UAE:
              </h6>
              <div className="grid grid-cols-5 xs:grid-cols-1 gap-3 mx-auto p-5 border-2 border-gray-500">
                <div>
                  <Link
                    href="https://emirates-car.com/search-by-cities-in-uae/Dubai"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                     DUBAI
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="https://emirates-car.com/search-by-cities-in-uae/Sharjah"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                     SHARJAH
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="/search-by-cities-in-uae/Ajman"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    AJMAN
                  </Link>
                </div>
                <div>
                  {' '}
                  <Link
                    href="/search-by-cities-in-uae/Ras%20al%20Khaimah"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    RAS AL KHAIMAH
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Al%20Quoz%20(Dubai)"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    Al QUOZ
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Abu%20Dhabi"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    ABU DHABI
                  </Link>
                </div>
                <div>
                  <Link
                    href="/search-by-cities-in-uae/Deira%20(Dubai)"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    DEIRA
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-extrabold mx-auto my-5">
              5 ways you can find parts for your car.
            </h3>
            There are 5 ways you can try finding spare parts for your car.
            <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Traditional way its pros and cons
            </h6>
            You find a spare parts shop nearby and go and purchase and the work
            is done. In this case, the pros is that you find nearby shop to have
            similar brands you have and thats it you purchase it with ease. But
            the cons is when you don't find the nearby shop to have the car
            brand which you are using. There are shop who only deal with certain
            parts like the shop A sells only in honda, Mazda, BMW and shop B
            sells only Audi, Lincoln and Ferrari. So to see for next option, you
            can opt for shopping from Giant E-commerce company like Amazon,
            EBay, Flipkart etc.
            <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Giant E-commerce Company its pros and cons:
            </h6>
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
            <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Local Dealers
            </h6>
            Local dealers are known through other person like through friends
            and family. Or he gives you his business card and he explains you
            directly the car brands he deals with. However with the current
            digital advancement, the local dealers are decreasing gradually. So
            we move to the next option to search on online marketplace.
            <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Online Marketplace (Only CONS!)
            </h6>
            Through Online marketplace we find spare parts for our car easily.
            But it also has lots of cons. If you search for very latest model
            used spare parts, it will not be available on marketplace. In this
            case you have to contact the car brand company directly. If you
            search for very old model, it will not be available with most of the
            car brands company itself. And also there are more spam issues
            reported from those who purchase from small vendor marketplace and
            also the larger companies. In this case you should go for Online
            dealer website.
            <h6 className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Online Dealer Website ONLY PROS!
            </h6>
            Online dealers website is the easiest way to order spare parts. You
            visit a bunch of site online and submit your inquiries therein and
            dealers will contact you back through the contact information you
            submitted. If one website didnt reply you, then other website will
            do. So there is plenty of website and options. Emirates-car.com is
            one such website which accept online inquiries. It deals with parts
            and accessories for honda accord, Honda civic and{' '}
            <Link
              href={'https://emirates-car.com/search-by-make/' + make}
              className="text-black underline hover:text-blue-900"
            >
              other honda models
            </Link>
            , Infiniti models, BMW models, Audi models and many other brands.
            Visit to search parts you need.
          </div>
          <div>
            <h3 className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
              Special Deals on the following parts for{' '}
              {decodeURIComponent(parts)} for {year}
              {make} {decodeURIComponent(model)}
            </h3>
            <div className="grid grid-cols-5 gap-2 s:grid-cols-2 xs:grid-cols-2 md:grid-cols-3">
              {images.map((i, k) => (
                <div key={k} className="border-2 p-5 relative">
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

              {partsposts.map((post, i) => (
                <ul key={i}>
                  <li className="text-gray-700 hover:text-blue-700 focus:text-blue-700 text-xl xs:text-lg font-mono mx-auto my-5 xs:my-0">
                  <Link
                    href="/search-by-make/[make]/[model/[year]/[parts]"
                    as={
                      '/search-by-make/' +
                      make +
                      '/' +
                      model +
                      '/' +
                      year +
                      '/' +
                      post.parts
                    }
                    title={year + ' ' + make + ' ' + model + ' ' + parts}
                  >
                      {post.parts} for {' ' + year}
                      {' ' + make} {' ' + decodeURIComponent(model)} price list
                  </Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
