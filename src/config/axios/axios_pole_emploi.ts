import { poleEmploi } from './api_pole_emploi';

poleEmploi.interceptors.request.use(
  async (config ) => {
    config.headers['Authorization'] = `Bearer ${process.env.POLE_EMPLOI_TOKEN}`;

    return config;
  },
  (error: Error) => Promise.reject(error)
);


export const axiosPoleEmploi = poleEmploi;
