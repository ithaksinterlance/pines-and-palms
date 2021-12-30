import Nav from "../../../nav";
import Head from "next/head";
import Link from "next/link";

export default function Car({ data }) {
  return (
    <div>
      {data.map((post) => (
        <Head key={post.id}>
          <title>
            {post.make} ({post.year})
          </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      ))}
      <Nav />
      <main>
        <article>
          {data.map((post) => (
            <div key={post.id}>
              <Link
                href="/choose/[year]/[make]/[model]"
                as={"/choose/" + post.year + "/" + post.make + "/" + post.model}
              >
                <a>
                  <main className="border p-1 rounded-xl">
                    <p className="text-xs xs:text-center text-gray-500">
                      {post.model}
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
    params: { year: post.year.toString(), make: post.make.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year, make } = params;

  const res = await fetch(`https://rozy.vercel.app/api/pines/${year}/${make}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
