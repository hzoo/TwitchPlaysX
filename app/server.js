const tmi = require("tmi.js");
const keyHandler = require("./keyHandler.js");
const config = require("./config.js");

// https://github.com/tmijs/tmi.js#tmijs
// for more options
const client = new tmi.client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: [config.channel],
});

const commandRegex =
  config.regexCommands ||
  new RegExp("^(" + config.commands.join("|") + ")$", "i");

client.on("message", function (channel, tags, message, self) {
  let isCorrectChannel = `#${config.channel}` === channel;
  let messageMatches = message.match(commandRegex);

  if (self) return;
  if (isCorrectChannel && messageMatches) {
    // print username and message to console
    console.log(`@${tags.username}: ${message}`);

    // send the message to the emulator
    keyHandler.sendKey(message.toLowerCase());
  }
});

client.addListener("connected", function (address, port) {
  console.log("Connected! Waiting for messages..");
});
client.addListener("disconnected", function (reason) {
  console.log("Disconnected from the server! Reason: " + reason);
});

client.connect();
console.log(`Connecting to /${config.channel}..`);
