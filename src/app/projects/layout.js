import TheHeader from "../components/Headers/TheHeader";

export default function Layout({ children }) {
  return (
    <>
      <TheHeader />
      {children}
    </>
  );
}
