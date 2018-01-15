const pkg = require('../package.json');

module.exports.run = (client, message, args) => {
  console.log('eval command ran');

  function clean(text) {
    if (typeof (text) === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== '107599228900999168') {
    message.channel.send(':x: This command is for Akii only!');
    return;
  }
  else {
    try {
      let evaled = eval(args.join(' '));

      if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
      message.channel.send(clean(evaled), { code: 'xl' });
    }
    catch (err) {
      message.channel.send('`ERROR` ```xl\n' + clean(err) + '\n```');
    }
  }
};