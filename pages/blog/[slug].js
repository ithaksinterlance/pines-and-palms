import BLOG from "../../blog";
import RelatedPost from "./relatedpost";
import Navbar from "../nav";
import Footer from "../footer";

export default function Post({ data }) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto w-full xs:m-0">
        <div className="w-full p-4">
          <div className="flex xs:grid xs:grid-cols-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
            <div className="w-3/4 xs:w-full sm:w-full md:w-full 2xs:w-full shadow-md xs:shadow-none p-5 xs:p-2">
              <div className="bg-blue-200 h-72 text-center rounded-xl text-white text-base font-extrabold flex items-center justify-center">
                HEADER-IMAGES
              </div>
              <h3 className="font-bold mb-2 text-5xl xs:text-md pt-10">
                {data.TITLE}
              </h3>
              <p className="text-sm text-gray-400 font-semibold uppercase pb-5 xs:text-xs">
                {data.TIME} - {data.DATE_PUBLISHED}
              </p>
              <div className="text-base text-justify font-mono">{data.CONTENT}</div>
              <div className="flex py-5">
                <div className="h-10 w-10 rounded-full bg-gray-500"></div>
                &nbsp;
                <div>
                  <p className="text-base xs:text-md font-normal pt-2">
                    <b>Author:</b> {data.AUTHOR}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/4 p-4 xs:p-2 xs:w-full md:w-full sm:w-full 2xs:w-full">
              <RelatedPost />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`https://rozy.vercel.app/api/blog`);
  const data = await res.json();
  const paths = data.map((post) => ({
    params: { slug: post.TITLE },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`https://rozy.vercel.app/api/blog/${slug}`);
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
