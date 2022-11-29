const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("pergunta")
        .setDescription("Faz uma pergunta ao bot.")
        .addStringOption(option =>
            option.setName("pergunta")
                .setDescription("Sua pergunta para o bot.")
                .setRequired(true)),
    async execute(interaction) {
        pergunta = interaction.options.getString("pergunta")
        usuario = interaction.user.username;
        
        await interaction.reply(`${usuario} perguntou: ${pergunta}`)
        await interaction.followUp(`eu acho que ${responder()}`);
        console.log("Pergunta solicitada!");
    },
};

function responder() {
    randNum = Math.random() *(2 - 1) + 1;
    roundNum = Math.round(randNum);
    if (roundNum === 1) {
        return("sim")
    } else {
        return("não")
    }
} 