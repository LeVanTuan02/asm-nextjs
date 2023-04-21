import axios from "axios";
import { API_URL } from "../constants";

const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosServer = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosServer.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosClient;
