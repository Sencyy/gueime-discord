const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("say")
        .setDescription("faz o bot falar alguma coisa")
        .addStringOption(option =>
            option.setName("mensagem")
                .setDescription("mensagem para falar")
                .setRequired(true)),
    async execute(interaction) {
        text = interaction.options.getString("mensagem");
        await interaction.reply({content: ":thumbsup:", ephemeral: true});
        await interaction.channel.send(text);
;        console.log("Fala solicitada!");
    },
};