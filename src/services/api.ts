// import { serviceLinks } from "./serviceLinks";

// import { asyncGetItem } from "@/utils/helpers";
// import { axiosInstance } from "./axios";
// import type { IILoginValues, IOtpValues } from "@/interface/IloginValues";

import { handleApiError } from "./errorHandler";
import type { filter } from "@chakra-ui/react";

export const api = {
  // login: async (payload: IILoginValues) => {
  //   const hash = (await asyncGetItem("token")) || "";
  //   return axiosInstance(hash, undefined)
  //     .post(serviceLinks.login, payload)
  //     .then((res) => {
  //       return res.data;
  //     })
  //     .catch(handleApiError);
  // },

  login: () => {},
  logout: (item?:any) => {},
};
