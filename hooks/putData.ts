import BaseUrl from "@/app/BaseUrl";
import { AxiosError, AxiosResponse } from "axios";

const putDataWithToken = async <type>(
  url: string,
  data: object,
  token: string
): Promise<AxiosResponse<type> | Error> => {
  try {
    const res = await BaseUrl.put(url, data, {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return new Error(err.response?.data.message);
    } else {
      return new Error(String(err));
    }
  }
};
const putData = async <type>(
  url: string,
  data: object
): Promise<AxiosResponse<type> | Error> => {
  try {
    const res = await BaseUrl.put(url, data);
    return res;
  } catch (err) {
    if (err instanceof AxiosError) {
      return new Error(err.response?.data.message);
    } else {
      return new Error(String(err));
    }
  }
};
export { putDataWithToken, putData };
