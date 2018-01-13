module.exports.run = (client, message, args) => {
    console.log('send command ran');
    const text = args.slice(0).join(' ');
    message.delete();
    message.channel.send(text);
};