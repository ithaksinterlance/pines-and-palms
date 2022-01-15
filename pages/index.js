import React, { useState, useEffect } from "react";
import Nav from "./nav";
import Hero from "./home_hero";
import Slider from "react-slick";
import Featured from "./featured";
import Footer from "./footer";
import Link from "next/link";
import avatar1 from "../public/img/avatar1.jpeg";
import avatar2 from "../public/img/avatar2.jpg";
import avatar3 from "../public/img/avatar3.jpg";
import Image from "next/image";
import Count from "./service-counter";
import Head from "next/head";
import CarLogos from "./carLogos";

export default function Home({ forms, partsposts, posts, pos, cities }) {
  const [Year, setYear] = useState("");
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Email, setEmail] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [Address, setAddress] = useState("");

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
  },[]);

  const onSuggestionHandler = (text) => {
    setText(text);
    setSuggestion([]);
  };

  const onPartFormChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = formPartname.filter((part) => {
        const regex = new RegExp(`${text}`, "gi");
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
    dotsClass: "slick-dots",
    pauseOnHover: "true",
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const make = [
    "Ford",
    "Chrysler",
    "Citroen",
    "Hillman",
    "Chevrolet",
    "Cadillac",
    "BMW",
    "Austin",
    "Fairthorpe",
    "Fillmore",
    "Pontiac",
    "Studebaker",
    "Buick",
    "Rambler",
    "Plymouth",
    "Volkswagen",
    "Jensen",
    "Oldsmobile",
    "Mercury",
    "Dodge",
    "Shelby",
    "Porsche",
    "Toyota",
    "Mercedes-Benz",
    "MG",
    "Nissan",
    "Honda",
    "Mazda",
    "Renault",
    "Audi",
    "Lincoln",
    "Lotus",
    "Maserati",
    "Mitsubishi",
    "Saab",
    "Subaru",
    "Suzuki",
    "Lamborghini",
    "Merkur",
    "Land Rover",
    "Acura",
    "Lexus",
    "Eagle",
    "Alfa Romeo",
    "Daihatsu",
    "Geo",
    "GMC",
    "Hyundai",
    "Infiniti",
    "Isuzu",
    "Jaguar",
    "Jeep",
    "Saturn",
    "Volvo",
    "HUMMER",
    "Kia",
    "Holden",
    "Corbin",
    "Daewoo",
    "MINI",
    "Maybach",
    "Scion",
    "Spyker",
    "Aston Martin",
    "Bentley",
    "Panoz",
    "Rolls-Royce",
    "Spyker Cars",
    "Ferrari",
    "Hummer",
    "Morgan",
    "Peugeot",
    "Foose",
    "Aptera",
    "Smart",
    "Bugatti",
    "Tesla",
    "Ram",
    "FIAT",
    "Fiat",
    "McLaren",
    "BYD",
    "McLaren Automotive",
    "Mobility Ventures LLC",
    "Pagani",
    "Roush Performance",
    "smart",
    "SRT",
    "Genesis",
    "Karma",
    "Koenigsegg",
    "RUF Automobile",
    "STI",
    "Polestar",
    "Kandi",
  ];
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
  async function handleSubmit(event) {
    event.preventDefault();
    const year = Year;
    const email = Email;
    const make = Make;
    var model = Model;
    const partname = text;
    const whatsappno = Whatsappno;
    const address = Address;

    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + " " + time;
    const response = fetch(`/api/sheets`, {
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
    setText("");
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
      <Head>
        <title>Search Auto Spare Parts in UAE</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Hero />
      <div className="place-content-center py-6 xl:mx-10 lg:mx-10 md:mx-10 xs:py-0">
        <h1 className="text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs">
          ABOUT EMIRATES CAR
        </h1>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-xs 2xs:text-xs italic xs:ml-6">
          We are dealing with auto spare parts for car, heavy truck, van, buses,
          coupe, SUV, prime, Petrol based vehicles, Diesel based vehicles, Used
          spare parts, After market parts, Genuine spare parts and New parts
          etc. Contact us for any inquiry.
        </p>
        <p className="text-lg text-gray-800 py-4 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 lg:text-base xs:text-xs 2xs:text-xs italic xs:ml-6">
          The only goal we all work for to achieve is to give life to a car in
          need of its organ and keep it going. We all have worked for a while
          now and We can&apos;t be enough of the joy we put on people&apos;s
          face after getting their dead car moving. Our love and passion to
          serve this joy is growing and growing as far as this people&apos;s joy
          is increasing day by day. We thank our consumer for growing this love
          and joy and raising hopes for this joy to be forever.
        </p>
        <div className="flex float-right italic text-green-600 font-bold">
          Yours Joyfully!
          <br />
          Emirates-car
        </div>
      </div>
      <div className="mx-auto py-20">
        <Count />
      </div>
      <div className="place-content-center py-6 xl:mx-auto lg:mx-auto md:mx-auto xs:py-0">
        <div className="uppercase bg-blue-200 font-serif xl:mx-10 lg:mx-7 md:mx-5 xs:mx-0 sm:mx-0 2xs:mx-0 p-3 text-center text-3xl text-blue-900 font-extrabold xs:text-xl s:mx-3 xs:w-screen 2xs:w-screen s:w-screen s:text-2xl 2xs:text-2xl ">
          <span>
            <Link href="/search-by-part-name">
              <a className="underline hover:text-blue-500">
                SEARCH BY PART NAME
              </a>
            </Link>{" "}
            &nbsp;|
          </span>
          <span>
            <Link href="/search-by-part-name">
              <a className="underline hover:text-blue-500">SEARCH BY CITY </a>
            </Link>{" "}
            &nbsp;|
          </span>
          <span>
            <Link href="/search-by-part-name">
              <a className="underline hover:text-blue-500">SEARCH BY YEAR</a>
            </Link>{" "}
            &nbsp;|
          </span>
          <span>
            <Link href="/search-by-part-name">
              <a className="underline hover:text-blue-500">SEARCH BY MAKE</a>
            </Link>{" "}
            &nbsp;
          </span>
        </div>
        <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 xl:mx-10 lg:mx-7 md:mx-5 xs:w-screen 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 shadow-2xl">
          <div className="w-1/3 bg-blue-700 2xs:w-full xs:w-full xs:py-5 ">
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
                <p className="text-sm text-center pt-5">
                  Honestly a genuine dealing it was. The rate was so genuine. My
                  order received on time.
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
                <p className="text-sm text-center pt-5">
                  {" "}
                  I replaced my Backup light with their Used backup light. It
                  was just as new and it was good quality too.
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
                <p className="text-sm text-center pt-5">
                  {" "}
                  Got my Gearbox, AC Compressor, Battery, Radiator at best deal!
                  It was a very good rate and dealing.
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
                <p className="text-sm text-center pt-5">
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
                We are dealing with auto spare parts for car, heavy truck, van,
                buses, coupe, SUV, prime, Petrol based vehicles, Diesel based
                vehicles, Used spare parts, After market parts, Genuine spare
                parts and New parts etc. Contact us for any inquiry.
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
          <div className="w-2/3 xs:w-full md:w-full 2xs:w-full sm:w-full">
            <form
              id="myForm"
              className="w-full shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4"
              method="POST"
              onSubmit={handleSubmit}
              target="hidden_iframe"
            >
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
                      name="entry.902626710"
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
                      {make.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
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
                        .filter((s) => s.make === Make)
                        .map((s) => (
                          <option key={s.id} value={s.model}>
                            {s.model}
                          </option>
                        ))}
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

              <div className="flex flex-wrap ">
                <div className="w-full px-3 mb-6 xs:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                    htmlFor="whatsappno"
                  >
                    WhatsApp No
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                    id="whatsappno"
                    type="text"
                    placeholder="WhatsApp No"
                    name="entry.902626710"
                    onChange={handleWhatsAppNoChange}
                    value={Whatsappno}
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="w-full px-3 mb-6 xs:mb-0">
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
                    placeholder="We won't leak your mail id"
                    onChange={handleEmailChange}
                    value={Email}
                    autoComplete="off"
                    name="entry.113755516"
                  />
                </div>
              </div>
              <div className="flex flex-wrap ">
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
                    id="partname"
                    type="text"
                    placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
                    rows={5}
                    name="entry.1660104041"
                    onChange={(e) => onPartFormChange(e.target.value)}
                    value={text}
                    autoComplete="off"
                    required
                  />
                  {suggestion &&
                    suggestion.map((suggestion, i) => (
                      <div
                        key={i}
                        className="cursor-pointer border-gray-400 p-4"
                        onClick={() => onSuggestionHandler(suggestion)}
                      >
                        {suggestion}
                      </div>
                    ))}
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

              <div className="flex float-right text-xs text-gray-400 ">
                100% secure and trusted
              </div>
            </form>
          </div>
        </div>
      </div>
      <Featured />
      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY YEAR
      </h1>
      <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        {pos.map((post) => (
          <div key={post.id}>
            <Link href="/search-by-year/[year]" as={"/search-by-year/" + post.year}>
              <a>
                <main className="border p-1 rounded-xl hover:border-blue-600 hover:shadow-lg focus:border-blue-600">
                  <p className="text-xs xs:text-center text-gray-500 hover:text-gray-800">
                    {post.year}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY MAKE
      </h1>
      <div className="grid grid-cols-7 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        {posts.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-make/[make]"
              as={"/search-by-make/" + post.make}
            >
              <a>
                <main className="border p-1 rounded-xl xs:border-0 2xs:border-0 sm:border-0 hover:border-blue-600 hover:shadow-lg focus:border-blue-600">
                  <p className="text-xs text-gray-600 px-3 font-medium hover:text-gray-800">
                    <i className="fas fa-compass"></i> {post.make}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY CITIES IN U.A.E
      </h1>
      <div className="grid grid-cols-7 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        {cities.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-dubai-cities/[city]"
              as={"/search-by-dubai-cities/" + post.city}
            >
              <a>
                <main className="border p-1 rounded-xl xs:border-0 2xs:border-0 sm:border-0 hover:border-blue-600 hover:shadow-lg focus:border-blue-600">
                  <p className="text-xs text-gray-600 px-3 font-medium hover:text-gray-800">
                    <i className="fas fa-compass"></i> {post.city}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs text-center">
        WE DEAL IN ALMOST ANY BRANDS
      </h1>
      <div className="grid grid-cols-7 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        <CarLogos />
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  //forms
  const respo = await fetch(`https://rozy.vercel.app/api/palms`);
  const forms = await respo.json();

  const respnse = await fetch(`https://rozy.vercel.app/api/parts`);
  const partsposts = await respnse.json();

  const res = await fetch(`https://rozy.vercel.app/api/pines`);
  const posts = await res.json();

  let uniqueObjectArray = [
    ...new Map(posts.map((item) => [item["year"], item])).values(),
  ];
  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];
  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  return {
    props: {
      pos:uniqueObjectArray,
      forms,
      partsposts,
      posts:uniqueMakeArray,
      cities
    },
  };
}
