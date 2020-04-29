# Twitch Plays X

> (inspired by [TwitchPlaysPokemon])

Connect to Twitch's messaging service (TMI via [`tmi.js`](https://github.com/tmijs/tmi.js)) (previously IRC) to send inputs to a program and stream it, TwitchPlaysPokemon style. Should support linux/windows/mac.

### In Action

![](http://zippy.gfycat.com/ActiveLankyHorsemouse.gif)

![](http://zippy.gfycat.com/PoorDirectHuemul.gif)

Pokemon Red running in a Ubuntu 13.10 VM

![](http://i.imgur.com/aLSO6MK.gif)

### Caveats

Currently for Windows, the program has to be focused in order to send keyboard inputs so you won't be able to use your computer at the same time unless you run the program in a virtual machine.

## Installation

- Install [Node.js]
- Clone the repo: `git clone https://github.com/hzoo/TwitchPlaysX.git; cd TwitchPlaysX`
- Install node_modules: `npm install`
- Linux: install [xdotool](http://www.semicomplete.com/projects/xdotool/): `apt-get install xdotool`
- Windows: install [python] and [python win32]

## Setup

### Modify `app/config.js` at the root of this project
- CONFIG_PROGRAM_NAME: Find out the title of the window
    - Ex: VisualBoyAdvance, Desmume
      - for notepad.exe it would be "Notepad" or "Untitled - Notepad"
- TWITCH_CHANNEL: the Twitch channel you want to listen for messages on

### Setup Program

- **Open program** to send keys to (VisualBoyAdvance, Desmume)
- Optionally, change the controls (in the program itself, `defaultKeyMap` in keyHandler.js, keys.py for windows)
- Optionally, find the option to allow program to receive background inputs (linux)

### Run Server

```sh
npm start
```

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
[python win32]:http://starship.python.net/~skippy/win32/Downloads.html
[python]:http://www.python.org/
[TwitchPlaysPokemon]:http://twitch.tv/TwitchPlaysPokemon
