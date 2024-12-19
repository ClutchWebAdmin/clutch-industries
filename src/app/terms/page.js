import SmallHeadingAndText from "../components/SmallHeadingAndText";

export default async function TermsPage() {
  const termsArray = [
    {
      heading: "Acceptance of Terms",
      paragraph:
        "By accessing or using the Site, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Site.",
    },
    {
      heading: "Use of the Site",
      paragraph:
        "You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to:",
      bullets: [
        "Violate any applicable laws or regulations.",
        "Infringe on the rights of others.",
        "Attempt to gain unauthorized access to the Site or any accounts, computer systems, or networks connected to the Site",
      ],
    },
    {
      heading: "Intellectual Property",
      paragraph:
        "The Site and its original content, features, and functionality are owned by Clutch Industries and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.",
    },
    {
      heading: "Disclaimer of Warranties",
      paragraph:
        "The Site is provided on an 'as is' and 'as available' basis, without any warranties of any kind, express or implied. We do not warrant that the Site will be error-free or uninterrupted, or that any defects will be corrected.",
    },
    {
      heading: "Limitation of Liability",
      paragraph:
        "In no event shall Clutch Industries be liable for any indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with your use of the Site.",
    },
    {
      heading: "Indemnification",
      paragraph:
        "You agree to indemnify and hold harmless Clutch Industries and its officers, directors, employees, and agents, from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Site or violation of these Terms.",
    },
    {
      heading: "Changes to Terms",
      paragraph:
        "We may revise these Terms from time to time. The revised Terms will be effective immediately upon posting on the Site. By continuing to use the Site after any such revisions, you agree to be bound by the revised Terms.",
    },
    {
      heading: "Contact Us",
      paragraph:
        "If you have any questions about these Terms, please contact us at office@clutchindustries.com.",
    },
  ];

  return (
    <main>
      <section
        id="terms-of-service"
        className="flex flex-col gap-8 lg:gap-16 py-10 lg:py-20"
      >
        <div
          className="flex flex-col gap-6 lg:gap-10  w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-5 lg:px-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-start">
              Terms of Service
            </h2>
            <p>
              These Terms of Service ('Terms') govern your use of the Clutch
              Industries ('we', 'us', or 'our') website clutchindustries.com
              (the 'Site') and any services provided through the Site.
            </p>
          </div>

          {termsArray.map((item, index) => (
            <div key={index} className="flex flex-col gap-3">
              <SmallHeadingAndText
                heading={item.heading}
                paragraph={item.paragraph}
                uniqueKey={index}
                bullets={item.bullets}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
