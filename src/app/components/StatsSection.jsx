"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function StatsSection() {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [squareFootage, setSquareFootage] = useState(0);
  const [placeholder, setPlaceholder] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      const projectsInterval = setInterval(() => {
        // Increment projectsCompleted by 1 until it reaches 20
        if (projectsCompleted < 20) {
          setProjectsCompleted((prevCount) => prevCount + 1);
        }
      }, 150);

      return () => {
        clearInterval(projectsInterval);
      };
    }
  }, [inView, projectsCompleted]);

  useEffect(() => {
    if (inView) {
      const squareFootageInterval = setInterval(() => {
        // Increment squareFootage by 100 until it reaches 150000
        if (squareFootage < 150000) {
          setSquareFootage((prevCount) => prevCount + 100);
        }
      }, 1);

      return () => {
        clearInterval(squareFootageInterval);
      };
    }
  }, [inView, squareFootage]);

  useEffect(() => {
    if (inView) {
      const placeholderInterval = setInterval(() => {
        // Increment placeholder by 50 until it reaches 20000
        if (placeholder < 20000) {
          setPlaceholder((prevCount) => prevCount + 50);
        }
      }, 5);

      return () => {
        clearInterval(placeholderInterval);
      };
    }
  }, [inView, placeholder]);

  return (
    <section
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-3 text-white h-fit"
    >
      <div className="bg-clutchBlue-800 col-span-1 flex flex-row">
        <div className="flex w-[5%] bg-gray-800"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className="text-lg font-semibold">Projects Completed</h3>
            <p className="text-6xl">
              {projectsCompleted >= 20 ? 20 : projectsCompleted}
            </p>
          </div>

          <div className="h-4 w-full bg-gray-700"></div>
        </div>
      </div>

      <div className="bg-clutchBlue-700 col-span-1 flex flex-row">
        <div className="flex w-[5%] bg-gray-600"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className="text-lg font-semibold">Square Footage</h3>
            <p className="text-6xl">
              {squareFootage >= 150000 ? 150000 : squareFootage}
            </p>
          </div>

          <div className="h-4 w-full bg-gray-500"></div>
        </div>
      </div>

      <div className="bg-clutchBlue-600 col-span-1 flex flex-row">
        <div className="flex w-[5%] bg-gray-400"></div>
        <div className=" flex flex-col justify-between w-full">
          <div className="flex flex-grow flex-col gap-2 px-4 py-6 justify-center ">
            <h3 className="text-lg font-semibold">Placeholder</h3>
            <p className="text-6xl">{placeholder}</p>
          </div>

          <div className="h-4 w-full bg-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
