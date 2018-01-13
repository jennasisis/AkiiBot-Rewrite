module.exports.run = (client, message, args) => {
    function insertSpaces(aString) {
        return aString.split('').join(' ');
    }
    
    const spacedtext = args.join(' ');
    const wavetext = insertSpaces(spacedtext)
    message.channel.send("```"+wavetext+"```");
}