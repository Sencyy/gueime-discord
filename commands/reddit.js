const {SlashCommandBuilder} = require("discord.js");
const { getPost, getImage} = require("random-reddit");



module.exports = {
    data: new SlashCommandBuilder()
        .setName("reddit")
        .setDescription("Pega um post aleatório de um subreddit")
        .addStringOption(option =>
            option.setName("subreddit")
                .setDescription("Subreddit para pegar o post.")
                .setRequired(true)),
    async execute(interaction) {
        subreddit = interaction.options.getString("subreddit");
        img = await getImage(subreddit);
        await interaction.reply(img);
        console.log("Reddit solicitado!")
    },
};