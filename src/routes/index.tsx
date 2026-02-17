import { Box, Spinner } from "@chakra-ui/react";
// import { useCurrentUser } from "../hooks/useCurrentUser";
import { NonAuthRoute } from "./nonAuthRoute";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { DefaultAdminRoute } from "./defaultAdminRoute";
// import { ITControlRoute } from "./itControlRoute";
import {
  VDO_reviewer,
  VDO_Authorizer,
  BDO_Reviewer,
  BDO_Authorizer,
  CAMU_Reviewer,
  CAMU_Authorizer,
  View_Only_User,
} from "@/types/roles";

// import { useTokenRefresher } from "@/hooks/useTokenRefresher";
// import { useIdleTimer } from "@/hooks/useIdleTimer";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { DefaultAdminRoute } from "./defaultAdminRoute";
const Logout = lazy(() => import("@/pages/logout"));
const adminRoles = [
  VDO_reviewer,
  VDO_Authorizer,
  BDO_Reviewer,
  BDO_Authorizer,
  CAMU_Reviewer,
  CAMU_Authorizer,
  View_Only_User,
] as const;

const AppRoutes = () => {
  const { role, isLoggedIn } = useCurrentUser();

  // useTokenRefresher();
  // useIdleTimer(300000); // 5 minutes

  const renderRouteForRole = () => {
    if (isLoggedIn) {
      return NonAuthRoute();
    } else return DefaultAdminRoute();
  };

  return (
    <Suspense
      fallback={
        <Box mt="20%" textAlign="center" style={{ width: "100vw" }}>
          <Spinner />
        </Box>
      }
    >
      <Routes>
        {renderRouteForRole()}
        <Route path={"/logout"} element={<Logout />} />
        <Route path="*" element={<p>not found</p>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
