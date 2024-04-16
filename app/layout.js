import '../styles/globals.css';
import Navbar from './nav';
import Head from 'next/head';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';

export const metadata = {
  title:
    'Auto Spare Parts Order Online in UAE from Dubai dealers |Emirates-car.com',
  description:
    'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="icon" href="/favicon.png" sizes="any" />
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
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
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
      <Script
        language="javascript"
        src={`https://www.exactseek.com/remote-submit.js`}
      />
      <script
        type="text/javascript"
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
      <script
        id="myscript"
        dangerouslySetInnerHTML={{
          __html: `
              (function(c,l,a,r,i,t,y){        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);    })(window, document, "clarity", "script", "c2136u1t6f");
              `
        }}
      />
      <script
        id="myscript2"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-3E8C09YD12', {
                  page_path: window.location.pathname,
                });
              `
        }}
      />
      <script
        id="myscript3"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-3E8C09YD12`}
      />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}