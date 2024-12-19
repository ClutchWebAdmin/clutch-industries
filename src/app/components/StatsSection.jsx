import { oxanium } from "../styles/fonts";
import { client } from "../../../sanity/lib/client";

export default async function StatsSection() {
  const data = await client.fetch(
    `*[_type == "projects"]{
    'squareFootage': projectDetails.squareFootage,
    'unitsObject': projectDetails.units
  }`,
    { next: { tags: ["stats"] } }
  );

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
        className="bg-gray-800 col-span-1 flex flex-row"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        
        <div className="bg-gray-800 flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col justify-center bg-gray-800 pl-4 pb-2">
            <h3 className={`${oxanium.className} text-lg font-semibold bg-clutchBlue-800 p-4 border-b`}>
              Projects Completed
            </h3>
            <p className="bg-clutchBlue-800 rounded-b-lg drop-shadow-xl text-6xl p-4">{formattedProjectsCompleted}</p>
          </div>

          
        </div>
      </div>

      <div
        className="bg-gray-600 col-span-1 flex flex-row"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col pl-4 pb-2 justify-center ">
            <h3 className={`${oxanium.className} bg-clutchBlue-700  p-4 text-lg font-semibold border-b`}>
              Square Footage
            </h3>
            <p className="text-6xl bg-clutchBlue-700 rounded-b-lg drop-shadow-xl p-4">{formattedSquareFootage}</p>
          </div>

          
        </div>
      </div>

      <div
        className="bg-gray-400 col-span-1 flex flex-row"
        data-aos="flip-right"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col pl-4 pb-2 justify-center ">
            <h3 className={`${oxanium.className} text-lg font-semibold bg-clutchBlue-600 p-4 border-b`}>
              Total Units
            </h3>
            <p className="text-6xl bg-clutchBlue-600 p-4 rounded-b-lg drop-shadow-xl">{formattedTotalUnits}</p>
          </div>

      
        </div>
      </div>
    </section>
  );
}
