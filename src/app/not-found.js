"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col">
      <h1>Page Not Found</h1>
      <Link
        href="/"
        className="bg-blue-500 text-white w-fit px-6 py-4 rounded-lg"
      >
        Go home
      </Link>
    </main>
  );
}
