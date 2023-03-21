import { Client, TextChannel } from 'discord.js';
import { getDb } from '../../..';
import { fetchJobs } from '../services';

import { createEmbedJob } from '../embeds/Job';
import { Channel } from '../../../types';
import { fetchJobsParams } from '../types';

export const sendJobOffers = async (client: Client) => {
  const db = getDb();

  const channels = (await db.getChannels()) as Channel[];

  channels.forEach(async (channel) => {
    const chan = (await client.channels.fetch(channel.channelID)) as TextChannel;

    if (!chan) {
      db.unregisterChannel(channel.channelID);
      return;
    }

    const params: fetchJobsParams = {
      departement: channel.departement,
      lastFetch: channel.lastFetch
    };

    const jobs = await fetchJobs(params);

    db.updateLastFetch({channelID: channel.channelID,lastFetch: Date.now()});

    jobs.forEach((job) => {
      const embed = createEmbedJob(job);

      chan.send({ embeds: [embed] });
    });
  });
};
