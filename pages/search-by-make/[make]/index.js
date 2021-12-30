import Nav from "../../nav";
import Link from "next/link";
import Footer from "../../footer";

export default function Car({ data, cities, make, pos }) {
  return (
    <div>
      <Nav />
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm">
            <article>
              <div>
                <div className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-blue-400 font-bold py-4 sm:mt-5 md:mt-5 lg:mx-0 xs:text-xs xl:text-lg 2xs:text-xs px-5 text-justify">
                  CHOOSE YOUR
                  <nobr className="text-blue-700 text-3xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                    &nbsp;{make}{" "}
                  </nobr>
                  MODEL
                </div>
              </div>
              <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-4 sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
                {data.map((post) => (
                  <div key={post.id}>
                    <Link
                      href="/search-by-make/[make]/[model]"
                      as={"/search-by-make/" + post.make + "/" + post.model}
                    >
                      <a>
                        <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                          {post.model}
                        </main>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </main>
          <div className="text-center mt-2 text-red-400 text-sm xs:text-xs">**Model not found above? <nobr className="text-blue-500 text-sm"> Get in touch with us {">>"}**</nobr></div>

          <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10 my-10">
            SEARCH BY YEAR
          </h1>
          <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10 font-mono">
            {pos.map((post) => (
              <div key={post.id}>
                <Link href="/choose/[year]" as={"/choose/" + post.year}>
                  <a>
                    <main className="border p-1 rounded-xl hover:border-blue-600 focus:border-blue-600">
                      <p className="text-xs xs:text-center text-gray-500">
                        {post.year}
                      </p>
                    </main>
                  </a>
                </Link>
              </div>
            ))}
          </div>
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
      <Footer/>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/palms`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { make: post.make },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { make } = params;

  const res = await fetch(`https://rozy.vercel.app/api/grooves/${make}`);
  const data = await res.json();
  let uniqueObjectArray = [
    ...new Map(data.map((item) => [item["model"], item])).values(),
  ];
  const resp = await fetch(`https://rozy.vercel.app/api/pines`);
  const pos = await resp.json();

  let uniqueYear = [
    ...new Map(pos.map((item) => [item["year"], item])).values(),
  ];
  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: uniqueObjectArray, cities, make, pos: uniqueYear },
  };
}
