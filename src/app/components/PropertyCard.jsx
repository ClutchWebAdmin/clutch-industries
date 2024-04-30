import Link from "next/link";
import Image from "next/image";
import placeholder from "../../../public/images/placeholder.png";

export default function PropertyCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="w-full h-full flex flex-col gap-4 relative"
    >
      <Image
        src={placeholder}
        alt="Alt text"
        className="w-full h-auto object-cover"
      />
      <h5 className="text-lg md:text-xl absolute bottom-2 left-2">
        {project.projectTitle}
      </h5>
    </Link>
  );
}
