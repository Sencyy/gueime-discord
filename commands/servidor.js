const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("servidor")
        .setDescription("Fala informação sobre o servidor"),
    async execute(interaction) {
        await interaction.reply(`Esse servidor é ${interaction.guild.name} e tem ${interaction.guild.memberCount} membros.`);
    },
};