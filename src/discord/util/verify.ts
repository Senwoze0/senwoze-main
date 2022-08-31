import { ButtonInteraction, Client } from "discord.js";
import { startVerificationEmbed } from "../util/embeds";
import socket from "./socket";

let client: Client;
let interaction: ButtonInteraction;

const create = async (client: Client, interaction: ButtonInteraction) => {
    try {
        await interaction.user.send({
            embeds: [startVerificationEmbed(client)],
        });
        socket(client, interaction);
        return true;
    } catch {
        return false;
    }
}

export default create;