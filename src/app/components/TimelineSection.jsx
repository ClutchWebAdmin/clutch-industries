import TimelineEvent from "./TimelineEvent";
import { client } from "../../../sanity/lib/client";

export default async function TimelineSection() {
  const data = await client.fetch(`
    *[_type == "projects" && includeInTimeline == true]{
      'date': projectTimeline.constructionStart,
      'slug': slug.current,
      projectTitle,
      milestone,
      'imageUrl': photo.asset->url,
      'height': photo.asset->metadata.dimensions.height,
      'width': photo.asset->metadata.dimensions.width,
      'blurDataURL': photo.asset->metadata.lqip,
    } | order(date asc)
  `);

  return (
    <div className="flex flex-col gap-y-16 lg:gap-y-20">
      <div className="relative pt-8">
        <div className="border-r-2 border-gray-300 absolute h-full top-0 z-0 left-8 lg:left-1/2"></div>

        <div className="lg:hidden flex flex-col gap-8">
          {data.map((item, index) => (
            <div key={index}>
              <TimelineEvent variant="right" timelineEvent={item} />
            </div>
          ))}
        </div>

        <div className="hidden lg:flex flex-col gap-16">
          {data.map((item, index) => (
            <div key={index}>
              <TimelineEvent
                variant={index % 2 === 0 ? "left" : "right"}
                timelineEvent={item}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
