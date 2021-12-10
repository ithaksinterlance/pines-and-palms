import Link from "next/link";
import Footer from "../footer";
import RelatedPost from "./relatedpost";
import Nav from "../nav";

export default function Blog({ posts }) {
  return (
    <>
      <div>
        <Nav />
        <div className="container mx-auto w-full">
          <div className="grid grid-cols-4 gap-3 p-3 xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-2 2xs:grid 2xs:grid-cols-2 ">
            <div className="shadow-md py-3 text-base p-3 text-center rounded-lg bg-gray-200">
              <a href="#">
                <i
                  className="fa fa-2x fa-car text-blue-700"
                  aria-hidden="true"
                ></i>
                <br /> Lorem Category 1
              </a>
            </div>
            <div className="shadow-md py-3 text-base p-3 text-center rounded-lg bg-gray-200">
              <a href="#">
                <i
                  className="fa fa-2x fa-car text-blue-700"
                  aria-hidden="true"
                ></i>
                <br /> Lorem Category 2
              </a>
            </div>
            <div className="shadow-md py-3 text-base p-3 text-center rounded-lg bg-gray-200">
              <a href="#">
                <i
                  className="fa fa-2x fa-car text-blue-700"
                  aria-hidden="true"
                ></i>
                <br /> Lorem Category 3
              </a>
            </div>
            <div className="shadow-md py-3 text-base p-3 text-center rounded-lg bg-gray-200">
              <a href="#">
                <i
                  className="fa fa-2x fa-car text-blue-700"
                  aria-hidden="true"
                ></i>
                <br /> Lorem Category 4
              </a>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
              <div className="w-3/4 xs:w-full sm:w-full 2xs:w-full">
                {posts.map((post) => (
                  <div key={post.TITLE}>
                    <Link href={`/blog/${post.TITLE}`}>
                      <a>
                        <div className="py-3">
                          <div className="border border-gray-200 p-3 rounded-sm">
                            <div className="w-full bg-blue-200 h-80 rounded-xl text-white items-center text-center flex justify-center font-bold">
                              BLOG-IMG 1
                            </div>{" "}
                            <p className="text-4xl xs:text-lg sm:text-md md:text-lg font-bold font-sans pt-5 text-blue-500">
                              {post.TITLE}{" "}
                              <i className="fa fa-link" aria-hidden="true"></i>{" "}
                            </p>{" "}
                            <p className="text-sm text-gray-400 font-semibold uppercase pb-5 xs:pb-3 xs:text-xs">
                              {post.TIME} - {post.DATE_PUBLISHED}
                            </p>
                            <hr className="py-2" />
                            <div className="flex pb-5 xs:py-1">
                              <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                              <p className="text-base xs:text-md font-normal pt-2 px-2">
                                <b>Author:</b> {post.AUTHOR}
                              </p>
                              &nbsp;
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
                  </div>
                ))}
                <div className="text-4xl font-serif font-bold pt-5 pb-2">
                  Popular Posts
                </div>
                <div className="grid grid-cols-2 gap-4 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 py-5">
                  <div className="shadow-2xl rounded-sm">
                    <div className="flex">
                      <div className="w-1/2 bg-blue-300 flex items-center justify-center text-center">
                        --IMG--
                      </div>
                      <div className="w-1/2 text-xs p-4 font-mono">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from
                      </div>
                    </div>
                  </div>
                  <div className="shadow-2xl rounded-sm">
                    <div className="flex">
                      <div className="w-1/2 bg-purple-300 flex items-center justify-center text-center">
                        --IMG--
                      </div>
                      <div className="w-1/2 text-xs p-4 font-mono">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 py-5">
                  <div className="shadow-2xl rounded-sm">
                    <div className="flex">
                      <div className="w-1/2 bg-red-300 flex items-center justify-center text-center">
                        --IMG--
                      </div>
                      <div className="w-1/2 text-xs p-4 font-mono">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from
                      </div>
                    </div>
                  </div>
                  <div className="shadow-2xl rounded-sm">
                    <div className="flex">
                      <div className="w-1/2 bg-indigo-300 flex items-center justify-center text-center">
                        --IMG--
                      </div>
                      <div className="w-1/2 text-xs p-4 font-mono">
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-1/4 xs:w-full sm:w-full 2xs:w-full">
                <RelatedPost />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://rozy.vercel.app/api/blog`);
  const posts = await res.json();

  return {
    props: { posts },
  };
}
