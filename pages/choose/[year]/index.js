import Nav from "../../nav";
import Link from "next/link";

export default function Car({ data }) {
  return (
    <div>
      <Nav />
      <main>
        <article key={data.id}>
        {data.map((post) => (
          <div key={post.id}>
            <Link href="/choose/[year]/[make]" as={"/choose/"+post.year +"/"+ post.make}>
              <a>
                <main className="border p-1 rounded-xl">
                  <p className="text-xs xs:text-center text-gray-500">
                    {post.make}
                  </p>
                </main>
              </a>
            </Link>
          </div>
        ))}
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/pines`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { year: post.year.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year } = params;

  const res = await fetch(`https://rozy.vercel.app/api/pines/${year}`);
  const data = await res.json();
  let uniqueObjectArray = [
    ...new Map(data.map((item) => [item["make"], item])).values(),
  ];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: uniqueObjectArray },
  };
}
