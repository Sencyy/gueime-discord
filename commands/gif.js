const {tenorKey} = require("../config.json")
const Tenor = require("tenorjs").client({
    "Key": tenorKey,
    "Filter": "off",
    "Locale": "pt_BR",
    "MediaFilter": "minimal",
    "DateFormat": "D/MM/YYYY - H:mm:ss A"
});

const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("gif")
        .setDescription("Busca um gif com o Tenor.")
        .addStringOption(option =>
            option.setName("busca")
                .setDescription("sua busca para o gif")
                .setRequired(true)),
    async execute(interaction) {
        search = interaction.options.getString("busca");
        
        Tenor.Search.Query(search, "1").then(Results => {
            Results.forEach(Post => {
                interaction.reply(Post.url)
                 
        });
    }).catch(console.error);
        console.log("Gif solicitado!");
    },
};

