import '../../styles/globals.css';
import Navbar from "../nav"

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2563eb'
};

export const metadata = {
         title: 'Quick Car Auto Spare Part Online in UAE | Emirates-car.com',
         description:
           'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
         openGraph: {
           images: '/favicon.png',
           title: 'Quick Car Auto Spare Part Online in UAE | Emirates-car.com',
           description:
             'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
           url: 'https://emirates-car.com/search-by-part-name',
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
           title: 'Quick Car Auto Spare Part Online in UAE | Emirates-car.com',
           url: 'https://emirates-car.com/search-by-part-name',
           description:
             'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE Body parts, Interior and exterior parts, suspension parts, headlight, fog lights and other lighting parts, performance parts and more',
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
         category: 'car parts',
         alternates: {
           canonical: `https://emirates-car.com/search-by-part-name`
         },
         keywords:
           'car parts online, spare parts online,auto spare parts sharjah, auto spare parts dubai, brake pads, body parts, bumper parts, spare parts, 8th gen accord parts, performance parts, headlight, tailight, suspension parts'
       };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
