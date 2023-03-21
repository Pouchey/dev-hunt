import { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('fetch')
    .setDescription(' Recherche les offres d\'emploi ')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute: async (interaction: CommandInteraction) => {
    await interaction.reply({ content: 'Pong!', ephemeral: true });
  }
};
