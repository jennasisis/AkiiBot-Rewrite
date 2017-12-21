module.exports.run = (client, message, args) => {
    function insertSpaces(aString) {
        return aString.split("").join(" ");
    }
    
    var spacedtext = args.join(" ");
    var wavetext = insertSpaces(spacedtext)
    message.channel.send("```"+wavetext+"```");
}