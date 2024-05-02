import TextAndLinkSection from "../components/TextAndLinkSection";
import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import PhotoRightTextLeftSection from "../components/PhotoRightTextLeftSection";
import placeholder from "../../../public/images/clutch-team-photo.png";
import DrawerSection from "../components/DrawerSection";
import ServicesDrawer from "../components/ServicesDrawer";

export default function WhatWeDoPage() {
  return (
    <main>
      <DrawerSection id="services" heading="Our Services" variant="light">
        <ServicesDrawer
          service="Construction"
          description="We focus on adaptive reuse, flex warehouse, and full multi-family construction from land acquisition to occupancy in the Willamette Valley and the surrounding area. We currently have more than 500 multifamily units planned over the next three years."
          linkTo="#construction"
          variant="light"
          buttonText="Learn more"
        />
        <ServicesDrawer
          service="Investment"
          description="We are always excited about finding our next project, no matter the size. We look forward to more investment opportunities and potential partners, projects, and development within our community."
          linkTo="#investment"
          variant="light"
          buttonText="Learn more"
        />
        <ServicesDrawer
          service="Management"
          description="We are dedicated to providing personalized and attentive care for each property under our management, fostering long-term tenant satisfaction and property value appreciation."
          linkTo="#management"
          variant="light"
          buttonText="Learn more"
        />
      </DrawerSection>
      <PhotoLeftTextRightSection
        id="construction"
        photoUrl={placeholder}
        altText="construction"
        heading="Construction"
        paragraph="We focus on adaptive reuse, flex warehouse, and full multi-family construction from land acquisition to occupancy in the Willamette Valley and the surrounding area. We currently have more than 500 multifamily units planned over the next three years."
        buttonText="View Projects"
        linkTo="/projects"
        variant="dark"
      />
      <PhotoRightTextLeftSection
        id="investment"
        photoUrl={placeholder}
        altText="investment"
        heading="Investment"
        paragraph="We are always excited about finding our next project, no matter the size. We look forward to more investment opportunities and potential partners, projects, and development within our community."
        buttonText="View Projects"
        linkTo="/projects"
        variant="light"
      />
      <PhotoLeftTextRightSection
        id="management"
        photoUrl={placeholder}
        altText="management"
        heading="Management"
        paragraph="We are dedicated to providing personalized and attentive care for each property under our management, fostering long-term tenant satisfaction and property value appreciation."
        buttonText="View Projects"
        linkTo="/projects"
        variant="dark"
      />
      <TextAndLinkSection
        heading="Want to work with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
