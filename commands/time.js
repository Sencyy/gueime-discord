const {SlashCommandBuilder} = require("discord.js");
var currentdate = new Date();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("time")
        .setDescription("Exibe a data e hora atuais"),
    async execute(interaction) {
        await interaction.reply(`Agora são ${currentdate.getHours()} horas e ${currentdate.getMinutes()} minutos.`);
        console.log("Hora solicitada!")
    },
};