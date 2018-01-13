const Client = require('discord.js').Client;
const client = new Client();

const config = require('./config.json');

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
require('fs').readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => 
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(file.split('.')[0], (...args) => require(`./events/${file}`).run(client, ...args))
  );
});

client.on('message', message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);

  // The list of if/else is replaced with those simple 2 lines:
  try {
    require(`./commands/${args.shift().toLowerCase()}.js`).run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(config.token);
