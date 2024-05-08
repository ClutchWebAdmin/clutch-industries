import { oxanium } from "../styles/fonts";
import { client } from "../../../sanity/lib/client";

export default async function StatsSection() {
  const data = await client.fetch(`*[_type == "projects"]{
    'squareFootage': projectDetails.squareFootage,
    'unitsObject': projectDetails.units
  }`);

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString();
  };

  // Calculate the total number of projects
  const projectsCompleted = data.length;
  const formattedProjectsCompleted = formatNumberWithCommas(projectsCompleted);

  // Calculate the sum of square footage
  const squareFootage = data.reduce(
    (acc, project) => acc + project.squareFootage,
    0
  );
  const formattedSquareFootage = formatNumberWithCommas(squareFootage);

  // Calculate the total number of units
  const totalUnits = data.reduce((acc, project) => {
    const units = Object.values(project.unitsObject);
    return acc + units.reduce((unitAcc, unit) => unitAcc + unit, 0);
  }, 0);
  const formattedTotalUnits = formatNumberWithCommas(totalUnits);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 text-white h-fit">
      <div
        className="bg-clutchBlue-800 col-span-1 flex flex-row"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className="flex w-8 bg-gray-800"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold`}>
              Projects Completed
            </h3>
            <p className="text-6xl">{formattedProjectsCompleted}</p>
          </div>

          <div className="h-2 w-full bg-gray-700"></div>
        </div>
      </div>

      <div
        className="bg-clutchBlue-700 col-span-1 flex flex-row"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className="flex w-8 bg-gray-600"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold`}>
              Square Footage
            </h3>
            <p className="text-6xl">{formattedSquareFootage}</p>
          </div>

          <div className="h-2 w-full bg-gray-500"></div>
        </div>
      </div>

      <div
        className="bg-clutchBlue-600 col-span-1 flex flex-row"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <div className="flex w-8 bg-gray-400"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold`}>
              Total Units
            </h3>
            <p className="text-6xl">{formattedTotalUnits}</p>
          </div>

          <div className="h-2 w-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
