import Head from 'next/head';
import '../../../styles/globals.css';
import Navbar from '../../nav';

export default function RootLayout({ children, params }) {
  const { parts } = params;
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={
            parts +
            ' Car Auto Spare Parts  Order Online in UAE | Emirates-car.com'
          }
        />
        <meta
          property="keywords"
          content={
            parts +
            ' in uae,' +
            'genuine ' +
            parts +
            ' in uae,' +
            'aftermarket ' +
            parts +
            ' in uae,' +
            'used ' +
            parts +
            ' in uae,' +
            'New ' +
            parts +
            ' in uae'
          }
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content={'https://www.emirates-car.com/search-by-part-name/' + parts}
        />
        <meta
          property="og:description"
          content={
            'Secure your ' +
            parts +
            ' from us your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content={'https://www.emirates-car.com/search-by-part-name/' + parts}
        />
        <meta
          property="twitter:title"
          content={
            parts +
            ' Car Auto Spare Parts Order Online in UAE | Emirates-car.com'
          }
        />
        <meta
          property="twitter:description"
          content={
            'Secure your ' +
            parts +
            ' from us your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city.'
          }
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <link
          rel="canonical"
          href={'https://www.emirates-car.com/search-by-part-name/' + parts}
        />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
