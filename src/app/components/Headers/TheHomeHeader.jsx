import Link from "next/link";
import MobileMenu from "../MobileMenu";
import ClutchLogoSVG from "../Logos/ClutchLogoSVG";
import {
  whatWeDoArray,
  whoWeAreArray,
  ourProjectsArray,
} from "../../data/NavItems";
import TheHomeNavDropdown from "../Dropdowns/TheHomeNavDropdown";
import SecondaryContactButton from "../Buttons/SecondaryContactButton";
import { oxanium } from "@/app/styles/fonts";

export default function TheHomeHeader() {
  return (
    <header
      className={`${oxanium.className} absolute flex flex-row w-full z-50 text-white`}
    >
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <ClutchLogoSVG color1="#FFFFFF" color2="#a0a7e0" />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-8 lg:w-3/5 max-w-fit">
          <TheHomeNavDropdown
            dropdownArray={whoWeAreArray}
            mainLinkText="Who We Are"
            linkTo="/who-we-are"
          />
          <TheHomeNavDropdown
            dropdownArray={whatWeDoArray}
            mainLinkText="What We Do"
            linkTo="/what-we-do"
          />
          <TheHomeNavDropdown
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
            className="flex flex-nowrap font-medium pr-5 hover:text-clutchBlue-200"
          >
            503-967-5228
          </a>
          <SecondaryContactButton buttonText="Contact" />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
