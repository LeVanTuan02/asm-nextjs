import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://asm-nextjs-be-v2.up.railway.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosServer = axios.create({
  baseURL: "https://asm-nextjs-be-v2.up.railway.app/api",
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
