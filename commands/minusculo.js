const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("minusculo")
        .setDescription("minusculo")
        .addStringOption(option =>
            option.setName("texto")
                .setDescription("texto")
                .setRequired(true)),
    async execute(interaction) {
        const texto = interaction.options.getString("texto");
        await interaction.reply(texto.toLowerCase());
        console.log("Minusculo solicitado!")
    },
};