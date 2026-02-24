import cryptoDecrypt from "@/utils";

export default {
  serverURL: import.meta.env.VITE_BASEURL,
  // serverOnboardURL: import.meta.env.VITE_BASEURL_ONBOARD,
  serverKEY: cryptoDecrypt(
    import.meta.env.VITE_API_KEY
  )?.decryptedData?.Description.split("@z")[0],
  encryptionKEY: cryptoDecrypt(
    import.meta.env.VITE_ENCRYPTION_KEY
  )?.decryptedData?.Description.split("@z")[0],
  encryptionIV: cryptoDecrypt(
    import.meta.env.VITE_ENCRYPTION_IV
  )?.decryptedData?.Description.split("@z")[0],
};
