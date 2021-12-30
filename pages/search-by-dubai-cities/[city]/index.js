import Nav from "../../nav";
import Footer from "../../footer";
import $ from "jquery";
import React, { useState } from "react";
import Head from "next/head";

export default function City({ data, partspost }) {
  const [myclass, changeclass] = useState("");

  const handleAddField = () => {
    changeclass(
      `w-96 xs:w-3/4 px-3 mb-6 xs:mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs'`
    );
  };
  function handleHaksId() {
    var markup =
      "<div className='w-96 xs:w-3/4 px-3 mb-6 xs:mb-0'><input type='text' placeholder='Part Name' name='entry.1660104041' autoComplete='off' id='partname' required /></div>";
    var form =
      "w-96 xs:w-3/4 px-3 mb-6 xs:mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs'";
    React.createElement(form, markup);
  }
  function submitForm() {
    var submitted = true;
    if (submitted) {
      event.preventDefault();
      var email = document.getElementById("email").value;
      var make = document.getElementById("make").value;
      var model = document.getElementById("model").value;
      var year = document.getElementById("year").value;
      var partname = $("input[id='partname']")
        .map(function() {
          return $(this).val();
        })
        .get();

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
        "Year:" +
        year +
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
      return submitted;
    }
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
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <iframe
              src={data.link}
              width="100%"
              height={300}
              allowFullScreen="null"
              loading="lazy"
            ></iframe>
            <div className="grid grid-cols-2">
              <p className="text-base font-medium text-gray-500 p-5">
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
                className="w-full max-w-lg  shadow-xl px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4"
                method="POST"
                action="https://docs.google.com/forms/d/e/1FAIpQLSeIJu3dIAVWI2YjuO2bv31unQiJf4frrpb3IyVObr_05fmxoA/formResponse"
                target="hidden_iframe"
                onSubmit={submitForm}
              >
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="whatsappno"
                    >
                      Make
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="year"
                      type="text"
                      name="entry.741646505"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                  <div className="w-full px-3 mb-6 xs:mb-0 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="whatsappno"
                    >
                      Model
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="model"
                      type="text"
                      name="entry.402947466"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
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
                      autoComplete="off"
                      name="entry.113755516"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-96 xs:w-3/4 px-3 mb-6 xs:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="partname"
                    >
                      PART NAME
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="partname"
                      type="text"
                      placeholder="Part Name"
                      name="entry.1660104041"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="w-4 xs:w-1/4 mt-5  xs:py-2">
                    <button type="button" id="haks_add " onClick={handleHaksId}>
                      <i
                        className="fa fa-plus-circle text-5xl xs:text-xl xs:mt-3 text-blue-600"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <div className={` ${myclass}`} onClick={handleAddField}></div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
                >
                  Submit
                </button>
                <div className="flex float-right text-xs text-gray-400">
                  100% secure and trusted
                </div>
              </form>
            </div>
          </main>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  text-justify font-sans">
            PARTS IN {data.city}
          </div>
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5  text-justify font-sans">
            SEARCH BY PART NAME
          </div>
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5  text-justify font-sans">
            {partspost.map((post) => (
              <div key={post.ID}>
                <a>
                  <p className="text-base hover:text-blue-700 focus:text-blue-700  xs:text-center text-gray-500">
                    <i className="far fa-compass"></i> {post.PARTS}
                  </p>
                </a>
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

  const partsres = await fetch(`https://rozy.vercel.app/api/parts`);
  const partspost = await partsres.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, partspost },
  };
}
