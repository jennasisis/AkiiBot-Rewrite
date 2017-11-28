module.exports.run = (client, message, args) => {
    console.log("userinfo command ran");
    const Discord = require('discord.js');
    
    if(message.mentions.users.size < 1){
        
        //Finds the author nickname
        if(message.member.nickname){var authorNick = message.member.nickname} else {authorNick = "None"}
        
        //Finds the author game and/or game URL
        if(message.author.presence.game){var authorGame = message.author.presence.game.name} else {var authorGame = "None"}
        
        //Finds the author presence status
        if(message.author.presence.status === "online"){var authorStatus = "Online"}
        else if(message.author.presence.status === "idle"){var authorStatus = "Idle"}
        else if(message.author.presence.status === "dnd"){var authorStatus = "Do Not Disturb"}
        else if(message.author.presence.status === "offline"){var authorStatus = "Offline"}

        //Finds the author join date
        var authorJoined = new Date(message.member.joinedTimestamp);

        //Finds the author registered date
        var authorRegistered = new Date(message.author.createdTimestamp);

        //The actual message
        message.channel.send(new Discord.RichEmbed()
            .setColor(message.member.highestRole.color)
            .setThumbnail(message.author.avatarURL)
            .setAuthor(message.author.tag, message.author.avatarURL)
            .addField("ID:", message.author.id, true)
            .addField("Nickname:", authorNick, true)
            .addField("Status:", authorStatus, true)
            .addField("Game:", authorGame, true)
            .addField("Joined:", authorJoined.toLocaleString(), true)
            .addField("Registered:", authorRegistered.toLocaleString(), true)
            .addField("Roles:", message.member.roles.map(g => g.name).join(", "), true)
    );
    }
};