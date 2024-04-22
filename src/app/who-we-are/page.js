import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import teamPhoto from "../../../public/images/clutch-leadership.png";
import TextAndLinkSection from "../components/TextAndLinkSection";
import TeamMemberCard from "../components/TeamMemberCard";
import { teamMembersArray } from "../data/TeamMembers";

export default function WhoWeArePage() {
  return (
    <main>
      <section id="history" className="h-svh">
        History Section
      </section>

      <PhotoLeftTextRightSection
        id="team"
        photoUrl={teamPhoto}
        altText="Team photo"
        heading="Who We Are"
        paragraph="Here at Clutch Industries, we have an unwavering commitment to great service and quality in every thing that we do. Meet the team that makes it all possible."
        buttonText="Meet the team"
        linkTo="/who-we-are/#team-members"
        variant="dark"
      />

      <section
        id="team-members"
        className="h-fit w-full md:w-5/6 mx-auto px-5 md:px-0 py-10 lg:py-20"
      >
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
        id="contact"
        heading="Want to work with us?"
        buttonText="Get in touch"
        linkTo="/contact"
        variant="dark"
      />
    </main>
  );
}
