import Link from "next/link";

export default function SecondaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="bg-transparent border-2 border-clutchBlue-50 hover:border-transparent hover:bg-clutchBlue-50 transition duration-300 text-clutchBlue-50 hover:text-clutchBlue-800 uppercase font-medium w-fit h-fit px-6 py-3"
    >
      {buttonText}
    </Link>
  );
}
