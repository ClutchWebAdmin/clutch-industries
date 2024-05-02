"use client";

import { useEffect } from "react";
import PrimaryLinkButton from "./components/Buttons/PrimaryLinkButton";
import TheHeader from "./components/Headers/TheHeader";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <TheHeader />
      <main>
        <div
          className="flex flex-col gap-6 w-full items-center justify-center px-5 lg:px-10 py-10 lg:py-20"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h2 className="text-4xl md:text-7xl 2xl:text-8xl">
            404 Page Not Found
          </h2>
          <div className="flex flex-col gap-6 items-center justify-center">
            <p className="text-clutchBlue-500">
              The requested page could not be found.
            </p>
            <PrimaryLinkButton buttonText="Go Home" linkTo="/" />
          </div>
        </div>
      </main>
    </>
  );
}
