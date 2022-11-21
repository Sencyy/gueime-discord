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
        await interaction.reply(`${interaction.options.getString("quem")} ser um gueime`);
    },
};