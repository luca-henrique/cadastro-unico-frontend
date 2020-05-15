import axios from "axios";
import { store } from "../store/index";

const api = axios.create({
  baseURL: "http://api.cadastro-unico-arcoverde.ctmconsultoria.com:16795/",
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return { ...config, headers };
});

export default api;
