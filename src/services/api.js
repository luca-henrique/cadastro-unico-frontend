import axios from "axios";
import { store } from "../store/index";

// eslint-disable-next-line no-unused-vars
const teste = "http://api.cadastro-unico-teste.ctmconsultoria.com:16796";
const producao = "http://api.cadastro-unico-arcoverde.ctmconsultoria.com:16795";

// eslint-disable-next-line no-unused-vars
const local = "http://127.0.0.1:3333/";

const api = axios.create({
  baseURL: producao,
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
