export type Job = {
  id: number;
  title: string;
  description: string;
  url: string;
  company: string;
  companyLogo: string;
  location: string;
  pricing: string;
  experience: string;
};

export type fetchJobsParams = {
  departement: string;
  lastFetch: number;
};
