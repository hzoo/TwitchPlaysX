# Twitch Plays X

> (inspired by [TwitchPlaysPokemon])

Connect to Twitch's messaging service, (TMI) via [`tmi.js`](https://github.com/tmijs/tmi.js (previously using IRC) to send inputs to a program and stream it, TwitchPlaysPokemon style. Should support linux/windows/mac.

### In Action

![](http://zippy.gfycat.com/ActiveLankyHorsemouse.gif)

![](http://zippy.gfycat.com/PoorDirectHuemul.gif)

Pokemon Red running in a Ubuntu 13.10 VM

![](http://i.imgur.com/aLSO6MK.gif)

### Caveats

On Windows, the program has to be *focused* in order to send keyboard inputs so you won't be able to use your computer at the same time (unless you run the program in a virtual machine).

## Installation

- Install [Node.js] (check that you can run node/npm)
- Clone the repo: `git clone https://github.com/hzoo/TwitchPlaysX.git`
- Install `node_modules` in the TwitchPlaysX folder: `npm install`
- If Linux: install [xdotool](http://www.semicomplete.com/projects/xdotool/): `apt-get install xdotool`
- If Windows: install [python] and [python win32] (with corresponding versions)

## Setup

- Start the program you are going to be sending keys to: (VisualBoyAdvance, Notepad)
- Append environment variables or modify `config.js` if you need to change the options: `TWITCH_CHANNEL=mychannelhere npm start`
- Run the server with `npm start`

---

### Config

- `CONFIG_PROGRAM_NAME`: Find out the title of the window that you will be sending key inputs to (may need to check Task Manager to find out)
    - Example: `VisualBoyAdvance`, `Desmume`
        - For `notepad.exe` it would be "Notepad" or "Untitled - Notepad".
        - If you want to test that the key's are sending correctly, run `npm test` with Notepad opened to see if it sends a key to it.
- `TWITCH_CHANNEL`: the Twitch channel you want to listen for messages on (`twitchplayspokemon`)
- Depending on the program, you may need to change the controls (in `defaultKeyMap` in `keyHandler.js`, `keys.py` for windows)

### Misc

*https://github.com/hzoo/ChatPlays/ used MutationObservers in the browser*

Using IRC lets you get all the messages; you can't always get all messages through the browser (quickly or consistently) so this is a better approach overall as others have done.

### Method

- Connect to IRC
- Use regex to match for certain commands
  - print out username/message
- Hook up to a program/emulator
    - if on windows: probably uses the **win32** api
        - window has to take focus
    - otherwise: **xdotool**
- Stream it!
    - If on linux: you need to use an ffmpeg script, [Twitch-Streamer-Linux](https://github.com/wargio/Twitch-Streamer-Linux), [SimpleScreenRecorder](http://www.maartenbaert.be/simplescreenrecorder/), [WebcamStudio](http://www.ws4gl.org/)

### Contributions

Feel free to give suggestions or report bugs!

[node.js]:http://nodejs.org
[python win32]:https://github.com/mhammond/pywin32/releases
[python]:http://www.python.org/
[TwitchPlaysPokemon]:http://twitch.tv/TwitchPlaysPokemon
