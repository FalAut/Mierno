**The text content was translated into English using machine translation. Apologies for any inaccuracies!**

# How To Start / Run The Server

**Of course you can use your own way to start / run the server**

## Preparation

Find JAVA=‘path/to/java’ in variables.txt.
Change ‘path/to/java’ to your Java path, e.g. ‘C:/Program Files/Java/jdk-17/bin/java.exe’.
Note that the path separator needs to be / and not \.
If the specified path is not set, it may try to use the system's default Java (if it exists)
When you are done, read the instructions below depending on your system type.

## Windows

Run `start.bat`.
**Do not delete the PowerShell (ps1) files!**

You may run `start.ps1` from a console-window manually, but using the Batch-script is recommended.
Running PowerShell-scripts requires changing the ExecutionPolicy of your Windows-system. The Batch-script
can bypass this for the start-script.

TL;DR: start.bat better than start.ps1

## Linux

Run `.\start.sh` or `bash start.sh` to start the server.

## MacOS

Run `.\start.sh` or `bash start.sh` to start the server.

## Note

**When you see this message in the console**

_Mojang's EULA has not yet been accepted. In order to run a Minecraft server, you must accept Mojang's EULA._
_Mojang's EULA is available to read at https://aka.ms/MinecraftEULA_
_If you agree to Mojang's EULA then type 'I agree'_
_Answer:_

**At this point, please agree to Mojang's EULA by typing I agree in the console before proceeding to start the server**
**After this, it will start to download the libraries required by the server, please wait patiently and keep your internet connection open.**
**Go to the community for help if you have problems**

Forge and NeoForge 1.17 and up will create run.xx-scripts due to the ServerStarterJar being used to install
and run the server. It is safe to ignore these and continue using the start.xx-scripts.
Deleting the run.xx-scripts will result in the server being installed again by the ServerStarterJar. More about
the ServerStarterJar at https://github.com/neoforged/ServerStarterJar
