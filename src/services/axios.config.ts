import axios from "axios";

const axiosObject = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  timeout: 2000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosObject.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosObject.interceptors.response.use(
  async function (config: any) {
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default axiosObject;
