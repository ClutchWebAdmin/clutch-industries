import TextAndLinkSection from "../components/TextAndLinkSection";
import PhotoLeftTextRightSection from "../components/PhotoLeftTextRightSection";
import PhotoRightTextLeftSection from "../components/PhotoRightTextLeftSection";
import placeholder from "../../../public/images/placeholder.png";

export default function WhatWeDoPage() {
  return (
    <main>
      <div className="flex flex-col h-full pt-10 lg:pt-20">
        <section className="w-full px-5 lg:px-10">
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">What We Do</h2>
        </section>
        <PhotoLeftTextRightSection
          id="construction"
          photoUrl={placeholder}
          altText="construction"
          heading="Construction"
          paragraph="We focus on adaptive reuse, flex warehouse, and full multi-family construction from land acquisition to occupancy in the Willamette Valley and the surrounding area. We currently have more than 500 multifamily units planned over the next three years."
          buttonText="View Projects"
          linkTo="/projects"
          variant="light"
        />
        <PhotoRightTextLeftSection
          id="investment"
          photoUrl={placeholder}
          altText="investment"
          heading="Investment"
          paragraph="We are always excited about finding our next project, no matter the size. We look forward to more investment opportunities and potential partners, projects, and development within our community."
          buttonText="View Projects"
          linkTo="/projects"
          variant="dark"
        />
        <PhotoLeftTextRightSection
          id="management"
          photoUrl={placeholder}
          altText="management"
          heading="Management"
          paragraph="We are dedicated to providing personalized and attentive care for each property under our management, fostering long-term tenant satisfaction and property value appreciation."
          buttonText="View Projects"
          linkTo="/projects"
          variant="light"
        />
      </div>
      <TextAndLinkSection
        heading="Want to work with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
