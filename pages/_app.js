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
      <Script type="text/javascript" src="https://script.google.com/macros/s/AKfycbxO_plCUSZsoR5WHZRt-hj-ES2IcF3DNnkSeUfNJwufgrOcuYNd84-qI5yRKBoe4wrU8w/exec" strategy="beforeInteractive"/>
      <Component {...pageProps}/>
    </>
  );
}

export default MyApp;
