import axios, { AxiosResponse } from "axios";

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:3030/api/";

const axiosInstance = axios.create({
  withCredentials: true,
});

async function ajax<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data: object | null = null
): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axiosInstance({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });
    return res.data;
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      sessionStorage.clear();
      window.location.assign("/");
    }
    throw err;
  }
}

interface HttpService {
  get<T>(endpoint: string, data?: object): Promise<T>;
  post<T>(endpoint: string, data: object): Promise<T>;
  put<T>(endpoint: string, data: object): Promise<T>;
  delete<T>(endpoint: string, data?: object): Promise<T>;
}
const httpService: HttpService = {
  async get<T>(endpoint: string, data?: object): Promise<T> {
    return ajax<T>(endpoint, "GET", data);
  },
  async post<T>(endpoint: string, data: object): Promise<T> {
    return ajax<T>(endpoint, "POST", data);
  },
  async put<T>(endpoint: string, data: object): Promise<T> {
    return ajax<T>(endpoint, "PUT", data);
  },
  async delete<T>(endpoint: string, data?: object): Promise<T> {
    return ajax<T>(endpoint, "DELETE", data);
  },
};

export default httpService;
