module.exports.run = (client, message, args) => {
    console.log('send command ran');
    message.delete();
    message.channel.send(args.slice(0).join(' '));
};