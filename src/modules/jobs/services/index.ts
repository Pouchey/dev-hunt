import { axiosPoleEmploi } from '../../../config/axios/axios_pole_emploi';
import { fetchJobsParams, Job } from '../types';

const reformatISODate = (date: string) => {
  const length = date.length;
  return date.slice(0, length - 5) + 'Z';
};

export const fetchJobs = async (params: fetchJobsParams): Promise<Job[]> => {
  const dateMax = new Date().toISOString();

  const dateMin = new Date(params.lastFetch).toISOString();

  console.log(params);

  // fetchJobs from api
  const resultats = (await axiosPoleEmploi
    .get('/offresdemploi/v2/offres/search', {
      params: {
        codeROME: 'M1805',
        departement: params.departement,
        sort: 2, // par date de puclication croissante
        minCreationDate: reformatISODate(dateMin),
        maxCreationDate: reformatISODate(dateMax)
      }
    })
    .then((response) => JSON.parse(response.data))
    .then((data) => data.resultats)) as any;

  return resultats.map((resultat: any) => ({
    id: resultat.id,
    title: resultat.intitule,
    description: resultat.description,
    url: 'https://candidat.pole-emploi.fr/offres/recherche/detail/' + resultat.id,
    company: resultat.entreprise.nom || 'Non renseigné',
    location: resultat.lieuTravail.libelle,
    pricing: resultat.salaire.libelle,
    experience: resultat.experienceLibelle
  }));
};
