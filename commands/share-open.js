const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("share-open")
    .setDescription("Open a share note protected by a password")
    .addStringOption((option) =>
      option
        .setName("password")
        .setDescription("The password")
        .setRequired(true)
    ),
  async execute(interaction) {
    const mdpValue = interaction.options.getString("password");
    fs.readFile(`./share-db/${mdpValue}.txt`, (err, data) => {
      if (err)
        interaction.reply(
          "The password is false or the directory does'nt exist !"
        );
      console.log("Open Share note cmd success");
      interaction.reply(`The content of the note ${mdpValue} is :\n` + data);
    });
  },
};
