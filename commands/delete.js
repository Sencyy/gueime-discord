const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("deletelast")
        .setDescription("deleta a ultima mensagem do bot"),
    async execute(interaction) {
        interaction.channel.messages.fetch({ limit: 1 }).then(messages => {
            let lastMessage = messages.first();
            interaction.channel.messages.delete(lastMessage);
            
        })

        await interaction.reply({content: "Mensagem apagada com sucesso!", ephemeral: true});
        console.log("A última mensagem foi apagada!");
    },
};