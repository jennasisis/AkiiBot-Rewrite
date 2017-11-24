module.exports.run = (client, message, args) => {
    console.log("send command ran");
    let text = args.slice(0).join(" ");
    message.delete();
    message.channel.send(text);
};