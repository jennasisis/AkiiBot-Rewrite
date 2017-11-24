module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    const pkg = require('../package.json');
    const shard = new Discord.ShardClientUtil(client);
    message.react("✅");
    message.author.send(new Discord.RichEmbed()
        .addField("Version:", pkg.version, true)
        .addField("Library:", "[Discord.js](http://discord.js.org)", true)
        .addField("Creator:", "Akii#2111", true)
        .addField("Servers:", `${client.guilds.size} on this shard`, true)
        .addField("Users:", `${client.users.size} on this shard`, true)
        .addField("Shard:", `${shard.id} of ${shard.count}`, true)
        .addField("Invite:", "[Click Here](https://discordapp.com/oauth2/authorize?permissions=2146954487&scope=bot&client_id=336521813926346763)", true)
        .addField("Discord:", "[Click Here](http://discord.gg/54fVgRw)", true)
        .addField("Contributors:", "`Akii#2111` - The bot dev. Duh\n`Gallium#1327` - Helped me with most of this code. Also my good friend.")
        .addField("Honorable Mentions:", "`OGNovuh#0014` - Added the Fight command, which I no longer use.. Sorry Novuh. ;_;")
        .setAuthor("AkiiBot", client.user.avatarURL, "http://discord.gg/54fVgRw")
        .setThumbnail(client.user.avatarURL)
        .setColor(7506394)
    )
};