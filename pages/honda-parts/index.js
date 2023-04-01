import Head from 'next/head';
import React from 'react';
import Navbar from '../nav';
import Footer from '../footer';
import Link from 'next/link';
import OtherHondaModels from '../OtherHondaModels';
import Image from 'next/image';
import FeaturedHonda from '../8th-gen-Honda';

export default function HondaParts() {
  return (
    <div>
      <Head>
        <title>
          Honda spare parts UAE from Dubai dealers Online | Emirates-car.com
        </title>
        <meta
          name="description"
          content={
            'Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket Honda spare parts            from Dubai Dealer to all over UAE and world Online'
          }
        />
        <meta
          name="keywords"
          content="honda spare parts sharjah, honda spare parts, honda brake pads, honda distributor, honda  wheel, honda abs, honda engine, honda gearbox, honda axle, honda air filter, honda accord carburetor"
        />
        <meta
          property="og:title"
          content="Quick Car Auto Spare Parts Order Online in UAE | Emirates-car.com"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/honda-parts/abu-dhabi"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/honda-parts"
        />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Parts Order Online in  UAE | Emirates-car.com"
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
      <Navbar />
      <div className="w-3/4 mx-auto">
        <h1 className="text-3xl font-extrabold mx-auto my-5 xs:text-xl">
          Buy Car Parts - Used, Genuine, OEM (Original parts) and Aftermarket
          Honda spare parts from Dubai Dealer to all over UAE and world Online
        </h1>
        <Link href={`/search-by-make/Honda`}>
          <a
            className="w-1/4 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
            target="_newtab"
          >
            Get Prices Now
          </a>
        </Link>

        <p className="text-xl font-mono text-gray-700 mx-auto">
          Emirates-car.com is the online Dealers specialist in almost any car
          brands running on roads of UAE. Call it original parts or OEM parts or
          Genuine parts or aftermarket parts, We are here to find the best parts
          for you. We find pleasure is finding the best genuine (otherwise
          called OEM parts or original parts) and aftermarket parts for any
          cars. We have experienced professional who can find the parts at
          affordable and reasonable price. We deal in genuine honda parts and
          aftermarket honda parts such as engine parts, mechanical parts,
          performance parts, electrical and electronic parts, body parts and
          lights, AC parts and service and maintenance parts. We supply honda
          parts for all generation including 8th gen honda parts, 9th gen honda
          parts, 10th gen honda parts, 11th gen honda parts. You can order and
          buy japanese car parts Online. You can order Honda spare parts by
          simply submitting the online inquiry form{' '}
          <Link href="https://emirates-car.com">
            <a className="text-blue-500 underline hover:text-blue-900">here</a>
          </Link>
          . You can get callback or whatsapp chat or email after submitting your
          form inquiry.
        </p>
        <p className="text-xl font-mono text-gray-700 mx-auto my-5">
          Honda is a car manufacturing company established in 1948. It has built
          many fuel efficient cars with vtec engine as well as luxury cars with
          v8 engine. However it has always aimed to produce fuel efficient
          engine and affordable car. According to the report in 2018, 80,000
          honda cars were registered in UAE. So the demand for cars spare parts
          in on niche.{' '}
        </p>
        <p className="text-xl font-mono text-gray-700 mx-auto">
          Unfortunately, it became high in demand in such a way that its spare
          parts are in scarce in UAE and its difficult to find its parts. But we
          can deal and get the best deals for you at best rate. If you are
          looking for Honda spare parts dealer, Emirates-car.com is the end
          point to all your search.
        </p>
        <p className="text-blue-600 text-2xl md:text-sm lg:text-lg font-extrabold xs:text-xl 2xs:text-xs py-5 text-center">
          Honda performance parts
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
              <Link href="/search-by-part-name/Ring%20Gear%20and%20Pinion">
                <a
                  title="Honda cam gear"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="border-2 p-5 relative text-center">
              <h3 className="text-xl font-bold font-sans">Cold Air Intakes</h3>
              <hr className="py-1" />
              <Image
                src="/img/honda-accord-8th-gen/coldairintake.webp"
                alt="honda cold air intakes"
                height={250}
                width={250}
              />
              <Link href="/search-by-part-name/Intake%20Manifold">
                <a
                  title="Honda cold air intakes"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
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
              <Link href="/search-by-make/Intake%20Manifold">
                <a
                  title="Honda intake manifold"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="border-2 p-5 relative text-center">
              <h3 className="text-xl font-bold font-sans">Gaskets</h3>
              <hr className="py-1" />
              <Image
                src="/img/honda-accord-8th-gen/Gasket.webp"
                alt="honda body parts"
                height={250}
                width={250}
              />
              <Link href="/search-by-make/Honda/CR-V">
                <a
                  title="Honda crv parts"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="border-2 p-5 relative text-center">
              <h3 className="text-xl font-bold font-sans">Radiator Caps</h3>
              <hr className="py-1" />
              <Image
                src="/img/honda-accord-8th-gen/RadiatorCap.webp"
                alt="honda radiator cap"
                height={250}
                width={250}
              />
              <Link href="/search-by-part-name/Radiator">
                <a
                  title="Honda radiator caps"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
              </Link>
            </div>
          </div>
          <div>
            <div className="border-2 p-5 relative text-center">
              <h3 className="text-xl font-bold font-sans">Oxygen Sensors</h3>
              <hr className="py-1" />
              <Image
                src="/img/honda-accord-8th-gen/Sensors.webp"
                alt="honda oxygen sensors"
                height={250}
                width={250}
              />
              <Link href="/get-in-touch">
                <a
                  title="honda oxygen sensors"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
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
              <Link href="/search-by-part-name/Throttle%20Body%20Assembly">
                <a
                  title="throttle body"
                  className="flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125"
                >
                  Inquire Now
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-flex  pt-10 xs:pt-5 mx-8">
          <div>
            <p className="text-3xl font-extrabold mx-auto my-5 justify-center text-center">
              List of different Genuine and Aftermarket Honda spare parts in UAE
            </p>

            <FeaturedHonda />
            <Link href={`/get-in-touch`}>
              <a
                className="w-1/4 mx-auto flex items-center justify-center px-8 py-2 xl:text-xl border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-2 md:text-md mg:text-lg md:px-5 xs:py-2 xs:text-xs xs:my-2 2xs:text-sm 2xs:my-2 s:text-sm s:my-2 focus:filter brightness-125 my-5"
                target="_newtab"
              >
                View All Parts
              </a>
            </Link>
          </div>
        </div>
        <h3
          className="text-3xl font-extrabold mx-auto my-5"
          id="oemvsaftermarket1"
        >
          Why choose Honda genuine parts ?
        </h3>
        <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
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
        <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-extrabold">
          Availability of Honda parts in UAE:
        </p>
        <h3
          className="text-3xl font-extrabold mx-auto my-5"
          id="oemvsaftermarket"
        >
          Why choose Honda aftermarket parts ?
        </h3>
        <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
          Honda aftermarket parts are better to buy for many reasons:
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
          Honda Genuine parts are better to buy for many reasons:
        </p>

        <div className="grid grid-cols-5 xs:grid-cols-1 gap-3 mx-auto p-5 border-2 border-gray-500">
          <div>
            <Link
              href="/honda-parts/dubai"
              title="honda spare parts dubai sheikh zayed road"
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
              title="honda spare parts sharjah"
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
              title="honda spare parts ajman"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
            >
              <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;AJMAN
            </Link>
          </div>
          <div>
            {' '}
            <Link
              href="/honda-parts/ras-al-khaimah"
              title="honda spare parts abu dhabi"
              className="font-mono font-semibold text-blue-600 underline hover:text-blue-900"
            >
              <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;RAS
              AL KHAIMAH
            </Link>
          </div>
          <div>
            <Link
              href="/honda-parts/al-quoz"
              title="honda spare parts al quoz"
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
              <i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;DEIRA
            </Link>
          </div>
        </div>
        <p className="text-3xl font-extrabold mx-auto my-5">
          Shop for Honda performance parts, honda genuine parts, honda
          aftermarket parts, honda body parts, honda mechanical parts, honda
          electrical parts, honda engine parts, honda replacement parts, honda
          AC parts and more
        </p>
        <div className="grid grid-cols-3 xs:grid-cols-1 place-content-center">
          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Honda Engine parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/Engine%20Assembly">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Engine Assembly
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Engine%20Block">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Engine Block
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Engine%20Mount">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Engine Mount
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Engine%20Block">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Engine Block
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Cylinder%20Head">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Cylinder Head
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Cylinder%20Block">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Cylinder Block
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Crankshaft">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Crankshaft
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Camshaft">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Camshaft
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Piston">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Piston
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Exhaust%20Manifold">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Exhaust Manifold
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Intake%20Manifold">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Intake Manifold
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Ignition%20Switch">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Ignition Switch
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Ignition%20Control%20Module">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Ignition Control Module
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Transmission%20Control%20Module">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    TCM
                  </a>
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Honda Mechanical parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/Engine%20Assembly">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Engine
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Engine%20Assembly">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Battery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Engine%20Assembly">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Alternator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Brake%20Pads">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Brake Pads
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Radiator">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Radiator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Transmission%20Control%20Module">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Transmission
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Shock%20Absorber">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Shock Absorber
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Convertible%20Top%20Motor">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    {' '}
                    Catalytic Converter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Power%20Steering%20Box">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Power Steering
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/get-in-touch">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Pump
                  </a>
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Honda Body Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/Bonnet">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Bonnet
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Fender%20(Front)">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Fender
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Decklid">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Decklid
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Grille">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Grille
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Wheel">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Wheel
                  </a>
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Honda Electrical Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/Spark%20Plug">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Spark Plug
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Alternator">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Alternator
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Battery">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Battery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/Ignition%20Switch">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Ignition Switch
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/get-in-touch">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    Many more...
                  </a>
                </Link>
              </li>
            </ol>
          </div>

          <div>
            <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
              Honda AC Parts
            </p>
            <ol className="list-disc text-xl font-mono text-gray-700 mx-auto">
              <li>
                <Link href="/search-by-part-name/AC%20Compressor">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Compressor
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/AC%20Condenser">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Condenser
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/AC%20Selector">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Selector
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/search-by-part-name/AC%20Controls">
                  <a className="font-mono font-semibold text-blue-600 underline hover:text-blue-900">
                    AC Controls
                  </a>
                </Link>
              </li>
            </ol>
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
          You find a spare parts shop nearby and go and purchase and the work is
          done. In this case, the pros is that you find nearby shop to have
          similar brands you have and thats it you purchase it with ease. But
          the cons is when you don't find the nearby shop to have the car brand
          which you are using. There are shop who only deal with certain parts
          like the shop A sells only in honda, Mazda, BMW and shop B sells only
          Audi, Lincoln and Ferrari. So to see for next option, you can opt for
          shopping from Giant E-commerce company like Amazon, EBay, Flipkart
          etc.
          <p className="text-xl font-mono text-gray-700 mx-auto my-5 font-bold">
            Giant E-commerce Company its pros and cons:
          </p>
          If you don't find spare parts nearby your house location, generally we
          move on to search on internet. You search for top companies selling
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
          it also has lots of cons. If you search for very latest model used
          spare parts, it will not be available on marketplace. In this case you
          have to contact the car brand company directly. If you search for very
          old model, it will not be available with most of the car brands
          company itself. And also there are more spam issues reported from
          those who purchase from small vendor marketplace and also the larger
          companies. In this case you should go for Online dealer website.
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
          <Link href="/search-by-make/Honda">
            <a className="text-blue-500 underline hover:text-blue-900">
              other honda models
            </a>
          </Link>
          , Infiniti models, BMW models, Audi models and many other brands.
          Visit to search parts you need.
        </div>

        <OtherHondaModels />
      </div>

      <Footer />
    </div>
  );
}
