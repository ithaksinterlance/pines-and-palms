import React from 'react';
import Head from 'next/head';
import Social from './Social';
import Hero from './home_hero';
import Count from './service-countup';
import Featured from './featured';
import Hero_img from '../public/img/car-spare-parts.png';
import Link from 'next/link';
import Image from 'next/image';
import FormComponent from './FormComponent';
import TenEntries from './tenentries';

export async function getMake() {
  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map(item => [item['make'], item])).values()
  ];
  return uniqueMakeArray;
}

export async function getFormModel() {
  //Pass it to forms to get appropriate model for make
  const respo = await fetch(`https://rozy.vercel.app/api/palms`);
  const forms = await respo.json();
  return forms;
}

export async function getCity() {
  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();
  return cities;
}

export async function getParts() {
  const respnse = await fetch(`https://rozy.vercel.app/api/parts`);
  const partsposts = await respnse.json();
  return partsposts;
}

export default async function Home() {
  const posts = await getMake();
  const modelforms = await getFormModel();
  const partsposts = await getParts();
  const cities = await getCity();
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
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
      <Hero />
      <div className="place-content-center py-6 xl:mx-auto lg:mx-auto md:mx-auto xs:py-0">
        <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 2xs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto 2xs:w-auto s:w-auto s:text-2xl 2xs:text-2xl p-3">
          <Social />
          <div>
            <span>
              <Link
                href="https://emirates-car.com/search-by-part-name"
                className="underline hover:text-blue-500 xs:text-sm"
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
                SEARCH BY CITY
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
      </div>
      {/*American */}
      <h3 className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs pt-10">
        Top American Spare parts
      </h3>
      <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 2xs:grid 2xs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
        <div>
          <Link href="https://emirates-car.com/search-by-make/Ford">
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
          <Link href="https://emirates-car.com/search-by-make/GMC">
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
          <Link href="https://emirates-car.com/search-by-make/Chevrolet">
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
          <Link href="https://emirates-car.com/search-by-make/Jeep">
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
          <Link href="https://emirates-car.com/search-by-make/Hummer">
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
          <Link href="https://emirates-car.com/search-by-make/Cadillac">
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
          <Link href="https://emirates-car.com/search-by-make/Lincoln">
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
          <Link href="https://emirates-car.com/search-by-make/Dodge">
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
          <Link href="https://emirates-car.com/search-by-make/Chrysler">
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
          <Link href="https://emirates-car.com/search-by-make/Mercury">
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
          <Link href="https://emirates-car.com/search-by-make/Buick">
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
          <Link href="https://emirates-car.com/search-by-make/Ram">
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
          <Link href="https://emirates-car.com/search-by-make/Ford">
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
          <Link href="https://emirates-car.com/search-by-make/Mitsubishi">
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
          <Link href="https://emirates-car.com/search-by-make/Lexus">
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
          <Link href="https://emirates-car.com/search-by-make/Nissan">
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
          <Link href="https://emirates-car.com/search-by-make/Infiniti">
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
          <Link href="https://emirates-car.com/search-by-make/Honda">
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
          <Link href="https://emirates-car.com/search-by-make/Mazda">
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
          <Link href="https://emirates-car.com/search-by-make/Subaru">
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
          <Link href="https://emirates-car.com/search-by-make/Suzuki">
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
          <Link href="https://emirates-car.com/search-by-make/Daihatsu">
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
          <Link href="https://emirates-car.com/search-by-make/Isuzu">
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
          <Link href="https://emirates-car.com/search-by-make/Aston Martin">
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
          <Link href="https://emirates-car.com/search-by-make/Bentley">
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
          <Link href="https://emirates-car.com/search-by-make/Jaguar">
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
          <Link href="https://emirates-car.com/search-by-make/Land Rover">
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
          <Link href="https://emirates-car.com/search-by-make/Lotus">
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
          <Link href="https://emirates-car.com/search-by-make/McLaren">
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
          <Link href="https://emirates-car.com/search-by-make/Mini">
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
          <Link href="https://emirates-car.com/search-by-make/Rolls-Royce">
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
          <Link href="https://emirates-car.com/search-by-make/Peugeot">
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
          <Link href="https://emirates-car.com/search-by-make/Citroen">
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
          <Link href="https://emirates-car.com/search-by-make/Renault">
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
          <Link href="https://emirates-car.com/search-by-make/Mobility Ventures LLC">
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
          <Link href="https://emirates-car.com/search-by-make/Bugatti">
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
          <Link href="https://emirates-car.com/search-by-make/Mercedes-Benz">
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
          <Link href="https://emirates-car.com/search-by-make/BMW">
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
          <Link href="https://emirates-car.com/search-by-make/Volkswagen">
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
          <Link href="https://emirates-car.com/search-by-make/Jaguar">
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
          <Link href="https://emirates-car.com/search-by-make/Land%20Rover">
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
          <Link href="https://emirates-car.com/search-by-make/Porsche">
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
          <Link href="https://emirates-car.com/search-by-make/Hyundai">
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
          <Link href="https://emirates-car.com/search-by-make/Kia">
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
          <Link href="https://emirates-car.com/search-by-make/Daewoo">
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
      <FormComponent formsData={modelforms} postFilter={partsposts} />
      <TenEntries />

      <div className="place-content-center pt-10 xl:mx-36 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        <p className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl">
          ABOUT Emirates-car.com
        </p>
        <p className="text-lg py-4 sm:mt-5 sm:text-base md:mt-5 md:text-base lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          Emirates-car.com is Online platform to Buy / Order Auto spare parts
          Online. We have spare parts for american brand car such as Ford, GMC,
          Cadillac, Chevrolet, Dodge, Chysler and{' '}
          <Link
            href="https://emirates-car.com/spare-parts/american-auto-spare-parts"
            className="text-blue-700 hover:text-blue-900 list-none underline"
            title="american car parts"
          >
            American car parts
          </Link>
          . Japanese brand cars Such as Toyota, Mitsubishi, Honda, Infiniti,
          Daihatsu, Nissan and{' '}
          <Link
            href="https://emirates-car.com/spare-parts/japanese-auto-spare-parts"
            className="text-blue-700 hover:text-blue-900 list-none underline"
            title="japan car parts"
          >
            japanese car parts
          </Link>
          We have spare parts for Korean car brands such as Hyundai, Kia and{' '}
          <Link
            href="https://emirates-car.com/spare-parts/korean-auto-spare-parts"
            className="text-blue-700 hover:text-blue-900 list-none underline"
            title="korean car parts"
          >
            korean car parts
          </Link>
          . We have spare parts for german brand car such as Mercedes-Benz, BMW,
          Volkswagen, Land Rover, Porsche, Jaguar, Mini Cooper, and{' '}
          <Link
            href="https://emirates-car.com/spare-parts/german-auto-spare-parts"
            className="text-blue-700 hover:text-blue-900 list-none underline"
            title="german car parts"
          >
            german car parts
          </Link>
          We became a prominent Auto spare parts Dealers Online.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          We deal in Used / New / Aftermarket / Genuine / OEM parts online. We
          deliver to all over UAE like Dubai, Abu Dhabi, Ajman, Ras Al Khaimah,
          Sharjah and{' '}
          <Link
            href="https://emirates-car.com/search-by-cities-in-uae"
            className="text-blue-500 hover:text-blue-800 list-none underline"
          >
            car parts in uae
          </Link>
          &nbsp; and also to other countries on demand. We offer Cash On
          delivery(COD) in UAE. If you are looking for car spare parts, you can
          buy/Order to us Online by submitting Inquiries on our website and Our
          team will get back to you with best price quote through whatsapp.
        </p>
        <div className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-base md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-sm 2xs:text-sm s:text-sm xs:mx-2">
          You can search Your spare parts by:
          <ul>
            <li className="text-blue-700 hover:text-blue-900 list-none underline">
              {' '}
              <i className="fas fa-car"></i>{' '}
              <Link href="https://emirates-car.com/search-by-make">
                Car Make Model
              </Link>
            </li>
            <li className="text-blue-700 hover:text-blue-900 list-none underline">
              {' '}
              <i className="fas fa-bolt"></i>{' '}
              <Link href="https://emirates-car.com/search-by-part-name">
                Car Spare parts
              </Link>
            </li>
            <li className="text-blue-700 hover:text-blue-900 list-none underline">
              {' '}
              <i className="fas fa-map-pin"></i>{' '}
              <Link href="https://emirates-car.com/search-by-cities-in-uae">
                Location in UAE
              </Link>
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
          <Link href="https://emirates-car.com/search-by-make/Toyota">
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
          <Link href="https://emirates-car.com/search-by-make/Mitsubishi">
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
          <Link href="https://emirates-car.com/search-by-make/Mercedes-benz">
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
          <Link href="https://emirates-car.com/search-by-make/Nissan">
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
          <Link href="https://emirates-car.com/search-by-make/Ford">
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
          <Link href="https://emirates-car.com/search-by-make/Hyundai">
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
          <Link href="https://emirates-car.com/search-by-make/Volkswagen">
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
          <Link href="https://emirates-car.com/search-by-make/Honda">
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
          <Link href="https://emirates-car.com/search-by-make/Lexus">
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
          <Link href="https://emirates-car.com/search-by-make/Acura">
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
          <Link href="https://emirates-car.com/search-by-make/Kia">
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
          <Link href="https://emirates-car.com/search-by-make/Porsche">
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
          <Link href="https://emirates-car.com/search-by-make/Chevrolet">
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
          <Link href="https://emirates-car.com/search-by-make/Land Rover">
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
      <div className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs mx-10">
        SEARCH AUTO SPARE PARTS BY NAME IN UAE
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {partsposts.map((post, i) => (
          <div key={i}>
            <Link
              href="https://emirates-car.com/search-by-part-name/[parts]"
              as={'/search-by-part-name/' + post.parts}
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
      <div className="text-black text-4xl text-center md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xs mx-10">
        SEARCH AUTO SPARE PARTS BY CITIES IN UAE
      </div>

      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {cities.map((post, i) => (
          <div key={i}>
            <Link
              href="https://emirates-car.com/search-by-cities-in-uae/[city]"
              as={'/search-by-cities-in-uae/' + post.city}
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

      <Featured />
      {/*Contents */}
      <h1 className="text-2xl xs:text-lg font-bold font-sans pt-5 mx-auto m-5">
        Car spare Parts Online in UAE - Buy Premium High Quality Used, Genuine,
        OEM and Aftermarket from Dubai to all over UAE and World
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
        done. In this case, the pros is that you find nearby automotive store to
        have similar brands you have and thats it you purchase it with ease. But
        the cons is when you don't find the nearby shop to have the car brand
        which you are using. There are shop who only deal with certain parts
        like the shop A sells only in honda, Mazda, BMW and shop B sells only
        Audi, Lincoln and Ferrari. So to see for next option, you can opt for
        shopping from Giant E-commerce company like Amazon, EBay, Flipkart etc.
        <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
          Giant E-commerce Company its pros and cons:
        </p>
        If you don&apos;t find spare parts nearby your house location, generally
        we move on to search on internet. You search for top companies selling
        spare parts online and you end up in giant e-commerce company like
        Amazon, Flipkart,Ebay etc. Now you see the review of person who has
        already ordered spare parts. Most of the reviews says the parts were
        broken. These giant company has a very big logistics that they are
        vulnerable to be broken during or even get lost during the check-in
        process. So it is not always safe to buy spare parts from giant
        e-commerce company. Hence we see for other option which is the Local
        dealers.
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
        it also has lots of cons. If you search for very latest model used spare
        parts, it will not be available on marketplace. In this case you have to
        contact the car brand company directly. If you search for very old
        model, it will not be available with most of the car brands company
        itself because old models are mostly out of stock and they concentrate
        on new latest models for the best sale. And also there are more spam
        issues reported from those who purchase from small vendor marketplace
        and also the larger companies. In this case you should go for Online
        dealer website.
        <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
          Online Dealer Website ONLY PROS!
        </p>
        Online dealers website is the easiest way to order spare parts. You
        visit a bunch of site online and submit your inquiries therein and
        dealers will contact you back through the contact information you
        submitted. If one website didnt reply you, then other website will do.
        So there is plenty of website and options. Emirates-car.com is one such
        website which accept online inquiries. It deals with parts and
        accessories for honda accord, Honda civic and{' '}
        <Link
          href="https://emirates-car.com/search-by-make/Honda"
          className="text-blue-500 underline hover:text-blue-900"
        >
          other honda models, Infiniti models, BMW models, Audi models and many
          other brands. Visit to search parts you need.
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
            Aftermarket parts are not regularized or standardized because it is
            manufactured as a duplicate to genuine parts.
          </li>
          <li>Genuine parts are best in quality than aftermarket parts. </li>
          <li>
            Genuine parts have warranty unlike aftermarket parts which has no
            Warranty
          </li>
        </ol>
        <p className="text-xl font-mono text-gray-700 mx-auto">
          However, if you weigh your pros and cons and which kind of parts you
          really need, you can come to the best conclusion yourself. And we can
          serve you with both kind of parts.
        </p>
      </div>
      <div>
        <p className="text-3xl font-extrabold mx-auto my-5">
          Best Auto Parts with High Quality standards:
        </p>
        <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
          We deal in all Automotive GCC parts Online:
        </p>
        The geographic scope of GCC includes Saudi Arabia, United Arab Emirates,
        Kuwait, Qatar, Oman and Bahrain. They have automotive scope of Suppliers
        of Original Equipment and Original Equipment Manufacturer for
        aftermarket auto body parts. 6 Auto parts categories were analysed and
        high focus were given to replacement parts. The six auto parts includes,
        crash repair parts, Wear & Tear parts, Mechanical parts, Electrical and
        electronic parts, consumables and accessories and service parts. After
        analysis, the following parts were considered the most High replacement
        parts.
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
      <div className="py-6 bg-blue-500">
        <div className="pb-6 xs:pb-3 p-2 sm:pb-3 2xs:pb-3">
          <h3 className="text-3xl xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl s:text-sm">
            COULD&apos;NT FIND YOUR DESIRED AUTO PARTS?{' '}
            <Link
              href="https://emirates-car.com/contact"
              className="underline text-blue-900"
            >
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
                  href="https://www.facebook.com/emirates.auto.parts"
                >
                  <i className="fab fa-2x fa-facebook"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-purple-900"
                  href="https://www.instagram.com/emiratescar_parts/"
                >
                  <i className="fab fa-2x fa-instagram"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-black"
                  href="https://emirates-car.tumblr.com/"
                >
                  <i className="fab fa-2x fa-tumblr"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-blue-300"
                  href="https://twitter.com/emiratescarpart"
                >
                  <i className="fab fa-2x fa-twitter"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-red-700"
                  href="https://in.pinterest.com/emiratesautomobileparts/"
                >
                  <i className="fab fa-2x fa-pinterest"></i>
                </Link>
                &nbsp;
                <Link
                  className="text-xl leading-xl text-blue-500"
                  href="https://in.pinterest.com/emiratesautomobileparts/"
                >
                  <i className="fab fa-2x fa-linkedin"></i>
                </Link>
              </p>
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

            <div className="pt-10 xs:py-5 2xs:pt-5 sm:pt-5 mx-auto text-center">
              <p className="pt-5 text-white font-extrabold">SHORTCUT LINKS</p>
              <Link
                href="https://emirates-car.com/search-by-part-name"
                className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
              >
                Spare parts in UAE
              </Link>
              <br />
              <Link
                href="https://emirates-car.com/search-by-make"
                className="text-base xs:text-sm 2xs:text-sm sm:text-base text-white underline"
              >
                Search parts by Car make in UAE
              </Link>
              <br />
              <Link
                href="https://emirates-car.com/search-by-cities-in-uae"
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
                  href="https://emirates-car.com/search-by-make/[make]"
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
              href="https://emirates-car.com"
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
