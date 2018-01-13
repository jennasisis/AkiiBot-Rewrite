const RichEmbed = require('discord.js').RichEmbed;

function sendUserEmbed(user, member) {
    //Finds the author nickname
    if (member.nickname) { const authorNick = member.nickname } else { const authorNick = 'None' }

    //Finds the author game and/or game URL
    if (user.presence.game) { const authorGame = user.presence.game.name } else { const authorGame = 'None' }

    //Finds the author presence status
    switch (user.presence.status) {
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
    if (user.avatarURL) { const authorAvatar = message.author.avatarURL }
    else { const authorAvatar = 'https://cdn.discordapp.com/embed/avatars/1.png?width=80&height=80' }

    //The actual message
    message.channel.send(new RichEmbed()
        .setColor(member.displayColor)
        .setThumbnail(user.avatarURL)
        .setAuthor(user.tag, user.avatarURL)
        .addField('ID:', user.id, true)
        .addField('Nickname:', authorNick, true)
        .addField('Status:', authorStatus, true)
        .addField('Game:', authorGame, true)
        .addField('Joined:', new Date(member.joinedTimestamp).toLocaleString(), true)
        .addField('Registered:', new Date(user.createdTimestamp).toLocaleString(), true)
        .addField('Roles:', member.roles.map(g => g.name).join(', '), true)
    );
}

module.exports.run = (client, message, args) => {
    console.log('userinfo command ran');

    if (message.mentions.users.size < 1) sendUserEmbed(message.author, message.member);
    else if (message.mentions.users.size > 1) message.channel.send(":x: You are mentioning too many users.")
    else sendUserEmbed(message.mentions.users.first(), message.users.members.first());
};