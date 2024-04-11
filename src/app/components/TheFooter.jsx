import Link from "next/link";
import Image from "next/image";
import clutchLogo from "../../../public/logos/clutch-logo.png";

export default function TheFooter() {
  return (
    <footer className="absolute bottom-0 left-0 p-5 w-full bg-clutchBlue-900">
      <Link href="/">
        <Image
          src={clutchLogo}
          alt="Clutch Industries"
          className="w-[200px] h-auto"
        />
      </Link>
    </footer>
  );
}
