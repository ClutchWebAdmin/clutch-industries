"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function ConstructionNavDropdown() {
  const [showPropertiesDropdown, setShowPropertiesDropdown] = useState(false);

  const togglePropertiesDropdown = () => {
    setShowPropertiesDropdown(!showPropertiesDropdown);
  };

  const handleMouseEnter = () => {
    setShowPropertiesDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowPropertiesDropdown(false);
  };

  return (
    <div
      className="relative font-medium "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={togglePropertiesDropdown}
        className=" hover:text-clutchBlue-200 flex flex-row items-center gap-2"
      >
        Construction
        <div>
          {showPropertiesDropdown ? (
            <IoChevronUpSharp />
          ) : (
            <IoChevronDownSharp />
          )}
        </div>
      </button>
      {showPropertiesDropdown && (
        <div className="absolute top-full left-0 bg-white/5 backdrop-blur-md rounded-md p-2">
          <div className="flex flex-col w-[180px]">
            <Link
              href="#all-properties"
              className="border border-transparent hover:border hover:border-clutchBlue-200 hover:text-clutchBlue-100 rounded-md p-2"
            >
              All Properties
            </Link>
            <Link
              href="/construction/completed-projects"
              className="border border-transparent hover:border hover:border-clutchBlue-200 hover:text-clutchBlue-100 rounded-md p-2"
            >
              Completed Projects
            </Link>
            <Link
              href="/construction/current-projects"
              className="border border-transparent hover:border hover:border-clutchBlue-200 hover:text-clutchBlue-100 rounded-md p-2"
            >
              Current Projects
            </Link>
            <Link
              href="/construction/upcoming-projects"
              className="border border-transparent hover:border hover:border-clutchBlue-200 hover:text-clutchBlue-100 rounded-md p-2"
            >
              Upcoming Projects
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
