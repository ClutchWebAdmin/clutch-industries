import Image from "next/image";
import heroImage from "../../../public/images/hero-image.webp";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

export default function Hero() {
  return (
    <section>
      <Image
        src={heroImage}
        alt="Hero image"
        className="object-cover brightness-[.4]"
        fill
        priority
      />
      <div className="absolute z-30 w-full h-svh flex justify-start p-5 lg:p-10 items-end">
        <div className="flex flex-col gap-4 animate__animated animate__fadeInUp text-white">
          <h1 className="flex text-3xl font-medium leading-normal md:font-normal md:text-6xl md:leading-normal lg:text-6xl lg:leading-tight xl:text-7xl xl:leading-[1.1] 2xl:text-8xl 2xl:leading-tight">
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
    </section>
  );
}
