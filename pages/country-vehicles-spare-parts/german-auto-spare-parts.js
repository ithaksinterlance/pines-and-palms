import React, { useState, useEffect } from "react";
import Navbar from "../nav";
import Image from "next/image";
import Link from "next/link";
import Germany from "../../public/img/icons/germany.png";
import Footer from "../footer";
import Head from "next/head";
import Count from "../service-countup";

export default function German({ partsposts, posts }) {
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
  }, []);

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
  const mke = [
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
  const make = mke.sort();
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
        <title>German Auto Spare Parts in UAE - New | Used | Genuine | Aftermarket</title>
      </Head>
      <Navbar />
      <div className="bg-cover">
        <div className="grid grid-cols-1 xs:grid xs:grid-cols-1 s:grid s:grid-cols-1 xs:mx-auto sm:grid sm:grid-cols-2  2xs:grid 2xs:grid-cols-1 xs:pt-5 s:pt-5">
          <div>
            <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <Image
                src={Germany}
                alt="genuine auto spare parts"
                height={50}
                width={50}
              />
              GERMAN VEHICLE AUTO SPARE PARTS
            </h1>
            <div className="grid grid-cols-3 md:grid md:grid-cols-3 lg:grid-cols-3 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1 s:grid s:grid-cols-1 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10 mx-10">
              <div>
                <Link href="/search-by-make/Hyundai">
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="hyundai spare parts in uae"
                          src="/img/car-logos/hyundai.png"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Hyundai
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Kia">
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="kia spare parts in uae"
                          src="/img/car-logos/kia.png"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Kia
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/search-by-make/Daewoo">
                  <a>
                    <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                      <div className="flex justify-center">
                        <Image
                          alt="daewoo spare parts in uae"
                          src="/img/car-logos/daewoo.png"
                          className="object-scale-down shadow-xl"
                          height={30}
                          width={30}
                        />
                        <br />
                      </div>
                      <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                        Daewoo
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
            </div>
            <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">
              **Make not found above?
              <Link href="/get-in-touch">
                <a>
                  <nobr className="text-blue-500 text-sm underline">
                    {" "}
                    Get in touch with us {">>"}**
                  </nobr>
                </a>
              </Link>{" "}
            </div>
            <h1 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10">
              Explore from our immensively large-scale database, your GERMAN
              auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck
              / Buses in Your city in UAE especially in Abu al Bukhoosh,Abu
              Dhabi,Abu Musa,Ahmed Bin Rashid Port,Ajman,Al Ain,Al Barsha,Al
              Dhafra,Al Fujayrah,Al Hamriyah,Al Jazeera Port,Al Jeer Port,Al
              Mafraq,Al Quoz,Al Sufouh,Ar Ruways,Arzanah Island,Das
              Island,Deira,Dibba,Dubai,Dubai World Central Apt,Esnnad,Sea Port
              (Fateh Terminal),Free Port,Habshan,Hail,Hamriya Free Zone Port,Al
              Jarf (Hassyan),Hatta,Sea Port (Hulaylah Terminal),Sea Port
              (Indooroodilly),Jebel Ali,Jebel Ali Free Zone,Jebel
              Dhanna,Jumayrah,Kalba,Khalidia,Khor al Fakkan,Masfut,Khalid
              Port,Khalifa City - Abu Dhabi,Mina Rashid Port,Mina Saqr,Mina
              Zayed - Abu Dhabi, Minhad, Mirfa, Mubarek Terminal, Mubarras
              Island,Musafa,Mussafah,Offshore Fujairah,Port Rashid,Rak Khor
              Port, Rak Maritime City, Ras al Khaimah, Ras Al Khor,Al Ras,Reem
              Island,Ruwais = Ar Ruways,Ruwais Port, Sadiyat
              Island,Sharjah,Sila,Stevin Rock,Swaihan,The Palm Jumeirah,Umm Al
              Nar,Umm al Quwain, Al Qurayyah, Yas Island, Zirku Island in UAE.
            </h1>
            <div className="mx-auto">
              <Count />
            </div>
            <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
              <form
                id="myForm"
                className="w-full shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4"
                method="POST"
                onSubmit={handleSubmit}
                target="hidden_iframe"
              >
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
                        {make.map((m) => (
                          <option key={m}>{m}</option>
                        ))}{" "}
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
                          .filter((s) => s.make === Make)
                          .map((s) => (
                            <option key={s.id} value={s.model}>
                              {s.model}{" "}
                            </option>
                          ))}{" "}
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
                  <div>
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
                  <div>
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
                      placeholder="We won't leak your mail id"
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
                      onChange={(e) => onPartFormChange(e.target.value)}
                      value={text}
                      autoComplete="off"
                      required
                    />{" "}
                    {suggestion &&
                      suggestion.map((suggestion, i) => (
                        <div
                          key={i}
                          className="cursor-pointer border-gray-400 p-4"
                          onClick={() => onSuggestionHandler(suggestion)}
                        >
                          {suggestion}{" "}
                        </div>
                      ))}{" "}
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

                <div className="flex float-right text-xs text-gray-400 ">
                  100% secure and trusted
                </div>
              </form>
            </div>
            <h1 className="place-content-center grid grid-cols-1 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 text-base text-gray-500 xs:text-sm md:text-base p-5 mx-10 my-10">
              {" "}
              We provide auto spare parts for any German vehicles including :
              <ul className="list-disc">
                <li>New German vehicle auto spare parts</li>
                <li>Used German vehicle auto spare parts</li>
                <li>Genuine German vehicle auto spare parts</li>
                <li>Aftermarket German vehicle auto spare parts</li>
              </ul>
            </h1>
          </div>
        </div>
      </div>

      <h1 className="place-content-center text-blue-600 text-center text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-xl 2xs:text-xl s:text-xl xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
        SEARCH FOR AUTO SPARE PARTS IN UAE
      </h1>
      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            id="partname"
            type="search"
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
            onChange={(e) => onPartFormChange(e.target.value)}
            value={text}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {suggestion &&
              suggestion.map((suggestion, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onSuggestionHandler(suggestion)}
                  width="100%"
                >
                  <a
                    href={`https://emirates-car.com/search-by-part-name/${suggestion}`}
                    rel="noopener noreferrer"
                    target="_newtab"
                  >
                    {suggestion}{" "}
                  </a>
                </div>
              ))}{" "}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-6 2xs:grid 2xs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 2xs:mx-4 md:ml-11 my-10">
        {partsposts.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-cities-in-uae/[city]"
              as={"/search-by-part-name/" + post.parts}
            >
              <a title={post.parts + " in uae"}>
                <main className="border h-full  hover:border-blue-600 py-3 bg-gray-100">
                  <p className="text-xs text-center text-gray-500 font-medium hover:text-gray-800">
                    {post.parts.toUpperCase()}{" "}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}{" "}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const respnse = await fetch(`https://rozy.vercel.app/api/parts`);
  const partsposts = await respnse.json();

  const resp = await fetch(`https://rozy.vercel.app/api/palms`);
  const data = await resp.json();

  return {
    props: {
      partsposts,
      posts: data,
    },
  };
}