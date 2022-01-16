import Nav from "../../../../nav";
import Footer from "../../../../footer";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import avatar1 from "../../../../../public/img/avatar1.jpeg";
import avatar2 from "../../../../../public/img/avatar2.jpg";
import avatar3 from "../../../../../public/img/avatar3.jpg";
import Head from "next/head";

export default function Car({
  data,
  year,
  make,
  model,
  partspost,
  carLogos,
  othermodels,
}) {
  const [Year, setYear] = useState(year);
  const [Make, setMake] = useState(make);
  const [Model, setModel] = useState(model);
  const [Email, setEmail] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [Address, setAddress] = useState("");
  const [Partname, setPartname] = useState("");

  const settings = {
    autoplay: true,
    arrows: false,
    centerMode: true,
    autopalySpeed: 3000,
    dotsClass: "slick-dots",
    pauseOnHover: "true",
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
  function handlePartChange(event) {
    setPartname(event.target.value);
  }
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    var email = Email;
    var make = Make;
    var model = Model;
    var partname = Partname;
    var whatsappno = Whatsappno;
    const year = year;
    const address = Address;

    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    var response = fetch(`/api/sheets`, {
      method: "POST",
      body: JSON.stringify({
        Timestamp: dateTime,
        whatsappno: whatsappno,
        email: email,
        make: make,
        model: model,
        year: year,
        partnumber: "___",
        partname: partname,
        city: address,
        refno: null,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let message =
      "Email: " +
      email +
      "\n" +
      "Make: " +
      make +
      "\n" +
      "Model:" +
      model +
      "\n" +
      "Part Name :" +
      partname;
    alert("Form submitted. We will contact you shortly ;)");
    let messageURI = encodeURI(message);

    setYear("");
    setMake("");
    setModel("");
    setAddress("");
    setEmail("");
    setPartname("");
    setWhatsappno("");
    window
      .open(
        `https://api.whatsapp.com/send?phone=+971551478994&text=${messageURI}`,
        "_blank"
      )
      .focus();
  }
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <Head>
            <title>
              {post.make} - {post.model} ({post.year}) Auto Spare Parts
            </title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
        </div>
      ))}

      <Nav />
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
        <div className="w-3/4 2xs:w-full sm:w-full xs:grid xs:grid-cols-1">
          <div className="container place-content-center mx-1 py-6">
            <div className="uppercase bg-blue-200 font-sans p-5 text-center text-2xl text-blue-900 font-extrabold xs:text-base xs:w-screen s:w-screen 2xs:text-base">
              &nbsp;
              <span>
                <Link href="/search-by-part-name">
                  <a className="underline hover:text-blue-500">
                    SEARCH BY PART NAME
                  </a>
                </Link>{" "}
              </span>
              | &nbsp;
              <span>
                <Link href="/search-by-cities-in-uae">
                  <a className="underline hover:text-blue-500">
                    SEARCH BY CITY{" "}
                  </a>
                </Link>{" "}
              </span>
              | &nbsp;
              <span>
                <Link href="/search-by-year">
                  <a className="underline hover:text-blue-500">
                    SEARCH ON OTHER YEARS
                  </a>
                </Link>{" "}
              </span>
              | &nbsp;
              <span>
                <Link href="/search-by-make">
                  <a className="underline hover:text-blue-500">
                    SEARCH BY MAKE
                  </a>
                </Link>{" "}
              </span>
            </div>
            <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 ">
              <div className="w-1/3 bg-blue-700 s:hidden 2xs:hidden xs:py-5 xs:hidden">
                <Slider {...settings} className="py-10 p-2">
                  <div>
                    <p className="text-xl font-bold text-center">
                      <div>
                        {" "}
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
                    <p className="text-sm text-center pt-5 text-white">
                      Honestly a genuine dealing it was. The rate was so
                      genuine. My order received on time.
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-center">
                      <div>
                        {" "}
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
                      {" "}
                      I replaced my Backup light with their Used backup light.
                      It was just as new and it was good quality too.
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-center">
                      <div>
                        {" "}
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
                      {" "}
                      Got my Gearbox, AC Compressor, Battery, Radiator at best
                      deal! It was a very good rate and dealing.
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-center">
                      <div>
                        {" "}
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
                    EMIRATES-CAR
                  </h1>
                  <p className="text-sm text-white text-center pt-5">
                    We are dealing with auto spare parts for car, heavy truck,
                    van, buses, coupe, SUV, prime, Petrol based vehicles, Diesel
                    based vehicles, Used spare parts, After market parts,
                    Genuine spare parts and New parts etc. Contact us for any
                    inquiry.
                  </p>
                </div>

                <div className="p-5 pt-10">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722504.3860201286!2d51.71183150969869!3d24.337497293019872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e48dfb1ab12bd%3A0x33d32f56c0080aa7!2sUnited%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1641654109734!5m2!1sen!2sin"
                    title="auto spare parts dubai"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="w-2/3 xs:w-screen md:w-full 2xs:w-full sm:w-full">
                <p className="text-base font-medium text-gray-500 xs:text-sm md:text-base p-5 s:p-2">
                  Searching for {make} - {model} in U.A.E? Fill out the inquiry
                  down below.
                </p>
                <form
                  onSubmit={handleSubmit}
                  className="shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4"
                  method="POST"
                >
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                      <label
                        htmlFor="make"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      >
                        Year
                      </label>
                      <input
                        id="make"
                        name="entry.741646505"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        type="text"
                        onChange={handleYearChange}
                        placeholder="Your car Make"
                        value={Year}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
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

                  <div className="flex flex-wrap -mx-3 mb-2">
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
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
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

                  <div className="flex flex-wrap -mx-3 mb-2">
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
                        placeholder="We won't leak your mail id"
                        onChange={handleEmailChange}
                        value={Email}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6 xs:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                  id="city"
                  type="text"
                  placeholder="Where do you live?"
                  onChange={handleAddressChange}
                  value={Address}
                  autoComplete="off"
                />
              </div>
              </div>

                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0 xs:w-full">
                      <label
                        htmlFor="partname"
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      >
                        Part Name
                      </label>
                      <textarea
                        id="partname"
                        name="entry.1660104041"
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        type="text"
                        rows={5}
                        placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
                        onChange={handlePartChange}
                        value={Partname}
                        required
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
                      >
                        Submit
                      </button>
                    </div>
                  </div>

                  <div className="flex float-right text-xs text-gray-400 ">
                    100% secure and trusted
                  </div>
                  <p className="text-base font-medium text-gray-500 xs:text-sm md:text-base p-5 s:p-2">
                    Other {make} Models:
                  </p>
                  <p className="text-sm font-mono text-blue-900">
                    {othermodels.map((post) => (
                      <Link
                        href="/search-by-make/[make]/[model]"
                        as={"/search-by-make/" + post.make + "/" + post.model}
                        key={post.id}
                      >
                        <a>{post.model.replace("%2F", "/")+","}</a>
                      </Link>
                    ))}
                  </p>
                </form>
              </div>
            </div>
            <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs text-center py-5 xs:hidden sm:hidden s:hidden 2xs:hidden">
              WE DEAL IN ALMOST ANY BRANDS
            </h1>
            <div className="grid grid-cols-12  md:mx-4 sm:ml-0 xs:hidden sm:hidden s:hidden 2xs:hidden gap-1  md:ml-11 shadow-2xl my-10">
              {carLogos.map((post) => (
                <div key={post.id}>
                  <main className="border p-2">
                    <Image
                      alt={post.name}
                      src={"/img/car-logos/" + post.logo}
                      className="object-scale-down xs:object-fit xs:ml-4"
                      height={60}
                      width={60}
                    />
                    <p className="text-gray-400 text-center hover:text-blue-800 focus:text-blue-800 text-xs underline">
                      {post.name}
                    </p>
                  </main>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 sm:mt-5 lg:mx-2 ">
            <div className="xs:grid xs:grid-cols-1 text-gray-600 font-bold 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5 font-sans">
              SEARCH BY PART NAME
            </div>
            {partspost.map((post) => (
              <div key={post.id}>
                <Link
                  href="/search-by-part-name/[parts]"
                  as={"/search-by-part-name/" + post.parts}
                >
                  <a>
                    <p className="text-sm hover:text-blue-700 focus:text-blue-700 text-gray-500 xs:text-sm xl:text-lg 2xs:text-xs px-5 font-sans underline">
                      <i className="far fa-compass"></i> {post.parts}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/pines`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: {
      year: post.year.toString(),
      make: post.make.toString(),
      model: post.model.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { year, make, model } = params;

  const res = await fetch(
    `https://rozy.vercel.app/api/pines/${year}/${make}/${model}`
  );
  const data = await res.json();

  const resp = await fetch(`https://rozy.vercel.app/api/grooves/${make}`);
  const listofmodels = await resp.json();
  let uniqueObjectArray = [
    ...new Map(listofmodels.map((item) => [item["model"], item])).values(),
  ];

  const partsres = await fetch(`https://rozy.vercel.app/api/parts`);
  const partspost = await partsres.json();

  const carLogo = await fetch(`https://rozy.vercel.app/api/car-logos`);
  const carLogos = await carLogo.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      year,
      make,
      model,
      partspost,
      carLogos,
      othermodels: uniqueObjectArray,
    },
  };
}
