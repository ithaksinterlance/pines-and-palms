import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default class footer extends Component {
  render() {
    return (
      <div>
        <div className="py-6 bg-blue-500">
          <h1 className="text-3xl mx-auto xs:text-sm text-white uppercase text-center font-bold 2xs:text-base md:text-xl lg:text-2xl">
            COULD&apos;NT FIND YOUR DESIRED AUTO PARTS? CONTACT US NOW {">>"}
          </h1>
        </div>
        <div className=" bg-purple-700 text-white pt-10">
          <div className="grid grid-cols-4 xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 mx-10">
            <div className="text-center">
              <p>LOGO</p>
              <p className="pt-5 font-bold">ABOUT BRAND NAME</p>
              <p className="text-sm xs:text-xs text-white pt-5">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p>
              <p className="pt-5">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="ml-2 text-xl leading-xl text-white opacity-75"
                />
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="ml-2 text-xl leading-xl text-white opacity-75"
                />
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="ml-2 text-xl leading-xl text-white opacity-75"
                />
              </p>
            </div>

            <div className="text-center text-base font-medium">
              <div >
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d462423.69677338307!2d55.0367571!3d25.1125178!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1625891911862!5m2!1sen!2sin"
                width="100%"
                height="150"
                style={{ border: "0" }}
                title="auto spare parts dubai"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="text-center text-base font-medium">
              <div>
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
              <div>
                <a href="#">Link 1</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
