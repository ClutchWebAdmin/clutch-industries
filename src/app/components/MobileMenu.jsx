"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { mobileArray } from "../data/NavItems";
import SecondaryContactButton from "./Buttons/SecondaryContactButton";

export default function MobileMenu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBodyScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };

    toggleBodyScroll();

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={
          isMobileMenuOpen
            ? "hidden"
            : "lg:hidden flex flex-row gap-4 absolute top-5 right-5"
        }
      >
        <button
          id="open-mobile-menu"
          aria-label="open-mobile-menu"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          id="close-mobile-menu"
          aria-label="close-mobile-menu"
          onClick={toggleMobileMenu}
          className="lg:hidden absolute top-5 right-5 z-[9998] animate__animated animate__rotateIn transition duration-300 rounded-sm hover:text-sky-300 text-white hover:ring-2 ring-clutchBlue-950 ring-offset-2"
        >
          <AiOutlineClose className="h-6 w-6 text-white" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-clutchBlue-900 text-white font-medium uppercase bg-opacity-95 z-[9000] animate__animated animate__slideInDown">
          <div className="flex flex-col h-full justify-center space-y-12 items-center text-xl">
            {mobileArray.map((item, index) => (
              <Link key={index} href={item.linkTo} onClick={toggleMobileMenu} className="hover:text-sky-300 transition duration-300 rounded-sm text-white hover:ring-2 ring-clutchBlue-950 ring-offset-2 p-2">
                {item.text}
              </Link>
            ))}
            <SecondaryContactButton buttonText="Contact Us" />
          </div>
        </div>
      )}
    </>
  );
}
