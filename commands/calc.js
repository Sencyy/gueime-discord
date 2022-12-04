const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("calc")
        .setDescription("calculadora gueime")
        .addIntegerOption(option =>
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
        num1 = interaction.options.getInteger("num1");
        op = interaction.options.getString("op")
        num2 = interaction.options.getInteger("num2")
        await interaction.reply(`${num1.toString()} ${op} ${num2.toString()} = ${calculo(num1, op, num2)}`)
        console.log("Calculo solicitado!");
    },
};

function calculo(num1, op,  num2) {
    if (op === "+") {
        resultado = num1 + num2;
    } else if (op === "-") {
        resultado = num1 - num2;
    } else if (op === "x") {
        resultado = num1 * num2;
    } else if (op === "/") {
        resultado = num1 / num2;
    } else {
        resultado = "operador inválido!"
    }
    return resultado;
} 