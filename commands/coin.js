module.exports.run = (client, message, args) => {
  console.log('coin command ran');
  if (Math.floor((Math.random() * 10) + 1) & 1) {
    message.channel.send('The coin landed on **heads**') // ODD
  }
  else {
    message.channel.send('The coin landed on **tails**') // EVEN
  }
};