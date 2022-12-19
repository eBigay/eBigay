import axios, { AxiosResponse } from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:4000/";

const axiosInstance = axios.create({
  withCredentials: true,
});

interface HttpService {
  get<T>(endpoint: string, data?: object): Promise<T>;
  post<T>(endpoint: string, data: object): Promise<T>;
  put<T>(endpoint: string, data: object): Promise<T>;
  delete<T>(endpoint: string, data?: object): Promise<T>;
}

const httpService: HttpService = {
  async get(endpoint, data) {
    return ajax(endpoint, "GET", data);
  },
  async post(endpoint, data) {
    return ajax(endpoint, "POST", data);
  },
  async put(endpoint, data) {
    return ajax(endpoint, "PUT", data);
  },
  async delete(endpoint, data) {
    return ajax(endpoint, "DELETE", data);
  },
};

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
    switch (err.response && err.response.status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }
    throw err;
  }
}

export { httpService };
