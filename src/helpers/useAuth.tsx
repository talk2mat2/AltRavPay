import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, logOut } from "../redux/reducers/usersSlice";
import { api } from "@/services/api";
import React from "react";

export const useAuthService = () => {
  const [loginOutLoading, setLoginOutLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoginOutLoading(true);
    try {
      const logOutUser = await api.logout({});
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      dispatch(logOut());
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      setLoginOutLoading(false);
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);
    }
  };

  //   const handleLogIn = (data:  IauthData) => {
  const handleLogIn = (data: any) => {
    setTimeout(() => {
      dispatch(logIn(data));
      navigate("/");
    }, 400);

    // will implement token here
    localStorage.setItem("token", data.Token);
    localStorage.setItem("refreshToken", data.RefreshToken);
  };

  return { handleLogIn, handleLogout, loginOutLoading };
};

export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// export const reuestType: any[] = [
//   { name: "-", value: "-" },
//   { name: "All Request Type", value: "All Request Type" },
//   { name: "Account reactivation", value: "Account reactivation" },
//   { name: "Change of Static Data", value: "Change of Static Data" },
//   {
//     name: "Statement of account request",
//     value: "Statement of account request",
//   },
//   { name: "Account Migration", value: "Account Migration" },
//   { name: "Card requisition", value: "Card requisition" },
// ];

export const reuestType: any[] = [
  // { name: "-", value: 0 },
  { name: "All Request Type", value: "" },

  // 🔹 GROUP
  { name: "Change of Static Data", value: 1 },

  // 🔹 STATIC DATA CHILD TYPES
  { name: "Phone Number Update", value: 11 },
  { name: "Email Address Update", value: 12 },
  { name: "Residential Address Update", value: 13 },
  { name: "Religion Update", value: 14 },
  { name: "Account Name Update", value: 15 },
  { name: "Means of ID Update", value: 16 },
  { name: "Mandate and Signature Update", value: 17 },

  // 🔹 STANDALONE
  { name: "Account Reactivation", value: 21 },
  { name: "Statement of Account Request", value: 22 },
  { name: "Account Migration", value: 23 },
  { name: "Card Requisition", value: 24 },
];

// export const downloadImages = (urls: string[]) => {
//   urls.forEach((url, index) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = `document_${index + 1}.jpg`; // filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   });
// };

export const downloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    window.open(url, "_blank");
  });
};

export const isPdf = (url?: string) =>
  typeof url === "string" && url.toLowerCase().endsWith(".pdf");
