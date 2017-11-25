module.exports.run = (client, message, args) => {
    console.log("sparkle command run");
    if(message.guild.me.permissions.has("MANAGE_NICKNAMES")){
        if(message.mentions.users.size < 1){

        } else if(message.mentions.users.size > 1){
            message.channel.send(":x: You are mentioning too many people!");
        } else {
            
        }
    } else {
        message.channel.send(":x: I am missing permissions to manage nicknames!")
    }
};
