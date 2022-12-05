const {SlashCommandBuilder} = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");
const {openAiKey} = require("../config.json")
const configuration = new Configuration({
    apiKey: openAiKey,
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("imagem")
        .setDescription("gera uma imagem usando inteligência artificial")
        .addStringOption(option =>
            option.setName("prompt")
                .setDescription("prompt para gerar a imagem")
                .setRequired(true))
        .addStringOption(option =>
            option.setName("resolution")
                .setDescription("resolução da imagem")
                .setRequired(true)
                .addChoices(
                    {name: "256x256", value: "256x256"},
                    {name: "512x512", value: "512x512"},
                    {name: "1024x1024", value: "1024x1024"},
                )),
    async execute(interaction) {
        const userPrompt = interaction.options.getString("prompt");
        const size = interaction.options.getString("resolution");
        await interaction.deferReply();
        result = await renderImage(userPrompt, size);
        await interaction.followUp(result);
        console.log("Imagem solicitada!");
    },
};

async function renderImage(prompt, size) {
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: size
    })
    return response.data.data[0].url;
}