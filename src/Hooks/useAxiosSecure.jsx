import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { user } = useAuth(); // ❗ DO NOT control loading here

  useEffect(() => {
    // REQUEST INTERCEPTOR
    const requestInterceptor = axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // RESPONSE INTERCEPTOR
    const responseInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        const status = error?.response?.status;

        // ❗ Redirect only, NO logout, NO loading manipulation
        if ((status === 401 || status === 403) && user) {
          navigate("/login");
        }

        return Promise.reject(error);
      }
    );

    // CLEANUP (VERY IMPORTANT)
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, [navigate, user]);

  return axiosSecure;
};

export default useAxiosSecure;
