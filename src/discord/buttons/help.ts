import { ButtonInteraction, Client } from "discord.js";
import { logError } from "../../util/console";
import { expose } from "threads";

export const execute = async (client: Client, interaction: ButtonInteraction) => new Promise(async (resolve, reject) => {
    const reply = await interaction.reply({
        content: `https://wickbot.com/`,
        ephemeral: true
    });

    resolve(reply);
});

