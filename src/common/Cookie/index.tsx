import { deleteCookie } from "../DeleteCookie";

export function GetCookie(key: string): string | null {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split("=");
    if (cookieKey.trim() === key) {
      return cookieValue;
    }
  }
  return null;
}

export function ClearCookie() {
  deleteCookie("accessToken");
  deleteCookie("area");
  deleteCookie("businessArea");
  deleteCookie("department");
  deleteCookie("employeeID");
  deleteCookie("name");
  deleteCookie("peaName"); 
  deleteCookie("position");
  deleteCookie("state");
}
