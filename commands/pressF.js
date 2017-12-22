module.exports.run = (client, message, args) => {
    const config = require('../config.json');
    const prefix = config.prefix

    if (message.content.startsWith(prefix + 'pressF')) {
        message.mentions.users.first().lastMessage.react("🇫").catch((err) => {message.channel.send(`:x: Error: ${err}\nTry again`)});
    } else {message.channel.send(":regional_indicator_f:")}
};