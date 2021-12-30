import Nav from "../nav";
import Link from "next/link";
import Footer from "../footer";

export default function Make({ data, cities }) {
  return (
    <div>
      <Nav />
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
            <i className="fas fa-car-garage py-5"></i> GET CAR PARTS FOR YOUR MAKES
          </h1>
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm my-10">
            <article>
              <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-4 sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
                {data.map((post) => (
                  <div key={post.id}>
                    <Link
                      href="/search-by-make/[make]"
                      as={"/search-by-make/" + post.make}
                    >
                      <a>
                        <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                          {post.make}
                        </main>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </main>
          <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">**Make not found above? <nobr className="text-blue-500 text-sm"> Get in touch with us {">>"}**</nobr></div>
        </div>
        <div className="w-1/4 text-sm font-sans xs:w-full 2xs:w-full sm:w-full    my-10">
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full text-5xl lg:text-4xl md:text-base sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-2 xs:text-xl  xl:text-lg 2xs:text-2xl px-5  text-justify font-sans">
            SEARCH PARTS BY COUNTRIES (U.A.E)
          </div>
          <div className="xs:grid xs:grid-cols-1 2xs:w-full sm:w-full md:w-full 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 py-4 sm:mt-5 lg:mx-2 xs:text-xs xl:text-lg 2xs:text-xs px-5  text-justify font-sans">
            {cities.map((post) => (
            <div key={post.id}>
              <Link href="/search-by-dubai-cities/[city]" as={"/search-by-dubai-cities/" + post.city}>
                <a>
                  <p className="text-base hover:text-blue-700 focus:text-blue-700  xs:text-center text-gray-500">
                  <i className="far fa-compass"></i>{" "}{post.city}
                  </p>
                </a>
              </Link>
            </div>
          ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://rozy.vercel.app/api/grooves`);
  const data = await res.json();
  let uniqueObjectArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: uniqueObjectArray, cities },
  };
}
