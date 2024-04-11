import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-logo.png";
import ConstructionNavDropdown from "./ConstructionNavDropdown";
import SecondaryLinkButton from "./SecondaryLinkButton";

export default function TheHeader() {
  return (
    <header className="absolute flex flex-row w-full z-50 text-white">
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <Image
            src={clutchLogo}
            alt="Clutch Industries"
            className="w-[200px] h-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-12 lg:w-3/5 max-w-fit">
          <ConstructionNavDropdown />
          <Link href="/investment" className="hover:text-clutchBlue-200">
            Investment
          </Link>
          <Link href="/management" className="hover:text-clutchBlue-200">
            Management
          </Link>
        </div>

        <div
          href="/"
          className="hidden lg:flex flex-row items-center lg:w-1/5 flex-grow justify-end"
        >
          <a
            href="tel:+15039675228"
            className="flex flex-nowrap pr-5 hover:text-clutchBlue-200"
          >
            503-967-5228
          </a>
          <SecondaryLinkButton linkTo="/contact" buttonText="Contact" />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
