import { Client, Partials } from "discord.js";
import { config } from "../util/config";
import { logInformation } from "../util/console";
import { readdirSync } from "fs";
import path from "path";

const initialise = async ()  => {
    const client = new Client({ 
        intents: 131071, 
        partials: [Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Message, Partials.Reaction, Partials.ThreadMember, Partials.User],
        allowedMentions: { parse: ["users", "roles", "everyone"] }
    });
    client.login(config.token);

    for (const file of readdirSync(path.join(__dirname, "./events"))) {
        if (!file.endsWith(".ts")) continue;
        const event = require(path.join(__dirname, `./events/${file}`));
        const eventName = file.split(".")[0];
        client.on(eventName, (...args: any[]) => event.execute(client, ...args));

        logInformation(`${eventName.toUpperCase()} EVENT LOADED `);
    }

    logInformation('DISCORD BOT LOADED')
}

// require('threads').expose({
//     initialise
// });

export default initialise;