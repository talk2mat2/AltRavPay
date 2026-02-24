import { Text, VStack } from "@chakra-ui/react";
import CryptoJS from "crypto-js";
import { breakCamelCase } from "./helpers";

const cryptoDecrypt = (data: any) => {
  // const bytes = CryptoJS.AES.decrypt(
  //   data,
  //   CryptoJS.enc.Base64.parse(
  //     "wjGXB6qoB8bGXU+bvq2zVacAPzZy2P8bVtX/dfk/Pj0iCgwPIsvAIe+Gc3min7ERV9Hp+MnghM+TQbT7mrf6RXQzkraTnkigBt8X70mf6Cw="
  //   ),
  //   {
  //     iv: CryptoJS.enc.Base64.parse(
  //       "wjGXB6qoB8bGXU+bvq2zVacAPzZy2P8bVtX/dfk/Pj0iCgwPIsvAIe+Gc3min7ERV9Hp+MnghM+TQbT7mrf6RXQzkraTnkigBt8X70mf6Cw="
  //     ),
  //     mode: CryptoJS.mode.CBC,
  //     padding: CryptoJS.pad.Pkcs7,
  //   }
  // );
  // const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  // try {
  //   return JSON.parse(decrypted);
  // } catch (e) {
  //   console.error("Error parsing decrypted data:", e);
  //   return null;
  // }
};

export default cryptoDecrypt;

export const renderValue = (value: any) => {
  if (value === null || value === undefined) return "-";

  if (typeof value === "object") {
    return (
      <VStack align="start" spacing={1}>
        {Object.entries(value).map(([k, v]) => (
          <Text key={k} fontSize="sm">
            {breakCamelCase(k)}: {String(v)}
          </Text>
        ))}
      </VStack>
    );
  }

  return String(value);
};
