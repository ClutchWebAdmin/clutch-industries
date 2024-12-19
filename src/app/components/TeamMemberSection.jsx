import { client } from "../../../sanity/lib/client";
import TeamMemberCard from "./TeamMemberCard";

export default async function TeamMemberSection() {
  const data = await client.fetch(`
    *[_type == "team"]{
      teamMembers[]{
        fullName,
        title,
        email,
        'imageUrl': photo.asset->url,
        'blurDataURL': photo.asset->metadata.lqip,
        'height': photo.asset->metadata.dimensions.height,
        'width': photo.asset->metadata.dimensions.width,
      }
    }
  `);

  const teamMembersArray = data[0]?.teamMembers;

  return (
    <section
      id="team"
      className="flex flex-col gap-10 h-fit w-full px-5 lg:px-10 py-10 lg:py-20 xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto"
    >
      <h2 className="text-4xl md:text-7xl 2xl:text-8xl text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-10">
        {teamMembersArray.map((member, index) => (
          <figure key={index} className="flex relative col-span-1 rounded-lg shadow-md shadow-black">
            <TeamMemberCard
              fullName={member.fullName}
              photoUrl={member.imageUrl}
              blurDataURL={member.blurDataURL}
              height={member.height}
              width={member.width}
              title={member.title}
              email={member.email}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
