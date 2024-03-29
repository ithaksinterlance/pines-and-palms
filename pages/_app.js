import '../styles/globals.css';
import Script from 'next/script';
import Head from 'next/head';
import '../styles/slick/slick.css';
import '../styles/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="google-site-verification"
          content="2dbXrKrxCBjzz1bLwaw_6nd4YEhhviwPLiGq6fLXPoU"
        />
        <meta name="yandex-verification" content="1a59e5a3d5ee0eeb" />
        <meta
          name="naver-site-verification"
          content="naver0db31bf474cde5117209785bc5c104ab.html"
        />
        <meta
          name="application-name"
          content="Car spare parts App | Emirates-car.com"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Car spare parts App" />
        <meta
          name="description"
          content="Best App for Ordering Car spare parts"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#2563eb" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          size="192x192"
          href="/icons/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:url"
          content="https://twitter.com/emiratescarpart"
        />
        <meta name="twitter:title" content="Emirates Auto Parts" />
        <meta
          name="twitter:description"
          content="We help people Find used , genuine, aftermarket spare parts for their car."
        />
        <meta
          name="twitter:image"
          content="https://emirates-car.com/icon-192x192.png"
        />
        <meta name="twitter:creator" content="@emiratescarpart" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Car spare parts App" />
        <meta
          property="og:description"
          content="Quick Auto spare parts hunt for any vehicle's need."
        />
        <meta property="og:site_name" content="Emirates auto parts" />
        <meta property="og:url" content="https://emirates-car.com" />
        <meta
          property="og:image"
          content="https://emirates-car.com/icon-192x192.png"
        />
      </Head>
      <Script
        id="myscript6"
        dangerouslySetInnerHTML={{
          __html: `https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/js/adminlte.min.js`
        }}
        integrity="sha512-pbrNMLSckfh8yEOr2o1RT+4zMU3Sj7+zP3BOY6nFVI/FLnjTRyubNppLbosEt4nvLCcdsEa8tmKhH3uqOYFXKg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <Script
        id="myscript5"
        src="https://polyfill.io/v3/polyfill.min.js?features=default"
        async
      ></Script>

      

      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
