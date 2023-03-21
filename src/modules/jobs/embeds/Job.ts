import { EmbedBuilder } from 'discord.js';
import { Job } from '../types';

export const createEmbedJob = (job: Job) => {
  const embed = new EmbedBuilder()
    .setTitle(job.title)
    .setDescription(job.description)
    .setURL(job.url)
    .addFields([
      { name: 'Salaire', value: job.pricing },
      { name: 'Lieu', value: job.location },
      { name: 'Expérience', value: job.experience }
    ])
    .setFooter({
      text: `Entreprise : ${job.company}`
    });

  return embed;
};
