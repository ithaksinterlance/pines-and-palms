import '../styles/globals.css';
import Head from 'next/head';
import '../styles/slick/slick.css';
import '../styles/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="2dbXrKrxCBjzz1bLwaw_6nd4YEhhviwPLiGq6fLXPoU"
        />
        <meta name="yandex-verification" content="1a59e5a3d5ee0eeb" />
        <meta
          name="naver-site-verification"
          content="naver0db31bf474cde5117209785bc5c104ab.html"
        />
        <meta name="theme-color" content="#2563eb" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `https://cdnjs.cloudflare.com/ajax/libs/admin-lte/3.2.0-rc/js/adminlte.min.js`
          }}
          integrity="sha512-pbrNMLSckfh8yEOr2o1RT+4zMU3Sj7+zP3BOY6nFVI/FLnjTRyubNppLbosEt4nvLCcdsEa8tmKhH3uqOYFXKg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          src="https://polyfill.io/v3/polyfill.min.js?features=default"
          async
        ></script>
        <script
          type="text/javascript" // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6210ae28a34c2456412714f6/1fs8igkmc';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
              `
          }}
        ></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
