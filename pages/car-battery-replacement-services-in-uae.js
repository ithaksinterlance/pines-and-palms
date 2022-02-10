import React, { useState, useEffect } from "react";
import Navbar from "./nav";
import Footer from "./footer";

export default function CarBatteryDubai({ forms }) {
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [Address, setAddress] = useState("");
  const [Name, setName] = useState("");

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
  function handleNameChange(event) {
    setName(event.target.value);
  }
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

  function Submission(e) {
    e.preventDefault();
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
    const response = fetch(`/api/battery_sheets`, {
      method: "POST",
      body: JSON.stringify({
        Timestamp: dateTime,
        name: Name,
        brand: Make,
        model: Model,
        area: Address,
        contact: "971" + Whatsappno,
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
      "Model: " +
      Model + "\n" +
      "Contact:" +
      Whatsappno +
      "\n" +
      "Customer Name: " +
      Name +
      "\n" +
      "Address: " +
      Address +

    alert("Form submitted. We will contact you shortly ;)");
    let messageURI = encodeURI(message);
    setName("");
    setMake("");
    setModel("");
    setAddress("");
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
      <Navbar />
      <h1 className="text-6xl xs:text-4xl text-blue-700 font-bold text-center mt-10">
        CAR BATTERY REPLACEMENT IN DUBAI
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xs md:mt-5 md:text-sm lg:mx-0 xs:text-sm xl:text-lg s:text-sm 2xs:text-sm font-serif">
          THE ONLY INQUIRY FORM YOU WILL NEED TO GET YOUR CAR BATTERY CHANGE ON
          SPOT IN DUBAI
        </p>
      </h1>
      <div>
        <iframe
          title="car battery replacement dubai and sharjah"
          name="hidden_iframe"
          id="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>
        <form
          id="myForm"
          className="w-full shadow-xl px-8 py-8 xs:px-2 xs:py-3 2xs:px-4 sm:px-4"
          action="https://docs.google.com/forms/d/e/1FAIpQLSd6fL_M5hLUjjBLJyMFWUijW2qNrGwQ0RxMVhpmTOEEqj3Jxg/formResponse"
          method="POST"
          onSubmit={Submission}
          target="hidden_iframe"
        >
          <div className="flex flex-wrap ">
            <div className="w-full px-3 mb-6 xs:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                htmlFor="whatsappno"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="name"
                type="text"
                placeholder="Your name"
                name="entry.1153362739"
                value={Name}
                onChange={handleNameChange}
                autoComplete="off"
                required
              />
              </div></div>
          <div className="flex flex-wrap  mb-2">

            <div className="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0 xs:mb-0">
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
                  name="entry.1911907904"
                  required="required"
                  value={Make}
                  onChange={handleMakeChange}
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
            <div className="w-1/2 md:w-1/2 pr-3">
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
                  name="entry.1541894897"
                  value={Model}
                  onChange={handleModelChange}
                  required
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
                Area Name, Emirates
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                id="whatsappno"
                type="text"
                placeholder="Area Name, Emirates"
                name="entry.1153362739"
                value={Address}
                onChange={handleAddressChange}
                autoComplete="off"
                required
              />
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
                name="entry.153243795"
                value={Whatsappno}
                onChange={handleWhatsAppNoChange}
                autoComplete="off"
                required
              />
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
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  // forms
  const respo = await fetch(`https://rozy.vercel.app/api/palms`);
  const forms = await respo.json();

  const resp = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await resp.json();
  let uniqueMakeArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];

  return {
    props: {
      forms,
      posts: uniqueMakeArray,
    },
  };
}
