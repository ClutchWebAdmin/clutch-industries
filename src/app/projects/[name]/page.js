import { client } from "../../../../sanity/lib/client";
import TextAndLinkSection from "@/app/components/TextAndLinkSection";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export async function generateMetadata({ params }) {
  const { name } = params;

  const data = await client.fetch(
    `
    *[_type == "projects" && $name == slug.current]{
      'slug': slug.current,
      'projectName': projectTitle,
      introduction,
      'projectType': projectDetails.projectType,
      'location': projectDetails.location,
      'imageUrl': photo.asset->url
    }
  `,
    { name }
  );

  const slug = data[0]?.slug;
  const projectName = data[0]?.projectName;
  const introduction = data[0]?.introduction;
  const imageUrl = data[0]?.imageUrl;

  return {
    title: `${projectName} | Clutch Industries`,
    description: `${introduction}`,
    keywords: `${projectName}, real estate, development, commercial, residential, mixed-use, salem oregon, salem, oregon`,
    openGraph: {
      title: `${projectName} | Clutch Industries`,
      description: `${introduction}`,
      siteName: "Clutch Industries",
      type: "website",
      locale: "en_US",
      url: `https://clutchindustries.com/projects/${slug}`,
      images: [
        {
          url: `${imageUrl}`,
          alt: `${projectName}`,
        },
      ],
    },
    images: [
      {
        url: `${imageUrl}`,
        alt: `${projectName}`,
      },
    ],
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { name } = params;

  const data = await client.fetch(
    `
    {
      "projectDetails": *[_type == "projects" && $name == slug.current]{
        'projectName': projectTitle,
        introduction,
        status,
        'projectType': projectDetails.projectType,
        'location': projectDetails.location,
        'strategicImportance': projectDetails.strategicImportance,
        'conclusion': projectDetails.conclusion,
        'units': projectDetails.units,
        'squareFootage': projectDetails.squareFootage,
        'projectStart': projectTimeline.constructionStart,
        'projectEnd': projectTimeline.constructionEnd,
        'projectEndNotes': projectTimeline.constructionEndNotes,
        'imageUrl': photo.asset->url,
        'height': photo.asset->metadata.dimensions.height,
        'width': photo.asset->metadata.dimensions.width,
        'blurDataUrl': photo.asset->metadata.lqip,
      },
      "projectSlugs": *[_type == "projects"]{
        "slug": slug.current,
        projectTitle
      }
    }
  `,
    { name }
  );

  const projectDetails = data?.projectDetails[0];

  const slugArray = data?.projectSlugs;

  const currentIndex = slugArray.findIndex((item) => item.slug === name);
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : slugArray.length - 1;
  const nextIndex = currentIndex < slugArray.length - 1 ? currentIndex + 1 : 0;

  const imageUrl = projectDetails.imageUrl;
  const height = projectDetails.height;
  const width = projectDetails.width;
  const blurDataUrl = projectDetails.blurDataUrl;
  const projectName = projectDetails.projectName;
  const unitsObject = projectDetails.units;
  const squareFootage = projectDetails.squareFootage;
  const projectStart = projectDetails.projectStart;
  const projectEnd = projectDetails.projectEnd;
  const projectEndNotes = projectDetails.projectEndNotes;
  const introduction = projectDetails.introduction;
  const status = projectDetails.status;
  const projectTypeRaw = projectDetails.projectType;
  const location = projectDetails.location;
  const strategicImportance = projectDetails.strategicImportance;
  const conclusion = projectDetails.conclusion;

  let formattedProjectType;
  if (projectTypeRaw === "residential") {
    formattedProjectType = "Residential";
  } else if (projectTypeRaw === "commercial") {
    formattedProjectType = "Commercial";
  } else if (projectTypeRaw === "mixedUse") {
    formattedProjectType = "Mixed-Use";
  } else {
    formattedProjectType = projectTypeRaw;
  }

  let formattedStartDate = new Date(projectStart).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  let formattedEndDate = new Date(projectEnd).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  let formattedSquareFootage;
  if (squareFootage) {
    formattedSquareFootage = squareFootage.toLocaleString();
  } else {
    formattedSquareFootage = "N/A";
  }

  let totalUnits;
  if (unitsObject) {
    totalUnits = Object.values(unitsObject).reduce(
      (total, count) => total + count,
      0
    );
  } else {
    totalUnits = "N/A";
  }

  return (
    <main>
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-16 gap-y-8 lg:gap-16 h-full px-5 lg:px-10 py-10 lg:py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
        <h1 className="col-span-full text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-clutchBlue-900 order-1 -mb-4 lg:-mb-8">
          {projectName}
        </h1>

        <div className="col-span-full relative order-2 lg:order-3 -mb-4 lg:-mb-8">
          <Image
            src={imageUrl}
            alt={projectName}
            height={height}
            width={width}
            placeholder="blur"
            blurDataURL={blurDataUrl}
            className="w-full h-full object-cover"
          />
          <p className="absolute top-3 left-3 uppercase font-medium text-xs md:text-base lg:text-lg text-white bg-clutchBlue-700/70 w-fit p-2">
            {status}
          </p>
        </div>

        <div
          className="col-span-full order-4 lg:order-2 grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 lg:gap-16 lg:-mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Location</h3>
            <p className="lg:text-lg">{location}</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Type</h3>
            <p className="lg:text-lg">{formattedProjectType}</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Total Units</h3>
            <p>{totalUnits}</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Square Footage</h3>
            <p className="lg:text-lg">{formattedSquareFootage}</p>
          </div>
        </div>

        <div
          className="col-span-full order-3 grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 lg:gap-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <p className="col-span-full lg:col-span-2 text-xl lg:text-2xl xl:text-3xl lg:text-justify">
            {introduction}
          </p>
          <div className="col-span-full lg:col-span-2 grid grid-cols-2 gap-x-16 gap-y-8 lg:gap-16">
            <div className="flex flex-col gap-0.5">
              <h3 className="font-medium lg:text-lg">Project Start</h3>
              <p className="lg:text-lg">{formattedStartDate}</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-medium lg:text-lg">Project Complete</h3>
              <p className="lg:text-lg">{formattedEndDate}</p>
            </div>
            <div className="flex flex-col gap-0.5 col-span-full">
              <h3 className="font-medium lg:text-lg">Project Notes</h3>
              <p className="lg:text-lg">{projectEndNotes}</p>
            </div>
          </div>
        </div>

        <div
          className="col-span-full order-4 grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8 lg:gap-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-0.5 col-span-full">
            <h3 className="font-medium lg:text-lg">Strategic Importance</h3>
            <p className="lg:text-lg">{strategicImportance}</p>
          </div>
          <div className="flex flex-col gap-0.5 col-span-full">
            <h3 className="font-medium lg:text-lg">Conclusion</h3>
            <p className="lg:text-lg">{conclusion}</p>
          </div>
        </div>

        <div
          className="col-span-full order-5 flex flex-row justify-between mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex w-1/2 justify-start">
            <Link
              href={`/projects/${slugArray[prevIndex].slug}`}
              className="flex flex-col gap-2 hover:opacity-80 transition duration-200 w-fit justify-start items-start"
            >
              <div className="flex flex-row items-center justify-start gap-1 text-gray-600">
                <FaArrowLeft />
                <p>Previous</p>
              </div>
              <h6 className="flex justify-start text-left text-sm lg:text-base">
                {slugArray[prevIndex].projectTitle}
              </h6>
            </Link>
          </div>
          <div className="flex w-1/2 justify-end">
            <Link
              href={`/projects/${slugArray[nextIndex].slug}`}
              className="flex flex-col gap-2 hover:opacity-80 transition duration-200 w-fit items-end justify-start"
            >
              <div className="flex flex-row items-center gap-1 justify-end text-gray-600">
                <p>Next</p>
                <FaArrowRight />
              </div>
              <h6 className="flex justify-end text-right text-sm lg:text-base">
                {slugArray[nextIndex].projectTitle}
              </h6>
            </Link>
          </div>
        </div>
      </div>
      <TextAndLinkSection
        heading="Want to work with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
