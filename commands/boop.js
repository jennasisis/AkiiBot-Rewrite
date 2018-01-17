module.exports.run = (client, message, args) => {
    if(!message.mentions) return;
    if(message.mentions.users.size > 1) return;
    else message.channel.send(`${message.author.tag} booped ${message.mentions.users.first().tag}`);
}