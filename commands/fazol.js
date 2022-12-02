const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fazol")
        .setDescription("fazol"),
    async execute(interaction) {
        const embed = new EmbedBuilder().setImage('https://i.imgur.com/sVFTiYn.png') ;
        interaction.reply({ embeds: [embed] });
        console.log("Faz o L!");
    },
};

