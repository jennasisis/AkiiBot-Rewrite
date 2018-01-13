const RichEmbeed = require('discord.js').RichEmbed;

module.exports.run = (client, message, args) => {
    console.log('guildinfo command ran');

    if (message.channel.type === 'dm') {
        message.channel.send(":x: This command will not work in DM's");
        return;
    }
    else {
        //If the guild icon is empty, sets guildIcon to owner's avatar
        if (message.guild.iconURL) { const guildIcon = message.guild.iconURL }
        else { const guildIcon = message.guild.owner.user.avatarURL }

        //Goes with the emote parsing
        const emoteInfo = message.guild.emojis.map(e => e.toString()).join(' ')
        //Checks to see if the total character count of all the emojis combined is ≥ 1024
        if (emoteInfo.length >= 1024) {
            const emotes = `${message.guild.emojis.size} emotes`
            //Checks to see if there are no emotes
        }
        else if (emoteInfo.length === 0) {
            const emotes = 'None'
            //Sets emotes to all of the emojis, and they get printed in the embed field
        }
        else {
            const emotes = message.guild.emojis.map(e => e.toString()).join(' ')
        }

        //Pretty-ifies the region
        let region;

        switch (message.guild.region) {
            case 'us-east':
                region = '<:regionFlagUSA:393889521449566208> Eastern USA';
                break;
            case 'brazil':
                region = '<:regionFlagBrazil:393889521177198602> Brazil';
                break;
            case 'eu-central':
                region = '<:regionFlagEurope:393889521155964929> Central Europe';
                break;
            case 'hongkong':
                region = '<:regionFlagHongKong:393889521134993409> Hong Kong';
                break;
            case 'japan':
                region = '<:regionFlagJapan:393889521487577109> Japan';
                break;
            case 'russia':
                region = '<:regionFlagRussia:393889521009295371> Russia';
                break;
            case 'singapore':
                region = '<:regionFlagSingapore:393889521608949781> Singapore';
                break;
            case 'sydney':
                region = '<:regionFlagSydney:393889521374068746> Sydney';
                break;
            case 'us-central':
                region = '<:regionFlagUSA:393889521449566208> Central USA';
                break;
            case 'us-south':
                region = '<:regionFlagUSA:393889521449566208> Southern USA';
                break;
            case 'us-west':
                region = '<:regionFlagUSA:393889521449566208> Western USA';
                break;
            case 'eu-west':
                region = '<:regionFlagEurope:393889521155964929> Western Europe';
                break;
            default:
                region = '<:regionFlagWumpus:393900238244675606> Wumpus Land (Unknown)';
                break;
        }

        //Verification level checker
        let verification;

        switch(message.guild.verificationLevel) {
            case '0':
                verification = 'None';
                break;
            case '1':
                verification = 'Low';
                break;
            case '2':
                verification = 'Medium';
                break;
            case '3':
                verification = '(╯°□°）╯︵ ┻━┻ (High)';
                break;
            case '4':
                verification = '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻ (Extreme)';
                break;
            default:
                verification = 'Default';
                break;
        }

        //The actual message
        message.channel.send(new RichEmbed()
            .setColor(message.guild.me.displayColor)
            .setThumbnail(guildIcon)
            .setAuthor(`Information on ${message.guild.name}:`, guildIcon, null)
            .addField('Guild Owner:', message.guild.owner.user.tag, true)
            .addField('Guild ID:', message.guild.id, true)
            .addField('Members:', message.guild.memberCount, true)
            .addField('Channels:', `${message.guild.channels.size} channels`, true)
            .addField('Region:', region, true)
            //.addField("Verification:", verification, true)
            .addField('Server Created:', new Date(message.guild.createdTimestamp).toLocaleString(), true)
            .addField('Emotes:', emotes, true)
        );

        message.channel.send(`Verification var: ${verification}`);
        message.channel.send(`Verification Level: ${message.guild.verificationLevel}`);
    }
};