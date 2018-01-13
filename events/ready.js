module.exports.run = async (client) => {
    const Discord = require('discord.js'); 
    const shard = new Discord.ShardClientUtil(client);
    const config = require('../config.json');

    console.log('Bot is online!');
    //await client.user.setGame(`${config.prefix}help for commands | ${shard.id}/${shard.count}`);
};