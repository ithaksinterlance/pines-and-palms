import Nav from "../../nav";
import Link from "next/link";
import Image from "next/image";

export default function Car({ data, brandpost }) {
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
        <div className="grid grid-cols-10 xs:ml-4 md:mx-4 sm:ml-0 xs:grid xs:grid-cols-5 sm:grid sm:grid-cols-5 2xs:grid 2xs:grid-cols-5 gap-1 2xs:mx-4 md:ml-11 mr-3 shadow-2xl my-10">
          {brandpost.map((post) => (
            <div key={post.id}>
              <Link href="/car/[slug]" as={"/car/" + post.name}>
                <a>
                  <main className="border p-1 rounded-xl focus:border-blue-600 hover:border-blue-600">
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

  const response = await fetch(`https://rozy.vercel.app/api`);
  const brandpost = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: uniqueObjectArray, brandpost },
  };
}
