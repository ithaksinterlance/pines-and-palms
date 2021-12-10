import Nav from "../../../nav";

export default function Car({ data }) {
  return (
    <div>
      <Nav />
      <main>
        <article key={data.id}>
        {data.map((post) => (
          <div key={post.id}>
              <a>
                <main className="border p-1 rounded-xl">
                  <p className="text-xs xs:text-center text-gray-500">
                    {post.model}
                  </p>
                </main>
              </a>
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
