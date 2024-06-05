import { client } from "../../../sanity/lib/client";
import TextAndLinkSection from "../components/TextAndLinkSection";

export default async function InvestorsPage() {
  const data = await client.fetch(`
    *[_type == "investorUpdates"]{
      _createdAt,
      title,
      video,
      shortParagraph
    } | order(_createdAt desc)
  `);

  const investorData = data;

  return (
    <main>
      <div className="flex flex-col gap-10 lg:gap-16 w-full h-full py-10 lg:py-20 xl:w-[1280px] xl:max-w-screen-xl 2xl:w-[1536px] 2xl:max-w-screen-2xl px-5 lg:px-10 mx-auto">
        <section className="w-full">
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">
            Investor Updates
          </h2>
        </section>
        {investorData.map((update, index) => {
          const date = new Date(update._createdAt);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-5 border-b pb-10 lg:pb-16"
            >
              {update.video ? (
                <div
                  className="flex w-full lg:w-1/2"
                  dangerouslySetInnerHTML={{ __html: update.video }}
                ></div>
              ) : (
                <div className="flex w-full lg:w-1/2">Loading video...</div>
              )}
              <div className="flex flex-col w-full lg:w-1/2 gap-3">
                <h3 className="text-2xl lg:text-4xl">{update.title}</h3>
                <p className="text-clutchBlue-400">{formattedDate}</p>
                <p>{update.shortParagraph}</p>
              </div>
            </div>
          );
        })}
      </div>
      <TextAndLinkSection
        heading="Want to invest with us?"
        buttonText="Get in touch"
        variant="dark"
        purpose="contact"
      />
    </main>
  );
}
