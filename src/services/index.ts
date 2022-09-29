import axios from "axios";

const BASE_URL = "https://apiproxy.telphin.ru/";

export const $api = axios.create({
  baseURL: BASE_URL,
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export default $api;
