import { Client, Interaction, InteractionType } from "discord.js"
import { readdirSync } from "fs";
import path from "path";

export const execute = async (client: Client, interaction: Interaction) => {
    switch (interaction.type) {
        case InteractionType.MessageComponent:
            for (const file of readdirSync(path.join(__dirname, '../buttons'))) {
                if (file.split('.')[0] === interaction.customId) {
                    await require(path.join(__dirname, `../buttons/${file}`)).execute(client, interaction);
                }
            }

            await interaction.deferUpdate().catch(() => { });
            break;
        default:
            break;
    }
}