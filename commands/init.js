const { SlashCommandBuilder } = require("discord.js");
const mongoose = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("init")
    .setDescription("Create your account in Notify")
    .addStringOption((option) =>
      option.setName("input").setDescription("The note").setRequired(true)
    ),
  async execute(interaction) {
    const inputValue = interaction.options.getString("input");
    const schema = mongoose.Schema({ note: "string" });
    const Event1 = mongoose.model(interaction.user.id, schema);

    const event1 = new Event1({
      note: inputValue,
    });
    event1.save(function (err) {
      if (err) console.log("Error");
    });
    interaction.reply("yes");
  },
};
