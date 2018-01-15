const RichEmbed = require('discord.js').RichEmbed;

const defaultAvatarUrl = require('../data/links.json').default_avatar;
const statuses = require('../data/names.json').status;

function sendUserEmbed(user, member, message) {
    //Finds the author nickname
    const authorNick = member.nickname || 'None';

    //Finds the author game and/or game URL
    const game = user.presence.game;
    const authorGame = game ? game.name : 'None';

    //Finds the author presence status
    const authorStatus = statuses[user.presence.status] || statuses.unknown;

    //Finds the author's avatar
    const authorAvatar = user.avatarURL || defaultAvatarUrl;

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

    const mentions = message.mentions,
    users = message.mentions.users,
    userSize = users.size;

    if (userSize < 1) sendUserEmbed(message.author, message.member, message);
    else if (userSize > 1) message.channel.send(":x: You are mentioning too many users.")
    else sendUserEmbed(users.first(), mentions.members.first(), message);
};