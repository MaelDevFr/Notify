const { SlashCommandBuilder } = require("discord.js");
const { unlink } = require("node:fs/promises");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("delete")
    .setDescription("Delete your account"),
  async execute(interaction) {
    await unlink(`./db/${interaction.user.id}.txt`);
    return interaction.reply(
      `Your account ${interaction.user.id} has been deleted !`
    );
  },
};
