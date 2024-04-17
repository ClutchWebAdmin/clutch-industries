import Link from "next/link";
import MobileMenu from "../MobileMenu";
import SecondaryLinkButton from "../Buttons/SecondaryLinkButton";
import ClutchLogoSVG from "../Logos/ClutchLogoSVG";
import {
  whatWeDoArray,
  whoWeAreArray,
  ourProjectsArray,
} from "../NavItems/NavItems";
import TheHomeNavDropdown from "../Dropdowns/TheHomeNavDropdown";

export default function TheHomeHeader() {
  return (
    <header className="absolute flex flex-row w-full z-50 text-white">
      <nav className="flex flex-row w-full h-fit lg:items-center justify-between m-5">
        <Link href="/" className="lg:w-1/5 flex-grow">
          <ClutchLogoSVG color1="#FFFFFF" color2="#a0a7e0" />
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-8 lg:w-3/5 max-w-fit">
          <TheHomeNavDropdown
            dropdownArray={whoWeAreArray}
            mainLinkText="Who We Are"
          />
          <TheHomeNavDropdown
            dropdownArray={whatWeDoArray}
            mainLinkText="What We Do"
          />
          <TheHomeNavDropdown
            dropdownArray={ourProjectsArray}
            mainLinkText="Our Projects"
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
          <SecondaryLinkButton linkTo="/contact" buttonText="Contact" />
        </div>
        <MobileMenu />
      </nav>
    </header>
  );
}
