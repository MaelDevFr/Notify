const { SlashCommandBuilder } = require("discord.js");
const { unlink } = require("fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("share-delete")
    .setDescription("Delete a share note protected by a password")
    .addStringOption((option) =>
      option
        .setName("password")
        .setDescription("The password")
        .setRequired(true)
    ),
  async execute(interaction) {
    const mdpValue = interaction.options.getString("password");
    await unlink(`./share-db/${mdpValue}.txt`);
    return interaction.reply(`The share note ${mdpValue} has been deleted !`);
  },
};
