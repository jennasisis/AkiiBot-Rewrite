const emoji = require('../data/emoji.json');

module.exports.run = (client, message, args) => {
    console.log('banne command run');
    if (message.mentions.users.size < 1) message.channel.send(emoji.ecks + ' Yoo did no menshin sum1');
    else if (message.mentions.users.size > 1) message.channel.send(emoji.ecks + ' Yor menshuning 2 meny pepol!');
    else message.channel.send(`${emoji.whte_chck_mrk} ${message.mentions.users.first()} has bee banne~!!1!`);
};