import axios, {
  ResponseType,
  AxiosRequestHeaders,
  AxiosRequestConfig,
} from "axios";

// const { API_BASE_URL: BASE_URL } = process.env;

const BASE_URL = "https://apiproxy.telphin.ru/";

export const $api = axios.create({
  baseURL: BASE_URL,
  //   withCredentials: true,
});

interface RequestParamsType {
  url: string;
  responseType?: ResponseType;
  params?: AxiosRequestConfig;
  headers?: AxiosRequestHeaders;
}

interface RequestWithBodyType extends RequestParamsType {
  body: unknown;
  headers?: AxiosRequestHeaders;
}

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

// export const post = ({ url, body }: RequestWithBodyType): Promise<unknown> =>
//   $api.post(url, body).then(({ data }) => data);

// export const patch = ({ url, body }: RequestWithBodyType): Promise<unknown> =>
//   $api.patch(url, body).then(({ data }) => data);

// export const get = ({ url, params }: RequestParamsType): Promise<unknown> => {
//   return $api.get(url, { params }).then(({ data }) => data);
// };

export default $api;
