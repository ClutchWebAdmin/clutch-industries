import PrimaryLinkButton from "./Buttons/PrimaryLinkButton";
import SecondaryLinkButton from "./Buttons/SecondaryLinkButton";

export default function TextAndLinkSection({
  id,
  heading,
  buttonText,
  linkTo,
  variant,
}) {
  if (variant === "light") {
    return (
      <section
        id={id}
        className={`flex flex-col gap-6 h-fit px-5 lg:px-10 py-20 text-clutchBlue-900 bg-white justify-center items-center`}
      >
        <h5 className="text-3xl md:text-7xl 2xl:text-8xl">{heading}</h5>
        <PrimaryLinkButton buttonText={buttonText} linkTo={linkTo} />
      </section>
    );
  } else if (variant === "dark") {
    return (
      <section
        id={id}
        className={`flex flex-col gap-6 h-fit px-5 lg:px-10 py-20 text-white bg-clutchBlue-900 justify-center items-center`}
      >
        <h5 className="text-3xl md:text-7xl 2xl:text-8xl">{heading}</h5>
        <SecondaryLinkButton buttonText={buttonText} linkTo={linkTo} />
      </section>
    );
  } else {
    return <div>Invalid button type</div>;
  }
}
