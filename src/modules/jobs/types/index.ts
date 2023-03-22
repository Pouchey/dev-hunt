export type Job = {
  id: number;
  title: string;
  description: string;
  url: string;
  company: string;
  location: string;
  pricing: string;
  experience: string;
};

export type fetchJobsParams = {
  departement: number;
  lastFetch: number;
};
