import { client } from "../../../../sanity/lib/client";
import TextAndLinkSection from "@/app/components/TextAndLinkSection";
import Image from "next/image";

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
      url: `https://clutch-industries.vercel.app/projects/${slug}`,
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
    *[_type == "projects" && $name == slug.current]{
      'projectName': projectTitle,
      introduction,
      status,
      'projectType': projectDetails.projectType,
      'location': projectDetails.location,
      'strategicImportance': projectDetails.strategicImportance,
      'conclusion': projectDetails.conclusion,
      'units': projectDetails.units,
      'projectStart': projectTimeline.constructionStart,
      'projectStartNotes': projectTimeline.constructionStartNotes,
      'projectEnd': projectTimeline.constructionEnd,
      'projectEndNotes': projectTimeline.constructionEndNotes,
      'imageUrl': photo.asset->url,
      'height': photo.asset->metadata.dimensions.height,
      'width': photo.asset->metadata.dimensions.width,
      'blurDataUrl': photo.asset->metadata.lqip,
    }
  `,
    { name }
  );

  const imageUrl = data[0]?.imageUrl;
  const height = data[0]?.height;
  const width = data[0]?.width;
  const blurDataUrl = data[0]?.blurDataUrl;
  const projectName = data[0]?.projectName;
  const unitsObject = data[0]?.units;
  const projectStart = data[0]?.projectStart;
  const projectEnd = data[0]?.projectEnd;
  const projectEndNotes = data[0]?.projectEndNotes;
  const introduction = data[0]?.introduction;
  const status = data[0]?.status;
  const projectTypeRaw = data[0]?.projectType;
  const location = data[0]?.location;
  const strategicImportance = data[0]?.strategicImportance;
  const conclusion = data[0]?.conclusion;

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

  const labels = {
    Studio: "Studio",
    OneBedroom: "1BR",
    TwoBedroom: "2BR",
    ThreeBedroom: "3BR",
    Garages: "Garages",
  };

  const renderedUnits = Object.entries(unitsObject).map(([type, count]) => {
    const label = labels[type] || type;
    return (
      <li key={type} className="lg:text-lg">
        {label}: {count}
      </li>
    );
  });

  return (
    <main>
      <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-16 gap-y-8 h-full px-5 lg:px-10 py-10 lg:py-20">
        <h1 className="col-span-full text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-clutchBlue-800 order-1">
          {projectName}
        </h1>

        <div className="col-span-full relative order-2 lg:order-3">
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

        <div className="col-span-full order-4 lg:order-2 grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Location</h3>
            <p className="lg:text-lg">{location}</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Type</h3>
            <p className="lg:text-lg">{formattedProjectType}</p>
          </div>

          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Units</h3>
            <ul>{renderedUnits}</ul>
          </div>

          <div className="flex flex-col gap-0.5">
            <h3 className="font-medium lg:text-lg">Square Footage</h3>
            <p className="lg:text-lg">#XXXXXX</p>
          </div>
        </div>

        <div className="col-span-full order-3 grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          <p className="col-span-full lg:col-span-2 text-xl lg:text-2xl xl:text-3xl lg:text-justify">
            {introduction}
          </p>
          <div className="col-span-full lg:col-span-2 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-0.5">
              <h3 className="font-medium lg:text-lg">Project Start</h3>
              <p className="lg:text-lg">{projectStart}</p>
            </div>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-medium lg:text-lg">Project Complete</h3>
              <p className="lg:text-lg">{projectEnd}</p>
            </div>
            <div className="flex flex-col gap-0.5 col-span-full">
              <h3 className="font-medium lg:text-lg">Project Notes</h3>
              <p className="lg:text-lg">{projectEndNotes}</p>
            </div>
          </div>
        </div>

        <div className="col-span-full order-4 grid grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-8">
          <div className="flex flex-col gap-0.5 col-span-full">
            <h3 className="font-medium lg:text-lg">Strategic Importance</h3>
            <p className="lg:text-lg">{strategicImportance}</p>
          </div>
          <div className="flex flex-col gap-0.5 col-span-full">
            <h3 className="font-medium lg:text-lg">Conclusion</h3>
            <p className="lg:text-lg">{conclusion}</p>
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
