import BaseUrl from "@/app/BaseUrl";
import { AxiosError, AxiosResponse } from "axios";

const postData = async <type>(
  url: string,
  data: object
): Promise<AxiosResponse<type> | Error> => {
  try {
    const res = await BaseUrl.post(url, data, {
      withCredentials: true,
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

const postDataWithToken = async <type>(
  url: string,
  token: string,
  data?: object
): Promise<AxiosResponse<type> | Error> => {
  try {
    const res = await BaseUrl.post(url, data, {
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

export { postData, postDataWithToken };
