import TimelineEvent from "./TimelineEvent";
import placeholder from "../../../public/images/placeholder-small.png";

export default function TimelineSection() {
  return (
    <div className="flex flex-col gap-y-16 lg:gap-y-20">
      <div className="relative pt-8">
        <div className="border-r-2 border-gray-300 absolute h-full top-0 z-0 left-8 lg:left-1/2"></div>

        <div className="lg:hidden">
          <TimelineEvent
            variant="right"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
          <TimelineEvent
            variant="right"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
          <TimelineEvent
            variant="right"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
          <TimelineEvent
            variant="right"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
        </div>

        <div className="hidden lg:block">
          <TimelineEvent
            variant="left"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
          <TimelineEvent
            variant="right"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
          <TimelineEvent
            variant="left"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
          <TimelineEvent
            variant="right"
            date="December 2017"
            imageUrl={placeholder}
            altText="Alt text"
            milestone="First commercial project"
            linkTo="/projects/verda-crossing-apartments"
          />
        </div>
      </div>
    </div>
  );
}
