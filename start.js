const ShardingManager = require('discord.js').ShardingManager;
const Manager = new ShardingManager('./main.js');
Manager.spawn(2);