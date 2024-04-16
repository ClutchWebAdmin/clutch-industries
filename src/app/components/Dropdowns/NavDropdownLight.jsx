"use client";

import { useState } from "react";
import Link from "next/link";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

export default function NavDropdownLight({ mainLinkText, dropdownArray }) {
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
      className="relative font-medium "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={togglePropertiesDropdown}
        className=" hover:text-clutchBlue-200 flex flex-row items-center gap-2 p-2"
      >
        {mainLinkText}
        <div>
          {showDropdown ? <IoChevronUpSharp /> : <IoChevronDownSharp />}
        </div>
      </button>
      {showDropdown && (
        <div className="absolute top-full left-0 bg-white/5 backdrop-blur-md p-2">
          <div className="flex flex-col w-[180px]">
            {dropdownArray.map((item, index) => (
              <Link
                key={index}
                href={item.linkTo}
                className="border border-transparent hover:border hover:border-clutchBlue-200 hover:text-clutchBlue-100 p-2"
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
