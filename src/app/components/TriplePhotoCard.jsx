"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { barlow } from "../styles/fonts";

export default function TriplePhotoCard({ imageUrl, linkTo, heading }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={linkTo}
      className="flex flex-col w-full max-w-full lg:w-1/3 lg:max-w-1/3 hover:brightness-105 relative transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={heading}
        className="w-full h-auto object-cover"
      />

      <div
        className={`flex flex-row gap-2 items-center px-4 py-4 text-xl backdrop-blur-md text-white w-full justify-start absolute bottom-0 ${
          isHovered ? "bg-clutchBlue-900/80" : ""
        }`}
      >
        <h4 className={`${barlow.className} text-2xl lg:text-4xl`}>
          {heading}
        </h4>
        <FaArrowRight
          className={`transition duration-300 ${
            isHovered ? "translate-x-2" : ""
          }`}
        />
      </div>
    </Link>
  );
}
