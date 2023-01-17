const { SlashCommandBuilder } = require("discord.js");
const mongoose = require("mongoose");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("note-list")
    .setDescription("Note list"),
  async execute(interaction) {
    var questions = mongoose.model(interaction.user.id);
    questions.find({}, function (err, data) {
      console.log(err, data, data.length);
    });
  },
};
