import Image from "next/image";
import PrimaryLinkButton from "./Buttons/PrimaryLinkButton";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

export default function PhotoRightTextLeftSection({
  id,
  photoUrl,
  altText,
  heading,
  paragraph,
  buttonText,
  linkTo,
  variant,
}) {
  if (variant === "dark") {
    return (
      <section
        id={id}
        className="h-fit text-white bg-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20"
      >
        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div
            className="order-2 lg:order-1 flex flex-col gap-2 w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl">{heading}</h2>
            <div className="flex flex-col gap-6">
              <p className="text-gray-300 2xl:text-lg">{paragraph}</p>
              <SecondaryLinkButton buttonText={buttonText} linkTo={linkTo} />
            </div>
          </div>
          <div
            className="order-1 lg:order-2 flex w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Image src={photoUrl} alt={altText} />
          </div>
        </div>
      </section>
    );
  } else if (variant === "light") {
    return (
      <section
        id={id}
        className="h-fit text-clutchBlue-900 bg-white px-5 lg:px-10 py-10 lg:py-20"
      >
        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row  xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
          <div
            className="order-2 lg:order-1 flex flex-col gap-2 w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl">{heading}</h2>
            <div className="flex flex-col gap-6">
              <p className="text-gray-500 2xl:text-lg">{paragraph}</p>
              <PrimaryLinkButton buttonText={buttonText} linkTo={linkTo} />
            </div>
          </div>
          <div
            className="order-1 lg:order-2 flex w-full lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <Image src={photoUrl} alt={altText} />
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
