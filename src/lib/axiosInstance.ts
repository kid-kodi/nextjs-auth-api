import { auth } from "@/auth";
import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`, // Adjust as needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add an interceptor to attach the token dynamically
api.interceptors.request.use(
  async (config) => {
    const session = await auth();
    if (session) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
