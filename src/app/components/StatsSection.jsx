"use client";

import { useState, useEffect } from "react";

export default function StatsSection() {
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [squareFootage, setSquareFootage] = useState(0);
  const [placeholder, setPlaceholder] = useState(0);

  useEffect(() => {
    const projectsInterval = setInterval(() => {
      // Increment projectsCompleted by 1 until it reaches 20
      if (projectsCompleted < 20) {
        setProjectsCompleted((prevCount) => prevCount + 1);
      }
    }, 150);

    return () => {
      clearInterval(projectsInterval);
    };
  }, [projectsCompleted]);

  useEffect(() => {
    const squareFootageInterval = setInterval(() => {
      // Increment squareFootage by 100 until it reaches 150000
      if (squareFootage < 150000) {
        setSquareFootage((prevCount) => prevCount + 100);
      }
    }, 1);

    return () => {
      clearInterval(squareFootageInterval);
    };
  }, [squareFootage]);

  useEffect(() => {
    const placeholderInterval = setInterval(() => {
      // Increment placeholder by 50 until it reaches 20000
      if (placeholder < 20000) {
        setPlaceholder((prevCount) => prevCount + 50);
      }
    }, 5);

    return () => {
      clearInterval(placeholderInterval);
    };
  }, [placeholder]);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 text-white">
      <div className="bg-clutchBlue-700 p-4 col-span-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Projects Completed</h3>
        <p className="text-5xl">
          {projectsCompleted >= 20 ? 20 : projectsCompleted}
        </p>
      </div>
      <div className="bg-clutchBlue-600 p-4 col-span-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Square Footage</h3>
        <p className="text-5xl">
          {squareFootage >= 150000 ? 150000 : squareFootage}
        </p>
      </div>
      <div className="bg-clutchBlue-500 p-4 col-span-1 flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Placeholder</h3>
        <p className="text-5xl">{placeholder}</p>
      </div>
    </section>
  );
}
