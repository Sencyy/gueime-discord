const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("calc")
        .setDescription("calculadora gueime")
        .addStringOption(option =>
            option.setName("num1")
                .setDescription("numero 1")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("op")
                .setDescription("operador")
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName("num2")
                .setDescription("numero 2")
                .setRequired(true)),
    async execute(interaction) {
        await interaction.reply(`${interaction.options.getString("num1")} + ${interaction.options.getInteger("num2").toString()} = ${calculo(interaction.options.getString("num1"), interaction.options.getInteger("num2"))}`)
        console.log("Calculo solicitado!");
    },
};

function calculo(num1, num2) {
    resultado = num1 + num2;
    return resultado;
} 