import Image from "next/image";
import PrimaryLinkButton from "./Buttons/PrimaryLinkButton";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

export default function PhotoLeftTextRightSection({
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
        className={`flex flex-col gap-6 lg:gap-10 lg:flex-row h-fit text-white bg-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20`}
      >
        <div className="flex w-full lg:w-1/2">
          <Image src={photoUrl} alt={altText} />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">{heading}</h2>
          <div className="flex flex-col gap-6">
            <p className="text-gray-300">{paragraph}</p>
            <SecondaryLinkButton buttonText={buttonText} linkTo={linkTo} />
          </div>
        </div>
      </section>
    );
  } else if (variant === "light") {
    return (
      <section
        id={id}
        className={`flex flex-col gap-6 lg:gap-10 lg:flex-row h-fit text-clutchBlue-900 bg-white px-5 lg:px-10 py-10 lg:py-20`}
      >
        <div className="flex w-full lg:w-1/2">
          <Image src={photoUrl} alt={altText} />
        </div>
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">{heading}</h2>
          <div className="flex flex-col gap-6">
            <p className="text-gray-500">{paragraph}</p>
            <PrimaryLinkButton buttonText={buttonText} linkTo={linkTo} />
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
