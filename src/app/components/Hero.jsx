import Image from "next/image";
import heroImage from "../../../public/images/hero-image.webp";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

export default function Hero() {
  return (
    <>
      <Image
        src={heroImage}
        alt="Hero image"
        className="object-cover brightness-[.4]"
        fill
      />
      <div className="absolute z-30 w-full h-svh flex justify-start p-5 lg:p-10 items-end">
        <div className="flex flex-col gap-4 animate__animated animate__fadeInUp text-white">
          <h1 className="flex md:hidden text-3xl leading-normal font-medium">
            Your full service
            <br />
            construction experts
            <br />
            in the Willamette Valley
            <br />& beyond.
          </h1>

          <h1 className="hidden md:flex lg:hidden text-6xl leading-normal">
            Your full service
            <br />
            construction experts
            <br />
            in the Willamette Valley
            <br />& beyond.
          </h1>

          <h1 className="hidden lg:flex xl:hidden text-7xl leading-tight">
            Your full service
            <br />
            construction experts
            <br />
            in the Willamette Valley
            <br />& beyond.
          </h1>

          <h1 className="hidden xl:flex 2xl:hidden text-7xl leading-[1.1]">
            Your full service
            <br />
            construction experts
            <br />
            in the Willamette Valley
            <br />& beyond.
          </h1>

          <h1 className="hidden 2xl:flex text-8xl leading-tight">
            Your full service
            <br />
            construction experts
            <br />
            in the Willamette Valley
            <br />& beyond.
          </h1>

          <SecondaryLinkButton linkTo="#what-we-do" buttonText="Learn more" />
        </div>
      </div>
    </>
  );
}
