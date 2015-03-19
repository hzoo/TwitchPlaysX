// List of commands to check for
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

    // If you want to print usernames/commands like in twitchplayspokemon
    printToConsole: true,
    // Maximum characters to show for a person's name in the console log
    maxCharName: 8,
    // Maximum characters to show for a command in the console log
    // Ex: left => left since only 4 char, democracy => democra
    maxCharCommand: 10,

    // If you need to filter the commands sent to the program
    // Ex: democracy/anarchy since they don't affect the program itself
    filteredCommands: [
        'democracy','anarchy'
    ],

    // If you want to prevent people from using from command too often
    throttledCommands: [
        'start'
    ],
    // Throttle time in seconds
    // Ex: you can limit 'start' so it's only used every 10 sec
    timeToWait: 10000,

    // Linux: delay between each possible keypress in ms (can't be too fast)
    // If you want to change delay for windows - change key.py
    delay: 100
};

module.exports = ircConfig;
