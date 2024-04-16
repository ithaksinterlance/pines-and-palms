import Head from 'next/head';
import '../../styles/globals.css';
import Navbar from "../nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE'
          }
        />
        <meta
          property="og:title"
          content="Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta name="keywords" content="all spare parts, spares" />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/search-by-part-name"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep  in Your city."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/search-by-part-name"
        />
        <meta
          property="twitter:title"
          content="Quick Car Auto Spare Part Order Online in UAE | Emirates-car.com"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large automobile spare parts auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.png"
        />
        <link
          rel="canonical"
          href="https://www.emirates-car.com/search-by-part-name"
        />
      </Head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
