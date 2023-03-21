import { poleEmploi } from './api_pole_emploi';

//axiosG.defaults.baseURL = import.meta.env.VITE_API_GLOBAL_URL;

poleEmploi.interceptors.request.use(
  async (config) => {
    config.headers['Authorization'] = `Bearer ${process.env.POLE_EMPLOI_TOKEN}`;

    return config;
  },
  (error) => Promise.reject(error)
);

/*axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;

      const result = await refreshToken();

      if (result?.token) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${result?.token}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);*/

export const axiosPoleEmploi = poleEmploi;
