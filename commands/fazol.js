const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fazol")
        .setDescription("faz o l"),
    async execute(interaction) {
        imageUrl = 'https://i.imgur.com/sVFTiYn.png'
        const embed = new EmbedBuilder().setImage(imageUrl) ;
        interaction.reply({ embeds: [embed] });
        console.log("Faz o L!");
    },
};

