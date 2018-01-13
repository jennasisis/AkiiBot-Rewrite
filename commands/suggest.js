const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = (client, message, args) => {
    console.log('suggestion command ran');

    const [arg, ...rest] = args.splice(1);
    client.users.find('id', '107599228900999168').send(new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setTitle('Suggestion:')
        .setDescription(message.content.substring(config.prefix + 8))
        .setColor(7506394)
    );
    message.channel.send(':white_check_mark: Suggestion sent');
};