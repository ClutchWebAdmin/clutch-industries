import ProjectsSection from "../components/ProjectsSection";
import TextAndLinkSection from "../components/TextAndLinkSection";

export default function ProjectsPage() {
  return (
    <main>
      <div className="flex flex-col gap-10 lg:gap-16 h-full px-5 lg:px-10 py-10 lg:py-20">
        <section className="w-full">
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">Our Projects</h2>
        </section>
        <ProjectsSection queryFilter="Residential" id="residential" />
        <ProjectsSection queryFilter="Mixed-Use" id="mixed-use" />
        <ProjectsSection queryFilter="Commercial" id="commercial" />
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
