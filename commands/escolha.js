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
        escolha1 = interaction.options.getString("escolha1");
        escolha2 = interaction.options.getString("escolha2");
        escolha = escolher(escolha1, escolha2);
        
        await interaction.reply(`entre ${escolha1} e ${escolha2}`)
        await interaction.followUp(`mim escolher ${escolha}`);
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