import Image from "next/image";
import { LuShovel } from "react-icons/lu";
import Link from "next/link";

export default function TimelineEvent({
  variant,
  date,
  imageUrl,
  altText,
  milestone,
  linkTo,
}) {
  if (variant === "left") {
    return (
      <div
        className="hidden lg:flex justify-between mb-8 lg:mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="flex justify-end text-right w-1/2 py-5 pr-6 lg:pr-10 relative">
          <div className="absolute top-0 right-0 w-fit h-fit p-2 rounded-full box-border border-2 border-clutchBlue-300 -mx-5 lg:-mx-6 my-3 lg:my-2.5 bg-clutchBlue-100 text-clutchBlue-900 flex justify-center items-center">
            <LuShovel className="text-lg lg:text-3xl" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h4 className="lg:text-2xl">{date}</h4>
            <Image
              src={imageUrl}
              alt={altText}
              className="object-cover w-full h-auto"
            />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-xl lg:text-4xl">{milestone}</h5>
              <Link
                href={linkTo}
                className="text-clutchBlue-200 hover:text-clutchBlue-100 transition duration-200 underline underline-offset-4"
              >
                View details
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    );
  } else if (variant === "right") {
    return (
      <div
        className="flex justify-between mb-8 lg:mb-16"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="lg:w-1/2"></div>
        <div className="flex justify-start text-left w-full lg:w-1/2 py-5 pl-16 lg:pl-10 relative">
          <div className="absolute top-0 left-0 w-fit h-fit p-2 rounded-full box-border border-2 border-clutchBlue-300 mx-3.5 lg:-mx-6 my-3 lg:my-2.5 bg-clutchBlue-100 text-clutchBlue-900 flex justify-center items-center">
            <LuShovel className="text-lg lg:text-3xl" />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <h4 className="lg:text-2xl">{date}</h4>
            <Image
              src={imageUrl}
              alt={altText}
              className="object-cover w-full h-auto"
            />
            <div className="flex flex-col gap-0.5">
              <h5 className="text-xl lg:text-4xl">{milestone}</h5>
              <Link
                href={linkTo}
                className="text-clutchBlue-200 hover:text-clutchBlue-100 transition duration-200 underline underline-offset-4"
              >
                View details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
