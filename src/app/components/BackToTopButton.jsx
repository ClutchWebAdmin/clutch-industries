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
          className="flex flex-col gap-1 items-center justify-center m-3 lg:m-5 p-3 shadow-md rounded-sm mix-blend-overlay bg-clutchBlue-100 hover:bg-clutchBlue-600 text-black hover:text-white backdrop-blur-md text-2xl md:text-3xl font-bold transition duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <MdOutlineArrowUpward />
        </button>
      )}
    </div>
  );
}
