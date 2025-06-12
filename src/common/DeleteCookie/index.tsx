import dayjs from "dayjs";

export function deleteCookie(name: string,) {
    document.cookie = name +`=; Path=/; Expires=${dayjs().subtract(1, 'day')};`;
  }