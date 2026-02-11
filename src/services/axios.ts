import axios from "axios";
import appConfig from "./config";

import { encryptPayload, decryptPayload } from "./crypto";
import { asyncGetItem } from "@/utils/helpers";
import { serviceLinks } from "./serviceLinks";

let isRefreshing = false;
let failedQueue: ((token: string | null) => void)[] = [];

const processQueue = (token: string | null) => {
  failedQueue.forEach((callback) => callback(token));
  failedQueue = [];
};



export const axiosInstance = (
  hash: string,
  headers?: Record<string, string>
) => {
  const instance = axios.create({
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${hash}`,
      "Content-Type": "application/json",
      ...headers,
    },
  });
  // Axios global configs
  instance.interceptors.request.use(async function (config) {

    const isFileUpload = config.data instanceof FormData;
    const skipEncryption = config.headers["X-Skip-Encryption"] === "true";

    if (isFileUpload) {
      delete config.headers["Content-Type"];
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    if (
      config.data &&
      ["post", "put", "patch"].includes(config.method as string) &&
      !isFileUpload &&
      !skipEncryption
    ) {
      try {
        config.data = { data: encryptPayload(config.data) };
      } catch (error) {
        console.error("Request encryption failed:", error);
        return Promise.reject(new Error("Failed to encrypt request data."));
      }
    }

    if (config.params && config.method?.toLowerCase() === "get") {
      try {
        const encryptedParams = encryptPayload(config.params);
        config.params = { Data: encryptedParams };
        
      } catch (error) {
        return Promise.reject(new Error("Failed to encrypt query params."));
      }
    }

    return config;
  });

  instance.interceptors.response.use(
    function (res: any) {
      let data = res.data;
      
      // Decrypt if it's a string (likely encrypted)
      if (typeof data === 'string') {
        const decrypted = decryptPayload(data);
        if (decrypted) {
            res.data = decrypted;
        }
      }

      return res;
    },

    async function (error) {
      if (error.response) {
        const KEY = appConfig.encryptionKEY;
        const IV = appConfig.encryptionIV;

        const data = error.response.data;

        // Session invalidation logic
        if (data === "Session is invalid." && error.response.status === 403) {
          sessionStorage.setItem("isSessionExpired", "true");
          window.dispatchEvent(new Event("sessionExpired"));
        }

        const originalRequest = error.config;

        // Handle 429 Too Many Requests (rate-limiting) and refresh token if needed
        if (error.response.status === 401 && !originalRequest._retry) {
          // If the failed request is the logout endpoint, don't try to refresh, just fail.
          if (originalRequest.url?.toLowerCase().includes("logout")) {
            return Promise.reject(error);
          }

          if (isRefreshing) {
            return new Promise(function (resolve, reject) {
              failedQueue.push((token) => {
                if (token) {
                  originalRequest.headers.Authorization = "Bearer " + token;
                  resolve(axiosInstance(token)(originalRequest));
                } else {
                  reject(error);
                }
              });
            });
          }

          originalRequest._retry = true;
          isRefreshing = true;

          const token = await asyncGetItem("token");
          const refreshToken = await asyncGetItem("refreshToken");

          try {
            const payload = {
              accessToken: token,
              refreshToken: refreshToken,
            };
            
            // Use a clean axios instance to avoid interceptor loops
            const response = await axios.post(serviceLinks.refreshToken, payload, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
         
            let resData = response.data;
            
            // Check if we need to decrypt
            if (typeof resData === 'string') {
                 const decrypted = decryptPayload(resData);
                 if (decrypted) {
                    resData = decrypted;
                 }
            }

            const newAccessToken = resData?.Data?.Token || resData?.Token;
            const newRefreshToken = resData?.Data?.RefreshToken || resData?.RefreshToken;

            if (newAccessToken) {
                // Store the new tokens
                localStorage.setItem("token", newAccessToken);
                if (newRefreshToken) {
                    localStorage.setItem("refreshToken", newRefreshToken);
                }

                // Update the authorization header
                axios.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                processQueue(newAccessToken);
                
                // Re-create the axios instance or just retry with the new token
                // We return axios(originalRequest) which effectively uses the global axios or we should use axiosInstance
                // But originalRequest already has the config.
                return axiosInstance(newAccessToken)(originalRequest);
            } else {
                throw new Error("No token returned");
            }

          } catch (refreshError) {
            processQueue(null);
            window.location.href = "/logout";
            return Promise.reject(refreshError);
          } finally {
            isRefreshing = false;
          }
        }

        // Decrypt the data if possible
        if (typeof data === 'string') {
             const decrypted = decryptPayload(data);
             if (decrypted) {
                return Promise.reject(decrypted);
             }
        }
        return Promise.reject(error);
      }

      // If no response, return the original error
      return Promise.reject(error);
    }
  );
  return instance;
};
