import { client } from "../../../../sanity/lib/client";

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
  const units = data[0]?.units;
  const projectStart = data[0]?.projectStart;
  const projectStartNotes = data[0]?.projectStartNotes;
  const projectEnd = data[0]?.projectEnd;
  const projectEndNotes = data[0]?.projectEndNotes;
  const introduction = data[0]?.introduction;
  const status = data[0]?.status;
  const projectType = data[0]?.projectType;
  const location = data[0]?.location;
  const strategicImportance = data[0]?.strategicImportance;
  const conclusion = data[0]?.conclusion;

  return (
    <main>
      <div className="flex flex-col gap-10 lg:gap-16 h-full px-5 lg:px-10 py-10 lg:py-20">
        <div className="grid gap-5">
          <h1 className="text-2xl lg:text-5xl">{projectName}</h1>
          <p>{introduction}</p>
          <p>{projectStart}</p>
        </div>
      </div>
    </main>
  );
}
