import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AutoSpares</title>
        <link rel="shortcut icon" href="/favicon.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `https://script.google.com/macros/s/AKfycbxO_plCUSZsoR5WHZRt-hj-ES2IcF3DNnkSeUfNJwufgrOcuYNd84-qI5yRKBoe4wrU8w/exec`,
          }}
        ></script>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <script
          src="https://polyfill.io/v3/polyfill.min.js?features=default"
          async
        ></script>
        <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyARE0OqZothvDLejGQc1qSQXUEyzbKyiCI"
          async
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
