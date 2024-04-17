import Link from "next/link";

export default function SecondaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="bg-transparent border-2 border-white hover:border-transparent hover:bg-clutchBlue-100 transition duration-300 text-white hover:text-clutchBlue-800 uppercase font-medium w-fit h-fit px-6 py-3"
    >
      {buttonText}
    </Link>
  );
}
