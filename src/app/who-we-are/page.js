import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import teamPhoto from "../../../public/images/clutch-leadership.png";
import TextAndLinkSection from "../components/TextAndLinkSection";
import TimelineSection from "../components/TimelineSection";
import TeamMemberSection from "../components/TeamMemberSection";

export default async function WhoWeArePage() {
  return (
    <main>
      <PhotoLeftTextRightSection
        id="about-us"
        photoUrl={teamPhoto}
        altText="Team photo"
        heading="About Us"
        paragraph="We are a team-driven company, motivated by the early challenges of projects that helped show us how effective a highly-aligned, well-chosen team (subcontractors, project managers, architects, land development) can be. We have built an amazing team to understand the challenges and changes, and we believe there is no other team in the Willamette Valley that has our skill set. We are looking forward to more opportunities and potential partners, projects, and development within our community."
        buttonText="Meet the team"
        linkTo="/who-we-are/#team-members"
        variant="light"
      />

      <section
        id="history"
        className="flex flex-col gap-8 lg:gap-16 bg-clutchBlue-800 text-white py-10 lg:py-20"
      >
        <div
          className="flex flex-col gap-6 w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-start lg:text-center px-5 lg:px-10">
            Our History
          </h2>
          <TimelineSection />
        </div>
      </section>

      <TextAndLinkSection
        heading="View all of our projects"
        buttonText="Click here"
        variant="dark"
        purpose="link"
        linkTo="/projects"
      />

      <TeamMemberSection />

      <TextAndLinkSection
        heading="Want to work with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
