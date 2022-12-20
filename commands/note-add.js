const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("note-add")
    .setDescription("Create a note")
    .addStringOption((option) =>
      option.setName("input").setDescription("The note").setRequired(true)
    ),
  async execute(interaction) {
    const inputValue = interaction.options.getString("input");
    fs.readFile(`./db/${interaction.user.id}.txt`, "utf8", (err, data) => {
      if (err)
        return interaction.reply(
          "You have not account in Notify !\nFix this problem and tape `/init`"
        );
      fs.writeFile(
        `./db/${interaction.user.id}.txt`,
        `${data}${inputValue}\n\n`,
        function (err) {
          if (err) throw err;
          console.log("Note add cmd success");
        }
      );
      return interaction.reply(
        `Your note \n**${inputValue}**\nHas been created !`
      );
    });
  },
};
