import { Outlet } from "react-router-dom";
import CinamaLayout from "./layout/cinama";

export default function Root() {
  return (
    <>
      <CinamaLayout>
        <Outlet />
      </CinamaLayout>
    </>
  );
}