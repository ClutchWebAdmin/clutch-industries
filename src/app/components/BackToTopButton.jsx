"use client";

import { useState, useEffect } from "react";
import { MdOutlineArrowUpward } from "react-icons/md";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-0 right-0 z-[100]">
      {isVisible && (
        <button
          className="flex flex-col gap-1 items-center justify-center m-3 lg:m-5 p-3 border-2 shadow-inner shadow-clutchBlue-950 border-clutchBlue-950 rounded-full mix-blend-overlay hover:bg-clutchBlue-950 text-clutchBlue-950 hover:text-white backdrop-blur-md text-2xl md:text-3xl font-bold transition duration-300 transition duration-300 hover:text-white  hover:ring-2 ring-clutchBlue-950 ring-offset-4"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <MdOutlineArrowUpward />
        </button>
      )}
    </div>
  );
}
