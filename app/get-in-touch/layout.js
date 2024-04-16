import '../../styles/globals.css';
import Navbar from '../nav';
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com
        </title>
        <meta
          name="description"
          content={
            'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE'
          }
        />
        <meta
          name="keywords"
          content="honda accord spare parts sharjah, honda accord spare parts, honda accord 2008 brake pads, honda accord 2009 distributor, honda accord wheel, honda accord 2012 abs, honda accord engine, honda accord gearbox, honda accord axle, honda accord air filter, honda accord carburetor"
        />
        <meta
          property="og:title"
          content="Quick Car Auto Spare Parts Order Online in UAE | Emirates-car.com"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/get-in-touch"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/get-in-touch"
        />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Parts Order Online in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/get-in-touch"
        />
        <link
          rel="canonical"
          href="https://www.emirates-car.com/get-in-touch"
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
