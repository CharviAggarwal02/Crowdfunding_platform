import axios from "axios";

const API = axios.create({
  baseURL: "https://crowdfunding-platform-3.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: global response error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("API ERROR:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default API;