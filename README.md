#Twitch Plays X#

(inspired by [TwitchPlaysPokemon])

Lets you use IRC to send inputs to a program and stream it, TwitchPlaysPokemon style.

Tested on Windows 8, Ubuntu 13.10. Should work on a Mac as well - just change the [config](/app/config.js) file.

> on Windows, the program has to be focused in order to send keyboard inputs so you won't be able to use your computer at the same time unless you run the program in a virtual machine.

###In Action###
![](http://zippy.gfycat.com/ActiveLankyHorsemouse.gif)

![](http://zippy.gfycat.com/PoorDirectHuemul.gif)

Pokemon Red running in a Ubuntu 13.10 VM

![](http://i.imgur.com/aLSO6MK.gif)

####Misc####
*https://github.com/hzoo/ChatPlays/ used MutationObservers in the browser*

Using IRC lets you get all the messages; you can't always get all messages through the browser (quickly or consistently) so this is a better approach overall as others have done.

Installation
--------------
###If Linux###
```sh
# node.js
sudo apt-get update
sudo apt-get install -y python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get update
sudo apt-get install nodejs
# repo
git clone https://github.com/hzoo/ChatPlaysX.git
cd ChatPlaysX
# node packages (irc, printf)
npm install
# xdotool or go to http://www.semicomplete.com/projects/xdotool/
apt-get install xdotool
```

###If Windows###
- Install [node.js] and npm
- Download/clone files to computer - https://github.com/hzoo/TwitchPlaysX/archive/master.zip
- Install node packages from command line `npm install` in folder (irc, printf)
- Install [python] - http://www.python.org/download/releases/2.7.6/
    - make sure python is on your PATH
- Install [python win32] package - http://sourceforge.net/projects/pywin32/files/pywin32/

###Modify config.js###
- change settings for your `os`, `userName`,`password`,`channel`, etc
- Find out the title of the window
    - Ex: VisualBoyAdvance, Desmume
      - for notepad.exe it would be "Notepad" or "Untitled - Notepad"
    - change `programName` in the [config.js](/app/config.js) file

```javascript
var ircConfig = {
    //either 'windows' or 'other'
    os: 'windows',

    //title of the window of the program
    programName: 'VBA',

    //ex: irc.twitch.tv or 199.9.252.26
    server: 'irc.twitch.tv',

    //ex: your twitch username
    nick: 'usernameHere',
    //ex: your twitch username
    userName: 'usernameHere',

    //oauth token from www.twitchapps.com/tmi
    password: 'oauthTokenHere',

    //ex: #twitchplayspokemon
    channel: '#channelHere',
    //if you want to join more than one channel
    channelList: ['#channelHere'],

    //... rest of file below
```

##Running It!##

###Setup Program###
- **Open program** to send keys to (VisualBoyAdvance, Desmume)
- Optionally, change the controls (in the program itself, `keymap` in config.js, keys.py for windows)
- Optionally, find the option to allow program to receive background inputs (linux)

###Setup Server###
- cd to folder
- **run server.js**

```sh
cd app
node ./server.js
```

##Method##
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
