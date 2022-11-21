const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("escolha")
        .setDescription("Escolhe uma de duas alternativas")
        .addStringOption(option =>
            option.setName("escolha1")
                .setDescription("opção 1")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("escolha2")
                .setDescription("opção 2")
                .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(`entre ${interaction.options.getString("escolha1")} e ${interaction.options.getString("escolha2")}`)
        await interaction.followUp(`eu escolho ${escolher(interaction.options.getString("escolha1"), interaction.options.getString("escolha2"))}`);
        console.log("Escolha solicitada!");
    },
};

function escolher(esc1, esc2) {
    randNum = Math.random() *(2 - 1) + 1;
    roundNum = Math.round(randNum);
    if (roundNum === 1) {
        return(esc1)
    } else {
        return(esc2)
    }
} 