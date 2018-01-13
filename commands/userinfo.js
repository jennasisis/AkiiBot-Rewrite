module.exports.run = (client, message, args) => {
    console.log('userinfo command ran');
    const Discord = require('discord.js');
    
    if(message.mentions.users.size < 1){
        
        //Finds the author nickname
        if(message.member.nickname){let authorNick = message.member.nickname} else {let authorNick = 'None'}
        
        //Finds the author game and/or game URL
        if(message.author.presence.game){let authorGame = message.author.presence.game.name} else {let authorGame = 'None'}
        
        //Finds the author presence status
        if(message.author.presence.status === 'online'){let authorStatus = 'Online'}
        else if(message.author.presence.status === 'idle'){let authorStatus = 'Idle'}
        else if(message.author.presence.status === 'dnd'){let authorStatus = 'Do Not Disturb'}
        else if(message.author.presence.status === 'offline'){let authorStatus = 'Offline'}

        //Finds the author join date
        var authorJoined = new Date(message.member.joinedTimestamp);

        //Finds the author registered date
        var authorRegistered = new Date(message.author.createdTimestamp);

        //Finds the author's avatar
        if(message.author.avatarURL){let authorAvatar = message.author.avatarURL}
        else {let authorAvatar = 'https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80'}

        //The actual message
        message.channel.send(new Discord.RichEmbed()
            .setColor(message.member.displayColor)
            .setThumbnail(message.author.avatarURL)
            .setAuthor(message.author.tag, message.author.avatarURL)
            .addField('ID:', message.author.id, true)
            .addField('Nickname:', authorNick, true)
            .addField('Status:', authorStatus, true)
            .addField('Game:', authorGame, true)
            .addField('Joined:', authorJoined.toLocaleString(), true)
            .addField('Registered:', authorRegistered.toLocaleString(), true)
            .addField('Roles:', message.member.roles.map(g => g.name).join(', '), true)
    );
    } else if(message.mentions.users.size > 1){
        message.channel.send(":x: You are mentioning too many users.")
    } else {
        //Finds the user's nickname
        if(message.mentions.members.first().nickname){let mentionedNick = message.mentions.members.first().nickname}
        else {let mentionedNick = 'None'}

        //Finds the user's presence status
        if(message.mentions.users.first().presence.status === 'online'){let mentionedStatus = 'Online'}
        else if(message.mentions.users.first().presence.status === "idle"){let mentionedStatus = 'Idle'}
        else if(message.mentions.users.first().presence.status === "dnd"){let mentionedStatus = 'Do Not Disturb'}
        else if(message.mentions.users.first().presence.status === "offline"){let mentionedStatus = 'Offline'}

        //Finds the user's game
        if(message.mentions.users.first().presence.game){let mentionedGame = message.mentions.users.first().presence.game.name}
        else {let mentionedGame = 'None'}

        //Finds the user's join date/time
        let mentionedJoined = new Date(message.mentions.members.first().joinedTimestamp)

        //Finds the user's register date/time
        let mentionedRegistered = new Date(message.mentions.users.first().createdTimestamp)

        //Finds the user's avatar
        if(message.mentions.users.first().avatarURL){var mentionedAvatar = message.mentions.users.first().avatarURL}
        else {let mentionedAvatar = 'https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80'}
        
        //The actual message
        message.channel.send(new Discord.RichEmbed()
            .setColor(message.mentions.users.first().displayColor)
            .setThumbnail(mentionedAvatar)
            .setAuthor(message.mentions.users.first().tag, mentionedAvatar)
            .addField('ID:', message.mentions.users.first().id, true)
            .addField('Nickname:', mentionedNick, true)
            .addField('Status:', mentionedStatus, true)
            .addField('Game:', mentionedGame, true)
            .addField('Joined:', mentionedJoined.toLocaleString(), true)
            .addField('Registered:', mentionedRegistered.toLocaleString(), true)
            .addField('Roles', message.mentions.members.first().roles.map(g => g.name).join(', '), true)
        );
    }
};