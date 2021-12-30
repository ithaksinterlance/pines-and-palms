import Nav from "../../../nav";
import Footer from "../../../footer";
import $ from "jquery";
import React, {useState} from "react";

export default function Car({ data }) {
  const [myclass, changeclass] = useState("");

  const handleAddField = () => {
    changeclass(
      `w-96 xs:w-3/4 px-3 mb-6 xs:mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs'`
    );
  };
  function handleHaksId() {
    var markup =
      "<div className='w-96 xs:w-3/4 px-3 mb-6 xs:mb-0'><input type='text' placeholder='Part Name' name='entry.1660104041' autoComplete='off' id='partname' required /></div>";
    var form = "w-96 xs:w-3/4 px-3 mb-6 xs:mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs'";
    React.createElement(form, markup)
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
      <main>
        <article key={data.id}>
          {data.map((post) => (
            <div key={post.id}>
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
                      defaultValue={post.make}
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
                      defaultValue={post.model}
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
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/palms`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { make: post.make.toString(), model: post.model.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { make, model } = params;

  const res = await fetch(
    `https://rozy.vercel.app/api/grooves/${make}/${model}`
  );
  const uniqueObjectArray = await res.json();

  let data = [
    ...new Map(uniqueObjectArray.map((item) => [item["model"], item])).values(),
  ];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
