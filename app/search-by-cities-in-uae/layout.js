import '../../styles/globals.css';
import Navbar from "../nav"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navbar/>
      <body>{children}</body>
    </html>
  );
}
