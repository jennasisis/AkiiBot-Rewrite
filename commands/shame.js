module.exports.run = (client, message, args) => {
    console.log('shame command ran');
    if(message.mentions.users.size < 1){
        message.channel.send(':bell: **S H A M E** :bell:');
    } else if(message.mentions.users.size > 1){
        message.channel.send(':bell: SHAME ON YOU FOR SHAMING TOO MANY PEOPLE :bell:');
    } else {
        message.channel.send(`${message.mentions.users.first()}, :bell: **S H A M E** :bell:`);
    }
};