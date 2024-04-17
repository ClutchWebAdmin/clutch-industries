import "animate.css";
import "./globals.css";
import TheFooter from "./components/TheFooter";
import { Oxanium } from "next/font/google";
import BackToTopButton from "./components/BackToTopButton";

const oxanium = Oxanium({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${oxanium.className}`}
      >
        {children}
        <BackToTopButton />
        <TheFooter />
      </body>
    </html>
  );
}
