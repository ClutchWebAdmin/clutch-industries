import ServicesDrawer from "../components/ServicesDrawer";
import TextAndLinkSection from "../components/TextAndLinkSection";
import DrawerSection from "../components/DrawerSection";

export default function WhatWeDoPage() {
  return (
    <main>
      <DrawerSection
        id="what-we-do"
        heading="Our Services"
        variant="light"
        children={
          <>
            <ServicesDrawer
              service="Construction"
              description="We focus on adaptive reuse, flex warehouse, and full multi-family construction from land acquisition to occupancy in the Willamette Valley and the surrounding area. We currently have more than 500 multifamily units planned over the next three years."
              linkTo="#construction"
              variant="dark"
              buttonText="Learn more"
            />
            <ServicesDrawer
              service="Investment"
              description="We are always excited about finding our next project, no matter the size. We look forward to more investment opportunities and potential partners, projects, and development within our community."
              linkTo="#investment"
              variant="dark"
              buttonText="Learn more"
            />
            <ServicesDrawer
              service="Management"
              description="We are dedicated to providing personalized and attentive care for each property under our management, fostering long-term tenant satisfaction and property value appreciation."
              linkTo="#management"
              variant="dark"
              buttonText="Learn more"
            />
          </>
        }
      />
      <section id="construction" className="border h-svh">
        Construction Section
      </section>
      <section id="investment" className="border h-svh">
        Investment Section
      </section>
      <section id="management" className="border h-svh">
        Management Section
      </section>
      <TextAndLinkSection
        heading="Ready to work with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
