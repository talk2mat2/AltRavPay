import DefaultAdminLayout from "@/layouts/defaultLayout";
import BilledPayment from "@/pages/billed";
import DataCapture from "@/pages/dataCapture";
import GenerateWebGuid from "@/pages/guiid";
import Welcome from "@/pages/welcome";
import { pageLinks } from "@services/pageLinks";
import React from "react";
import { Route } from "react-router-dom";

const OverView = React.lazy(() => import("@/pages/overview"));
const Reports = React.lazy(() => import("@/pages/reports"));
const UploadRequest = React.lazy(() => import("@/pages/overview/components/uploadRequest"));
const UploadDocument = React.lazy(() => import("@/pages/overview/components/UploadDocument"));
// const Settings = React.lazy(() => import("@/pages/settings"));

export function DefaultAdminRoute() {
  return (
		<>
			<Route path="/" element={<DefaultAdminLayout />}>
				<Route index element={<Welcome />} />
				<Route path={pageLinks.BilledPayment} element={<BilledPayment />} />
				<Route path={pageLinks.overView} element={<OverView />} />
				<Route path={pageLinks.guid} element={<GenerateWebGuid />} />
				<Route path={pageLinks.dataCapture} element={<DataCapture />} />
				<Route path={pageLinks.Dashboard} element={<OverView />} />
				<Route path={pageLinks.Reports} element={<Reports />} />
				<Route path={pageLinks.UploadRequest} element={<UploadRequest />} />
				<Route path={pageLinks.UploadDocument} element={<UploadDocument />} />
			</Route>
		</>
	)
}
