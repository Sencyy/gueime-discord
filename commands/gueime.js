const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gueime")
        .setDescription("gueime")
        .addStringOption(option =>
            option.setName("quem")
                .setDescription("quem e gueime")
                .setRequired(true)),
    async execute(interaction) {
        quem = interaction.options.getString("quem");

        await interaction.reply(`${quem} ser um gueime`);
        console.log("Gueime solicitado!");
    },
};