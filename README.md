# Twitch Plays X

(inspired by [TwitchPlaysPokemon])

Lets you use IRC to send inputs to a program and stream it, TwitchPlaysPokemon style.

Tested on Windows 8, Ubuntu 13.10. Should work on a Mac as well - just change the [config](/app/config.js) file.

> on Windows, the program has to be focused in order to send keyboard inputs so you won't be able to use your computer at the same time unless you run the program in a virtual machine.

### In Action
![](http://zippy.gfycat.com/ActiveLankyHorsemouse.gif)

![](http://zippy.gfycat.com/PoorDirectHuemul.gif)

Pokemon Red running in a Ubuntu 13.10 VM

![](http://i.imgur.com/aLSO6MK.gif)

#### Misc
*https://github.com/hzoo/ChatPlays/ used MutationObservers in the browser*

Using IRC lets you get all the messages; you can't always get all messages through the browser (quickly or consistently) so this is a better approach overall as others have done.

Installation (node, etc)
--------------
### If Linux
```sh
# node.js: can use nvm, apt-get, the ppa below, or https://nodejs.org/download/
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
# repo
git clone https://github.com/hzoo/TwitchPlaysX.git
cd TwitchPlaysX
# node packages (irc, printf)
npm install
# xdotool or go to http://www.semicomplete.com/projects/xdotool/
apt-get install xdotool
```

### If Windows
- Install [Node.js]
- Download/clone files to computer - https://github.com/hzoo/TwitchPlaysX/archive/master.zip
- Install node packages from command line `npm install` in folder (irc, printf)
- Install [python] - http://www.python.org/download/releases/2.7.6/
    - make sure python is on your PATH
- Install [python win32] package - http://sourceforge.net/projects/pywin32/files/pywin32/

Setup
--------------

### Modify `app/config.js` at the root of this project
- CONFIG_PROGRAM_NAME: Find out the title of the window
    - Ex: VisualBoyAdvance, Desmume
      - for notepad.exe it would be "Notepad" or "Untitled - Notepad"
- TWITCH_CHANNEL: the Twitch channel you want to listen for messages on

## Running It!

### Setup Program
- **Open program** to send keys to (VisualBoyAdvance, Desmume)
- Optionally, change the controls (in the program itself, `defaultKeyMap` in keyHandler.js, keys.py for windows)
- Optionally, find the option to allow program to receive background inputs (linux)

### Run Server
```sh
# go to the root folder, make sure you did `npm install`, then
npm start
```

## Method
- Connect to IRC
- Use regex to match for certain commands
  - print out username/message
- Hook up to a program/emulator
    - if on windows: probably uses the **win32** api
        - window has to take focus
    - otherwise: **xdotool**
- Stream it!
    - If on linux: you need to use an ffmpeg script, [Twitch-Streamer-Linux](https://github.com/wargio/Twitch-Streamer-Linux), [SimpleScreenRecorder](http://www.maartenbaert.be/simplescreenrecorder/), [WebcamStudio](http://www.ws4gl.org/)

## Contributions
Feel free to give suggestions or report bugs

[node.js]:http://nodejs.org
[python win32]:http://starship.python.net/~skippy/win32/Downloads.html
[python]:http://www.python.org/
[TwitchPlaysPokemon]:http://twitch.tv/TwitchPlaysPokemon
