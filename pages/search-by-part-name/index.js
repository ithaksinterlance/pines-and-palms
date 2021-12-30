import Nav from "../nav";
import Footer from "../footer";
import Image from "next/image";
import parts from "../../public/img/car-spare-parts.png";
import Link from "next/link";

export default function Make({ posts }) {
  return (
    <div>
      <Nav />
      <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1  xs:mx-auto">
        <div className="w-3/4 2xs:w-full xs:w-full sm:w-full">
          <h1 className="text-blue-600 text-4xl md:text-lg lg:text-2xl font-extrabold xs:text-base 2xs:text-xs mx-10">
             <Image src={parts} alt="auto spare parts in dubai" height={70} width={70}/> SEARCH YOUR PART NAME
          </h1>
          <main className="mx-10 xs:mx-4 2xs:mx-4 sm:mx-4 md:mx-5 mt-10 border border-gray-100 shadow-sm my-10">
            <article>
              <div className="grid grid-cols-4 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-4 sm:grid sm:grid-cols-4 md:grid md:grid-cols-3 2xs:grid 2xs:grid-cols-3 gap-1 2xs:mx-4 md:ml-11 mr-3 my-10 ">
                {posts.map((post) => (
                  <div key={post.ID}>
                    <Link
                      href="/search-by-part-make/[slug]"
                      as={"/search-by-part-make/" + post.parts}
                    >
                      <a>
                        <main className="text-center text-base xs:text-xs xs:text-center font-mono text-blue-500 underline hover:text-blue-700 focus:text-blue-700 border border-gray-100">
                          {post.parts}
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

  const res = await fetch(`https://rozy.vercel.app/api/parts`);
  const posts = await res.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
}
