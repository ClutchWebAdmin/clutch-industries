import { Inter } from "next/font/google";
import "animate.css";
import "./globals.css";
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-svh flex flex-col relative ${inter.className}`}>
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  );
}
