const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fazarminha")
        .setDescription("faz arminha"),
    async execute(interaction) {
        imageUrl = 'https://cdn.discordapp.com/attachments/688392994826747916/1048939828995174461/7645319_BSBBrasiliaBrasil19-08-2015PAPlenario-mantem-na-pauta-PEC-que-reduz-mai.jpg';
        const embed = new EmbedBuilder().setImage(imageUrl) ;
        interaction.reply({ embeds: [embed] });
        console.log("Faz arminha!");
    },
};
