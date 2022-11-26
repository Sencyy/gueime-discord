const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("maiusculo")
        .setDescription("maiusculo")
        .addStringOption(option =>
            option.setName("texto")
                .setDescription("texto")
                .setRequired(true)),
    async execute(interaction) {
        const texto = interaction.options.getString("texto");
        await interaction.reply(texto.toUpperCase());
        console.log("Maiusculo solicitado!")
    },
};