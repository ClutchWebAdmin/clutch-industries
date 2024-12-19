import TriplePhotoCard from "./TriplePhotoCard";

export default function TriplePhotoSection({
  id,
  image1,
  heading1,
  linkTo1,
  image2,
  heading2,
  linkTo2,
  image3,
  heading3,
  linkTo3,
}) {
  return (
    <section id={id} className="flex flex-col gap-6 lg:gap-10 h-fit">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <TriplePhotoCard
          imageUrl={image1}
          heading={heading1}
          linkTo={linkTo1}
        />
        <TriplePhotoCard
          imageUrl={image2}
          heading={heading2}
          linkTo={linkTo2}
        />
        <TriplePhotoCard
          imageUrl={image3}
          heading={heading3}
          linkTo={linkTo3}
        />
      </div>
    </section>
  );
}
