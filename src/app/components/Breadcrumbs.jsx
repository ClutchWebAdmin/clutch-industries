"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { oxanium } from "../styles/fonts";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav
      className={`${oxanium.className} capitalize text-sm md:text-base flex w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto text-clutchBlue-800 mt-5 lg:mt-10 -mb-5 lg:-mb-10 z-20 px-5 lg:px-10`}
    >
      <ul className="flex flex-wrap">
        <li>
          <Link
            href="/"
            className="hover:text-clutchBlue-950 transition duration-200"
          >
            Home{" "}
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <span> / </span>
            <Link
              href={`/${pathSegments.slice(0, index + 1).join("/")}`}
              className="hover:text-clutchBlue-950 transition duration-200"
            >
              {segment.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
