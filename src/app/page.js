import Hero from "./components/Hero";
import ServicesDrawer from "./components/ServicesDrawer";
import Link from "next/link";
import teamPhoto from "../../public/images/clutch-team-photo.png";
import TheHomeHeader from "./components/Headers/TheHomeHeader";
import StatsSection from "./components/StatsSection";
import PhotoLeftTextRightSection from "./components/PhotoLeftTextRightSection";
import TextAndLinkSection from "./components/TextAndLinkSection";
import DrawerSection from "./components/DrawerSection";
import TriplePhotoSection from "./components/TriplePhotoSection";

export const metadata = {
  title: "Clutch Industries | Construction, Investment, Management",
  description:
    "Your full service construction experts in the Willamette Valley & beyond.",
  keywords:
    "Salem, Oregon, construction, property management, investment, full service, willamette valley",
  openGraph: {
    title: "Clutch Industries | Construction, Investment, Management",
    description:
      "Your full service construction experts in the Willamette Valley & beyond.",
    siteName: "Clutch Industries | Construction, Investment, Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchindustries.com",
    images: [
      {
        url: "https://clutchindustries.com/images/og-image.png",
        alt: "Clutch Industries",
      },
    ],
  },
  images: [
    {
      url: "https://clutchindustries.com/images/og-image.png",
      alt: "Clutch Industries",
    },
  ],
};

export default function Home() {
  return (
    <>
      <TheHomeHeader />
      <main>
        <section className="h-svh relative">
          <Hero />
        </section>

        <StatsSection />

        <PhotoLeftTextRightSection
          id="about-us"
          photoUrl={teamPhoto}
          altText="Team photo"
          heading="Our Team"
          paragraph="Here at Clutch Industries, we have an unwavering commitment to great service and quality in every thing that we do. Meet the team that makes it all possible."
          buttonText="About Us"
          linkTo="/who-we-are"
          variant="light"
        />

        <DrawerSection id="what-we-do" heading="Our Services" variant="dark">
          <ServicesDrawer
            service="Construction"
            description="We focus on adaptive reuse, flex warehouse, and full multi-family construction from land acquisition to occupancy in the Willamette Valley and the surrounding area. We currently have more than 500 multifamily units planned over the next three years."
            linkTo="/what-we-do"
            variant="dark"
            buttonText="Learn more"
          />
          <ServicesDrawer
            service="Investment"
            description="We are always excited about finding our next project, no matter the size. We look forward to more investment opportunities and potential partners, projects, and development within our community."
            linkTo="/what-we-do"
            variant="dark"
            buttonText="Learn more"
          />
          <ServicesDrawer
            service="Management"
            description="We are dedicated to providing personalized and attentive care for each property under our management, fostering long-term tenant satisfaction and property value appreciation."
            linkTo="/what-we-do"
            variant="dark"
            buttonText="Learn more"
          />
        </DrawerSection>

        <TriplePhotoSection
          id="project-types"
          heading1="Commercial Projects"
          linkTo1="/projects/#commercial"
          heading2="Residential Projects"
          linkTo2="/projects/#residential"
          heading3="Mixed-Use Projects"
          linkTo3="/projects/#mixed-use"
        />

        <TextAndLinkSection
          heading="Want to work with us?"
          buttonText="Get in touch"
          variant="light"
          purpose="contact"
        />
      </main>
    </>
  );
}
