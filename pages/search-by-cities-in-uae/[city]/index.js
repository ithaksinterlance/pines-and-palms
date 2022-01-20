import Nav from "../../nav";
import Footer from "../../footer";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function City({ data, partspost, posts }) {
  const [Year, setYear] = useState("");
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Email, setEmail] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState("");
  const [City, setCity] = useState("");
  const [suggestion, setSuggestion] = useState([]);

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

  const ma = [
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

  const make = ma.sort();
  function handleYearChange(event) {
    setYear(event.target.value);
    console.log(Year);
  }
  function handleMakeChange(event) {
    setMake(event.target.value);
    console.log(Make);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
    console.log(Model);
  }
  function handleCityChange(event) {
    setCity(data.city);
    console.log(data.city);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
    console.log(Whatsappno);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(Email);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const year = Year;
    const email = Email;
    const make = Make;
    var model = Model;
    const partname = text;
    const whatsappno = Whatsappno;
    const city = City;

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
        city: city,
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
      <Nav />
      <Head>
        <title>Auto spare parts in {data.city} UAE | Emirates-car.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <main className="mx-10 xs:ml-3  2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5">
              FILL OUT THE INQUIRY FOR PARTS IN
              <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                &nbsp;{data.city}{" "}
              </nobr>
              BELOW
            </div>
            <p className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 underline pb-3">
            <nobr className="text-blue-400 no-underline"><i className="fal fa-car-garage"></i> Current path:&nbsp;&nbsp;</nobr>
              home{"/"}
              <Link
                href="/search-by-cities-in-uae/[city]"
                as={"/search-by-cities-in-uae/" + data.city}
              >
                <a>
                  search-by-cities-in-uae{"/"}{data.city}
                </a>
              </Link>{"/"}
            </p>
            <iframe
              src={data.link}
              height={300}
              width="100%"
              allowFullScreen="null"
              loading="lazy"
            ></iframe>
            <div className="grid grid-cols-2 xs:grid xs:grid-cols-1">
              <p className="text-base font-medium text-gray-500 xs:text-sm md:text-base p-5">
                <h1 className="text-md font-bold text-blue-500 py-5">
                  SEARCH YOUR PARTS IN
                  <nobr className="text-blue-700 text-xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                    &nbsp;{data.city}
                  </nobr>{" "}
                </h1>
                UAE Automobile industry is slowly shifting towards a service
                oriented business model based on consumer data and customer
                experience. Now companies are trying to adapt to the current
                need of the trends Markets. They rely on consumer data for
                knowing the sale interest of the customers based on the
                experience through analytics software. Owners are now thinking
                ways to accommodate the market through the trends analytics in
                order to keep the company into their targetted level. Previously
                there were cars running on petrol in which UAE is one of the
                largest producer and diesel. Since the beginning era of electric
                vehicle have started, many people are opting for electric
                vehicles in spite of its shortcomings because it is more
                affordable comapared to vehicle running on diesel or petrol. By
                this transition there is no difference in usage of irreversible
                energy.
              </p>
              <form
                id="myForm"
                className="w-full max-w-lg  shadow-xl px-8 py-8 xs:px-1 xs:py-3 2xs:px-4 sm:px-4"
                method="POST"
                onSubmit={handleSubmit}
                target="hidden_iframe"
              >
                <div className="flex flex-wrap -mx-3 mb-2">
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
                  <div className="w-1/2 md:w-1/2 px-3">
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

                <div className="flex flex-wrap -mx-3 mb-2">
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
                        {posts
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

                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3 mb-6 xs:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="email"
                    >
                      City
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="city"
                      type="text"
                      placeholder="We won't leak your mail id"
                      onChange={handleCityChange}
                      value={data.city}
                      autoComplete="off"
                      name="entry.113755516"
                    />
                  </div>
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
                <div className="flex flex-wrap -mx-3">
                  <div className="w-full  px-3 mb-6 xs:mb-0">
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
                <div className="flex flex-wrap -mx-3 py-5">
                  <div className="w-full  px-3 mb-6 xs:mb-0">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md xs:text-xs"
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
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  font-sans">
            PARTS IN {data.city}
          </div>
          <div className="xs:grid xs:grid-cols-1 text-gray-600 font-bold 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5 font-sans">
            SEARCH BY PART NAME
          </div>
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 sm:mt-5 lg:mx-2 ">
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
  const res = await fetch(`https://rozy.vercel.app/api/cities`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { city: post.city },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { city } = params;

  const res = await fetch(`https://rozy.vercel.app/api/cities/${city}`);
  const data = await res.json();

  const resp = await fetch(`https://rozy.vercel.app/api/palms`);
  const posts = await resp.json();

  const partsres = await fetch(`https://rozy.vercel.app/api/parts`);
  const partspost = await partsres.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, partspost, posts },
  };
}
