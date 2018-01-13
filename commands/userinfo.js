const RichEmbed = require('discord.js').RichEmbed;

module.exports.run = (client, message, args) => {
    console.log('userinfo command ran');

    if (message.mentions.users.size < 1) {

        //Finds the author nickname
        if (message.member.nickname) { const authorNick = message.member.nickname } else { const authorNick = 'None' }

        //Finds the author game and/or game URL
        if (message.author.presence.game) { const authorGame = message.author.presence.game.name } else { const authorGame = 'None' }

        //Finds the author presence status
        switch(message.mentions.users.first().presence.status) {
            case 'online':
                const mentionedStatus = 'Online';
                break;
            case 'idle':
                const mentionedStatus = 'Idle';
                break;
            case 'dnd':
                const mentionedStatus = 'Do Not Disturb';
                break;
            case 'offline':
                const mentionedStatus = 'Offline';
                break;
            default:
                const mentionedStatus = 'Unknown';
                break;
        }

        //Finds the author's avatar
        if (message.author.avatarURL) { const authorAvatar = message.author.avatarURL }
        else { const authorAvatar = 'https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80' }

        //The actual message
        message.channel.send(new RichEmbed()
            .setColor(message.member.displayColor)
            .setThumbnail(message.author.avatarURL)
            .setAuthor(message.author.tag, message.author.avatarURL)
            .addField('ID:', message.author.id, true)
            .addField('Nickname:', authorNick, true)
            .addField('Status:', authorStatus, true)
            .addField('Game:', authorGame, true)
            .addField('Joined:', new Date(message.member.joinedTimestamp).toLocaleString(), true)
            .addField('Registered:', new Date(message.author.createdTimestamp).toLocaleString(), true)
            .addField('Roles:', message.member.roles.map(g => g.name).join(', '), true)
        );
    } else if (message.mentions.users.size > 1) {
        message.channel.send(":x: You are mentioning too many users.")
    } else {
        //Finds the user's nickname
        if (message.mentions.members.first().nickname) { const mentionedNick = message.mentions.members.first().nickname }
        else { const mentionedNick = 'None' }

        //Finds the user's presence status
        switch(message.mentions.users.first().presence.status) {
            case 'online':
                const mentionedStatus = 'Online';
                break;
            case 'idle':
                const mentionedStatus = 'Idle';
                break;
            case 'dnd':
                const mentionedStatus = 'Do Not Disturb';
                break;
            case 'offline':
                const mentionedStatus = 'Offline';
                break;
            default:
                const mentionedStatus = 'Unknown';
                break;
        }

        //Finds the user's game
        if (message.mentions.users.first().presence.game) { const mentionedGame = message.mentions.users.first().presence.game.name }
        else { const mentionedGame = 'None' }

        //Finds the user's avatar
        if (message.mentions.users.first().avatarURL) { const mentionedAvatar = message.mentions.users.first().avatarURL }
        else { const mentionedAvatar = 'https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80' }

        //The actual message
        message.channel.send(new RichEmbed()
            .setColor(message.mentions.users.first().displayColor)
            .setThumbnail(mentionedAvatar)
            .setAuthor(message.mentions.users.first().tag, mentionedAvatar)
            .addField('ID:', message.mentions.users.first().id, true)
            .addField('Nickname:', mentionedNick, true)
            .addField('Status:', mentionedStatus, true)
            .addField('Game:', mentionedGame, true)
            .addField('Joined:', new Date(message.mentions.members.first().joinedTimestamp).toLocaleString(), true)
            .addField('Registered:', new Date(message.mentions.users.first().createdTimestamp).toLocaleString(), true)
            .addField('Roles', message.mentions.members.first().roles.map(g => g.name).join(', '), true)
        );
    }
};