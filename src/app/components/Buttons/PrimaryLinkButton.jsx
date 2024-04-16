import Link from "next/link";

export default function PrimaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="bg-clutchBlue-700 border-2 border-transparent hover:border-clutchBlue-700 hover:bg-white transition duration-300 text-white hover:text-clutchBlue-600 uppercase font-semibold w-fit h-fit px-6 py-3"
    >
      {buttonText}
    </Link>
  );
}
