module.exports.run = (client, message, args) => {
    const channel = message.channel;

    const user = message.mentions.users.first();

    if (user) {
        const lastMessage = user.lastMessage;
        if (lastMessage) {
            lastMessage.react('🇫').catch((err) => channel.send(`:x: Error: ${err}\nTry again`));
            return;
        }
    }

    channel.send(':regional_indicator_f:');
};