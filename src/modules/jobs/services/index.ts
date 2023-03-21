import { axiosPoleEmploi } from '../../../config/axios/axios_pole_emploi';
import { fetchJobsParams } from '../type';

export const fetchJobs = async (params: fetchJobsParams) => {
  let dateMax = new Date().toISOString();
  let dateMin = new Date(params.lastFetch).toISOString();

  // fetchJobs from api
  let resultats = (await axiosPoleEmploi
    .get('/offresdemploi/v2/offres/search', {
      params: {
        codeROME: 'M1805',
        departement: params.departement,
        sort: 2, // par date de puclication croissante
        minCreationDate: dateMin,
        maxCreationDate: dateMax
      }
    })
    .then((response) => JSON.parse(response.data))
    .then((data) => data.resultats)) as any;

  return resultats.map((resultat: any) => {
    id: resultat.id;
    title: resultat.intitule;
    description: resultat.description;
    url: 'https://candidat.pole-emploi.fr/offres/recherche/detail/' + resultat.id;
    company: resultat.entreprise.nom || 'Non renseigné';
    location: resultat.lieuTravail.libelle;
    pricing: resultat.salaire.libelle;
    experience: resultat.experienceLibelle;
  });
};
