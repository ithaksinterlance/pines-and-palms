import Head from 'next/head';
import React from 'react'
import Navbar from '../nav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head>
          <title>Auto spare parts in UAE</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            property="og:title"
            content="Quick Auto Spare Parts Hunt in UAE | Emirates-car.com"
          />
          <meta property="og:site_name" content="Emirates-car" />
          <meta
            property="og:url"
            content="https://www.emirates-car.com/contact"
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
            content="https://www.emirates-car.com/contact"
          />
          <meta
            property="twitter:title"
            content="Quick Auto Spare Parts Hunt in UAE | Emirates-car.com"
          />
          <meta
            property="twitter:description"
            content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
          />
          <meta
            property="twitter:image"
            content="https://emirates-car.com/img/car-spare-parts.png"
          />
          <link rel="canonical" href="https://www.emirates-car.com/contact" />
        </Head>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
