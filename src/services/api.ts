// import { serviceLinks } from "./serviceLinks";

// import { asyncGetItem } from "@/utils/helpers";
// import { axiosInstance } from "./axios";
// import type { IILoginValues, IOtpValues } from "@/interface/IloginValues";

import { serviceLinks } from "@/serviceLinks";
import { handleApiError } from "./errorHandler";
import type { filter } from "@chakra-ui/react";
import { asyncGetItem } from "@/utils/helpers";
import { axiosInstance } from "./axios";

export const api = {
  login: async (payload: any) => {
    const hash = (await asyncGetItem("token")) || "";
    return axiosInstance(hash, undefined)
      .get(serviceLinks.GetBillTypes, payload)
      .then((res) => {
        return res.data;
      })
      .catch(handleApiError);
  },


  logout: (item?: any) => {},
};
