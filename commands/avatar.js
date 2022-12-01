const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("avatar")
        .setDescription("Manda o download do seu avatar."),
    async execute(interaction) {
        await interaction.reply(interaction.user.displayAvatarURL());
        console.log("Avatar solicitado!");
        
    },
};