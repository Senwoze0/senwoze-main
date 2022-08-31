import { Client, GuildEmoji } from "discord.js";
import { IEmojis } from "../../types/emojis"
import { config } from "../../util/config";

export default (client: Client): IEmojis => {
    const alarm = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "alarm") as GuildEmoji)
    const cancel = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "cancel") as GuildEmoji)
    const loading = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "loading") as GuildEmoji)
    const mail = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "mail") as GuildEmoji)
    const right = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "right") as GuildEmoji)
    const space = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "space") as GuildEmoji)
    const success = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "success") as GuildEmoji)
    const tick = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "tick") as GuildEmoji)
    const verification = (client.guilds.cache.get(config.emojiGuildId)?.emojis.cache.find(emoji => emoji.name === "verification") as GuildEmoji)

    return {
        alarm,
        cancel,
        loading,
        mail,
        right,
        space,
        success,
        tick,
        verification
    }
}