import {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  TextChannel
} from 'discord.js';
import { getDb } from '..';
import { fetchJobs } from '../modules/jobs/services';
import { fetchJobsParams } from '../modules/jobs/types';
import { Channel } from '../types';

export default {
  data: new SlashCommandBuilder()
    .setName('fetch')
    .setDescription(" Recherche les offres d'emploi ")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute: async (interaction: CommandInteraction) => {
    const db = getDb();

    const channelID = interaction.channelId;
    const channel = interaction.channel as TextChannel;
    const channelName = channel.name;

    const chan = (await db.getChannel(channelID)) as Channel;

    if (!chan) {
      await interaction.reply({
        content: `Le channel ${channelName} n'est pas enregistré`,
        ephemeral: true
      });
      return;
    }

    const params: fetchJobsParams = {
      departement: chan.departement,
      lastFetch: chan.lastFetch
    };

    const jobs = await fetchJobs(params);

    db.updateLastFetch({ channelID, lastFetch: Date.now() });

    jobs.forEach((job) => {
      channel.send(job.url);
    });

    await interaction.reply({
      content: `Les offres d'emploi ont été envoyées dans le channel ${channelName}`,
      ephemeral: true
    });
  }
};
