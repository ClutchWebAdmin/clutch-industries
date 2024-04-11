import { Tektur } from "next/font/google";
import "animate.css";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-svh flex flex-col mx-auto relative ${oxanium.className}`}
      >
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
