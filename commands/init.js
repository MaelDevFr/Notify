const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("init")
    .setDescription("Create your account in Notify"),
  async execute(interaction) {
    fs.writeFile(`./db/${interaction.user.id}.txt`, ` `, function (err) {
      if (err) throw err;
      console.log("Init cmd success");
    });
    return interaction.reply(
      `Your account has been created !\nYour account'id is **${interaction.user.id}**`
    );
  },
};
