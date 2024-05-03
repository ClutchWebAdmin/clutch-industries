import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import teamPhoto from "../../../public/images/clutch-leadership.png";
import TextAndLinkSection from "../components/TextAndLinkSection";
import TeamMemberCard from "../components/TeamMemberCard";
import TimelineSection from "../components/TimelineSection";
import { client } from "../../../sanity/lib/client";

export default async function WhoWeArePage() {
  const data = await client.fetch(`
    *[_type == "team"]{
      teamMembers[]{
        fullName,
        title,
        email,
        'imageUrl': photo.asset->url,
        'blurDataURL': photo.asset->metadata.lqip,
        'height': photo.asset->metadata.dimensions.height,
        'width': photo.asset->metadata.dimensions.width,
      }
    }
  `);

  const teamMembersArray = data[0]?.teamMembers;

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
        className="flex flex-col gap-8 lg:gap-16 bg-clutchBlue-800 text-white px-5 lg:px-10 py-10 lg:py-20"
      >
        <div
          className="flex flex-col gap-6 w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-start lg:text-center">
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

      <section
        id="team"
        className="flex flex-col gap-10 h-fit w-full md:w-5/6 px-5 md:px-0 py-10 lg:py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
      >
        <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-10">
          {teamMembersArray.map((member, index) => (
            <figure key={index} className="relative col-span-1 shadow-lg">
              <TeamMemberCard
                fullName={member.fullName}
                photoUrl={member.imageUrl}
                blurDataURL={member.blurDataURL}
                height={member.height}
                width={member.width}
                title={member.title}
                email={member.email}
              />
            </figure>
          ))}
        </div>
      </section>

      <TextAndLinkSection
        heading="Want to work with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
