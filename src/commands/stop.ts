import {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  TextChannel
} from 'discord.js';
import { getDb } from '..';

export default {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription("Termine la diffusion des offres d'emploi sur le channel.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute: async (interaction: CommandInteraction) => {
    const db = getDb();

    const channelID = interaction.channelId;
    const channel = interaction.channel as TextChannel;
    const channelName = channel.name;

    await db
      .getChannel(channelID)
      .then(async (channel: TextChannel) => {
        if (channel) {
          db.unregisterChannel(channelID).then(async () => {
            await interaction.reply({
              content: ` Dev-Hunt a été activé avec succès sur ce channel - ${channelName}!`,
              ephemeral: true
            });
          });
        } else {
          await interaction.reply({
            content: `Dev-Hunt n'est pas activé sur ce channel - ${channelName}!`,
            ephemeral: true
          });
        }
      })
      .catch(async () => {
        await interaction.reply({
          content: `Une erreur s'est produite lors de la désactivation de Dev-Hunt sur ce channel - ${channelName}!`,
          ephemeral: true
        });
      });
  }
};
