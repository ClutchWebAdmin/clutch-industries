"use client";

import { PopupButton } from "@typeform/embed-react";
import { oxanium } from "@/app/styles/fonts";

export default function PrimaryContactButton({ buttonText }) {
  return (
    <PopupButton
      id="PQ026QxJ"
      className={`bg-clutchBlue-700 border-2 border-transparent hover:border-clutchBlue-700 hover:bg-white transition duration-300 text-white hover:text-clutchBlue-600 uppercase font-semibold w-fit h-fit px-6 py-3 ${oxanium.className}`}
    >
      {buttonText}
    </PopupButton>
  );
}
