//list of commands to filter for
var commands = [
    'left', 'right', 'up', 'down',
    'start', 'select',
    'a', 'b',
    'democracy', 'anarchy'
];

var ircConfig = {
    //either 'windows' or 'other'
    os: 'windows',

    //program
    //title of the window of the program
    //ex: Desmume for DS
    programName: 'VBA',
    // programName: 'Desmume',

    //IRC
    //ex: irc.twitch.tv or 199.9.252.26
    server: 'irc.twitch.tv',
    //ex: your twitch username
    nick: 'usernameHere',
    //oauth token from www.twitchapps.com/tmi
    password: 'oauthTokenHere',
    //ex: #twitchplayspokemon
    channel: '#channelHere',
    //if you want to join more than one channel
    // CLARIFICATION: Main channel has to be in here too!
    channelList: ['#channelHere'],

    //other IRC
    port: 6667,

    //if you want to get all messages in real-time keep false
    floodProtection: false,
    //only needed if true - in milliseconds
    floodProtectionDelay: 100,

    //config
    //if you want to send keys to a program
    sendKey: true,
    //if you want to print usernames/commands like in twitchplayspokemon
    printToConsole: true,

    //commands
    //example of regex
    //don't need to modify if you need anarchy mode
    //matches for any of the words in 'commands'
    regexCommands: new RegExp('^(' + commands.join('|') + ')$', 'i'),
    //if you need to filter the commands sent to the program
    //ex: democracy/anarchy since they don't affect the program itself
    filteredCommands: [
        'democracy','anarchy'
    ],
    //if you want to prevent people from using from command too often
    throttledCommands: [
        'start'
    ],
    //maximum characters to show for a person's name in the console log
    maxCharName: 8,
    //maximum characters to show for a command in the console log
    //ex: left => left since only 4 char, democracy => democra
    maxCharCommand: 10,
    //timeToWait between keypresses if you want to limit a certain button
    //ex: you can limit 'start' so it's only used every 10 sec
    timeToWait: 10000,
    //keymap for program
    //need to set this for your program correcly (vba,desmume,etc)
    keymap: {
        'up':'Up','left':'Left','down':'Down','right':'Right',
        'a':'a','b':'b',
        'x':'x','y':'y',
        'start':'s','select':'e'
    },
    //linux: delay between each possible keypress in ms (can't be too fast)
    //if you want to change delay for windows - change key.py
    delay: 100
};

module.exports = ircConfig;
