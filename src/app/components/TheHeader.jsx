import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-logo.png";

export default function TheHeader() {
  return (
    <header className="absolute flex flex-row w-full z-30">
      <nav className="flex flex-row w-full lg:items-center justify-between m-4 lg:m-2.5 lg:py-2.5">
        <Link href="/" className="lg:w-1/5 lg:pl-5">
          <Image
            src={clutchLogo}
            alt="Clutch Industries"
            className="w-[200px] h-auto"
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center space-x-10 lg:w-3/5">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/investment">Investment</Link>
          <Link href="/management">Management</Link>
        </div>

        <div
          href="/"
          className="hidden lg:flex flex-row lg:w-1/5 justify-end pr-5"
        >
          <Link href="/contact">Contact</Link>
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
