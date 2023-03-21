import axios, { AxiosRequestConfig } from 'axios';
import { poleEmploi } from './api_pole_emploi';

poleEmploi.interceptors.request.use(
  async (config) => {
    const token = await axios
      .post('https://entreprise.pole-emploi.fr/connexion/oauth2/access_token?realm=%2Fpartenaire', {
        grant_type: 'client_credentials',
        client_id: process.env.POLE_EMPLOI_CLIENT_ID,
        client_secret: process.env.POLE_EMPLOI_CLIENT_SECRET,
        scope: 'api_offresdemploiv2 o2dsoffre'
      })
      .then((response) => response.data.access_token);

    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error: Error) => Promise.reject(error)
);

export const axiosPoleEmploi = poleEmploi;
