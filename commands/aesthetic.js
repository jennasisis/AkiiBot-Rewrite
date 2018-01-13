module.exports.run = (client, message, args) => {
    function insertSpaces(aString) {
        return aString.split('').join(' ');
    }
    
    let spacedtext = args.join(' ');
    let wavetext = insertSpaces(spacedtext)
    message.channel.send("```"+wavetext+"```");
}