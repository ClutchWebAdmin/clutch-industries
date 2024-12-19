import Link from "next/link";
import { oxanium } from "@/app/styles/fonts";

export default function SecondaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className={`bg-transparent border-2 border-white transition duration-300 text-white uppercase font-medium w-fit h-fit px-6 py-3 ${oxanium.className} shadow-inner shadow-white hover:scale-110 hover:shadow-clutchBlue-950  hover:text-clutchBlue-950 hover:border-clutchBlue-950 rounded-sm `}
    >
      {buttonText}
    </Link>
  );
}
