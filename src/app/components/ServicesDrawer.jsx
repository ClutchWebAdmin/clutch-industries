"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa6";

export default function ServicesDrawer({
  service,
  description,
  linkTo,
  variant,
  buttonText,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (variant === "dark") {
    return (
      <div className="relative border-b">
        <div
          className="flex flex-row items-center justify-between py-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
          className={`flex flex-col gap-6 overflow-hidden max-h-0 transition-all duration-700 ${
            isOpen ? "max-h-screen" : ""
          }`}
        >
          <div className="">
            <p>{description}</p>
          </div>
          <Link
            href={linkTo}
            className="flex flex-row items-center gap-2 mb-6 w-fit ml-auto text-clutchBlue-200 hover:text-clutchBlue-100 hover:-translate-x-2 transition duration-300"
          >
            {buttonText}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    );
  } else if (variant === "light") {
    return (
      <div className="relative border-b text-clutchBlue-900">
        <div
          className="flex flex-row items-center justify-between py-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
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
          className={`flex flex-col gap-6 overflow-hidden max-h-0 transition-all duration-700 ${
            isOpen ? "max-h-screen" : ""
          }`}
        >
          <div className="">
            <p>{description}</p>
          </div>
          <Link
            href={linkTo}
            className="flex flex-row items-center gap-2 mb-6 w-fit ml-auto text-clutchBlue-500 hover:text-clutchBlue-400 hover:-translate-x-2 transition duration-300"
          >
            {buttonText}
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    );
  } else {
    return <div>Invalid variant type</div>;
  }
}
