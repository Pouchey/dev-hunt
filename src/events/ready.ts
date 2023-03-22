import { Client } from 'discord.js';
import cron from 'node-cron';
import { sendJobOffers } from '../modules/jobs/models';

export default {
  name: 'ready',
  once: true,
  execute: async (client: Client) => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);

    // every 2 minutes
    cron.schedule(' */2 * * * *', async () => {
      await sendJobOffers(client);
    });
  }
};
