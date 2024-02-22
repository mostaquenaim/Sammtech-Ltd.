import "./globals.css";
import Navbar from "@/components/Navbar";
import 'aos/dist/aos.css';
import { roboto_condensed } from "./fonts";

export const metadata = {
  title: "Sammtech Ltd.",
  description: "Ease your business",
};

export default function RootLayout({ children }) {

  return (
    <html data-theme="winter"
      lang="en">
      <body className={`${roboto_condensed.className}`} style={{ background: 'linear-gradient(to bottom, #004b92, #002447)' }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
