let exec = require("child_process").exec,
  config = require("./config.js"),
  lastTime = {},
  windowID = "unfilled",
  throttledCommands = config.throttledCommands,
  regexThrottle = new RegExp("^(" + throttledCommands.join("|") + ")$", "i"),
  regexFilter = new RegExp(
    "^(" + config.filteredCommands.join("|") + ")$",
    "i"
  );

let isWindows = process.platform === "win32";

(function setWindowID() {
  if (!isWindows & windowID === "unfilled") {
    exec("xdotool search --onlyvisible --name " + config.programName, function (
      error,
      stdout
    ) {
      windowID = stdout.trim();
      // console.log(key, windowID);
    });
  }
})();

for (let i = 0; i < throttledCommands.length; i++) {
  lastTime[throttledCommands[i]] = new Date().getTime();
}

let defaultKeyMap = config.keymap || {
  up: "Up",
  left: "Left",
  down: "Down",
  right: "Right",
  a: "a",
  b: "b",
  x: "x",
  y: "y",
  start: "s",
  select: "e",
};

function sendKey(command) {
  //if doesn't match the filtered words
  if (!command.match(regexFilter)) {
    let allowKey = true;
    let key = defaultKeyMap[command] || command;
    //throttle certain commands (not individually though)
    if (key.match(regexThrottle)) {
      let newTime = new Date().getTime();
      if (newTime - lastTime[key] < config.timeToWait) {
        allowKey = false;
      } else {
        lastTime = newTime;
      }
    }
    if (allowKey) {
      if (isWindows) {
        //use python on windows
        // "VisualBoyAdvance"
        // "DeSmuME 0.9.10 x64"
        exec("python key.py" + "  " + config.programName + " " + key);
      } else {
        //Send to preset window under non-windows systems
        exec(
          "xdotool key --window " +
            windowID +
            " --delay " +
            config.delay +
            " " +
            key
        );
      }
    }
  }
}

exports.sendKey = sendKey;
