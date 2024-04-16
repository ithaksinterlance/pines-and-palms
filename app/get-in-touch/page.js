import React from 'react';
import Link from 'next/link';
import Footer from '../footer';
import Social from '../Social';
import { getFormModel, getParts } from '../page';
import FormComponent from '../FormComponent';
import GetInTouchForm from './GetInTouchForm';

export default async function Forms() {
  const partspost = await getParts();
  const modelsform = await getFormModel();
  return (
    <div>
      <div className="container place-content-center mx-auto py-6">
        <div className="uppercase bg-blue-200 font-serif p-5 text-center text-3xl text-blue-900 font-extrabold xs:text-base xs:w-screen s:text-2xl 2xs:text-2xl ">
          <Social />
          <div>
            &nbsp;
            <span>
              <Link
                href="/search-by-part-name"
                className="underline xs:no-underline hover:text-blue-500 text-2xl text-blue-900 font-extrabold xs:text-base s:text-base 2xs:text-base"
              >
                SEARCH BY PART NAME
              </Link>
            </span>
            | &nbsp;
            <span>
              <Link
                href="/search-by-cities-in-uae"
                className="underline xs:no-underline hover:text-blue-500 text-2xl text-blue-900 font-extrabold xs:text-base s:text-base 2xs:text-base"
              >
                SEARCH BY CITY
              </Link>
            </span>
            | &nbsp;
            <span>
              <Link
                href="/search-by-make"
                className="underline xs:no-underline hover:text-blue-500 text-2xl text-blue-900 font-extrabold xs:text-base s:text-base 2xs:text-base "
              >
                SEARCH BY MAKE
              </Link>
            </span>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="/honda-accord-8th-gen-parts"
            className="underline animate-pulse text-red-600 hover:text-red-800"
          >
            {' '}
            Check Offers On Honda Accord 8th Generation 2008, 2009, 2010, 2011,
            2012
          </Link>
        </div>

        <div className="flex s:grid s:grid-cols-1 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 shadow-2xl ">
          <GetInTouchForm/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
