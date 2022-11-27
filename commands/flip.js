const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("flip")
        .setDescription("cara ou coroa"),
    async execute(interaction) {
        await interaction.reply(flip());
        console.log("Cara ou coroa solicitado!")
    },
};

function flip() {
    randNum = Math.random() *(2 - 1) + 1;
    roundNum = Math.round(randNum);
    if (roundNum === 1) {
        return("cara")
    } else {
        return("coroa")
    }
} 