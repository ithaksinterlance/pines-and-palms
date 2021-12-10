import Image from "next/image";
import Nav from "../nav";

export default function Car({ data }) {
  return (
    <div>
      <Nav />
      <main>
        <article key={data.id}>
          <Image
            src={"/img/car-logos/" + data.logo}
            alt={data.name}
            width={100}
            height={100}
          />
          <p className="text-base">{data.name}</p>
        </article>
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { slug: post.name },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`https://rozy.vercel.app/api/${slug}`);
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
