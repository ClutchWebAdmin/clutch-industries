import TextAndLinkSection from "../components/TextAndLinkSection";
import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import PhotoRightTextLeftSection from "../components/PhotoRightTextLeftSection";
import construction from "../../../public/images/construction.png";
import investment from "../../../public/images/investment.png";
import management from "../../../public/images/management.png";
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
        photoUrl={construction}
        altText="construction"
        heading="Construction"
        paragraph="Our company specializes in diverse construction projects aimed at enhancing the landscape of the Willamette Valley and its adjacent areas. With a focus on adaptive reuse, flex warehouse solutions, and multi-family construction, we take pride in transforming spaces and creating new living opportunities. From initial land acquisition to the final stages of occupancy, we oversee every aspect of the development process. Our commitment to sustainable practices and community engagement ensures that each project reflects the unique character of its surroundings while meeting the highest standards of quality and innovation. As we look to the future, our ambitious plans include the development of more than 500 multifamily units over the next three years. This strategic growth underscores our dedication to shaping vibrant communities and fostering long-term prosperity in the region."
        buttonText="View Projects"
        linkTo="/projects"
        variant="dark"
      />
      <PhotoRightTextLeftSection
        id="investment"
        photoUrl={investment}
        altText="investment"
        heading="Investment"
        paragraph="Our enthusiasm for discovering new projects knows no bounds, regardless of their scale. We eagerly anticipate exploring further investment opportunities and forging partnerships that align with our vision for community-driven development. With an eye towards growth and collaboration, we remain open to a wide range of projects and potential ventures within our local area. Whether it's revitalizing existing spaces or embarking on innovative developments, we are committed to contributing to the vibrancy and prosperity of our community. As we continue our journey, we welcome the opportunity to connect with like-minded individuals and organizations who share our passion for creating positive change and making a lasting impact."
        buttonText="View Projects"
        linkTo="/projects"
        variant="light"
      />
      <PhotoLeftTextRightSection
        id="management"
        photoUrl={management}
        altText="management"
        heading="Management"
        paragraph="We hold a steadfast commitment to delivering tailored and responsive management services for every property entrusted to our care. We prioritize individualized attention and proactive maintenance, ensuring that each tenant receives the highest level of service and support. By cultivating strong relationships with tenants and staying attuned to their needs, we foster a sense of community and mutual respect within our properties. Our dedication to excellence extends beyond day-to-day operations to encompass strategic planning and asset management, driving long-term value appreciation for property owners. With a focus on sustainability and innovation, we strive to create environments where tenants thrive and properties flourish, enriching the overall quality of life for all stakeholders involved."
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
