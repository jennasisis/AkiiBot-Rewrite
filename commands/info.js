const Discord = require('discord.js');

const links = require('../data/links.json');

module.exports.run = (client, message, args) => {
    console.log('info command ran')

    const shard = new Discord.ShardClientUtil(client);
    const avatarUrl = client.user.avatarURL;
    const guildInvite = links.guild_invite;

    message.react('✅');
    message.author.send(new Discord.RichEmbed()
        .addField('Version', require('../package.json').version, true)
        .addField('Library:', `[Discord.js](${links.discordjs})`, true)
        .addField('Creator:', 'Akii#2111', true)
        .addField('Servers:', `${client.guilds.size} on this shard`, true)
        .addField('Users:', `${client.users.size} on this shard`, true)
        .addField('Shard:', `${shard.id} of ${shard.count}`, true)
        .addField('Invite:', `[Click Here](${links.invite})`, true)
        .addField('Discord:', `Click Here](${guildInvite}})`, true)
        .addField('Contributors:', '`Akii#2111` - The bot dev. Duh\n`Gallium#1327` - Helped me with most of this code. Also my good friend.')
        .addField('Honorable Mentions:', "`OGNovuh#0014` - Added the Fight command, which I no longer use.. Sorry Novuh. ;_;\n[`An Idiot's Guide`](http://anidiots.guide/) - Command handler, eval command, and many other things. Thank you *so* much.")
        .setAuthor('AkiiBot', avatarUrl, guildInvite)
        .setThumbnail(avatarUrl)
        .setColor(7506394)
    )
};