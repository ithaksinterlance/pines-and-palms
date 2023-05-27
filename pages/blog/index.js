import Link from 'next/link';
import Footer from '../footer';
import RelatedPost from './relatedpost';
import Nav from '../nav';
import Image from "next/legacy/image";
import Head from 'next/head';

export default function Blog({ posts }) {
  return <>
    <Head>
      <title>Blog | Emirates-car.com</title>
      <meta property="og:title" content="Blog | Emirates-car.com" />
      <meta property="og:site_name" content="Emirates-car" />
      <meta property="og:url" content="https://www.emirates-car.com" />

      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://emirates-car.com/img/car-spare-parts.png"
      />
      <meta
        property="twitter:url"
        content="https://www.emirates-car.com/blog"
      />
      <meta property="twitter:title" content="Blog | Emirates-car.com" />
      <meta
        property="twitter:image"
        content="https://emirates-car.com/img/car-spare-parts.png"
      />
    </Head>
    <div>
      <Nav />
      <div className="container mx-auto w-full">
        <div className="w-full p-4">
          <div className="flex xs:grid xs:grid-cols-1 sm:grid sm:grid-cols-1 2xs:grid 2xs:grid-cols-1">
            <div className="w-3/4 xs:w-full sm:w-full 2xs:w-full">
              {posts.map(post => (
                <div key={post.TITLE}>
                  <Link href="https://emirates-car.com/blog/${post.TITLE}" >

                      <div className="py-3">
                        <div className="border border-gray-200 p-3 rounded-sm">
                          <div className="w-full bg-blue-200 h-80 rounded-xl text-white items-center text-center flex justify-center font-bold">
                            <Image
                              alt={post.ALT}
                              src={'/img/blog/' + post.IMG}
                              width={940}
                              height={350}
                            />
                          </div>{' '}
                          <h6 className="text-4xl xs:text-lg sm:text-md md:text-lg font-bold font-sans pt-5 text-blue-500">
                            {post.TITLE}{' '}
                            <i className="fa fa-link" aria-hidden="true"></i>{' '}
                          </h6>{' '}
                          <p className="text-sm text-gray-400 font-semibold uppercase pb-5 xs:pb-3 xs:text-xs">
                            {post.TIME} - {post.DATE_PUBLISHED}
                          </p>
                          <hr className="py-2" />
                          <div className="flex pb-5 xs:py-1">
                            <Image
                              alt="emirates car"
                              className="rounded-full"
                              src="/img/avatar.png"
                              width={50}
                              height={50}
                            />
                            <p className="text-base xs:text-md font-normal pt-2 px-2">
                              <b>Author:</b> {post.AUTHOR}
                            </p>
                            &nbsp;
                          </div>
                        </div>
                      </div>

                  </Link>
                </div>
              ))}
              <div className="text-4xl font-serif font-bold pt-5 pb-2">
                Popular Posts
              </div>
              <div className="grid grid-cols-2 gap-4 xs:grid xs:grid-cols-1 2xs:grid 2xs:grid-cols-1 py-5">
                <Link href="https://emirates-car.com/blog/Ferrari%20Portofino%20M" >

                    <div className="shadow-2xl rounded-sm">
                      <div className="flex">
                        <div className="w-1/2 bg-blue-300 flex items-center justify-center text-center">
                          <Image
                            alt="ferrari portofino m"
                            src="/img/blog/popular_portofino.png"
                            width={250}
                            height={120}
                          />
                        </div>
                        <div className="w-1/2 text-xs p-4 font-mono">
                          The letter m stands for
                          &quot;modificato&quot;(meaning nothing but modified
                          version of ferrari). Its just a facelift of original
                          ferrari...
                        </div>
                      </div>
                    </div>

                </Link>
                <Link href="https://emirates-car.com/blog/Ferrari%20F8%20Spider%202022" >

                    <div className="shadow-2xl rounded-sm">
                      <div className="flex">
                        <div className="w-1/2 bg-purple-300 flex items-center justify-center text-center">
                          <Image
                            alt="ferrari f8 spider"
                            src="/img/blog/popular_f8_spider.png"
                            width={250}
                            height={120}
                          />
                        </div>
                        <div className="w-1/2 text-xs p-4 font-mono">
                          The price of f8 spider 2022 is $3,50,000 USD. 3.9L
                          twin-turbo v8 engine. 710 HP and 568 LB-FT Torque.
                          0-6 MPH in 2.9 Seconds. Top speed...
                        </div>
                      </div>
                    </div>

                </Link>
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
  </>;
}

export async function getStaticProps() {
  const res = await fetch(`https://rozy.vercel.app/api/blog`);
  const posts = await res.json();

  return {
    props: { posts }
  };
}
