import Head from 'next/head';
import '../../../styles/globals.css';
import Navbar from "../../nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>
          Online German Auto Spare Parts in UAE - New | Used | Genuine |
          Aftermarket | OEM
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            'Buy Online and Get delivered German Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in uae'
          }
        />
        <meta
          property="og:title"
          content="Online German Auto Spare Parts in UAE - New | Used | Genuine | Aftermarket | OEM"
        />
        <meta
          name="keywords"
          content="German spare parts uae, German auto parts, German car parts"
        />
        <meta property="og:site_name" content="Emirates-car" />
        <meta
          property="og:url"
          content="https://www.emirates-car.com/country-vehicles-spare-parts/german-auto-spare-parts"
        />
        <meta
          property="og:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket German car auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in your city at best price"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://emirates-car.com/img/car-spare-parts.jpg"
        />
        <meta
          property="twitter:url"
          content="https://www.emirates-car.com/country-vehicles-spare-parts/german-auto-spare-parts"
        />
        <meta
          property="twitter:title"
          content="Online German Auto Spare Parts Hunt in UAE - New | Used | Genuine | Aftermarket"
        />
        <meta
          property="twitter:description"
          content="Explore from our immensively large-scale auto spare parts website, your New / Used / Genuine / Aftermarket auto spare parts for your Vehicle needs - Car / Jeep / Van / Truck / Buses in Your city in UAE especially in the main cities like Dubai, Sharjah, Abu dhabi, Ajman and other city."
        />
        <meta
          property="twitter:image"
          content="https://emirates-car.com/img/car-spare-parts.jpg"
        />
        <link
          rel="canonical"
          href="https://www.emirates-car.com/german-auto-spare-parts"
        />
      </Head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
