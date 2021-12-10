import React, { Component } from "react";
import Nav from "./nav";
import { CARS, YEAR, MAKE } from "../car-data";
import $ from "jquery";
import Slider from "react-slick";
import Footer from "./footer";

export default class contact extends Component {
  componentDidMount = () => {
    MAKE.sort();

    const yearSelection = document.getElementById("year");
    const makeSelection = document.getElementById("make");
    const modelSelection = document.getElementById("model");

    for (let year of YEAR) {
      const option = document.createElement("option");
      option.textContent = year;
      option.value = year;
      yearSelection.appendChild(option);
    }

    for (let make of MAKE) {
      const option = document.createElement("option");
      option.textContent = make;
      option.value = make;
      makeSelection.appendChild(option);
    }

    const models = [];
    for (let car of CARS) {
      const model = car.model;
      if (models.findIndex((m) => m == model) == -1) {
        const option = document.createElement("option");
        option.className = "car-model";
        models.push(model);
        option.textContent = model;
        option.value = model;
        modelSelection.appendChild(option);
      }
    }
    const modelOptions = Object.values(document.querySelectorAll(".car-model"));

    function populateModels() {
      const selectedYear = yearSelection.value;
      const selectedMake = makeSelection.value;
      const filtered = CARS.filter(
        (car) => car.year == selectedYear && car.make == selectedMake
      );

      for (let option of modelOptions) {
        if (filtered.find((v) => v.model == option.value)) {
          option.hidden = false;
        } else {
          option.hidden = true;
        }
      }

      if (filtered.length > 0) {
        modelSelection.value = filtered[0].model;
      } else {
        modelSelection.value = "none";
      }
    }

    populateModels();
    yearSelection.onchange = () => populateModels();
    makeSelection.onchange = () => populateModels();

    $(".haks_add").on("click", function() {
      var markup =
        "<div className='w-96 xs:w-3/4 px-3 mb-6 xs:mb-0'><input type='text' placeholder='Part Name' name='entry.1660104041' autoComplete='off' id='partname' required /></div>";
      $("#add_field").addClass(
        "w-96 xs:w-3/4 px-3 mb-6 xs:mb-0 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 xs:py-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs' "
      );
      var form = $("#add_field");
      form.append(markup);
    });
    $("#myForm").submit(function(event) {
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
    });
  };
  render() {
    const settings = {
      autoplay: true,
      arrows: false,
      centerMode: true,
      autopalySpeed: 3000,
      dotsClass: "slick-dots",
      fade: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Nav/>
        <div className="container place-content-center mx-auto py-6">
          <div className="uppercase bg-blue-200 font-serif p-5 text-center text-3xl text-blue-900 font-extrabold xs:text-xl s:text-2xl 2xs:text-2xl xs:mx-5 2xs:mx-5 lg:mx-5 sm:mx-5 md:mx-5 s:mx-5">Lorem Ipsum 40% offer is simply dummy text of the printing and</div>
          <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 shadow-2xl xs:mx-5 2xs:mx-5 lg:mx-10 sm:mx-5 md:mx-5 s:mx-5">
            <div className="w-1/3 bg-blue-700 2xs:w-full xs:w-full xs:py-5">
              <Slider {...settings} className="py-10 p-2">
                <div>
                  <p className="h-10 w-10 bg-white mx-auto rounded-full"></p>
                  <p className="text-xl font-bold text-center">Lorem</p>
                  <p className="text-sm text-center pt-5">
                    {" "}
                    &quot; Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. &quot;{" "}
                  </p>
                </div>
                <div>
                  <div className="h-10 w-10 bg-white mx-auto rounded-full"></div>
                  <p className="text-xl font-bold text-center">ipsum</p>
                  <p className="text-sm text-center pt-5">
                    {" "}
                    &quot; Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. &quot;{" "}
                  </p>
                </div>
                <div>
                  <div className="h-10 w-10 bg-white mx-auto rounded-full"></div>
                  <p className="text-xl font-bold text-center">dollar</p>
                  <p className="text-sm text-center pt-5">
                    {" "}
                    &quot; Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. &quot;{" "}
                  </p>
                </div>
                <div>
                  <div className="h-10 w-10 bg-white mx-auto rounded-full"></div>
                  <p className="text-xl font-bold text-center">standard</p>
                  <p className="text-sm text-center pt-5">
                    {" "}
                    &quot; Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. &quot;{" "}
                  </p>
                </div>
              </Slider>
              <div className="py-5 p-10">
                <h1 className="text-base font-bold text-blue-700 text-center">
                  SERVICE DESCRIPTION
                </h1>
                <p className="text-sm text-white text-center pt-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </p>
              </div>

              <div className="p-5 pt-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d462423.69677338307!2d55.0367571!3d25.1125178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625891911862!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  title="auto spare parts dubai"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="w-2/3 xs:w-full md:w-full 2xs:w-full sm:w-full">
              <iframe
                title="car battery replacement uae"
                name="hidden_iframe"
                id="hidden_iframe"
                style={{ display: "none" }}
              ></iframe>
              <form
                id="myForm"
                className="w-full px-8 py-8 xs:px-4 xs:py-3 2xs:px-4 sm:px-4 bg-white"
                method="POST"
                action="https://docs.google.com/forms/d/e/1FAIpQLSeIJu3dIAVWI2YjuO2bv31unQiJf4frrpb3IyVObr_05fmxoA/formResponse"
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
                      <select
                        className="block appearance-none w-full   border-b-2 border-gray-200 text-gray-700 py-2 xs:py-1 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                        id="year"
                        name="entry.44547744"
                        required="required"
                        onChange={this.populateModels}
                      >
                        <option>Select Year</option>
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
                  <div className="w-1/2 md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="make"
                    >
                      Make
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full   border-b-2 border-gray-200 text-gray-700 py-2 xs:py-1 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
                        id="make"
                        name="entry.741646505"
                        required="required"
                        onChange={this.populateModels}
                      >
                        <option>Select Make</option>
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
                        className="block appearance-none w-full   border-b-2 border-gray-200 text-gray-700 py-2 xs:py-1 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs "
                        id="model"
                        name="entry.402947466"
                        required
                        onChange={this.populateModels}
                      >
                        <option value="none" disabled hidden>
                          No models found
                        </option>
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
                      htmlFor="whatsappno"
                    >
                      WhatsApp No
                    </label>
                    <input
                      className="appearance-none block w-full  text-gray-700 border-b-2 border-gray-200 py-2 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
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
                      className="appearance-none block w-full text-gray-700 border-b-2 border-gray-200 py-2 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="email"
                      type="text"
                      placeholder="We won't leak your mail id"
                      autoComplete="off"
                      name="entry.113755516"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3">
                  <div className="w-2/3 xs:w-3/4 px-3 mb-6 xs:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 xs:mt-3"
                      htmlFor="partname"
                    >
                      PART NAME
                    </label>
                    <input
                      className="appearance-none block w-full text-gray-700 border-b-2 border-gray-200 py-2 xs:py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 xs:text-xs"
                      id="partname"
                      type="text"
                      placeholder="Part Name"
                      name="entry.1660104041"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="w-1/3 xs:w-1/4 mt-5  xs:py-2">
                    <button type="button" className="haks_add ">
                      <i
                        className="fa fa-plus-circle text-5xl xs:text-xl xs:mt-3 text-blue-600"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </div>
                </div>
                <div id="add_field"></div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full xs:text-xs"
                >
                  Submit
                </button>
                <div className="float-right text-xs text-gray-400">
                  100% secure and trusted
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
