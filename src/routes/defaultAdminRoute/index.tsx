import DefaultAdminLayout from "@/layouts/defaultLayout";
import { pageLinks } from "@services/pageLinks";
import React from "react";
import { Route } from "react-router-dom";

const OverView = React.lazy(() => import("@/pages/overview"));
// const Request = React.lazy(() => import("@/pages/request"));
// const Settings = React.lazy(() => import("@/pages/settings"));

export function DefaultAdminRoute() {
  return (
    <>
      <Route path="/" element={<DefaultAdminLayout />}>
        <Route index element={<OverView />} />
        <Route path={pageLinks.Dashboard} element={<OverView />} />
      </Route>
    </>
  );
}
