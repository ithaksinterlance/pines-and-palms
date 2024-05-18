import React from 'react';
import Social from './Social';
import Hero from './home_hero';
import Count from './service-countup';
import Featured from './featured';
import Hero_img from '../public/img/car-spare-parts.png';
import Link from 'next/link';
import Image from 'next/image';
import FormComponent from './FormComponent';
import TenEntries from './tenentries';
import Contents from './Contents';

export async function getMake() {
  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map(item => [item['make'], item])).values()
  ];
  return uniqueMakeArray;
}

export async function getYear() {
  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueYearArray = [
    ...new Map(data.map(item => [item['year'], item])).values()
  ];
  return uniqueYearArray;
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
    <div>
      <div className="max-w-7xl mx-auto font-sans">
        <Hero />
        <div className="place-content-center py-6 xl:mx-auto lg:mx-auto md:mx-auto xs:py-0">
          <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 s:mx-3 xxs:mx-4 xs:mx-4 text-center text-3xl text-blue-900 font-extrabold xs:text-xl xs:w-auto xxs:w-auto s:w-auto s:text-2xl xxs:text-2xl p-3">
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
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top American Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Ford">
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
            <Link href="/search-by-make/GMC">
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
            <Link href="/search-by-make/Chevrolet">
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
            <Link href="/search-by-make/Jeep">
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
            <Link href="/search-by-make/Hummer">
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
            <Link href="/search-by-make/Cadillac">
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
            <Link href="/search-by-make/Lincoln">
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
            <Link href="/search-by-make/Dodge">
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
            <Link href="/search-by-make/Chrysler">
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
            <Link href="/search-by-make/Mercury">
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
            <Link href="/search-by-make/Buick">
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
            <Link href="/search-by-make/Ram">
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
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top Japanese Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Ford">
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
            <Link href="/search-by-make/Mitsubishi">
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
            <Link href="/search-by-make/Lexus">
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
            <Link href="/search-by-make/Nissan">
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
            <Link href="/search-by-make/Infiniti">
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
            <Link href="/search-by-make/Honda">
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
            <Link href="/search-by-make/Mazda">
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
            <Link href="/search-by-make/Subaru">
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
            <Link href="/search-by-make/Suzuki">
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
            <Link href="/search-by-make/Daihatsu">
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
            <Link href="/search-by-make/Isuzu">
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
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top Britain Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Aston Martin">
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
            <Link href="/search-by-make/Bentley">
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
            <Link href="/search-by-make/Jaguar">
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
            <Link href="/search-by-make/Land Rover">
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
            <Link href="/search-by-make/Lotus">
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
            <Link href="/search-by-make/McLaren">
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
            <Link href="/search-by-make/Mini">
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
            <Link href="/search-by-make/Rolls-Royce">
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
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top French Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Peugeot">
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
            <Link href="/search-by-make/Citroen">
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
            <Link href="/search-by-make/Renault">
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
            <Link href="/search-by-make/Mobility Ventures LLC">
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
            <Link href="/search-by-make/Bugatti">
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
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top German Spare parts
        </h3>
        <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Mercedes-Benz">
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
            <Link href="/search-by-make/BMW">
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
            <Link href="/search-by-make/Volkswagen">
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
          <div>
            <Link href="/search-by-make/Jaguar">
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
            <Link href="/search-by-make/Land%20Rover">
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
            <Link href="/search-by-make/Porsche">
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
        <h3 className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          Top Korean Spare parts
        </h3>
        <div className="grid grid-cols-4 md:grid md:grid-cols-5 lg:grid-cols-7 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 xxs:grid xxs:grid-cols-2 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Hyundai">
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
            <Link href="/search-by-make/Kia">
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
            <Link href="/search-by-make/Daewoo">
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

        <div className="mx-auto py-10">
          <Count />
        </div>
        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          POPULAR BRANDS
        </div>
        <div className="grid grid-cols-5 md:grid md:grid-cols-4 sm:grid sm:grid-cols-4 lg:grid lg:grid-cols-4 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-3 xxs:grid xxs:grid-cols-3 s:grid s:grid-cols-2 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10 mx-10">
          <div>
            <Link href="/search-by-make/Toyota">
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
            <Link href="/search-by-make/Mitsubishi">
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
            <Link href="/search-by-make/Mercedes-benz">
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
            <Link href="/search-by-make/Nissan">
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
            <Link href="/search-by-make/Ford">
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
            <Link href="/search-by-make/Hyundai">
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
            <Link href="/search-by-make/Volkswagen">
              <main className="border h-full hover:border-blue-600 py-3 ">
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
                  Volkswagen
                </p>
              </main>
            </Link>
          </div>
          <div>
            <Link href="/search-by-make/Honda">
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
            <Link href="/search-by-make/Lexus">
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
            <Link href="/search-by-make/Acura">
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
            <Link href="/search-by-make/Kia">
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
            <Link href="/search-by-make/Porsche">
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
            <Link href="/search-by-make/Chevrolet">
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
            <Link href="/search-by-make/Land Rover">
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
        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          POPULAR SEARCHED PARTS IN UAE
        </div>
        <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10">
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
        <div className="text-black text-4xl text-center md:text-2xl lg:text-2xl font-extrabold xs:text-xl xxs:text-2xl pt-10 uppercase">
          SEARCH AUTO SPARE PARTS ANYWHERE IN UAE
        </div>

        <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10">
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
        <Contents />

        <div className="py-6 bg-blue-500">
          <div className="pb-6 xs:pb-3 p-2 sm:pb-3 xxs:pb-3">
            <h3 className="text-3xl xs:text-sm text-white uppercase text-center font-bold xxs:text-base md:text-xl lg:text-2xl s:text-sm">
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
          <div className=" bg-purple-700 py-10 xs:py-5 xxs:py-5 sm:py-5">
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
                  We are dealing with auto spare parts for car, heavy truck,
                  van, buses, coupe, SUV, prime, Petrol based vehicles, Diesel
                  based vehicles, Used spare parts, After market parts, Genuine
                  spare parts and New parts etc. Contact us for any inquiry.
                </p>
              </div>
              <div className="pt-10 xs:pt-5 xxs:pt-5 sm:pt-5 mx-auto text-center">
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

              <div className="pt-10 xs:py-5 xxs:pt-5 sm:pt-5 mx-auto text-center">
                <p className="pt-5 text-white font-extrabold">SHORTCUT LINKS</p>
                <Link
                  href="https://emirates-car.com/search-by-part-name"
                  className="text-base xs:text-sm xxs:text-sm sm:text-base text-white underline"
                >
                  Spare parts in UAE
                </Link>
                <br />
                <Link
                  href="https://emirates-car.com/search-by-make"
                  className="text-base xs:text-sm xxs:text-sm sm:text-base text-white underline"
                >
                  Search parts by Car make in UAE
                </Link>
                <br />
                <Link
                  href="https://emirates-car.com/search-by-cities-in-uae"
                  className="text-base xs:text-sm xxs:text-sm sm:text-base text-white underline"
                >
                  Search parts by cities in UAE
                </Link>
              </div>
            </div>
            <p className="pt-5 text-white font-extrabold text-center xs:hidden sm:hidden xxs:hidden">
              Auto spare parts
            </p>
            <div className="grid grid-cols-10 md:grid-cols-7 xs:hidden sm:hidden xxs:hidden p-3">
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
                className="text-base xs:text-sm xxs:text-sm sm:text-base text-white underline"
              >
                <i className="fa fa-copyright" aria-hidden="true"></i>
                Copyright © 2024 Emirates-car. All rights reserved.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
