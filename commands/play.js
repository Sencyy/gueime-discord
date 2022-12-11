const {SlashCommandBuilder, VoiceChannel} = require("discord.js");
const { joinVoiceChannel, VoiceConnectionStatus, createAudioPlayer, NoSubscriberBehavior, createAudioResource, StreamType, AudioPlayerStatus } = require('@discordjs/voice');
const { createReadStream, createWriteStream } = require("node:fs");
const ytdl = require("ytdl-core");
const { chooseFormat } = require("ytdl-core");



module.exports = {
    data: new SlashCommandBuilder()
        .setName("play")
        .setDescription("toca uma musica do youtube")
        .addStringOption(option =>
            option.setName("link")
                .setDescription("link da musica")
                .setRequired(true)),
    execute(interaction) {
        const musicUrl = interaction.options.getString("link");
        //var stream = ytdl(musicUrl, {quality: "highestaudio"});
        //interaction.reply("Gerando cache...");
        
        const player = createAudioPlayer();
        player.on(AudioPlayerStatus.Playing, () => {
            //interaction.editReply("tocando musiqueimes");
        });
        
        player.on("error", error => {
            console.log(`ERROR: ${error.message}`);
            //interaction.editReply("Ocorreu um erro!")
        })
        const resource = createAudioResource("/home/sencyy/dev/gueime discord/audio.mp3");
        player.play(resource);
        const connection = joinVoiceChannel({
            channelId: "688392994826747919",
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator,
        });
        
        const subscription = connection.subscribe(player);
        if (subscription) {
            setTimeout(() => subscription.unsubscribe(), 15_000);
        }
        
        console.log("Música solicitada!");
    },
};