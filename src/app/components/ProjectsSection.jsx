import { client } from "../../../sanity/lib/client";
import PropertyCard from "./PropertyCard";

export default async function ProjectsSection({ queryFilter, id }) {
  async function fetchData(filter) {
    const data = await client.fetch(`
      *[_type == "projects" && projectDetails.projectType == "${filter}"]{
        'slug': slug.current,
        projectTitle,
        'imageUrl': photo.asset->url,
        'height': photo.asset->metadata.dimensions.height,
        'width': photo.asset->metadata.dimensions.width,
        'blurDataURL': photo.asset->metadata.lqip,
        'location': projectDetails.location,
        status,
      }
    `);
    return data;
  }

  const projectData = await fetchData(`${queryFilter}`);

  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
    >
      <h4 className="col-span-full text-2xl 2xl:text-3xl font-medium">
        {queryFilter} Properties
      </h4>
      {projectData.map((project, index) => (
        <div key={index} className="col-span-1 rounded-md shadow-md shadow-black">
          <PropertyCard project={project} />
        </div>
      ))}
    </section>
  );
}
