const fs = require("node:fs");
const path = require("node:path");
const {token} = require("./config.json")
const {Client, Events, GatewayIntentBits, Collection} = require("discord.js");

const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();

console.log("GueimerBot 3.2 alpha");

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[AVISO] O comando em ${filePath} não contém a propriedade "data" ou "execute".`);
    }
}

console.log("Conectando-se aos servidores do Discord...")

client.once(Events.ClientReady, c => {
    console.log(`Conectado como ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`Nenhum comando correspondente com ${interaction.commandName} foi encontrado.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: "Ocorreu um erro ao executar esse comando! :(", ephemeral: true});
    }
});

client.login(token);