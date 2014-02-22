var exec = require('child_process').exec,
config = require('./config.js'),
lastTime = {},
throttledCommands = config.throttledCommands,
regexThrottle = new RegExp('^(' + throttledCommands.join('|') + ')$', 'i'),
regexFilter = new RegExp('^(' + config.filteredCommands.join('|') + ')$', 'i');

for (var i = 0; i < throttledCommands.length; i++) {
    lastTime[throttledCommands[i]] = new Date().getTime();
}

function sendKey(command,programName) {
    //if doesn't match the filtered words
    if (!command.match(regexFilter)) {
        var allowKey = true,
        key = config.keymap[command];
        //throttle certain commands (not individually though)
        if (key.match(regexThrottle)) {
            var newTime = new Date().getTime();
            if (newTime - lastTime[key] < config.timeToWait) {
                allowKey = false;
            } else {
                lastTime = newTime;
            }
        }
        if (allowKey) {
            //if xdotool is installed
            if (config.os === 'other') {
                //send to correct window
                exec('xdotool search --onlyvisible --name ' + programName, function (error, stdout) {
                    var windowID = stdout.trim();
                    // console.log(key, windowID);
                    exec('xdotool key --window ' + windowID + ' --delay ' + config.delay + ' ' + key);
                });
            //use python on windows
            } else {
                exec('key.py ' + key);
            }
        }
    }
}

exports.sendKey = sendKey;
