import DefaultAdminLayout from "@/layouts/defaultLayout";
import { pageLinks } from "@services/pageLinks";
import React from "react";
import { Route } from "react-router-dom";

const OverView = React.lazy(() => import("@/pages/overview"));
const Reports = React.lazy(() => import("@/pages/reports"));
// const Settings = React.lazy(() => import("@/pages/settings"));

export function DefaultAdminRoute() {
  return (
    <>
      <Route path="/" element={<DefaultAdminLayout />}>
        <Route index element={<OverView />} />
        <Route path={pageLinks.Dashboard} element={<OverView />} />
        <Route path={pageLinks.Reports} element={<Reports />} />
      </Route>
    </>
  );
}
