// List of commands to filter for
var commands = [
    'left', 'right', 'up', 'down',
    'start', 'select',
    'a', 'b',
    'democracy', 'anarchy'
];

var ircConfig = {
    // Either 'windows' or 'other'
    os: 'windows',

    // Title of the window of the program
    // Ex: 'Desmume' or 'VBA'
    programName: 'VBA',

    // Ex: irc.twitch.tv or 199.9.252.26
    server: 'irc.twitch.tv',
    // Your twitch username
    nick: 'usernameHere',
    // oauth token from www.twitchapps.com/tmi
    password: 'oauthTokenHere',
    // List of channels (can be 1 or more)
    channelList: ['#channelHere'],
    // IRC port
    port: 6667,

    // If you want to get all messages in real-time keep false
    floodProtection: false,
    // In milliseconds
    floodProtectionDelay: 100,

    // If you want to send keys to a program
    sendKey: true,
    // If you want to print usernames/commands like in twitchplayspokemon
    printToConsole: true,

    // Commands
    // Matches for any of the words in 'commands'
    regexCommands: new RegExp('^(' + commands.join('|') + ')$', 'i'),

    // If you need to filter the commands sent to the program
    // Ex: democracy/anarchy since they don't affect the program itself
    filteredCommands: [
        'democracy','anarchy'
    ],
    // If you want to prevent people from using from command too often
    throttledCommands: [
        'start'
    ],

    // Maximum characters to show for a person's name in the console log
    maxCharName: 8,
    // Maximum characters to show for a command in the console log
    // Ex: left => left since only 4 char, democracy => democra
    maxCharCommand: 10,

    // TimeToWait between keypresses if you want to limit a certain button
    // Ex: you can limit 'start' so it's only used every 10 sec
    timeToWait: 10000,

    // Need to set this for your program correcly (vba,desmume,etc)
    keymap: {
        'up':'Up','left':'Left','down':'Down','right':'Right',
        'a':'a','b':'b',
        'x':'x','y':'y',
        'start':'s','select':'e'
    },

    // Linux: delay between each possible keypress in ms (can't be too fast)
    // If you want to change delay for windows - change key.py
    delay: 100
};

module.exports = ircConfig;
