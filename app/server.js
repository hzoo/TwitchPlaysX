let tmi = require("tmi.js"),
  keyHandler = require("./keyHandler.js"),
  config = require("./config.js");

// Maximum characters to show for a person's name in the console log
let maxCharName = 8;

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
  console.log("Connected into the server!");
});
client.addListener("disconnected", function (reason) {
  console.log("Disconnected from the server! Reason: " + reason);
});

client.connect();
console.log(`Connecting to /${config.channel}..`);
