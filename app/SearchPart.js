"use client";

import React, { useEffect, useState } from 'react';
import Link from "next/link";

export default function SearchPartsComponent({partsposts}) {

  const [text, setText] = useState('');
  const [suggestion, setSuggestion] = useState([]);
  const [formPartname, setFormPartname] = useState([]);

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
  });
  const onSuggestionHandler = text => {
    setText(text);
    setSuggestion([]);
  };

  const onPartFormChange = text => {
    let matches = [];
    if (text.length > 0) {
      matches = formPartname.filter(part => {
        const regex = new RegExp(`${text}`, 'gi');
        return part.match(regex);
      });
    }
    setSuggestion(matches);
    setText(text);
  };
  return (
    <div>
      {/*Search component */}

      <div className="flex justify-center">
        <div className="pt-3">
          <input
            className="border-2 border-gray-300 w-96 xs:w-full sm:mx-2 2xs:w-auto 2xs:mx-2 bg-white h-10 xs:h-6 2xs:h-6 rounded-lg text-sm focus:outline-none px-2"
            type="search"
            placeholder="Eg. AC Compressor, Radiator, Gearbox, Antenna, Door glass, Driving light..."
            onChange={e => onPartFormChange(e.target.value)}
            value={text}
            autoComplete="off"
            required
          />
          <div className="overflow-y-hidden grid grid-cols-5 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 xs:w-auto xs:mx-2 sm:w-auto sm:mx-2 2xs:w-auto 2xs:mx-2 ">
            {suggestion &&
              suggestion.map((suggestion, i) => (
                <div
                  key={i}
                  className="cursor-pointer  text-base p-1 bg-white"
                  onClick={() => onSuggestionHandler(suggestion)}
                  width="100%"
                >
                  <Link
                    href={
                      'https://emirates-car.com/search-by-part-name/' +
                      suggestion
                    }
                    target="_newtab"
                  >
                      <div>{suggestion}</div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
