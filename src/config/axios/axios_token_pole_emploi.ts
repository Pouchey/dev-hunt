import { poleEmploi } from './api_pole_emploi';

export const token = async () => {
  let clientId = process.env.POLE_EMPLOI_CLIENT_ID;
  let clientSecret = process.env.POLE_EMPLOI_CLIENT_SECRET;
};

/*const maxAge = 10000;

export const memoizedRefreshToken = mem(refreshTokenFn, {
  maxAge,
});
*/
