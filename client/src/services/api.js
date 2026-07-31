// src/services/api.js
import axios from "axios";

// Change 5000 to match your backend port if different
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Automatically attach JWT token to every request if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;