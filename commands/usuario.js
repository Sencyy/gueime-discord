const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("usuario")
        .setDescription("Mostra informação sobre o usuário"),
    async execute(interaction) {
        await interaction.reply(`Este comando foi chamado por ${interaction.user.username}, que entrou em ${interaction.member.joinedAt}.`);
    },
};