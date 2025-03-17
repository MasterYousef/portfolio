import BaseUrl from "@/app/BaseUrl";
import { AxiosError } from "axios";

const getData = async <type>(url: string): Promise<type | Error> => {
  try {
    const res = await BaseUrl.get(url);
    return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return new Error(err.response?.data.message);
    } else {
      return new Error(String(err));
    }
  }
};
export { getData };
