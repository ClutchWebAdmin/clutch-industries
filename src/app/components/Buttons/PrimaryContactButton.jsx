"use client";

import { PopupButton } from "@typeform/embed-react";
import { oxanium } from "@/app/styles/fonts";

export default function PrimaryContactButton({ buttonText }) {
  return (
    <PopupButton
      id="PQ026QxJ"
      className={`bg-clutchBlue-950 border border-b-2 border-r-2 border-sky-300 hover:border-clutchBlue-950 hover:bg-white transition duration-300 text-white hover:text-clutchBlue-950 uppercase font-semibold w-fit h-fit px-6 py-3 ${oxanium.className} shadow-md shadow-clutchBlue-700  hover:shadow-clutchBlue-950 rounded-sm`}
    >
      {buttonText}
    </PopupButton>
  );
}
