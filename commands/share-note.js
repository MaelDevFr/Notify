const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("share-create")
    .setDescription("Create a share note protected by a password")
    .addStringOption((option) =>
      option
        .setName("password")
        .setDescription("The password")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("note").setDescription("The password").setRequired(true)
    ),
  async execute(interaction) {
    const mdpValue = interaction.options.getString("password");
    const noteValue = interaction.options.getString("note");
    fs.writeFile(
      `./share-db/${mdpValue}.txt`,
      `${noteValue}\n\n`,
      function (err) {
        if (err) throw err;
        console.log("Note add cmd success");
      }
    );
    interaction.reply(`The share note ${mdpValue} has been created !`);
  },
};
