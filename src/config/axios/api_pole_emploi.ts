import axios from 'axios';

export const poleEmploi = axios.create({
  baseURL: process.env.POLE_EMPLOI_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
