import { Client } from 'discord.js';
import cron from 'node-cron';

export default {
  name: 'ready',
  once: true,
  execute: async (client: Client) => {
    console.log(`Ready! Logged in as ${client.user?.tag}`);

    // every 30 minutes
    cron.schedule(' */30 * * * *', async () => {
      // TO DO : call the function to get the job offers
      console.log('running a task every 2 hour');
    });
  }
};
