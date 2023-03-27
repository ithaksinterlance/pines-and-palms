import React from 'react';
import FeaturedHonda from './8th-gen-Honda';
import Navbar from './nav';
import Footer from './footer';
import Head from 'next/head';
import OtherHondaModels from './OtherHondaModels';
import Link from 'next/link';
import Image from 'next/image';

export default function HondaAccord8thGen() {
  return (
    <div>
      <Head>
        <title>
          8TH Generation Honda Accord 2008 - 2012 parts - Used / Genuine / OEM /
          Aftermarket | Emirates-car.com
        </title>
        <meta
          name="description"
          content={
            'Engines for 2.4L, 3.5L, 2.2L VTEC, DTEC, V6 engines , Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more'
          }
        />
        <meta
          name="keywords"
          content="honda body parts, honda accord spare parts, 8th gen accord parts, performance parts for honda accord, headlight, tailight, suspension parts"
        />
        <meta
          property="og:title"
          content="2008 - 2012 8TH Generation Honda Accord  parts - Used , Genuine / OEM / Aftermarket parts"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/honda-accord-8th-gen-body-parts"
        />
        <meta
          property="og:description"
          content="Engines for 2.4L, 3.5L, 2.2L VTEC, DTEC, V6 engines , Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/honda-accord-8th-gen-body-parts"
        />
        <meta
          property="twitter:title"
          content="8TH Generation Honda Accord 2008 - 2012 parts - Used / Genuine / OEM /
          Aftermarket parts"
        />
        <meta
          property="twitter:description"
          content="Engines for 2.4L, 3.5L, 2.2L VTEC, DTEC, V6 engines , Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more"
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-logos/Honda.webp"
        />
      </Head>
      <Navbar />
      <div className="d-flex justify-center  pt-10 xs:pt-5 mx-8">
        <h1 className="text-4xl md:text-lg lg:text-2xl text-center font-extrabold xs:text-base 2xs:text-xs">
          2008 - 2012 8TH Generation Honda Accord Spare Parts parts - Used /
          Genuine / OEM / Aftermarket - Body parts , Engine, Spoiler, and more
          Online
        </h1>
        <p className="text-red-600 text-center underline text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base">
          Sale !
        </p>
        <p className="text-blue-600 text-2xl md:text-sm lg:text-lg font-extrabold xs:text-xl 2xs:text-xs py-5">
          2008, 2009, 2010, 2011, 2012 Honda Accord
        </p>
        <p className="text-xl font-mono text-gray-700 mx-auto">
          Welcome to{' '}
          <Link
            href="/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Emirates-car.com
          </Link>
          , We are Car parts dealers from Dubai. We deal in Auto spare parts for
          honda accord spare parts for honda body parts, honda mechanical parts,
          electrical parts, service and maintainance parts, AC Parts, Engine and
          related parts, headlight and other lights{' '}
          <Link
            href="/search-by-make"
            className="text-blue-500 underline hover:text-blue-900"
          >
            other car brands in UAE.
          </Link>
          . For any spare parts inquiries, submit your inquiry at our website.
        </p>
        <Link
          href={`/#myForm`}
          className="w-1/4 xs:w-full mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
          target="_newtab"
        >
          Inquire Now
        </Link>
        <div className="py-10 xs:py-5">
          <p className="text-blue-600 text-2xl md:text-sm lg:text-lg font-extrabold xs:text-xl 2xs:text-xs py-5 text-center">
            8th Gen Honda Accord Body parts Aerodynamics upgrades parts:
          </p>
          <div className="grid grid-cols-5 xs:grid-cols-1">
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">
                  Carbon Fiber Hood
                </h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/CarbonFiber.webp"
                  alt="honda accord bonnet"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda accord bonnet"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Front Bumper</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/FrontBumper.webp"
                  alt="honda front bumper parts"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Bumper%20Assembly%20(Front)"
                  title="Honda accord front bumper"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Rear Bumper</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/RearBumper.webp"
                  alt="honda accord 8th gen body parts"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Bumper%20Assembly%20(Rear)"
                  title="Honda accord rear bumper"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Spoiler</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/Spoiler.webp"
                  alt="honda accord spoilers"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Spoiler%20(Front)"
                  title="Honda spoiler"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">
                  Front Bumper Lips
                </h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/FrontBumperLips.webp"
                  alt="honda accord front bumper lips"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda accord front bumper"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">
                  Rear Bumper Lips
                </h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/RearBumperLips.webp"
                  alt="honda accord rear bumper lips"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda accord rear bumper lips"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Side skirts</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/sideskirt.webp"
                  alt="honda accord side skirts"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda accord side skirts"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
          <p className="text-blue-600 text-2xl md:text-sm lg:text-lg font-extrabold xs:text-xl 2xs:text-xs py-5 text-center">
            8th Gen Honda Accord Body parts performance upgrades parts:
          </p>
          <div className="grid grid-cols-5 xs:grid-cols-2">
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Camshaft gear</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/camshaftgear.webp"
                  alt="cam gears"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Ring%20Gear%20and%20Pinion"
                  title="Honda accord cam gear"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">
                  Cold Air Intakes
                </h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/coldairintake.webp"
                  alt="honda accord cold air intakes"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Intake%20Manifold"
                  title="Honda accord cold air intakes"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Exhaust System</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/Exhaust_Manifold.webp"
                  alt="honda exhaust system"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-make/Intake%20Manifold"
                  title="Honda intake manifold"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Gaskets</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/Gasket.webp"
                  alt="honda accord 8th gen body parts"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-make/Honda/CR-V"
                  title="Honda crv parts"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Radiator Caps</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/RadiatorCap.webp"
                  alt="honda accord radiator cap"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Radiator"
                  title="Honda radiator caps"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Oxygen Sensors</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/Sensors.webp"
                  alt="honda accord 8th gen sensors"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="honda oxygen sensors"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Throttle Body</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/ThrottleBottle.webp"
                  alt="honda throttle body"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Throttle%20Body%20Assembly"
                  title="throttle body"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
          <p className="text-blue-600 text-2xl md:text-sm lg:text-lg font-extrabold xs:text-xl 2xs:text-xs py-5 text-center">
            8th Gen Honda Accord Body parts Suspension upgrades parts:
          </p>
          <div className="grid grid-cols-5 xs:grid-cols-2">
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">
                  Air suspension parts
                </h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/AirSuspension.webp"
                  alt="honda accord air suspension"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Suspension%20Control%20Module"
                  title="Honda accord air suspension"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Cambers</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/Camber.webp"
                  alt="cambers"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="8th gen accord cambers"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Coilovers</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/Coilovers.webp"
                  alt="honda coilover parts"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda coilovers"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Control Arms</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/ControlArms.webp"
                  alt="honda accord 8th gen body parts"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda accord 8th gen control arms"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">
                  Lowering Springs
                </h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/LoweringSprings.webp"
                  alt="honda accord lowering springs"
                  height={250}
                  width={250}
                />
                <Link
                  href="/get-in-touch"
                  title="Honda accord lowering springs"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Strut Bars</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/StrutBars.webp"
                  alt="honda accord strut bars"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Strut%20Assembly%20(Front)"
                  title="Honda strut bars"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Toe Arms</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/ToeArm.webp"
                  alt="honda accord toe arms"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Toe%20Arms"
                  title="Honda accord toe arms"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
            <div>
              <div className="border-2 p-5 relative text-center">
                <h3 className="text-xl font-bold font-sans">Traction Rods</h3>
                <hr className="py-1" />
                <Image
                  src="/img/honda-accord-8th-gen/TractionRod.webp"
                  alt="traction rod honda accord price"
                  height={250}
                  width={250}
                />
                <Link
                  href="/search-by-part-name/Traction%20Control%20Module"
                  title="traction rod honda accord price"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FeaturedHonda />
      </div>
      <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8 ">
        <p className="text-black text-4xl md:text-sm lg:text-lg font-extrabold xs:text-base 2xs:text-xs py-5 shadow-lg hover:shadow-2xl">
          Genuine vs Aftermarket? Hard to decide? Read the following small guide
        </p>
        <Link
          href="/honda-parts#oemvsaftermarket"
          className="text-white text-4xl xs:text-xl font-mono italic"
        >
          <div className="h-60 xs:h-14 grid grid-cols-1 content-center bg-gradient-to-r from-yellow-500 to-red-800 text-center font-extrabold rounded-3xl underline">
            <i className="fa-solid fa-link"></i>Team Genuine VS Team Aftermarket{' '}
            {'>>'}
          </div>
        </Link>
      </div>
      <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8">
        <h3 className="text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs py-5">
          About Honda Accord
        </h3>
        <p className="text-xl font-mono text-gray-700 mx-auto">
          Honda Accord 8th Generation Starts from 2007 to 2012. It was
          manufactured in Japan, Europe and china as sedan and station wagon. It
          was sold as different names like Acura TSX in north america, Mexico
          and Canada, Spirior in China as sedan, and Accord Euro in New Zealand
          and Australia. Honda Inspire in North America. It offers engine and
          transmission options. Its engines are available with many options
          ranging from 2.0 inline, 2.4 litre inline 4 cylinder and 3.5 litre V6
          engine i-VTEC petrol engines and also 2.2 litre i-DTEC diesel engine.
          All the engine has manual transmission except the engines with petrol
          comes with Automatic transmission. The key feature in this generation
          are Muti functional steering wheel, Alloy wheels, rear and front fog
          lights, headlights, power windows front and rear, passenger and driver
          airbag, power steering, Anti lock braking system ABS, front bumper,
          rear bumper, grille, air conditioner and Power Adjustable Exterior
          Rear View Mirror. Honda accord 8th generation interior comes with
          tachometer, electronic multi tripmeter, leather seats, fabric
          upholstery, digital clock, keyless entry, six speaker stereo with
          auxilliary input and leather steering wheel. Honda accord 2010 comes
          with 3 major trims LX, EX, and EX V-6. 2011 comes with . 2012 comes
          with EX, EX-L, LX, LX-S and SE.
        </p>
      </div>
      <div className="d-flex  pt-10 xs:pt-5 mx-8">
        <div>
          <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center">
            List of different Genuine and Aftermarket Honda Accord 8th
            Generation spare parts in UAE
          </p>
          <div className="grid grid-cols-3 xs:grid-cols-1 place-content-center">
            <div>
              <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
                Honda Accord Engine parts
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
                Honda Accord Mechanical parts
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
                <li>
                  <Link
                    href="/get-in-touch"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
                    Pump
                  </Link>
                </li>
              </ol>
            </div>

            <div>
              <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
                Honda Accord Body Parts
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
                Honda Accord Electrical Parts
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
                Honda Accord AC Parts
              </p>
              <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
                <li>
                  <Link
                    href="/search-by-part-name/AC%20Compressor"
                    className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
                  >
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
              </ol>
            </div>
          </div>
          <Link
            href={`/get-in-touch`}
            className="w-1/4 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
            target="_newtab"
          >
            View All Parts
          </Link>
        </div>
      </div>
      <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8">
        <h3 className=" text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs py-5">
          Other Honda Models
        </h3>
      </div>
      <div className="d-flex justify-center text-center pt-10 xs:pt-5 mx-8">
        <OtherHondaModels />
      </div>
      <div className="d-flex justify-center text-center py-10 xs:pt-5 mx-8">
        <div>
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
            Availability of Honda parts in UAE:
          </p>
          <div className="grid grid-cols-5 xs:grid-cols-1 gap-3 mx-auto p-5 border-2 border-gray-500">
            <div>
              <Link
                href="/honda-parts/dubai"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                DUBAI
              </Link>
            </div>
            <div>
              {' '}
              <Link
                href="/honda-parts/sharjah"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;
                SHARJAH
              </Link>
            </div>
            <div>
              {' '}
              <Link
                href="/honda-parts/ajman"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                &nbsp;AJMAN
              </Link>
            </div>
            <div>
              {' '}
              <Link
                href="/honda-parts/ras-al-khaimah"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;RAS
                AL KHAIMAH
              </Link>
            </div>
            <div>
              <Link
                href="/honda-parts/al-quoz"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Al
                QUOZ
              </Link>
            </div>
            <div>
              <Link
                href="/honda-parts/abu-dhabi"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;ABU
                DHABI
              </Link>
            </div>
            <div>
              <Link
                href="/honda-parts/deira"
                className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                &nbsp;DEIRA
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
