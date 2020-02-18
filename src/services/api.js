import axios from "axios";
import { store } from "../store/index";

const api = axios.create({
  baseURL: "http://192.168.0.110:3333"
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
