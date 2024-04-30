import '../../../../../../styles/globals.css';
import Navbar from '../../../../../nav';
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};
export async function generateMetadata({ params }) {
  const { make, model, year, parts } = params;
  return {
    title: `${decodeURIComponent(
      parts
    )} for ${year} ${make} - ${decodeURIComponent(
      model
    )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
    description: `Buy ${decodeURIComponent(
      parts
    )} for ${year} ${make} - ${decodeURIComponent(
      model
    )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
    openGraph: {
      images: '/favicon.png',
      title: `${decodeURIComponent(parts)} for ${make} - ${decodeURIComponent(
        model
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
      description: `Buy ${decodeURIComponent(
        parts
      )} for ${year} ${make} - ${decodeURIComponent(
        model
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      url:
        'https://emirates-car.com/search-by-make/' +
        make +
        '/' +
        model +
        '/' +
        year +
        '/' +
        parts,
      image: 'https://emirates-car.com/img/car-spare-parts.png',
      siteName: 'Emirates Auto Parts',
      images: [
        {
          url: 'https://emirates-car.com/icon-192x192.png',
          width: 192,
          height: 192
        },
        {
          url: 'https://emirates-car.com/icons/icon-512x512.png',
          width: 512,
          height: 512,
          alt: 'car parts'
        }
      ],
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${decodeURIComponent(
        parts
      )} for ${year} ${make} - ${decodeURIComponent(
        model
      )} Car Auto Spare Parts Order Online in UAE from Dubai -
    Best Prices`,
      url:
        'https://emirates-car.com/search-by-make/' +
        make +
        '/' +
        model +
        '/' +
        year +
        '/' +
        parts,
      description: `Buy ${decodeURIComponent(
        parts
      )} for ${year} ${make} - ${decodeURIComponent(
        model
      )} auto spare parts Online and Get delivered Used, New, Genuine / OEM, Aftermarket in UAE`,
      images: ['https://emirates-car.com/favicon.png']
    },
    icons: {
      icon: '/favicon.png',
      shortcut: '/icons/icon-96x96.png',
      apple: '/icons/icon-192x192.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/icons/icon-152x152.png'
      }
    },
    alternates: {
      canonical: `https://emirates-car.com/search-by-make/${make}/${model}/${year}/${parts}`
    },
    category: `${decodeURIComponent(
      parts
    )} for ${year} ${make} ${decodeURIComponent(model)} auto spare parts`,
    keywords: `${decodeURIComponent(
      parts
    )} for ${year} ${make} ${decodeURIComponent(
      model
    )} spare parts sharjah, used ${decodeURIComponent(
      parts
    )} parts for ${year} ${make} ${model}, ${make} ${decodeURIComponent(
      model
    )} spare parts online, ${make} ${decodeURIComponent(
      model
    )} spare parts near me, ${make} ${decodeURIComponent(
      model
    )} wheels, ${make} ${decodeURIComponent(
      model
    )} distributor, ${make} ${decodeURIComponent(
      model
    )} shock absorber, ${make} ${decodeURIComponent(
      model
    )} spark plugs, ${make} ${decodeURIComponent(
      model
    )} fuse box, ${make} ${decodeURIComponent(
      model
    )} radiator, ${make} ${decodeURIComponent(model)} fuel pump`
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
