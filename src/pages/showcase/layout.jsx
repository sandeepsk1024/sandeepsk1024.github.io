import Header from "./header";

import { Outlet } from "react-router-dom";

export default function ShowcaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
