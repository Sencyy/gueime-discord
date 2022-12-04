const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("carinha")
        .setDescription(";-;"),
    async execute(interaction) {
        await interaction.reply(";-;");
        console.log(";-;");
    },
};