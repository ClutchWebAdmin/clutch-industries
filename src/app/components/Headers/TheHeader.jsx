import Link from "next/link";
import MobileMenu from "../MobileMenu";
import NavDropdown from "../Dropdowns/NavDropdown";
import ClutchLogoSVG from "../Logos/ClutchLogoSVG";
import {
  ourProjectsArray,
  whatWeDoArray,
  whoWeAreArray,
} from "../../data/NavItems";
import PrimaryContactButton from "../Buttons/PrimaryContactButton";
import { oxanium } from "@/app/styles/fonts";

export default function TheHeader() {
  return (
    <header
      className={`${oxanium.className} flex flex-row w-full z-50 text-clutchBlue-900`}
    >
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <ClutchLogoSVG color1="#000000" color2="#2e3f8e" />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-6 lg:gap-2 xl:gap-8 lg:w-3/5 max-w-fit">
          <NavDropdown
            dropdownArray={whoWeAreArray}
            mainLinkText="Who We Are"
            linkTo="/who-we-are"
          />
          <NavDropdown
            dropdownArray={whatWeDoArray}
            mainLinkText="What We Do"
            linkTo="/what-we-do"
          />
          <NavDropdown
            dropdownArray={ourProjectsArray}
            mainLinkText="Our Projects"
            linkTo="/projects"
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
          <PrimaryContactButton buttonText="Contact" />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
