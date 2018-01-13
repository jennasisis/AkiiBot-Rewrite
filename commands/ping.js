const RichEmbed = require('discord.js');

module.exports.run = (client, message, args) => {
    console.log('ping command ran');
    message.channel.send(new RichEmbed()
        .addField(':ping_pong: Ping:', 'Pinging...', false)
        .addField(':left_right_arrow: Latency:', 'Pinging...')
        .setColor(7506394)
    ).then(thismessage => {
        thismessage.delete();
        message.channel.send(new RichEmbed()
            .addField(':ping_pong: Ping:', `${Math.round(client.ping)} ms`)
            .addField(':left_right_arrow: Latency:', `${thismessage.createdAt-message.createdAt} ms`)
            .setColor(7506394)
        );
    });
};