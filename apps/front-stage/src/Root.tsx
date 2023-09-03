import { Outlet } from "react-router-dom";
import { CinamaPage } from "./components/layout";

export default function Root() {
  return (
    <>
      <CinamaPage>
        <Outlet />
      </CinamaPage>
    </>
  );
}