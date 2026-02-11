import { Route } from "react-router-dom";

import { lazy } from "react";
const Login = lazy(() => import("@/pages/login/index"));



export function NonAuthRoute() {
  return (
    <>
      <Route path={"/"} element={<Login />} />
      <Route path={"/login"} element={<Login />} />
    </>
  );
}
