import Nav from "./nav";
import Hero from "./home_hero";
import Form from "./form";
import About from "./about";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

export default function Home({ posts, post, pos, carLogos, cities }) {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-1 xs:-ml-0 sm:-ml-0 2xs:ml-2">
        <Form />
        <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10">
          {carLogos.map((post) => (
            <div key={post.id}>
              <main className="border p-1 rounded-xl">
                <Image
                  alt={post.name}
                  src={"/img/car-logos/" + post.logo}
                  className="object-scale-down xs:object-fit xs:ml-4"
                  height={40}
                  width={40}
                />
                <p className="text-xs xs:text-center text-gray-500">
                  {post.name}
                </p>
              </main>
            </div>
          ))}
        </div>
      </div>
      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY MAKE
      </h1>
      <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        {post.map((data) => (
          <div key={data.id}>
            <Link
              href="/search-by-make/[make]"
              as={"/search-by-make/" + data.make}
            >
              <a>
                <main className="border p-1 rounded-xl hover:border-blue-600 hover:shadow-lg focus:border-blue-600">
                  <p className="text-xs xs:text-center text-gray-500">
                    {data.make}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY YEAR
      </h1>
      <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        {pos.map((post) => (
          <div key={post.id}>
            <Link href="/choose/[year]" as={"/choose/" + post.year}>
              <a>
                <main className="border p-1 rounded-xl hover:border-blue-600 hover:shadow-lg focus:border-blue-600">
                  <p className="text-xs xs:text-center text-gray-500">
                    {post.year}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
        SEARCH BY DUBAI CITIES
      </h1>
      <div className="grid grid-cols-8 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10 mx-10">
        {cities.map((post) => (
          <div key={post.id}>
            <Link
              href="/search-by-dubai-cities/[city]"
              as={"/search-by-dubai-cities/" + post.city}
            >
              <a>
                <main className="border p-1 rounded-xl hover:border-blue-600 hover:shadow-lg focus:border-blue-600">
                  <p className="text-xs xs:text-center text-gray-500">
                    {post.city}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch(`https://rozy.vercel.app/api/grooves`);
  const post = await response.json();
  let uniqueMake = [
    ...new Map(post.map((item) => [item["make"], item])).values(),
  ];

  const resp = await fetch(`https://rozy.vercel.app/api/pines`);
  const pos = await resp.json();

  let uniqueObjectArray = [
    ...new Map(pos.map((item) => [item["year"], item])).values(),
  ];
  const res = await fetch(`https://rozy.vercel.app/api`);
  const posts = await res.json();

  const carLogo = await fetch(`https://rozy.vercel.app/api/car-logos`);
  const carLogos = await carLogo.json();

  const cityresponse = await fetch(`https://rozy.vercel.app/api/cities`);
  const cities = await cityresponse.json();

  return {
    props: {
      posts,
      post: uniqueMake,
      pos: uniqueObjectArray,
      carLogos,
      cities,
    },
  };
}
