var tmi = require('tmi.js'),
printf = require('printf'),
keyHandler = require('./keyHandler.js'),
config = require('./config.js');

var client = new tmi.client(
{
    options: {
        debug: false
    },
    connection: {
        server: config.server,
        port: config.port || 443,
        secure: true,
        reconnect: true
    },
    identity: {
        username: config.nick,
        password: config.password
    },
    channels: [config.channel]
}

// TODO: These configurations cannot fit inside tmi.js
/*{
    sasl: false,
    floodProtection: config.floodProtection || false,
    floodProtectionDelay: config.floodProtectionDelay || 100
}
*/
);

var commandRegex = config.regexCommands ||
new RegExp('^(' + config.commands.join('|') + ')$', 'i');

client.addListener('chat', function(channel, userstate, message, self) {
    //console.log("Message, from channel: " + channel + ", message: " + message);
    if (config.channel == channel && message.match(commandRegex)) {

        if (config.printToConsole) {
            //format console output if needed
            var from = userstate.username;
            var maxName = config.maxCharName,
            maxCommand = config.maxCharCommand,
            logFrom = from.substring(0, maxName),
            logMessage = message.substring(0, 6).toLowerCase();
            //format log
            console.log(printf('%-' + maxName + 's % ' + maxCommand + 's',
                logFrom, logMessage));
        }

        // Should the message be sent the program?
        if (config.sendKey) {
            keyHandler.sendKey(message.toLowerCase());
        }
    }
});

client.addListener('connected', function(address, port) {
    console.log('Connected into the server!');
});

client.addListener('logon', function() {
    console.log('Logged into the server!');
});

client.addListener("disconnected", function (reason) {
    console.log('Disconnected from the server! Reason: ' + reason);
});

client.connect();
console.log('Connecting...');
console.log(config.server + ': ' + config.nick);
console.log('Channel: ' + config.channel + ", as username: " + config.nick);
