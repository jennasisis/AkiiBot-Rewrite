module.exports.run = (client, message, args) => {
    console.log("guildinfo command ran");
    const Discord = require('discord.js');

    if(message.channel.type === "dm"){
        message.channel.send(":x: This command will not work in DM's");
        return;
    } else {
        
        //If the guild icon is empty, sets guildIcon to owner's avatar
        if(message.guild.iconURL){var guildIcon = message.guild.iconURL}
        else {var guildIcon = message.guild.owner.user.avatarURL}

        //Goes with the emote parsing
        var emoteInfo = message.guild.emojis.map(e=>e.toString()).join(` `)
        //Checks to see if the total character count of all the emojis combined is ≥ 1024
        if(emoteInfo.length >= 1024){
            var emotes = `${message.guild.emojis.size} emotes`
        //Checks to see if there are no emotes
        } else if(emoteInfo.length === 0){
            var emotes = "None"
        //Sets emotes to all of the emojis, and they get printed in the embed field
        } else {
            var emotes = message.guild.emojis.map(e=>e.toString()).join(` `)
        }

        //You can probably tell what this is by looking at the var name
        var guildCreatedAt = new Date(message.guild.createdTimestamp);

        //The actual message
        message.channel.send(new Discord.RichEmbed()
        .setColor(7506394)
        .setThumbnail(guildIcon)
        .setAuthor(`Information on ${message.guild.name}:`, guildIcon, null)
        .addField("Guild Owner:", message.guild.owner.user.tag, true)
        .addField("Guild ID:", message.guild.id, true)
        .addField("Members:", message.guild.memberCount, true)
        .addField("Channels:", `${message.guild.channels.size} channels`, true)
        .addField("Region:", message.guild.region, true)
        .addField("Server Created:", guildCreatedAt.toLocaleString(), true)
        .addField("Emotes:", emotes, true)
    );
    }
};