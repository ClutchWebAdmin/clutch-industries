import Breadcrumbs from "../components/Breadcrumbs";
import TheHeader from "../components/Headers/TheHeader";

export const metadata = {
  title: "Clutch Industries | Who We Are",
  description:
    "Your full service construction experts in the Willamette Valley & beyond.",
  keywords:
    "Salem, Oregon, construction, property management, investment, development, full service, willamette valley",
  openGraph: {
    title: "Clutch Industries | Construction, Investment, Development",
    description:
      "Your full service construction experts in the Willamette Valley & beyond.",
    siteName: "Clutch Industries | Construction, Investment, Development",
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
      <Breadcrumbs />
      {children}
    </>
  );
}
