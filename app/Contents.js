import Link from 'next/link';
import React from 'react';

export default function Contents() {
  return (
    <div>
      <div className="px-2 font-sans">
        <h6 className="text-3xl font-extrabold mx-auto my-5 text-blue-700 uppercase">
          5 ways you can find parts for your car.
        </h6>
        There are 5 ways you can try finding spare parts for your car.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Traditional way its pros and cons
        </p>
        You find a spare parts shop nearby and go and purchase and the work is
        done. In this case, the pros is that you find nearby automotive store to
        have similar brands you have and thats it you purchase it with ease. But
        the cons is when you don't find the nearby shop to have the car brand
        which you are using. There are shop who only deal with certain parts
        like the shop A sells only in honda, Mazda, BMW and shop B sells only
        Audi, Lincoln and Ferrari. So to see for next option, you can opt for
        shopping from Giant E-commerce company like Amazon, EBay, Flipkart etc.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Giant E-commerce Company its pros and cons:
        </p>
        If you don&apos;t find spare parts nearby your house location, generally
        we move on to search on internet. You search for top companies selling
        spare parts online and you end up in giant e-commerce company like
        Amazon, Flipkart,Ebay etc. Now you see the review of person who has
        already ordered spare parts. Most of the reviews says the parts were
        broken. These giant company has a very big logistics that they are
        vulnerable to be broken during or even get lost during the check-in
        process. So it is not always safe to buy spare parts from giant
        e-commerce company. Hence we see for other option which is the Local
        dealers.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Local Dealers
        </p>
        Local dealers are known through other person like through friends and
        family. Or he gives you his business card and he explains you directly
        the car brands he deals with. However with the current digital
        advancement, the local dealers are decreasing gradually. So we move to
        the next option to search on online marketplace.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Online Marketplace (Only CONS!)
        </p>
        Through Online marketplace we find spare parts for our car easily. But
        it also has lots of cons. If you search for very latest model used spare
        parts, it will not be available on marketplace. In this case you have to
        contact the car brand company directly. If you search for very old
        model, it will not be available with most of the car brands company
        itself because old models are mostly out of stock and they concentrate
        on new latest models for the best sale. And also there are more spam
        issues reported from those who purchase from small vendor marketplace
        and also the larger companies. In this case you should go for Online
        dealer website.
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Online Dealer Website ONLY PROS!
        </p>
        Online dealers website is the easiest way to order spare parts. You
        visit a bunch of site online and submit your inquiries therein and
        dealers will contact you back through the contact information you
        submitted. If one website didnt reply you, then other website will do.
        So there is plenty of website and options. Emirates-car.com is one such
        website which accept online inquiries. It deals with parts and
        accessories for honda accord, Honda civic and{' '}
        <Link
          href="https://emirates-car.com/search-by-make/Honda"
          className="text-blue-500 underline hover:text-blue-900"
        >
          other honda models, Infiniti models, BMW models, Audi models and many
          other brands. Visit to search parts you need.
        </Link>
      </div>
      <div className="px-2">
        <h6 className="text-3xl font-extrabold mx-auto my-5">
          Team Genuine Vs Team Aftermarket
        </h6>
        <p className="text-xl  text-black mx-auto my-5 font-bold">
          Aftermarket parts are better to buy for many reasons:
        </p>
        <ol className="list-disc text-xl  text-black mx-auto">
          <li>It is more affordable than genuine parts</li>
          <li>Some genuine parts are similar to genuine parts itself.</li>
          <li>
            It is readily available because it is equivalently manufactured to
            genuine parts.
          </li>
          <li>
            Aftermarket parts can have more manufacturers than genuine parts
            which can be only from one main manufacturer
          </li>
        </ol>
        <p className="text-xl list-disc  text-black mx-auto my-5 font-bold">
          Aftermarket parts are better to buy for many reasons:
        </p>
        <ol className="list-disc text-xl  text-black mx-auto">
          <li>It is more affordable than genuine parts</li>
          <li>
            Aftermarket parts are not regularized or standardized because it is
            manufactured as a duplicate to genuine parts.
          </li>
          <li>Genuine parts are best in quality than aftermarket parts. </li>
          <li>
            Genuine parts have warranty unlike aftermarket parts which has no
            Warranty
          </li>
        </ol>
        <p className="text-xl  text-black mx-auto">
          However, if you weigh your pros and cons and which kind of parts you
          really need, you can come to the best conclusion yourself. And we can
          serve you with both kind of parts.
        </p>
      </div>
      <div className="px-2">
        <h2 className="text-3xl font-extrabold mx-auto my-5">
          Best Auto Parts with High Quality standards:
        </h2>
        <h6 className="text-xl  text-black mx-auto my-5 font-bold">
          We deal in all Automotive GCC parts Online:
        </h6>
        The geographic scope of GCC includes Saudi Arabia, United Arab Emirates,
        Kuwait, Qatar, Oman and Bahrain. They have automotive scope of Suppliers
        of Original Equipment and Original Equipment Manufacturer for
        aftermarket auto body parts. 6 Auto parts categories were analysed and
        high focus were given to replacement parts. The six auto parts includes,
        crash repair parts, Wear & Tear parts, Mechanical parts, Electrical and
        electronic parts, consumables and accessories and service parts. After
        analysis, the following parts were considered the most High replacement
        parts.
        <ol className="list-disc text-xl  text-black mx-auto">
          <li>Brake Pads sets</li>
          <li>Brake disc sets</li>
          <li>Shock absorbers</li>
          <li>Fan / Drive belts</li>
          <li>Timing belts</li>
          <li>Batteries</li>
          <li>Wiper blade sets</li>
          <li>Spark plug sets</li>
          <li>Fuel filters</li>
          <li>Oil filters</li>
          <li>Transmission filters </li>
          <li>Air filters</li>
          And the following parts were considered the most re-manufacturing
          parts:
          <ol className="list-disc text-xl  text-black mx-auto">
            <li>Air Conditioning Compressor</li>
            <li>Starters</li>
            <li>Alternators</li>
            <li>Wiper Motors</li>
            <li>Water Pumps</li>
            <li>Engine parts</li>
            <li>ECUs</li>
          </ol>
        </ol>
      </div>
    </div>
  );
}
