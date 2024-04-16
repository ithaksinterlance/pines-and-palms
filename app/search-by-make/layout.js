import '../../styles/globals.css';
import Navbar from "../nav";

export const metadata = {
  title:
    'Auto Spare Parts Order Online in UAE from Dubai dealers |Emirates-car.com',
  description:
    'Buy Online and Get delivered Used, New, Genuine / Original / OEM, Aftermarket auto spare parts Online in UAE for German, American, Korean, Japanese models'
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
