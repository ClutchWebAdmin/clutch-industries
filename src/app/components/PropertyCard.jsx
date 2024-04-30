import Link from "next/link";
import Image from "next/image";

export default function PropertyCard({ project }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-col w-full h-fit relative hover:opacity-80 transition duration-300"
      >
        <Image
          src={project.imageUrl}
          alt={project.projectTitle}
          height={project.height}
          width={project.width}
          placeholder="blur"
          blurDataURL={project.blurDataURL}
          className="w-auto h-fit object-cover"
        />
        <p className="absolute top-0 right-0 bg-clutchBlue-100 px-4 py-2 uppercase font-medium">
          {project.status}
        </p>
        <div className="flex flex-col gap-0.5 bg-clutchBlue-900 backdrop-blur-md w-full h-fit px-4 py-4 relative">
          <h5 className="font-medium text-white">{project.projectTitle}</h5>
          <p className="text-clutchBlue-100 text-xs md:text-sm">
            {project.location}
          </p>
        </div>
      </Link>
    </div>
  );
}
