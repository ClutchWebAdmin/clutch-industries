import Link from "next/link";

export default function PrimaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="uppercase bg-clutchBlue-600 hover:bg-clutchBlue-500 transition duration-300 text-white font-medium min-w-fit min-h-fit px-6 py-3"
    >
      {buttonText}
    </Link>
  );
}
