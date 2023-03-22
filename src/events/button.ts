import { ButtonInteraction } from 'discord.js';

export default {
  name: 'interactionCreate',
  execute: async (interaction: ButtonInteraction) => {
    if (!interaction.isButton()) return;

    const { customId, user, channelId } = interaction;
    const { id: userId } = user;
  }
};
