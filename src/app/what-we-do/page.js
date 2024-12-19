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
          service="Development"
          description="We specialize in innovative development projects, transforming communities with forward-thinking designs and solutions. With a keen eye for emerging markets and strategic partnerships, we drive successful real estate developments that maximize value and potential."
          linkTo="#development"
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
        id="development"
        photoUrl={management}
        altText="development"
        heading="Development"
        paragraph="Our development arm is the cornerstone of our company's vision, dedicated to shaping the future of urban landscapes through strategic planning and design. With a proven track record of successful projects, we leverage our expertise in market analysis, feasibility studies, and stakeholder engagement to identify prime opportunities for growth and transformation. From mixed-use developments that blend residential, commercial, and recreational spaces to sustainable urban revitalization projects, we take pride in creating vibrant and thriving communities. Our commitment to excellence drives us to collaborate with top architects, engineers, and planners, ensuring that each development project aligns with our core values of innovation and social responsibility."
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
