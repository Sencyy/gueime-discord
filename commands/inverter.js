const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("inverter")
        .setDescription("inverte um texto")
        .addStringOption(option =>
            option.setName("texto")
                .setDescription("texto para inverter")
                .setRequired(true)),
    async execute(interaction) {
        toReverse = interaction.options.getString("texto");

        await interaction.reply(reverseString(toReverse));
        console.log("Inverter solicitado!");
    },
};

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}