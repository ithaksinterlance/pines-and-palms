import Nav from "../../../../nav";
import Head from "next/head";

export default function Car({ data }) {
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <Head>
            <title>
              {post.make} - {post.model} ({post.year})
            </title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
        </div>
      ))}

      <Nav />
      <main>
        {data.map((post) => (
          <div key={post.id}>
            <article>
              <main className="border p-1 rounded-xl">
                <p className="text-xs xs:text-center text-gray-500">
                  {post.model}
                  {post.year}
                  {post.make}
                </p>
              </main>
            </article>
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/pines`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: {
      year: post.year.toString(),
      make: post.make.toString(),
      model: post.model.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { year, make, model } = params;

  const res = await fetch(
    `https://rozy.vercel.app/api/pines/${year}/${make}/${model}`
  );
  const data = await res.json();
  console.log(data.make);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
