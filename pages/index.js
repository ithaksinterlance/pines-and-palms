import Nav from "./nav";
import Hero from "./home_hero";
import Form from "./form";
import About from "./about";
import Footer from "./footer";
import Link from "next/link";
import Image from "next/image";

export default function Home({posts}) {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <div className="grid grid-cols-2 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 sm:grid sm:grid-cols-1 md:grid-cols-1 xs:-ml-0 sm:-ml-0 2xs:ml-2">
        <Form />
        <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href="/car/[slug]" as={"/car/" + post.name}>
              <a>
                <main className="border p-1 rounded-xl">
                  <Image
                    alt={post.name}
                    src={"/img/car-logos/" + post.logo}
                    className="object-scale-down xs:object-fit xs:ml-4"
                    height={30}
                    width={30}
                  />
                  <p className="text-xs xs:text-center text-gray-500">
                    {post.name}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`https://rozy.vercel.app/api`);
  const posts = await res.json();

  return {
    props: {  posts },
  };
}
