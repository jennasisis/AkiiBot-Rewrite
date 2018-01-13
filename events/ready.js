const ShardClientUtil = require('discord.js').ShardClientUtil; 
const config = require('../config.json');

module.exports.run = async (client) => {
    const shard = new ShardClientUtil(client);

    console.log('Bot is online!');
    //await client.user.setGame(`${config.prefix}help for commands | ${shard.id}/${shard.count}`);
};