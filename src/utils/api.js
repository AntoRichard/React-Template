import axios from "axios";
import { BASE_URL } from "./const";

export const platformApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//  ==== Added Interceptor ====
// Request
PlatformApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response
axios.interceptors.response.use((config) => {
  const token = localStorage.getItem("TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
