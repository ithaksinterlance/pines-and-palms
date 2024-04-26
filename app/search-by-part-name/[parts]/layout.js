import '../../../styles/globals.css';
import Navbar from '../../nav';

async function getPartsData(parts) {
  const res = await fetch(`https://rozy.vercel.app/api/parts/${parts}`);
  const data = await res.json();
  return data;
}

export default async function RootLayout({ children, params }) {
  const { parts } = params;
  const partsData = await getPartsData(parts);
  return (
    <html lang="en">
      <Navbar/>
      <body>{children}</body>
    </html>
  );
}
