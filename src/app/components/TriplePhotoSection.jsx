import Link from "next/link";

export default function TriplePhotoSection({
  id,
  heading1,
  linkTo1,
  heading2,
  linkTo2,
  heading3,
  linkTo3,
}) {
  return (
    <section id={id} className="flex flex-col gap-6 lg:gap-10 h-fit">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <Link
          href={linkTo1}
          className="flex w-full lg:w-1/3 bg-gray-400 hover:brightness-105 h-[350px] lg:h-[500px] p-5"
        >
          <h4 className="text-2xl font-medium text-white">{heading1}</h4>
        </Link>
        <Link
          href={linkTo2}
          className="flex w-full lg:w-1/3 bg-gray-500 hover:brightness-105 h-[350px] lg:h-[500px] p-5"
        >
          <h4 className="text-2xl font-medium text-white">{heading2}</h4>
        </Link>
        <Link
          href={linkTo3}
          className="flex w-full lg:w-1/3 bg-gray-600 hover:brightness-105 h-[350px] lg:h-[500px] p-5"
        >
          <h4 className="text-2xl font-medium text-white">{heading3}</h4>
        </Link>
      </div>
    </section>
  );
}
