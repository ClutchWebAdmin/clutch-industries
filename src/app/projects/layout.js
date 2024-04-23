import TheHeader from "../components/Headers/TheHeader";

export const metadata = {
  title: "Clutch Industries | Projects",
  description:
    "Your full service construction experts in the Willamette Valley & beyond.",
  keywords:
    "Salem, Oregon, construction, property management, investment, full service, willamette valley, e",
  openGraph: {
    title: "Clutch Industries | Construction, Investment, Management",
    description:
      "Your full service construction experts in the Willamette Valley & beyond.",
    siteName: "Clutch Industries | Construction, Investment, Management",
    type: "website",
    locale: "en_US",
    url: "https://clutchindustries.com",
    images: [
      {
        url: "https://clutchindustries.com/images/og-image.png",
        alt: "Clutch Industries",
      },
    ],
  },
  images: [
    {
      url: "https://clutchindustries.com/images/og-image.png",
      alt: "Clutch Industries",
    },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      {children}
    </>
  );
}
