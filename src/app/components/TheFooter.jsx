import Link from "next/link";
import ClutchLogoSVG from "./Logos/ClutchLogoSVG";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  ourProjectsArray,
  whatWeDoArray,
  whoWeAreArray,
} from "../data/NavItems";
import { oxanium } from "../styles/fonts";

export default function TheFooter() {
  return (
    <footer
      id="footer"
      className={`${oxanium.className} flex-shrink-0 justify-between px-5 lg:px-10 pt-12 lg:pt-14 pb-4 w-full bg-clutchBlue-900 text-white h-fit`}
    >
      <div className="grid gap-12 lg:gap-x-0 lg:gap-y-12 grid-cols-2 lg:grid-cols-4 xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-10 justify-between col-span-2 lg:col-span-1">
          <Link href="/">
            <ClutchLogoSVG color1="#FFFFFF" color2="#7d88d5" />
          </Link>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex flex-row items-start gap-3">
              <FaLocationDot className="mt-1" />
              <a
                href="https://maps.app.goo.gl/T4G1YyNEN6DVYq7d9"
                target="_blank"
                className="text-base hover:text-clutchBlue-200"
                id="map-icon"
                aria-label="Go to google maps"
              >
                360 Belmont St NE <br />
                Salem, OR 97301
              </a>
            </div>
            <div className="flex flex-row items-center gap-3">
              <FaPhone />
              <a
                className="text-base hover:text-clutchBlue-200"
                href="tel:+15039675228"
                target="_blank"
                id="phone-icon"
                aria-label="Call us at 503-967-5228"
              >
                503-967-5228
              </a>
            </div>
            <div className="flex flex-row items-center gap-3">
              <MdEmail />
              <a
                className="text-base hover:text-clutchBlue-200"
                href="mailto:office@clutchindustries.com"
                target="_blank"
                id="email-icon"
                aria-label="Email us at office@clutchindustries.com"
              >
                office@clutchindustries.com
              </a>
            </div>
          </div>

          <div className="text-3xl flex flex-row gap-5">
            <a
              href="https://www.linkedin.com/company/clutch-industries-inc/"
              className="hover:text-clutchBlue-200"
              target="_blank"
              id="linkedin-icon"
              aria-label="Find us on LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/Clutch.Industries.Oregon/"
              className="hover:text-clutchBlue-200"
              target="_blank"
              id="facebook-icon"
              aria-label="Find us on Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/clutch90588373"
              className="hover:text-clutchBlue-200"
              target="_blank"
              id="twitter-icon"
              aria-label="Find us on Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/theclutchindustries/"
              className="hover:text-clutchBlue-200"
              target="_blank"
              id="instagram-icon"
              aria-label="Find us on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-y-3 col-span-1 lg:mx-auto">
          <Link
            href="/who-we-are"
            className="text-xl font-medium uppercase text-clutchBlue-300"
          >
            Who We Are
          </Link>
          <ul className="flex flex-col gap-2">
            {whoWeAreArray.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-clutchBlue-200" href={item.linkTo}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 col-span-1 lg:mx-auto">
          <Link
            href="/what-we-do"
            className="text-xl font-medium uppercase text-clutchBlue-300"
          >
            What We Do
          </Link>
          <ul className="flex flex-col gap-2">
            {whatWeDoArray.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-clutchBlue-200" href={item.linkTo}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-3 col-span-2 lg:col-span-1 lg:mx-auto">
          <Link
            href="/projects"
            className="text-xl font-medium uppercase text-clutchBlue-300"
          >
            Our Projects
          </Link>
          <ul className="flex flex-col gap-2">
            {ourProjectsArray.map((item, index) => (
              <li key={index}>
                <Link className="hover:text-clutchBlue-200" href={item.linkTo}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-full text-center text-xs">
          © 2024 Clutch Industries
        </div>
      </div>
    </footer>
  );
}
