import { SlashCommandBuilder, CommandInteraction, PermissionFlagsBits } from 'discord.js';
import { getDb } from '../';

export default {
  data: new SlashCommandBuilder()
    .setName('start')
    .setDescription('Commencer la recherche de travail pour la région sélectionnée.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute: async (interaction: CommandInteraction) => {
    const db = getDb();

    await db
      .getChannel(channelID)
      .then(async (channel) => {
        if (channel) {
          await interaction.reply({
            content: `JS-Teacher est déjà actif sur ce channel - ${channelName}!`,
            ephemeral: true
          });
          return;
        } else {
          db.registerChannel(channelID).then(async () => {
            await interaction.reply({
              content: ` JS-Teacher a été activé avec succès sur ce channel - ${channelName}!`,
              ephemeral: true
            });
          });
        }
      })
      .catch(async (err) => {
        await interaction.reply({
          content: `Une erreur s'est produite lors de l'activation de JS-Teacher sur ce channel - ${channelName}!`,
          ephemeral: true
        });
      });
  }
};
