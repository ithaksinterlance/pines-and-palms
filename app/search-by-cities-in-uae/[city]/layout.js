import Head from 'next/head';
import '../../../styles/globals.css';
import Navbar from '../../nav';

export default function RootLayout({ children, params }) {
  const { city } = params;
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="keywords"
          content={
            'auto parts in ' +
            city +
            ', ' +
            'car parts ' +
            city +
            ', ' +
            'Spare parts in ' +
            city +
            ', auto spare parts, emirates auto parts'
          }
        />
        <meta
          property="og:title"
          content={
            'Quick Car Auto Spare Parts Order Online in ' +
            city +
            ' (UAE) | Emirates-car.com'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={
            'https://www.emirates-car.com/search-by-cities-in-uae/' + city
          }
        />
        <meta
          property="og:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in ' +
            city
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content={
            'https://www.emirates-car.com/search-by-cities-in-uae/' + city
          }
        />
        <meta
          property="twitter:title"
          content={
            'Quick Car Auto Spare Parts Hunt in ' +
            city +
            ' (UAE) | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in ' +
            city
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <link
          rel="canonical"
          href={'https://www.emirates-car.com/search-by-cities-in-uae/' + city}
        />
      </Head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
