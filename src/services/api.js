import axios from "axios";
import { store } from "../store/index";

const teste = "http://api.cadastro-unico-teste.ctmconsultoria.com:16796";
const producao = "http://api.cadastro-unico-arcoverde.ctmconsultoria.com:16795";
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
