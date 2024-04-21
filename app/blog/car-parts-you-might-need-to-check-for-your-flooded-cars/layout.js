import '../../../styles/globals.css';
import Navbar from '../../nav';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Flooded Cars Checklist: Essential Car Parts to Check</title>
        <meta property="og:title" content="Blog | Emirates-car.com" />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/blog/car-parts-you-might-need-to-check-for-your-flooded-cars"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/blog/car-parts-you-might-need-to-check-for-your-flooded-cars"
        />
        <meta
          property="twitter:title"
          content="Flooded Cars Checklist: Essential Car Parts to Check | Emirates-car.com"
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
