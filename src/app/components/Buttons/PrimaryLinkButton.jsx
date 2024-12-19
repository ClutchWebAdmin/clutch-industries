import Link from "next/link";
import { oxanium } from "@/app/styles/fonts";

export default function PrimaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className={`bg-clutchBlue-950 border border-b-2 border-r-2 border-sky-300 hover:border-clutchBlue-950 hover:bg-white transition duration-300 text-white hover:text-clutchBlue-950 uppercase font-semibold w-fit h-fit px-6 py-3 ${oxanium.className} shadow-md shadow-clutchBlue-700  hover:shadow-clutchBlue-950 rounded-sm`}
    >
      {buttonText}
    </Link>
  );
}
