import React, { Component } from "react";
import Navbar from "../nav";

export default class relatedpost extends Component {
  render() {
    return (
      <div>
        <div className="m-4 xs:m-1 ">
          <div className="flex justify-center items-center">
            <div className="h-20 w-20 bg-gray-400 rounded-full py-3"></div>
          </div>
          <hr className="py-1 mt-2" />
          <div className="text-xs text-center uppercase">RELATED POST</div>
          <ul>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <a href="#">
                Lorem ipsum post 1
                <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                  3 days ago - 7 min read
                </p>
              </a>
            </li>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <a href="#">
                Lorem ipsum post 2
                <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                  10 days ago - 3 min read
                </p>
              </a>
            </li>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <a href="#">
                Lorem ipsum post 3
                <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                  6 days ago - 9 min read
                </p>
              </a>
            </li>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <a href="#">
                Lorem ipsum post 4
                <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                  3 days ago - 5 min read
                </p>
              </a>
            </li>
            <li className="py-5 my-5 border-gray-400 shadow-md p-4">
              <a href="#">
                Lorem ipsum post 5
                <p className="text-gray-300 text-xs font-bold uppercase pt-2">
                  8 days ago - 2 min read
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
