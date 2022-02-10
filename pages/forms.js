import React, { useState, useEffect } from "react";

export default function Forms({ forms, partsposts, posts, cities }) {
  const [Year, setYear] = useState("");
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Email, setEmail] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [formPartname, setFormPartname] = useState([]);
  const [text, setText] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [Address, setAddress] = useState("");
  const [Name, setName] = useState("");

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
  function handleNameChange(event) {
    setName(event.target.value);
  }
  async function handleSubmit(event) {
    event.preventDefault();
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
    const response = fetch(`/api/g_sheet`, {
      method: "POST",
      body: JSON.stringify({
        Timestamp: dateTime,
        brand: Make,
        contact: "971" + Whatsappno,
        name: Name,
        description: "\n" +
          "Time: " +
          dateTime +
          "\n" +
          "Customer Name: " +
          Name +
          "\n" +
          "Address: " +
          Address +
          "\n" +
          "Vehicle: " +
          Make +
          " " +
          Model +
          " " +
          Year +
          "\n" +
          "Part List: " +
          text,
        email: Email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let message =
      "Timestamp: " +
      dateTime +
      "\n" +
      "Brand: " +
      Make +
      "\n" +
      "Contact:" +
      Whatsappno +
      "\n" +
      "Customer Name: " +
      Name +
      "\n" +
      "Address: " +
      Address +
      "\n" +
      "Part List: " +
      text +
      "\n" +
      Make +
      " " +
      Model +
      " " +
      Year +
      "\n";
    alert("Form submitted. We will contact you shortly ;)");
    let messageURI = encodeURI(message);
    setName("");
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
      <form
      action="https://docs.google.com/forms/d/1rv57jVbmSv8zmV3gYp_57QcrIjoVRXUIExCI2hDOY-E/formResponse"
        id="myForm"
        className="w-full shadow-xl px-8 py-8 xs:px-2 xs:py-3 2xs:px-4 sm:px-4"
        method="POST"
        onSubmit={handleSubmit}
        target="hidden_iframe"
      >
        <div className="flex flex-wrap  mb-2">
          <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="model"
            >
              Name
            </label>
            <div className="relative">
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleNameChange}
                value={Name}
                autoComplete="off"
                required
              />
            </div>
          </div>
        </div>

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
                name="entry.720776302"
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
              name="entry.2100210778"
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
              name="entry.1134847007"
            />
          </div>
        </div>
        <div className="flex flex-wrap ">
          <div className="w-full px-3 mb-6 xs:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
              htmlFor="city"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
              id="city"
              type="text"
              placeholder="Where do you live?"
              onChange={handleAddressChange}
              name="entry.1627187253"
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
  );
}

export async function getStaticProps() {
  // forms
  const respo = await fetch(`https://rozy.vercel.app/api/palms`);
  const forms = await respo.json();

  const respnse = await fetch(`https://rozy.vercel.app/api/parts`);
  const partsposts = await respnse.json();

  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  return {
    props: {
      forms,
      partsposts,
      posts: uniqueMakeArray,
      cities,
    },
  };
}
