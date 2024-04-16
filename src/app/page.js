import Hero from "./components/Hero";
import ServicesDrawer from "./components/ServicesDrawer";
import Image from "next/image";
import teamPhoto from "../../public/images/clutch-team-photo.png";
import PrimaryLinkButton from "./components/Buttons/PrimaryLinkButton";
import TheHomeHeader from "./components/Headers/TheHomeHeader";

export const metadata = {
  title: "Clutch Industries",
  description: "Description here",
  keywords: "Keywords here",
  openGraph: {
    title: "Title here",
    description: "Description here",
    siteName: "Site name here",
    type: "website",
    locale: "en_US",
    url: "URL here",
    images: [
      {
        url: "https://domainname.com/images/og-image.png",
        alt: "Alt text here",
      },
    ],
  },
  images: [
    {
      url: "https://domainname.com/images/og-image.png",
      alt: "Alt text here",
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

        <section
          id="about-us"
          className="flex flex-col gap-6 lg:gap-10 lg:flex-row h-fit text-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20"
        >
          <div className="flex w-full lg:w-1/2">
            <Image src={teamPhoto} alt="Team photo" />
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl">Our Team</h2>
            <div className="flex flex-col gap-6">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Sapien pellentesque habitant morbi tristique. Amet cursus sit
                amet dictum sit amet justo donec.
              </p>
              <PrimaryLinkButton
                buttonText="Meet the team"
                linkTo={"/who-we-are/team"}
              />
            </div>
          </div>
        </section>

        <section
          id="what-we-do"
          className="flex flex-col gap-6 lg:flex-row h-fit text-white bg-clutchBlue-900 px-5 lg:px-10 py-10 lg:py-20"
        >
          <div className="flex flex-col w-full lg:w-1/2">
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl">Our Services</h2>
          </div>

          <div className="flex flex-col w-full lg:w-1/2">
            <ServicesDrawer
              service="Construction"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Amet cursus sit amet dictum sit amet justo donec."
            />
            <ServicesDrawer
              service="Investment"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Amet cursus sit amet dictum sit amet justo donec."
            />
            <ServicesDrawer
              service="Management"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique. Amet cursus sit amet dictum sit amet justo donec."
            />
          </div>
        </section>

        {/* <section
          id="all-properties"
          className="flex flex-col gap-6 lg:gap-10 h-fit bg-clutchBlue-800 text-white px-5 lg:px-10 py-10 lg:py-20"
        >
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl w-full lg:w-1/2">
            Our Projects
          </h2>

          <div className="flex flex-col gap-5 lg:flex-row justify-between w-full">
            <div className="w-full lg:w-1/3 bg-gray-200 h-[400px]">
              Completed
            </div>
            <div className="w-full lg:w-1/3 bg-gray-300 h-[400px]">Current</div>
            <div className="w-full lg:w-1/3 bg-gray-400 h-[400px]">Planned</div>
          </div>
        </section> */}

        {/* <section
          id="contact"
          className="flex flex-col gap-6 lg:gap-10 h-fit px-5 lg:px-10 py-10 lg:py-20"
        >
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl w-full lg:w-1/2">
            Contact Us
          </h2>
          <PrimaryLinkButton buttonText="Get in touch" linkTo="/contact" />
        </section> */}
      </main>
    </>
  );
}
