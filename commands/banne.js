module.exports.run = (client, message, args) => {
    console.log('banne command run');
    if(message.mentions.users.size < 1){
        message.channel.send('<:ecks:383800708841078785> Yoo did no menshin sum1');
    } else if(message.mentions.users.size > 1){
        message.channel.send('<:ecks:383800708841078785> Yor menshuning 2 meny pepol!');
    } else {
        message.channel.send(`<:whte_chck_mrk:383763992981667855> ${message.mentions.users.first()} has bee banne~!!1!`);
    }
};