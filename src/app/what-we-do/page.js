import ServicesDrawer from "../components/ServicesDrawer";

export default function WhatWeDoPage() {
  return (
    <main>
      <section
        id="what-we-do"
        className="flex flex-col gap-6 lg:flex-row h-fit px-5 lg:px-10 py-10 lg:py-20 text-clutchBlue-900"
      >
        <div className="flex flex-col w-full lg:w-1/2">
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">What We Do</h2>
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <ServicesDrawer
            service="Construction"
            description="We focus on adaptive reuse, flex warehouse, and full multi-family construction from land acquisition to occupancy in the Willamette Valley and the surrounding area. We currently have more than 500 multifamily units planned over the next three years."
            linkTo="/what-we-do/#construction"
            variant="light"
          />
          <ServicesDrawer
            service="Investment"
            description="We are always excited about finding our next project, no matter the size. We look forward to more investment opportunities and potential partners, projects, and development within our community."
            linkTo="/what-we-do/#investment"
            variant="light"
          />
          <ServicesDrawer
            service="Management"
            description="We are dedicated to providing personalized and attentive care for each property under our management, fostering long-term tenant satisfaction and property value appreciation."
            linkTo="/what-we-do/#management"
            variant="light"
          />
        </div>
      </section>
      <section id="construction" className="border h-svh">
        Construction Section
      </section>
      <section id="investment" className="border h-svh">
        Investment Section
      </section>
      <section id="management" className="border h-svh">
        Management Section
      </section>
    </main>
  );
}
