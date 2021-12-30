import Nav from "../nav";
import Link from "next/link";

export default function Car({ posts }) {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10">
        {posts.map((post) => (
          <div key={post.id}>
            <Link href="/choose/[year]" as={"/choose/" + post.year}>
              <a>
                <main className="border p-1 rounded-xl">
                  <p className="text-xs xs:text-center text-gray-500">
                    {post.year}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}</div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://rozy.vercel.app/api/pines`);
  const posts = await res.json();

  let uniqueObjectArray = [
    ...new Map(posts.map((item) => [item["year"], item])).values(),
  ];

  return {
    props: { posts: uniqueObjectArray
    },
  };
}
