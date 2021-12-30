import Image from "next/image";
import Nav from "../nav";

export default function Cities({ data }) {
  return (
    <div>
      <Nav />
      <main>
        <article key={data.id}>
          <p className="text-base">{data.parts}</p>
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/parts`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { slug: post.parts.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`https://rozy.vercel.app/api/parts/${slug}`);
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
