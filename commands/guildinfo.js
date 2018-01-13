const RichEmbeed = require('discord.js').RichEmbed;

const names = require('../data/names.json');
const flags = require('../data/emoji.json').region_flags;

module.exports.run = (client, message, args) => {
    console.log('guildinfo command ran');

    if (message.channel.type === 'dm') {
        message.channel.send(":x: This command will not work in DM's");
        return;
    }
    else {
        const guild = message.guild,
        guildOwner = message.guild.owner.user,
        guildIcon = guild.iconUrl || guildOwner.avatarURL,

        verificationLevel = guild.verificationLevel,

        emoji = guild.emojis,
        emoteInfo = emoji.map(e => e.toString()).join(' '); //Goes with the emote parsing

        let emotes;

        if (emoteInfo.length >= 1024) emotes = `${emoji.size} emotes`; //Checks to see if the total character count of all the emojis combined is ≥ 1024
        else if (emoteInfo.length === 0) emotes = 'None'; //Checks to see if there are no emotes
        else emotes = emoteInfo; //Sets emotes to all of the emojis, and they get printed in the embed field

        //Pretty-ifies the region
        const guildRegion = guild.region;
        const region = `${flags[guildRegion] || flags.unknown} ${names.regions[guildRegion] || names.unknown}`;

        //Verification level checker
        const verification = names.verification[verificationLevel] || names.verification.default;

        //The actual message
        message.channel.send(new RichEmbed()
            .setColor(guild.me.displayColor)
            .setThumbnail(guildIcon)
            .setAuthor(`Information on ${guild.name}:`, guildIcon, null)
            .addField('Guild Owner:', guildOwner.tag, true)
            .addField('Guild ID:', guild.id, true)
            .addField('Members:', guild.memberCount, true)
            .addField('Channels:', `${guild.channels.size} channels`, true)
            .addField('Region:', region, true)
            //.addField("Verification:", verification, true)
            .addField('Server Created:', new Date(guild.createdTimestamp).toLocaleString(), true)
            .addField('Emotes:', emotes, true)
        );

        message.channel.send(`Verification var: ${verification}`);
        message.channel.send(`Verification Level: ${verificationLevel}`);
    }
};