import { EmbedBuilder } from 'discord.js';
import { Job } from '../types';

export const createEmbedJob = (job: Job) => {

  // limit the description to 4096 characters
  if (job.description.length > 4096) {
    job.description = job.description.slice(0, 4096);
  }

  


  const embed = new EmbedBuilder()
    .setTitle(job.title)
    .setDescription(job.description)
    .setURL(job.url)
    .addFields([
      { name: 'Salaire', value: job?.pricing || 'Non renseigné' },
      { name: 'Lieu', value: job?.location || 'Non renseigné' },
      { name: 'Expérience', value: job?.experience || 'Non renseigné' }
    ])
    .setFooter({
      text: `Entreprise : ${job.company}`
    });

  return embed;
};
