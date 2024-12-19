"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function TheHomeNavDropdown({
  mainLinkText,
  linkTo,
  dropdownArray,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const togglePropertiesDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div
      className="relative font-medium"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={togglePropertiesDropdown}
        className=" hover:text-clutchBlue-950 flex flex-row items-center gap-2 p-2 uppercase"
      >
        <Link href={linkTo}>{mainLinkText}</Link>
        <div>
          {showDropdown ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </div>
      </button>
      {showDropdown && (
        <div
          className="absolute top-full left-0 bg-white/5 backdrop-blur-md p-2 rounded-md"
        >
          <div className="flex flex-col w-[180px]">
            {dropdownArray.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className="border border-transparent rounded-sm hover:border hover:ring-2 ring-clutchBlue-950 ring-offset-2 hover:text-sky-300 p-2 transition duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
