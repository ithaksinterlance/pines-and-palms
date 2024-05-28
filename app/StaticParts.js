import Link from 'next/link';
import React from 'react';

export default function StaticParts() {
  return (
    <div>
      <div className="grid grid-cols-7 md:grid-cols-5 lg:grid-cols-7 mx-10 md:mx-4 sm:mx-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-5 xxs:grid xxs:grid-cols-5 s:grid s:grid-cols-3 gap-1 xs:mx-4 s:mx-4 xxs:mx-4 md:ml-11 my-10">
        <div>
          <Link href="/search-by-part-name/ABS">
            <div className="border-blue-800 h-full  hover:border-blue-900 py-3 bg-gray-100">
              <p className="text-center text-blue-600 font-medium hover:text-gray-800">
                Abu Dhabi
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
