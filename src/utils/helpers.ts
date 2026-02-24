import {
  BDO_Authorizer,
  BDO_Reviewer,
  CAMU_Authorizer,
  CAMU_Reviewer,
  IT_Control,
  VDO_Authorizer,
  VDO_reviewer,
  View_Only_User,
  type AdminRoles,
} from "@/types/roles";

export const asyncGetItem = async (title: string, parsed: boolean = false) => {
  return parsed
    ? localStorage.getItem(title)
      ? JSON.parse(localStorage.getItem(title)!)
      : null
    : localStorage.getItem(title)
      ? localStorage.getItem(title)
      : null;
};

export const asyncSetItem = async (title: string, value: any) => {
  const item = typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(title, item);
};

export const parseJwt = (token: string) => {
  if (!token) return null;
  const base64Url = token.split(".")[1];
  if (!base64Url) return null;

  // Correctly decode base64url to base64
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  // Decode the base64 string to a JSON string
  const jsonPayload = atob(base64);

  const parsedPayload = JSON.parse(jsonPayload);
  if (parsedPayload.exp) {
    // Convert exp from seconds to milliseconds
    parsedPayload.exp = parsedPayload.exp * 1000;
  }

  return parsedPayload;
};

export function convertObjectToQueryString(params: {
  [key: string]: string | number | boolean | undefined;
}): string {
  if (typeof params !== "object" || params === null) {
    return "";
  }

  return Object.keys(params)
    .filter((key) => params[key] !== undefined)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`
    )
    .join("&");
}
export function formatCurrency(amount: number | null | undefined): string {
  if (amount == null || isNaN(amount)) {
    return "N0";
  }

  return "N" + Number(amount).toLocaleString("en-NG");
}

export const rolesUsers = [
  VDO_reviewer,
  VDO_Authorizer,
  BDO_Reviewer,
  BDO_Authorizer,
  CAMU_Reviewer,
  CAMU_Authorizer,
  View_Only_User,
  IT_Control,
];

export const getPermissions = (): { name: string; value: string }[] => {
  return rolesUsers.map((permission) => ({
    name: permission,
    value: permission,
  }));
};

export function removeZeroBuildingTypes(data: any) {
  return data.filter((item: any) => item.numberOfBuildingTypes !== 0);
}

export function getRoleDisplayName(role?: AdminRoles | null | string): string {
  if (!role) return ""; // or return "Unknown Role"

  return (
    role
      // Insert a space before each capital letter (except the first one)
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // Split sequences of uppercase followed by lowercase (e.g., "ITControl" → "IT Control")
      .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
      .trim()
  );
}



export function formatDateIntl(
  input: string | Date,
  options: Intl.DateTimeFormatOptions = {},
  locale: string = "en-GB"
): string {
  const date = new Date(input);
  if (isNaN(date.getTime())) return "";

  const fmt = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    ...options,
  });

  return fmt.format(date);
}

export function breakCamelCase(text: string): string {
  if (!text) return "";

  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")   // add space between lower→Upper
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2") // handle cases like "URLValue"
    .trim();
}


export type AmPmFormatOptions = {
  showSeconds?: boolean;
  padHour?: boolean;
  ampmLowercase?: boolean;
}
export function formatTimeAmPm(
  time24: string,
  options: AmPmFormatOptions = {}
): string {
  const {
    showSeconds = true,
    padHour = false,
    ampmLowercase = false
  } = options;

  const match = time24.match(
    /^(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?$/ // HH:mm:ss(.fraction)
  );

  if (!match) {
    throw new Error(`Invalid time format: ${time24}`);
  }

  const [, hh, mm, ss] = match;

  const hour24 = parseInt(hh, 10);
  const period = hour24 >= 12 ? "PM" : "AM";

  let hour12 = hour24 % 12;
  if (hour12 === 0) hour12 = 12;

  const hourStr = padHour ? hour12.toString().padStart(2, "0") : hour12.toString();

  const periodStr = ampmLowercase ? period.toLowerCase() : period;

  if (showSeconds) {
    return `${hourStr}:${mm}:${ss} ${periodStr}`;
  }

  return `${hourStr}:${mm} ${periodStr}`;
}
