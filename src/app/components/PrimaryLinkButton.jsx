import Link from "next/link";

export default function PrimaryLinkButton({ linkTo, buttonText }) {
  return (
    <Link
      href={linkTo}
      className="uppercase bg-clutchBlue-500 hover:bg-clutchBlue-400 transition duration-300 text-white min-w-fit min-h-fit px-6 py-3"
    >
      {buttonText}
    </Link>
  );
}
