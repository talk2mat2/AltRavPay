import CryptoJS, { algo, pad, mode } from "crypto-js";

import PBKDF2 from "crypto-js/pbkdf2";
import Utf8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

const PassPhrase = String("Av2345fgbnhes78@#dn");
const SaltValue = String("Dfcvb542*&sdcf87r");
const InitVector = String("Mked098lasn34mg6");
const PasswordIterations = Number.parseInt(String("2"));
const Blocksize = Number.parseInt(String("32"));

export const encrypt = async (data: any) => {
  const key = CryptoJS.enc.Utf8.parse("'tjehuo@do");
  const enc = CryptoJS.AES.encrypt(data, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7, // Zero-Byte-Padding
  });
  var finalEncrypted = CryptoJS.enc.Base64.stringify(enc.ciphertext);
  return finalEncrypted;
  // return finalEncrypted;
};

export const encryptRequest = async (request: any) => {
  const key = PBKDF2(PassPhrase, Utf8.parse(SaltValue), {
    keySize: 256 / Blocksize,
    iterations: PasswordIterations,
    hasher: algo.SHA1, 
  });

  const parsedIV = Utf8.parse(InitVector);

  const encrypted = AES.encrypt(JSON.stringify(request), key, {
    iv: parsedIV,
    padding: pad.Pkcs7,
    mode: mode.CBC,
  }).toString();
  return encrypted;
};
// Decryption Service
export const decryptResponse = (response: any) => {
  const key = PBKDF2(PassPhrase, Utf8.parse(SaltValue), {
    keySize: 256 / Blocksize,
    iterations: PasswordIterations,
    hasher: algo.SHA1,
  });

  const parsedIV = Utf8.parse(InitVector);

  try {
    const modifiedResponse = response?.replace(/\s+/g, "");
    const bytes = AES.decrypt(modifiedResponse, key, {
      iv: parsedIV,
      padding: pad.Pkcs7,
      mode: mode.CBC,
    });
    const decryptedResponse = bytes.toString(Utf8);
    try {
      return JSON.parse(decryptedResponse);
    } catch (error) {
      console.error("Error parsing decrypted response as JSON:", error);
      return decryptedResponse;
    }
  } catch (err) {
    console.error("Decryption error:", err);
    return "";
  }
};
