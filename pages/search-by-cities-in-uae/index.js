import Nav from "../nav";
import Link from "next/link";
import Footer from "../footer";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Count from "../service-countup";

export default function City({ cities, data, posts, pos }) {
  const [Year, setYear] = useState("");
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Email, setEmail] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [Address, setAddress] = useState("");
  const [searchMake, setSearcMake] = useState("");
  const [recommend, setRecommend] = useState("");
  const [formMakeChange, setFormMakeChange] = useState("");

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in pos) {
        var filtered = pos[i].parts;
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

  useEffect(() => {
    const loadPart = async () => {
      var part = [];
      for (var i in cities) {
        var filtered = cities[i].city;
        part.push(filtered);
      }
      setFormMakeChange(part);
    };
    loadPart();
  }, []);

  const onMakeSuggestionHandler = (searchMake) => {
    setSearchMake(searchMake);
    setRecommend([]);
  };

  const onMakeFormChange = (searchMake) => {
    let matches = [];
    if (searchMake.length > 0) {
      matches = formMakeChange.filter((part) => {
        const regex = new RegExp(`${searchMake}`, "gi");
        return part.match(regex);
      });
    }
    setRecommend(matches);
    setSearcMake(searchMake);
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
  function handleAddressChange(event) {
    setAddress(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const year = Year;
    const email = Email;
    const make = Make;
    var model = Model;
    const partname = text;
    const whatsappno = Whatsappno;
    var address = Address;

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
    setAddress("");
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
      <Head>
        <title>Search Auto Spare Parts by Cities in UAE</title>
      </Head>
      <Nav />
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm my-10">
            <article>
              <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10 ">
                &nbsp;&nbsp;
                <nobr className="text-blue-700 text-6xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                  &nbsp;<i className="fa fa-map-pin" aria-hidden="true"></i>
                </nobr>
                &nbsp;&nbsp; SELECT YOUR PARTS BY LOCATION IN U.A.E
              </h1>
              <div className="flex justify-center">
                <div className="pt-3">
                  <input
                    className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
                    id="partname"
                    type="search"
                    placeholder="Eg. Abu dhabi, Dubai, Ajman..."
                    onChange={(e) => onMakeFormChange(e.target.value)}
                    value={searchMake}
                    autoComplete="off"
                    required
                  />
                  <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
                    {recommend &&
                      recommend.map((recommend, i) => (
                        <div
                          key={i}
                          className="cursor-pointer  text-base p-1 bg-white"
                          onClick={() => onMakeSuggestionHandler(recommend)}
                          width="100%"
                        >
                          <a
                            href={`https://emirates-car.com/search-by-part-name/${recommend}`}
                            rel="noopener noreferrer"
                            target="_newtab"
                          >
                            {recommend}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-base md:text-lg lg:text-2xl font-normal font-sans xs:text-xs 2xs:text-xs mx-10 xs:ml-3 underline">
                <nobr className="text-blue-400 no-underline">
                  <i className="fal fa-car-garage"></i> Current
                  path:&nbsp;&nbsp;
                </nobr>
                index{">>>"}
              </p>

              <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
                {cities.map((post) => (
                  <div key={post.id}>
                    <Link
                      href="/search-by-cities-in-uae/[city]"
                      as={"/search-by-cities-in-uae/" + post.city}
                    >
                      <a>
                        <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                          {post.city}
                        </main>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-5 mx-10">
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
              <div className="place-content-center grid grid-cols-1 gap-3 xs:grid-cols-1 xs:grid s:grid s:grid-cols-1 py-5 xl:mx-10 lg:mx-10 md:mx-10 sm:mx-5 xs:mx-2 xs:py-0 2xs:mx-2 s:mx-2  md:ml-11 my-10 mx-10">
                <h1 className="text-base font-medium text-gray-500 p-5">
                  We deal with any country auto spare parts including japanese,
                  american, german, chinese, indian, Korean, french, british in
                  UAE. We also operate in main cities such as dubai, sharjah,
                  abu dhabi, ajman, al quoz, jumeirah, deira etc. We also
                  deal in brands such as{" "}
                  {data.map((p) => (
                    <a key={p.id}>
                      {p.make}
                      {" in UAE, "}
                    </a>
                  ))}
                </h1>
                <p className="text-base font-medium text-gray-500 p-5">
                  UAE Automobile industry is slowly shifting towards a service
                  oriented business model based on consumer data and customer
                  experience. Now companies are trying to adapt to the current
                  need of the trends Markets. They rely on consumer data for
                  knowing the sale interest of the customers based on the
                  experience through analytics software. Owners are now thinking
                  ways to accommodate the market through the trends analytics in
                  order to keep the company into their targeted level.
                  Previously there were cars running on petrol in which UAE is
                  one of the largest producer and diesel. Since the beginning
                  era of electric vehicle have started, many people are opting
                  for electric vehicles in spite of its shortcomings because it
                  is more affordable comapared to vehicle running on diesel or
                  petrol. By this transition there is no difference in usage of
                  irreversible energy.
                </p>
                <p className="text-base font-medium text-gray-500 p-5">
                We provide auto spare parts for any vehicles including :
              <ul className="list-disc">
                <li>New auto spare parts</li>
                <li>Used auto spare parts</li>
                <li>Genuine auto spare parts</li>
                <li>Aftermarket auto spare parts</li>
              </ul>
                </p>

              </div>
            </article>
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-600 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  text-justify font-sans">
            SEARCH PART BY MAKE
          </div>
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 pb-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5  text-justify font-sans">
            {data.map((post) => (
              <div key={post.id}>
                <Link
                  href="/search-by-make/[make]"
                  as={"/search-by-make/" + post.make}
                >
                  <a>
                    <p className="text-base hover:text-blue-700 focus:text-blue-700 xs:px-3 h-full text-gray-500">
                      <i className="fa fa-mars-stroke" aria-hidden="true"></i>{" "}
                      {post.make}
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

export async function getStaticProps() {
  const res = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await res.json();
  let uniqueObjectArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];

  const response = await fetch(`https://rozy.vercel.app/api/palms`);
  const posts = await response.json();

  const resp = await fetch(`https://rozy.vercel.app/api/parts`);
  const pos = await resp.json();

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  if (!cities) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cities, data: uniqueObjectArray, posts, pos },
  };
}
