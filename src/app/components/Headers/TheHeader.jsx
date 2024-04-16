import Link from "next/link";
import MobileMenu from "../MobileMenu";
import NavDropdown from "../Dropdowns/NavDropdown";
import ClutchLogoSVG from "../Logos/ClutchLogoSVG";
import { whatWeDoArray, whoWeAreArray } from "../NavItems/NavItems";
import PrimaryLinkButton from "../Buttons/PrimaryLinkButton";

export default function TheHeader() {
  return (
    <header className="flex flex-row w-full z-50 text-clutchBlue-900">
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <ClutchLogoSVG color1="#000000" color2="#2e3f8e" />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-8 lg:w-3/5 max-w-fit">
          <NavDropdown
            dropdownArray={whoWeAreArray}
            mainLinkText="Who We Are"
          />
          <NavDropdown
            dropdownArray={whatWeDoArray}
            mainLinkText="What We Do"
          />
        </div>

        <div
          href="/"
          className="hidden lg:flex flex-row items-center lg:w-1/5 flex-grow justify-end"
        >
          <a
            href="tel:+15039675228"
            className="flex flex-nowrap pr-5 font-medium hover:text-clutchBlue-500"
          >
            503-967-5228
          </a>
          <PrimaryLinkButton linkTo="/contact" buttonText="Contact" />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
