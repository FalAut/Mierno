# How to Start/Run the Server

You can start or run the server using the methods below.

## Preparation

1. Open the `variables.txt` file.
2. Locate the line `JAVA="path/to/java"`.
3. Replace `"path/to/java"` with your Java installation path, for example: `C:/Program Files/Java/jdk-17/bin/java.exe`.
   **Note**: Use `/` as the path separator instead of `\`.
4. If no specific path is set, the system may attempt to use the default Java installation (if available).
5. Proceed to the instructions below based on your operating system.

## Windows

1. Run the `start.bat` file to launch the server.
2. **Important**: Do not delete the PowerShell script file (`.ps1`).

You can also manually run `start.ps1` from the console window, but using the batch script (`.bat` file) is recommended for simplicity.

## Linux

Run `.\start.sh` or `bash start.sh` to start the server.

## MacOS

Run `.\start.sh` or `bash start.sh` to start the server.

## Important Notes

When you see the following message in the console:

```
Mojang's EULA has not yet been accepted. In order to run a Minecraft server, you must accept Mojang's EULA.
Mojang's EULA is available to read at https://aka.ms/MinecraftEULA
If you agree to Mojang's EULA then type 'I agree'
Answer:
```

Please type `I agree` in the console to accept Mojang's EULA, allowing the server to continue starting. After this, the server will begin downloading the necessary libraries. Please wait patiently and ensure a stable internet connection.

If you encounter any issues, please seek help from the community.

**Note**: Forge and NeoForge versions 1.17 and above create `run.xx` scripts because `ServerStarterJar` is used to install and run the server. It is safe to ignore these scripts and continue using the `start.xx` scripts. Deleting the `run.xx` scripts will cause the server to be reinstalled by `ServerStarterJar`. For more information about `ServerStarterJar`, visit [ServerStarterJar GitHub](https://github.com/neoforged/ServerStarterJar).
