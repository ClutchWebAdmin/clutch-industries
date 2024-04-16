import Link from "next/link";
import ClutchLogoSVG from "./Logos/ClutchLogoSVG";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function TheFooter() {
  return (
    <footer className="absolute bottom-0 left-0 p-5 lg:p-10 grid grid-cols-1 lg:grid-cols-3 w-full bg-clutchBlue-900 text-clutchBlue-50 mx-auto">
      <div className="flex flex-col justify-between col-span-1">
        <Link href="/">
          <ClutchLogoSVG color1="#FFFFFF" color2="#7d88d5" />
        </Link>
        <div className="flex flex-col gap-4 text-xl">
          <div className="flex flex-row items-start gap-3">
            <FaLocationDot className="mt-1" />
            <a
              href="https://maps.app.goo.gl/T4G1YyNEN6DVYq7d9"
              target="_blank"
              className="text-lg hover:text-clutchBlue-200"
            >
              360 Belmont St NE <br />
              Salem, OR 97301
            </a>
          </div>
          <div className="flex flex-row items-center gap-3">
            <FaPhone />
            <a
              className="text-lg hover:text-clutchBlue-200"
              href="tel:+15039675228"
              target="_blank"
            >
              503-967-5228
            </a>
          </div>
          <div className="flex flex-row items-center gap-3">
            <MdEmail />
            <a
              className="text-lg hover:text-clutchBlue-200"
              href="mailto:office@clutchindustries.com"
              target="_blank"
            >
              office@clutchindustries.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
