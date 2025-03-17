import BaseUrl from "@/app/BaseUrl";
import { AxiosError, AxiosResponse } from "axios";

const deleteDataWithToken = async <type>(
  url: string,
  token: string
): Promise<AxiosResponse<type> | Error> => {
  try {
    const res = await BaseUrl.delete(url, {
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

export { deleteDataWithToken };
