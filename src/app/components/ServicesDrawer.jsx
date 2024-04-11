"use client";

import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export default function ServicesDrawer({ service, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative border-b">
      <div className="flex flex-row items-center justify-between py-6">
        <h6 className="text-lg lg:text-2xl font-semibold">{service}</h6>

        <button
          className="text-2xl lg:text-4xl font-thin"
          onClick={toggleDrawer}
        >
          {isOpen ? (
            <AiOutlineMinus className="animate__animated animate__rotateIn animate__faster" />
          ) : (
            <AiOutlinePlus className="animate__animated animate__rotateIn animate__faster" />
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden max-h-0 transition-all duration-700 ${
          isOpen ? "max-h-screen" : ""
        }`}
      >
        <div className="pb-6">
          <p className="text-clutchBlue-100">{description}</p>
        </div>
      </div>
    </div>
  );
}
