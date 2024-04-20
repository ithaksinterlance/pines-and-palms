import '../../styles/globals.css';
import Navbar from '../nav';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          8TH Generation Honda Accord 2008 - 2012 parts - Used / Genuine / OEM /
          Aftermarket | Emirates-car.com
        </title>
        <meta
          name="description"
          content={
            'Engines for 2.4L, 3.5L, 2.2L VTEC, DTEC, V6 engines , Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more'
          }
        />
        <meta
          name="keywords"
          content="honda body parts, honda accord spare parts, 8th gen accord parts, performance parts for honda accord, headlight, tailight, suspension parts"
        />
        <meta
          property="og:title"
          content="2008 - 2012 8TH Generation Honda Accord  parts - Used , Genuine / OEM / Aftermarket parts"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/honda-accord-8th-gen-body-parts"
        />
        <meta
          property="og:description"
          content="Engines for 2.4L, 3.5L, 2.2L VTEC, DTEC, V6 engines , Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/honda-accord-8th-gen-body-parts"
        />
        <meta
          property="twitter:title"
          content="8TH Generation Honda Accord 2008 - 2012 parts - Used / Genuine / OEM /
          Aftermarket parts"
        />
        <meta
          property="twitter:description"
          content="Engines for 2.4L, 3.5L, 2.2L VTEC, DTEC, V6 engines , Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more"
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-logos/Honda.webp"
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
