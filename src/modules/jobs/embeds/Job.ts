import { EmbedBuilder } from 'discord.js';
import { Job } from '../type';

export const createEmbedJob = (Job: Job) => {
  const embed = new EmbedBuilder()
    .setTitle(Job.title)
    .setDescription(Job.description)
    .setURL(Job.url)
    .setThumbnail(Job.companyLogo);

  return {
    embed
  };
};
