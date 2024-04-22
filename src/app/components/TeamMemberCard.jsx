import Image from "next/image";
import { MdOutlineEmail } from "react-icons/md";

export default function TeamMemberCard({ fullName, title, email, photoUrl }) {
  return (
    <>
      <Image
        src={photoUrl}
        alt={fullName}
        className="w-full h-auto object-cover"
      />
      <div className="absolute flex flex-col gap-0.5 bottom-0 left-0 bg-clutchBlue-900/80 backdrop-blur-md w-full h-fit px-4 py-4">
        <div className="flex flex-row items-center justify-between text-white text-xl">
          <p className="font-medium">{fullName}</p>
          <a
            href={`mailto:${email}`}
            target="_blank"
            aria-label="Contact by email"
          >
            <MdOutlineEmail className="h-full w-auto text-2xl" />
          </a>
        </div>

        <p className="text-clutchBlue-100">{title}</p>
      </div>
    </>
  );
}
