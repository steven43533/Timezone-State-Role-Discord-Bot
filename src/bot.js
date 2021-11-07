require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"]});

client.login(process.env.TIMEZONEBOTJS_BOT_TOKEN);