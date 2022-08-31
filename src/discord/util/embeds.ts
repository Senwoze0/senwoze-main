import { EmbedBuilder, Embed, Client } from "discord.js";
import { IEmojis } from "../../types/emojis";
import { getChannelName, getGuildName } from "./other";
import { config } from "../../util/config";
import emojis from "./emojis";

export const initialiseEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const guildName = getGuildName(client, config.verify.guildId);
    const embed = new EmbedBuilder()
        .setColor("#2f3136")
        .setTitle(`${allEmojis.verification} Vérification requise !`)
        .setDescription(`${allEmojis.space}${allEmojis.success} **Pour accéder \`${guildName}\`, vous devez d'abord passer la vérification.**\n${allEmojis.space}${allEmojis.space}${allEmojis.right} Appuyez sur le **Vérifier** bouton ci-dessous.`);
    
    return embed;
}

export const successDMEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const embed = new EmbedBuilder()
        .setColor("#f3b822")
        .setDescription(`${allEmojis.loading} Début de la vérification... Vérifiez vos messages !`);
    
    return embed;
}

export const failedToDMEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const embed = new EmbedBuilder()
        .setColor("#fc2323")
        .setDescription(`${allEmojis.cancel} **Je n'ai pas pu vous envoyer de message. Ouvrez vos messages et essayez de revérifier.**`);
    
    return embed;
}

export const startVerificationEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const embed = new EmbedBuilder()
        .setColor("#f3b822")
        .setDescription(`${allEmojis.loading} **Préparation de la vérification..**`);
    
    return embed;
}

export const verificationCodeEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const embed = new EmbedBuilder()
        .setColor("#2f3136")
        .addFields([
            { name: `${allEmojis.verification} **Bonjour ! es-tu humain ? Découvrons-le !**`, value: `\`Veuillez scanner le code QR ci-dessous à l'aide de l'application mobile Discord pour vérifier !\`` },
            { name: 'Notes complémentaires:', value: `${allEmojis.mail} Ne partagez ce QR Code avec personne ! \n${allEmojis.tick} Ce code accorde l'accès à ce serveur une fois.\n ${allEmojis.alarm} Vous serez averti lorsque vous aurez été vérifié.` }
        ])
        .setFooter({
            text: 'Période de vérification: 2 minutes.',
        })
    
    return embed;
}

export const failedVerificationEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const guildName = getGuildName(client, config.verify.guildId);
    const channelName = getChannelName(client, config.verify.channelId);
    const embed = new EmbedBuilder()
        .setColor("#ff2222")
        .setTitle(`Vous avez échoué la vérification !`)
        .setDescription(`${allEmojis.cancel} Vous n'avez malheureusement pas réussi la vérification en \`${guildName}\`.
        ${allEmojis.space} **Raison:** \`Échec de la vérification ! [Timeout]\`
        ${allEmojis.space}${allEmojis.right} Vous pouvez revenir à #${channelName} pour démarrer un nouveau processus de vérification en cliquant à nouveau sur le bouton Vérifier.`)
    
    return embed;
}

export const failedVerificationEmbedReason = (client: Client, reason: string) => {
    const allEmojis: IEmojis = emojis(client);
    const guildName = getGuildName(client, config.verify.guildId);
    const channelName = getChannelName(client, config.verify.channelId);
    const embed = new EmbedBuilder()
        .setColor("#ff2222")
        .setTitle(`Vous avez échoué la vérification !`)
        .setDescription(`${allEmojis.cancel} Vous n'avez malheureusement pas réussi la vérification en \`${guildName}\`.
        ${allEmojis.space} **Raison:** \`Échec de la vérification ! [${reason}]\`
        ${allEmojis.space}${allEmojis.right} Vous pouvez revenir à #${channelName} pour démarrer un nouveau processus de vérification en cliquant à nouveau sur le bouton Vérifier.`)
    
    return embed;
}

export const successVerificationEmbed = (client: Client) => {
    const allEmojis: IEmojis = emojis(client);
    const guildName = getGuildName(client, config.verify.guildId);
    const embed = new EmbedBuilder()
    .setColor("#22ff40")
    .setTitle(`Vous avez été vérifié !`)
    .setDescription(`${allEmojis.success} Vous avez passé la vérification avec succès. Vous pouvez désormais accéder \`${guildName}\`!`);
    
    return embed;
}