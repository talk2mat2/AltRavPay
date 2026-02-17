import { Route } from "react-router-dom";

import { lazy } from "react";
const Login = lazy(() => import("@/pages/login/index"));

const OverView = lazy(() => import("@/pages/overview"));
const UploadRequest = lazy(() => import("@/pages/overview/components/uploadRequest"));



export function NonAuthRoute() {
  return (
    <>
      <Route path={"/"} element={<Login />} />
      <Route path={"/login"} element={<Login />} />
    </>
  );
}
