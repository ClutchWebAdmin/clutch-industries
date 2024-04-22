import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import teamPhoto from "../../../public/images/clutch-team-photo.png";
import TextAndLinkSection from "../components/TextAndLinkSection";

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
      <section id="team-members" className="border h-svh">
        Team Members Section
      </section>
      <TextAndLinkSection
        id="contact"
        heading="Want to work with us?"
        buttonText="Get in touch"
        linkTo="/contact"
        textColor="clutchBlue-800"
        variant="light"
      />
    </main>
  );
}
