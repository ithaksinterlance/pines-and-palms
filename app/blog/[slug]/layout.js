import '../../../styles/globals.css';
import Navbar from '../../nav';
import Head from 'next/head';

export default function RootLayout({ children, params }) {
  const {slug} = params;
  return (
    <html lang="en">
      <Head>
        <title>{slug} | Emirates-car.com</title>
        <meta
          property="og:title"
          content={slug + ' | Emirates-car.com'}
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={'https://www.emirates-car.com/' + slug}
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={'https://emirates-car.com/img/blog/' + slug}
        />
        <meta
          property="twitter:url"
          content={'https://www.emirates-car.com/' + slug}
        />
        <meta
          property="twitter:title"
          content={slug + ' | Emirates-car.com'}
        />
        <meta
          property="twitter:image"
          content={'https://emirates-car.com/img/' + slug}
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
