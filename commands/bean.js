module.exports.run = (client, message, args) => {
    console.log("bean command ran");
    if(message.mentions.users.size > 1){
        message.channel.send("You forgot to mention someone!");
    } else if(message.mentions.users.size < 1){
        message.channel.send("You're mentioninf too many people!");
    } else {
        message.channel.send(`${message.mentions.users.first()} has been beaned! <:beaned:383752436608663552>`);
    }
}