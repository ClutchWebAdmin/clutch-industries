import "animate.css";
import "./globals.css";
import TheFooter from "./components/TheFooter";
import BackToTopButton from "./components/BackToTopButton";
import { oxanium, barlow } from "./styles/fonts";
import AOSLoader from "@/utils/AOSLoader";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${oxanium.variable} ${barlow.variable} scroll-smooth`}
    >
      <body className={`min-h-svh flex flex-col mx-auto relative`}>
        {children}
        <BackToTopButton />
        <TheFooter />
        <AOSLoader />
        <Analytics />
        <GoogleAnalytics gaId="G-F6SPW3KVYM" />
      </body>
    </html>
  );
}
