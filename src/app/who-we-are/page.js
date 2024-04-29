import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import teamPhoto from "../../../public/images/clutch-leadership.png";
import TextAndLinkSection from "../components/TextAndLinkSection";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembersArray } from "../data/TeamMembers";

export default function WhoWeArePage() {
  return (
    <main>
      <PhotoLeftTextRightSection
        id="team"
        photoUrl={teamPhoto}
        altText="Team photo"
        heading="About Us"
        paragraph="We are a team-driven company, motivated by the early challenges of projects that helped show us how effective a highly-aligned, well-chosen team (subcontractors, project managers, architects, land development) can be. We have built an amazing team to understand the challenges and changes, and we believe there is no other team in the Willamette Valley that has our skill set. We are looking forward to more opportunities and potential partners, projects, and development within our community."
        buttonText="Meet the team"
        linkTo="/who-we-are/#team-members"
        variant="light"
      />

      <section id="history" className="h-svh bg-clutchBlue-900 text-white">
        History Section
      </section>

      <section
        id="team-members"
        className="flex flex-col gap-10 h-fit w-full md:w-5/6 mx-auto px-5 md:px-0 py-10 lg:py-20"
      >
        <h2 className="text-4xl md:text-7xl 2xl:text-8xl">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {teamMembersArray.map((item, index) => (
            <figure key={index} className="relative col-span-1 shadow-lg">
              <TeamMemberCard
                fullName={item.fullName}
                photoUrl={item.photo}
                title={item.title}
                email={item.email}
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
