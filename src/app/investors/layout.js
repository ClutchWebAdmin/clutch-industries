import TheHeader from "../components/Headers/TheHeader";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Clutch Industries | Investors",
  description:
    "Your full service construction experts in the Willamette Valley & beyond.",
  keywords:
    "Salem, Oregon, construction, property management, development, investment, full service, willamette valley",
  openGraph: {
    title: "Clutch Industries | Investors",
    description:
      "Your full service construction experts in the Willamette Valley & beyond.",
    siteName: "Clutch Industries | Construction, Investment, Development",
    type: "website",
    locale: "en_US",
    url: "https://clutchindustries.com/investors",
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
