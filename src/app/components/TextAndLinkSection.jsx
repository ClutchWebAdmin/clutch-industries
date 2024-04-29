import PrimaryLinkButton from "./Buttons/PrimaryLinkButton";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";
import PrimaryContactButton from "./Buttons/PrimaryContactButton";
import SecondaryContactButton from "./Buttons/SecondaryContactButton";

export default function TextAndLinkSection({
  heading,
  buttonText,
  linkTo,
  variant,
  purpose,
}) {
  if (variant === "light" && purpose === "link") {
    return (
      <section
        className={`flex flex-col gap-6 h-fit px-5 lg:px-10 py-20 text-clutchBlue-900 bg-white justify-center items-center`}
      >
        <h5 className="text-3xl md:text-7xl 2xl:text-8xl">{heading}</h5>
        <PrimaryLinkButton buttonText={buttonText} linkTo={linkTo} />
      </section>
    );
  } else if (variant === "light" && purpose === "contact") {
    return (
      <section
        className={`flex flex-col gap-6 h-fit px-5 lg:px-10 py-20 text-clutchBlue-900 bg-white justify-center items-center`}
      >
        <h5 className="text-3xl md:text-7xl 2xl:text-8xl">{heading}</h5>
        <PrimaryContactButton buttonText={buttonText} />
      </section>
    );
  } else if (variant === "dark" && purpose === "link") {
    return (
      <section
        className={`flex flex-col gap-6 h-fit px-5 lg:px-10 py-20 text-white bg-clutchBlue-700 justify-center items-center`}
      >
        <h5 className="text-3xl md:text-7xl 2xl:text-8xl">{heading}</h5>
        <SecondaryLinkButton buttonText={buttonText} linkTo={linkTo} />
      </section>
    );
  } else if (variant === "dark" && purpose === "contact") {
    return (
      <section
        className={`flex flex-col gap-6 h-fit px-5 lg:px-10 py-20 text-white bg-clutchBlue-700 justify-center items-center`}
      >
        <h5 className="text-3xl md:text-7xl 2xl:text-8xl">{heading}</h5>
        <SecondaryContactButton buttonText={buttonText} />
      </section>
    );
  } else {
    return <div>Invalid button type</div>;
  }
}
