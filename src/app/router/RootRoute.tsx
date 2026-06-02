import { AuthBootstrapper } from "@/features/auth";
import { Outlet } from "react-router-dom";

export const RootRoute = () => {
  return (
    <>
      <AuthBootstrapper />
      <Outlet />
    </>
  );
};
