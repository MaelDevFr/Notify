const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("See all of my commands !"),
  async execute(interaction) {
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("**Notify - HELP**")
      .setDescription("You can see all of my commands !!")
      .addFields(
        {
          name: "`/init`",
          value: "Create your account in Notify",
          inline: true,
        },
        {
          name: "`/delete`",
          value: "Delete your account in Notify",
          inline: true,
        },
        { name: "`/ping`", value: "See my ping", inline: true },
        { name: "`/help`", value: "See this embed", inline: true },
        {
          name: "`/note-add`",
          value: "Create a note in your account data base",
          inline: true,
        },
        { name: "`/note-list`", value: "See all of your notes", inline: true },
        {
          name: "`/share-note`",
          value: "Create a share directory of note protect by a password",
          inline: true,
        },
        {
          name: "`/share-open`",
          value: "See the content of a share-note",
          inline: true,
        },
        { name: "`/share-delete`", value: "Delete a share-note", inline: true }
      )
      .setTimestamp()
      .setFooter({
        text: "Notify - Reinvents the note.",
      });

    interaction.reply({ embeds: [exampleEmbed] });
  },
};
