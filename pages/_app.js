import "../styles/globals.css";
import Head from "next/head";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";
import Script from "next/script";

function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="2dbXrKrxCBjzz1bLwaw_6nd4YEhhviwPLiGq6fLXPoU"/>
        <meta name="yandex-verification" content="1a59e5a3d5ee0eeb" />
        <link rel="shortcut icon" href="/favicon.png"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <script dangerouslySetInnerHTML={
            {__html: `https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/js/adminlte.min.js`}
          }
          integrity="sha512-pbrNMLSckfh8yEOr2o1RT+4zMU3Sj7+zP3BOY6nFVI/FLnjTRyubNppLbosEt4nvLCcdsEa8tmKhH3uqOYFXKg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"/>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default" async></script>
      </Head>
      <Script src="https://script.google.com/macros/s/AKfycbyPjpRQjxNMBQy5iwL2Y32uMa8XPX86XL7D-GmjchR0mhNePAdCsdhRGZdO5q8EQmfz/exec" strategy="beforeInteractive" type="text/html"/>
      <Script src="https://script.google.com/macros/s/AKfycbzeG7Yde0ozicyrUnnmBLNaErmG7v5xKiWH199AkoNaSCHUmN51khYjvnxmSELy6zzQ/exec" strategy="beforeInteractive" type="text/html"/>

      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
