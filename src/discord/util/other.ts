import { Client, Guild, TextChannel } from "discord.js";

export const getGuildName = (client: Client, guildId: string) => {
    const guild = client.guilds.cache.get(guildId);
    if (!guild) return "Unknown";
    return guild.name;
}

export const getChannelName = (client: Client, channelId: string) => {
    const channel: TextChannel = client.channels.cache.get(channelId) as TextChannel;
    if (!channel) return "Unknown";
    return channel.name;
}