import Nav from "../nav";
import Link from "next/link";
import Footer from "../footer";

export default function City({ cities }) {
  return (
    <div>
      <Nav />
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm my-10">
            <article>

              <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10 ">
                &nbsp;&nbsp;
                <nobr className="text-blue-700 text-6xl md:text-4xl xs:text-sm lg:text-2xl sm:text-xl">
                  &nbsp;<i className="fa fa-map-pin" aria-hidden="true"></i>
                </nobr>
                SELECT YOUR CITY IN U.A.E
              </h1>

              <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-4 sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
                {cities.map((post) => (
                  <div key={post.id}>
                    <Link
                      href="/search-by-dubai-cities/[city]"
                      as={"/search-by-dubai-cities/" + post.city}
                    >
                      <a>
                        <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                          {post.city}
                        </main>
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </article>
          </main>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  if (!cities) {
    return {
      notFound: true,
    };
  }

  return {
    props: { cities },
  };
}
