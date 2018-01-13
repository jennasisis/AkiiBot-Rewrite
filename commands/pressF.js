module.exports.run = (client, message, args) => {
    if (message.content.startsWith(require('../config.json').prefix + 'pressF')) {
        message.mentions.users.first().lastMessage.react('🇫').catch((err) => {message.channel.send(`:x: Error: ${err}\nTry again`)});
    } else {message.channel.send(':regional_indicator_f:')}
};