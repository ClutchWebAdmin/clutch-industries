import { client } from "../../../../sanity/lib/client";
import TextAndLinkSection from "@/app/components/TextAndLinkSection";
import Image from "next/image";
import placeholder from "../../../../public/images/placeholder.png";

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
    }
  `,
    { name }
  );

  const slug = data[0]?.slug;
  const projectName = data[0]?.projectName;
  const introduction = data[0]?.introduction;

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
          url: `https://clutchindustries.com/images/og-image.png`,
          alt: `${projectName}`,
        },
      ],
    },
    images: [
      {
        url: `https://clutchindustries.com/images/og-image.png`,
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
    }
  `,
    { name }
  );

  const projectName = data[0]?.projectName;
  const unitsObject = data[0]?.units;
  const projectStart = data[0]?.projectStart;
  const projectStartNotes = data[0]?.projectStartNotes;
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
      <div className="flex flex-col gap-8 lg:gap-16 h-full px-5 lg:px-10 py-10 lg:py-20">
        <div className="grid gap-10 lg:gap-16 grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
          <h1 className="col-span-full text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium">
            {projectName}
          </h1>

          <div className="flex flex-col gap-8 lg:gap-16 col-span-full lg:col-span-6 order-2 lg:order-1">
            <div className="flex flex-col gap-0.5 w-full">
              <p className="text-xl lg:text-2xl">{introduction}</p>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-0.5 w-1/2">
                <h3 className="font-medium lg:text-lg">Location</h3>
                <p className="lg:text-lg">{location}</p>
              </div>
              <div className="flex flex-col gap-0.5 w-1/2">
                <h3 className="font-medium lg:text-lg">Type</h3>
                <p className="lg:text-lg">{formattedProjectType}</p>
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col gap-0.5 w-1/2">
                <h3 className="font-medium lg:text-lg">Units</h3>
                <ul>{renderedUnits}</ul>
              </div>
              <div className="flex flex-col gap-0.5 w-1/2">
                <h3 className="font-medium lg:text-lg">Square Footage</h3>
                <p className="lg:text-lg">#XXXXXX</p>
              </div>
            </div>
          </div>

          <Image
            src={placeholder}
            alt="placeholder"
            className="col-span-full lg:col-span-6 order-1 lg:order-2"
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 col-span-full order-3">
            <div className="flex flex-col gap-0.5 w-full lg:w-1/2">
              <h3 className="font-medium lg:text-lg">Project Start</h3>
              <p className="text-sm text-gray-500">{projectStart}</p>
              <p className="lg:text-lg">{projectStartNotes}</p>
            </div>

            <div className="flex flex-col gap-0.5 w-full lg:w-1/2">
              <h3 className="font-medium lg:text-lg">Project Finish</h3>
              <p className="text-sm text-gray-500">{projectEnd}</p>
              <p className="lg:text-lg">{projectEndNotes}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 col-span-full order-4">
            <div className="flex flex-col gap-0.5 w-full">
              <h3 className="font-medium lg:text-lg">Strategic Importance</h3>
              <p className="lg:text-lg">{strategicImportance}</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 col-span-full order-5">
            <div className="flex flex-col gap-0.5 w-full">
              <h3 className="font-medium lg:text-lg">Conclusion</h3>
              <p className="lg:text-lg">{conclusion}</p>
            </div>
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
