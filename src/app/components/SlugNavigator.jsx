"use client";

import { useState } from "react";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";

export default async function NextSlugNavigator() {
  const [currentSlug, setCurrentSlug] = useState("");
  const [slugs, setSlugs] = useState([]);

  const fetchData = async () => {
    try {
      const { name } = context.params;

      const data = await client.fetch(
        `
        *[_type == "projects" && $name == slug.current]{
          'slug': slug.current,
          'projectName': projectTitle
        }
      `,
        { name }
      );

      const slug = data[0]?.slug;
      setCurrentSlug(slug);

      const projectSlugs = await client.fetch(
        `*[_type == "projects" && slug.current != "${slug}"].slug.current`
      );
      setSlugs(projectSlugs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData(); // Fetch data when the component is rendered

  const getNextSlug = () => {
    const currentSlugIndex = slugs.indexOf(currentSlug);
    const nextSlugIndex = (currentSlugIndex + 1) % slugs.length;
    return slugs[nextSlugIndex];
  };

  const getPreviousSlug = () => {
    const currentSlugIndex = slugs.indexOf(currentSlug);
    const previousSlugIndex =
      (currentSlugIndex - 1 + slugs.length) % slugs.length;
    return slugs[previousSlugIndex];
  };

  const nextSlug = getNextSlug();
  const previousSlug = getPreviousSlug();

  return (
    <div className="flex order-5 flex-row justify-between items-center">
      <Link href={`/projects/${previousSlug}`}>Previous Project</Link>
      <Link href={`/projects/${nextSlug}`}>Next Project</Link>
    </div>
  );
}
