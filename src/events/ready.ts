import { Client } from 'discord.js';
// import cron from 'node-cron';

export default {
    name: 'ready',
    once: true,
    execute: async (client: Client) => {
        console.log(`Ready! Logged in as ${client.user?.tag}`);


        // // every day at 9:00:00 PM
        // cron.schedule(
        //     '0 21 * * *',
        //     async () => {
        //         await showScoreboard(client);
        //     },
        //     {
        //         timezone: 'Europe/Paris'
        //     }
        // );
    }
};
