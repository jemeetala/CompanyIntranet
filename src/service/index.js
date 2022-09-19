import Axios from "axios";
const defaultAxios = Axios.create({
  headers: {
    accept: "application/octet-stream",
    "X-ARIBA-NETWORK-ID": "AN02000000280",
    APIKey: "UbveroGurd4ILcGCD5Haez5YjSY0XSlm",
    "Content-Type": "application/json",
    DataServiceVersion: "2.0",
    Accept: "application/json",
  },
});
defaultAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export function apiClient(method, url, options = {}) {
  const { data = {}, headers = {}, params = {}, ...rest } = options;
  return defaultAxios({
    url,
    data,
    method,
    params,
    headers,
    ...rest,
  });
}

export const apis = {
  get: (url, args) => apiClient("get", url, args),
  post: (url, args) => apiClient("post", url, args),
  put: (url, args) => apiClient("put", url, args),
  patch: (url, args) => apiClient("patch", url, args),
  delete: (url, args) => apiClient("delete", url, args),
};
