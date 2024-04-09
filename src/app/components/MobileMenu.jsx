"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

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
        <button onClick={toggleMobileMenu}>
          <AiOutlineMenu className="h-6 w-6" />
        </button>
      </div>

      {isMobileMenuOpen && (
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden absolute top-5 right-5 z-[9999] animate__animated animate__rotateIn"
        >
          <AiOutlineClose className="h-6 w-6 text-white" />
        </button>
      )}

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-clutchBlue-900 text-white bg-opacity-95 z-[9000] animate__animated animate__slideInDown">
          <div className="flex flex-col h-full justify-center space-y-12 items-center">
            <Link href="/" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/about" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="/projects" onClick={toggleMobileMenu}>
              Projects
            </Link>
            <Link href="/investments" onClick={toggleMobileMenu}>
              Investments
            </Link>
            <Link href="/management" onClick={toggleMobileMenu}>
              Management
            </Link>
            <Link href="/contact" onClick={toggleMobileMenu}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
