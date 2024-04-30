import { client } from "../../../sanity/lib/client";
import PropertyCard from "./PropertyCard";

export default async function ProjectsSection({ queryFilter, heading, id }) {
  async function fetchData(filter) {
    const data = await client.fetch(`
      *[_type == "projects" && projectDetails.projectType == "${filter}"]{
        'slug': slug.current,
        projectDetails,
        projectTimeline,
        introduction,
        status,
        projectTitle,
      }
    `);
    return data;
  }

  const projectData = await fetchData(`${queryFilter}`);

  return (
    <section
      id={id}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8"
    >
      <h4 className="col-span-full text-2xl font-medium">{heading}</h4>
      {projectData.map((project, index) => (
        <div key={index} className="col-span-1">
          <PropertyCard project={project} />
        </div>
      ))}
    </section>
  );
}
