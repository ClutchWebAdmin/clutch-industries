import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

export default function TeamMemberCard({
  fullName,
  title,
  email,
  photoUrl,
  blurDataURL,
  height,
  width,
}) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"
    // className="w-fit h-full object-cover"
    >
      <Image
        src={photoUrl}
        alt={fullName}
        className="md:w-80 md:h-96 sm:h-72 object-cover rounded-lg"
        blurDataURL={blurDataURL}
        height={height}
        width={width}
      />
      <div className="absolute flex flex-col gap-0.5 bottom-0 left-0 bg-clutchBlue-900/80 backdrop-blur-md w-full h-fit px-4 py-4 shadow-md shadow-black rounded-b-lg">
        <div className="flex flex-row items-center justify-between text-white text-sm md:text-base lg:text-xl">
          <h5 className="font-medium">{fullName}</h5>
          <a
            href={`mailto:${email}`}
            target="_blank"
            aria-label="Contact by email"
          >
            <MdOutlineEmail className="h-full w-auto lg:text-2xl" />
          </a>
        </div>

        <p className="text-clutchBlue-100 text-xs md:text-sm">{title}</p>
      </div>
    </div>
  );
}
