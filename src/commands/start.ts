import {
  SlashCommandBuilder,
  CommandInteraction,
  PermissionFlagsBits,
  TextChannel
} from 'discord.js';
import { getDb } from '../';

export default {
  data: new SlashCommandBuilder()
    .setName('start')
    .setDescription("Commence la diffusion des offres d'emploi sur le channel.")
    .addNumberOption((option) =>
      option.setName('departement').setDescription(' Département de recherche').setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  execute: async (interaction: CommandInteraction) => {
    //@ts-ignore
    const departement = interaction.options.getNumber('departement') as Number;

    const db = getDb();

    const channelID = interaction.channelId;
    const channel = interaction.channel as TextChannel;
    const channelName = channel.name;

    await db
      .getChannel(channelID)
      .then(async (channel: TextChannel) => {
        if (channel) {
          await interaction.reply({
            content: `Dev-Hunt est déjà actif sur ce channel - ${channelName}!`,
            ephemeral: true
          });
          return;
        } else {
          db.registerChannel(channelID, departement).then(async () => {
            await interaction.reply({
              content: ` Dev-Hunt a été activé avec succès sur ce channel - ${channelName}!`,
              ephemeral: true
            });
          });
        }
      })
      .catch(async () => {
        await interaction.reply({
          content: `Une erreur s'est produite lors de l'activation de Dev-Hunt sur ce channel - ${channelName}!`,
          ephemeral: true
        });
      });
  }
};
