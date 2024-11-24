import axios from "axios";
import { API_URL } from "../../Config/apiEndpoints";

const darkstoreServiceInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

darkstoreServiceInstance.interceptors.request.use(
  (config) => {
    console.log("Request Sent:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

darkstoreServiceInstance.interceptors.response.use(
  (response) => {
    console.log("Response Received:", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default darkstoreServiceInstance;
