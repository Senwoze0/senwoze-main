import { Client, ActivityType, TextChannel, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { config } from "../../util/config";
import { logError, logSuccess } from "../../util/console";
import { initialiseEmbed } from "../util/embeds";

export const execute = async (client: Client) => {
    client.user?.setActivity("wickbot.com | Shard192", { type: ActivityType.Watching });

    const channelToSend = client.channels.cache.get(config.verify.channelId) as TextChannel;
    (await channelToSend.messages.fetch({ limit: 50 })).forEach(message => message.author.bot ? message.delete() : null);

    const actionRow = new ActionRowBuilder<ButtonBuilder>()
        .addComponents(new ButtonBuilder()
            .setLabel("Vérifier")
            .setStyle(ButtonStyle.Success)
            .setCustomId("verify"))
        .addComponents(new ButtonBuilder()
            .setLabel("Aide")
            .setStyle(ButtonStyle.Secondary)
            .setCustomId("help"));

    await channelToSend.send({
        embeds: [initialiseEmbed(client)],
        components: [actionRow]
    });

    logSuccess("SENT VERIFY MESSAGE");
}