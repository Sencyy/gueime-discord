const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gueime")
        .setDescription("gueime"),
    async execute(interaction) {
        await interaction.reply("vose ser um gueime");
    },
};