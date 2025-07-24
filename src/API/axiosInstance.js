// axiosInstance.js
import axios from "axios";

// ✅ Create a centralized Axios instance with base URL and default headers
const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // All requests will automatically use this base URL
  headers: { "Content-Type": "application/json" },
  withCredentials: false, // Disable sending cookies; token will be passed in headers
});

// ✅ Request Interceptor: Attach Access Token in Authorization Header before each request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor: Handle Token Expiry (401 errors) Automatically
axiosInstance.interceptors.response.use(
  (response) => response, // Simply pass successful responses
  async (error) => {
    const originalRequest = error.config;

    // If token expired (401), attempt refresh only once using `_retry` flag
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          // 🚨 Incorrect: You had 3 argument sets in post request – Fix:
          const refreshResponse = await axiosInstance.post(
            "/auth/refresh",
            { refreshToken, expiresInMins: 20 }
          );

          const newAccessToken = refreshResponse.data.accessToken;

          // ✅ Save new access token for future requests
          localStorage.setItem("accessToken", newAccessToken);

          // ✅ Update and retry original failed request with new token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest); // Retry original API call
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);

          // Cleanup tokens & force logout
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/login"; // Redirect to login
        }
      }
    }

    return Promise.reject(error); // Reject other errors
  }
);

export default axiosInstance;
