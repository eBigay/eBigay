import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const BASE_URL =
  process.env.NODE_ENV === "production" ? "/api/" : "//localhost:4000/";

const httpClient = axios.create({
  withCredentials: true,
});

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const user = localStorage.getItem("user");
    if (user != null) {
      const { ACCESS_TOKEN } = JSON.parse(user);
      config.headers = config.headers ?? {}; /* eslint-disable-line */
      config.headers.Authorization = `Bearer ${ACCESS_TOKEN}`; /* eslint-disable-line */
    }
    return config;
  } catch (err) {
    throw err;
  }
};

interface HttpService {
  get<T>(endpoint: string, data?: object): Promise<T>;
  post<T>(endpoint: string, data: object): Promise<T>;
  put<T>(endpoint: string, data: object): Promise<T>;
  delete<T>(endpoint: string, data?: object): Promise<T>;
}

async function ajax<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data: object | null = null
): Promise<T> {
  try {
    // Call injectToken to add the authorization header to the request config
    const config = injectToken({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === "GET" ? data : null,
    });

    // Make the request using the modified request config
    const res: AxiosResponse<T> = await httpClient(config);
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
      default:
        break;
    }
    throw err;
  }
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

export default httpService;
