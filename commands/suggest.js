const RichEmbed = require('discord.js').RichEmbed;

module.exports.run = (client, message, args) => {
    console.log('suggestion command ran');

    client.users.find('id', '107599228900999168').send(new RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle('Suggestion:')
        .setDescription(message.content.substring(require('../config.json').prefix + 8))
        .setColor(7506394)
    );
    message.channel.send(':white_check_mark: Suggestion sent');
};