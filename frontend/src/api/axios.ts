import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "production" ? "/" : "http://localhost:3500";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173/",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173/",
  },
  withCredentials: true,
});
