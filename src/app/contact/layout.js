import React from "react";
import TheHeaderDark from "../components/Headers/TheHeaderDark";

export default function Layout({ children }) {
  return (
    <>
      <TheHeaderDark />
      {children}
    </>
  );
}
