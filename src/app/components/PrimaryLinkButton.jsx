import Link from "next/link";

export default function PrimaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="bg-clutchBlue-600 border-2 border-transparent hover:border-2 hover:border-clutchBlue-600 hover:bg-white transition duration-300 text-white hover:text-clutchBlue-600 uppercase font-medium w-fit h-fit px-6 py-3"
    >
      {buttonText}
    </Link>
  );
}
