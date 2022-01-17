import "../styles/globals.css";
import Head from "next/head";
import "../styles/slick/slick.css";
import "../styles/slick/slick-theme.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "./lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/js/adminlte.min.js`,
          }}
          integrity="sha512-pbrNMLSckfh8yEOr2o1RT+4zMU3Sj7+zP3BOY6nFVI/FLnjTRyubNppLbosEt4nvLCcdsEa8tmKhH3uqOYFXKg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `https://script.google.com/macros/s/AKfycbxO_plCUSZsoR5WHZRt-hj-ES2IcF3DNnkSeUfNJwufgrOcuYNd84-qI5yRKBoe4wrU8w/exec`,
          }}
        ></script>
        <script
          src="https://polyfill.io/v3/polyfill.min.js?features=default"
          async
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
