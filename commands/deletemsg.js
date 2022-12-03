const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("deletemsg")
        .setDescription("Apaga uma mensagem")
        .addStringOption(option =>
            option.setName("mensagem")
                .setDescription("id da mensagem")
                .setRequired(true)),
    async execute(interaction) {
        messageId = interaction.options.getString("mensagem")
        await interaction.channel.messages.delete(messageId);
        await interaction.reply({content: "Mensagem apagada com sucesso!", ephemeral: true});
        
        console.log("Delete solicitado!")
    },
};