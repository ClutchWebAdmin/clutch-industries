"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function NavDropdown({ mainLinkText, linkTo, dropdownArray }) {
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
        aria-label="Open dropdown menu"
      >
        <Link href={linkTo}>{mainLinkText}</Link>
        <div>
          {showDropdown ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </div>
      </button>
      {showDropdown && (
        <div className="absolute top-full left-0 bg-white shadow-md p-2 rounded-md">
          <div className="flex flex-col w-[180px]">
            {dropdownArray.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className="border rounded-sm border-transparent hover:border-clutchBlue-950 hover:text-clutchBlue-950 p-2 shadow-md shadow-transparent hover:shadow-clutchBlue-950"
                aria-label="Nav item"
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
