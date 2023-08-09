// services/api.js
import axios from "axios";

const BASE_URL = "https://themealdb.com/api/json/v1/1";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
