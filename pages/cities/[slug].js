import Image from "next/image";
import Nav from "../nav";

export default function Cities({ data }) {
  return (
    <div>
      <Nav />
      <main>
        <article key={data.id}>
          <p className="text-base">{data.city}</p>
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/cities`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { slug: post.city },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`https://rozy.vercel.app/api/cities/${slug}`);
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
