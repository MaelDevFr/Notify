const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("note-list")
    .setDescription("Note list"),
  async execute(interaction) {
    fs.readFile(`./db/${interaction.user.id}.txt`, "utf8", (err, data) => {
      if (err)
        return interaction.reply(
          "You have not account in Notify !\nFix this problems and tape `/init`"
        );
      interaction.reply("All of your note(s)\n**" + data + "**");
    });
  },
};
