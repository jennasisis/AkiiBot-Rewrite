module.exports.run = (client, message, args) => {
    const channel = message.channel;

    if (message.content.startsWith(require('../config.json').prefix + 'pressF')) {
        message.mentions.users.first().lastMessage.react('🇫').catch((err) => { channel.send(`:x: Error: ${err}\nTry again`) });
    } 
    else { channel.send(':regional_indicator_f:') }
};