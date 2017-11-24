module.exports.run = (client, message, args) => {
    console.log("guildinfo command ran");
    const Discord = require('discord.js');
    
    if(message.channel.type === "dm"){
        message.channel.send(":x: This command will not work in DM's");
        return;
    } else {
        var guildCreatedAt = new Date(message.guild.createdTimestamp);
        message.channel.send(new Discord.RichEmbed()
        .setColor(7506394)
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`Information on ${message.guild.name}:`, message.guild.iconURL, null)
        .addField("Guild Owner:", message.guild.owner.user.tag, true)
        .addField("Guild ID:", message.guild.id, true)
        .addField("Members:", message.guild.memberCount, true)
        .addField("Channels:", `${message.guild.channels.size} channels`, true)
        .addField("Region:", message.guild.region, true)
        .addField("Server Created:", guildCreatedAt.toLocaleString(), true)
        .addField("Emotes:", `${message.guild.emojis.size} emotes`, true)
    );
    }
};