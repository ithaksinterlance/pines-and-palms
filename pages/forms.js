import React, { useState } from "react";

export default function Forms() {
  const [Make, setMake] = useState("");
  const [Model, setModel] = useState("");
  const [Email, setEmail] = useState("");
  const [Whatsappno, setWhatsappno] = useState("");
  const [Partname, setPartname] = useState("");

  function handleMakeChange(event) {
    setMake(event.target.value);
    console.log(Make);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
    console.log(Model);
  }
  function handleWhatsAppNoChange(event) {
    setWhatsappno(event.target.value);
    console.log(Whatsappno);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
    console.log(Email);
  }
  function handlePartChange(event) {
    setPartname(event.target.value);
    console.log(Partname);
  }
  async function handleSubmit(event) {
    event.preventDefault();

    var email = Email;
    var make = Make;
    var model = Model;
    var partname = Partname;
    var whatsappno = Whatsappno;

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
        year: "___",
        partnumber: "___",
        partname: partname,
        city: "___",
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
    var aTag = document.createElement("a");
    aTag.setAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=+971551478994&text=${messageURI}`
    );
    window.open(aTag, "_blank").focus();
  }
  return (
    <div>
      <iframe
        title="Auto spare parts in uae"
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>
      <form
        onSubmit={handleSubmit}
        className="mx-6"
        method="POST"
        action="https://docs.google.com/forms/d/e/1FAIpQLSeIJu3dIAVWI2YjuO2bv31unQiJf4frrpb3IyVObr_05fmxoA/formResponse"
        target="hidden_iframe"
      >
        <label
          htmlFor="make"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
        >
          Make
        </label>
        <input
          id="make"
          name="entry.741646505"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
          type="text"
          onChange={handleMakeChange}
          value={Make}
          required
        />

        <label
          htmlFor="model"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
        >
          Model
        </label>
        <input
          id="model"
          name="entry.44547744"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
          type="text"
          onChange={handleModelChange}
          value={Model}
          required
        />

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
          onChange={handleWhatsAppNoChange}
          value={Whatsappno}
          required
        />

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
          onChange={handleEmailChange}
          value={Email}
          required
        />

        <label
          htmlFor="partname"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
        >
          Part Name
        </label>
        <input
          id="partname"
          name="entry.1660104041"
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 xs:py-1 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
          type="text"
          onChange={handlePartChange}
          value={Partname}
          required
        />

        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
