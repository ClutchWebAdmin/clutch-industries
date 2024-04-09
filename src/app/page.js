export const metadata = {
  title: "Page title",
  description: "Description here",
  keywords: "Keywords here",
  openGraph: {
    title: "Title here",
    description: "Description here",
    siteName: "Site name here",
    type: "website",
    locale: "en_US",
    url: "URL here",
    images: [
      {
        url: "https://domainname.com/images/og-image.png",
        alt: "Alt text here",
      },
    ],
  },
  images: [
    {
      url: "https://domainname.com/images/og-image.png",
      alt: "Alt text here",
    },
  ],
};

export default function Home() {
  return (
    <main>
      <section className="h-svh bg-clutchBlue-50"></section>
      <section className="h-svh bg-clutchBlue-100">Section 2</section>
      <section className="h-svh bg-clutchBlue-200">Section 3</section>
    </main>
  );
}
