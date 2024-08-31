import Footer from "#components/footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
