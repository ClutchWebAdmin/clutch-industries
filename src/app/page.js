import Hero from "./components/Hero";
import ServicesDrawer from "./components/ServicesDrawer";
import teamPhoto from "../../public/images/clutchteamphotosmall.png";
import TheHomeHeader from "./components/Headers/TheHomeHeader";
import StatsSection from "./components/StatsSection";
import PhotoLeftTextRightSection from "./components/PhotoLeftTextRightSection";
import TextAndLinkSection from "./components/TextAndLinkSection";
import DrawerSection from "./components/DrawerSection";
import TriplePhotoSection from "./components/TriplePhotoSection";
import commercialThumbnail from "../../public/images/commercial-thumbnail.png";
import residentialThumbnail from "../../public/images/residential-thumbnail.png";
import mixedUseThumbnail from "../../public/images/mixed-use-thumbnail.png";

export const metadata = {
  title: "Clutch Industries | Construction, Investment, Development",
  description:
    "Your full service construction experts in the Willamette Valley & beyond.",
  keywords:
    "Salem, Oregon, construction, property management, investment, development full service, willamette valley",
  openGraph: {
    title: "Clutch Industries | Construction, Investment, Management",
    description:
      "Your full service construction experts in the Willamette Valley & beyond.",
    siteName: "Clutch Industries | Construction, Investment, Development",
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
          paragraph="At Clutch Industries, our dedication to exceptional service and top-notch quality permeates every aspect of our operations. Our team embodies this ethos, with each member bringing unique skills, expertise, and passion to the table. Together, we strive to exceed expectations, foster innovation, and build lasting relationships with our clients. Our unwavering commitment to excellence drives us forward, ensuring that we consistently deliver outstanding results and maintain our position as leaders in our industry."
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
            service="Development"
            description="We specialize in innovative development projects, transforming communities with forward-thinking designs and solutions. With a keen eye for emerging markets and strategic partnerships, we drive successful real estate developments that maximize value and potential."
            linkTo="/what-we-do"
            variant="dark"
            buttonText="Learn more"
          />
        </DrawerSection>

        <TriplePhotoSection
          id="project-types"
          image1={commercialThumbnail}
          heading1="Commercial Spaces"
          linkTo1="/projects/#commercial"
          image2={residentialThumbnail}
          heading2="Residential Spaces"
          linkTo2="/projects/#residential"
          image3={mixedUseThumbnail}
          heading3="Mixed-Use Spaces"
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
