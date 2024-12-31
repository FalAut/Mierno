# How to Start/Run the Server

**Of course, you can use your own way to start/run the server.**

## 1. Preparations

### Mod Folder

**Due to licensing issues, some mods cannot be distributed. Currently, there is no good way to automatically install these mods for the server, so we need to manually add the modpack mods to the server.**

1. Copy the `mods` folder from your installed modpack directory to the server directory.
2. Since servers cannot load client-side mods, you need to delete them from the server.

    - For **Windows**: You can run `DeleteClientMods.bat` or `DeleteClientMods.ps1` to automatically delete client-side mods.
    - For **Linux / MacOS**: You can run `./start.sh` or `bash start.sh` to automatically delete client-side mods.

    - Alternatively, you can manually delete the mods. Below is a list of mods that need to be removed:

        ```
        brightnessslider-forge-1.0-1.20.jar
        Controlling-forge-1.20.1-12.0.2.jar
        craftingtweaks-forge-1.20.1-18.2.5.jar
        embeddium-0.3.31+mc1.20.1.jar
        embeddiumplus-1.20.1-v1.2.13.jar
        ExtremeSoundMuffler-3.48-forge-1.20.1.jar
        invtweaks-1.20.1-1.2.0.jar
        jecharacters-1.20.1-forge-4.5.11.jar
        lanserverproperties-1.11.1-forge.jar
        modpack-update-checker-1.20.1-forge-0.15.3.jar
        MouseTweaks-forge-mc1.20.1-2.25.1.jar
        notenoughcrashes-4.4.7+1.20.1-forge.jar
        probejs-6.0.1-forge.jar
        rrls-4.0.6.1+mc1.20.1-forge.jar
        rubidium-extra-0.5.4.3+mc1.20.1-build.121.jar
        Searchables-forge-1.20.1-1.0.3.jar
        YeetusExperimentus-Forge-2.3.1-build.6+mc1.20.1.jar
        ```

### Configure Java Path

1. Open the `variables.txt` file.
2. Locate `JAVA="path/to/java"`.
3. Replace `"path/to/java"` with your Java installation path. For example: `C:/Program Files/Java/jdk-17/bin/java.exe`.
    - **Note**: The path separator must use `/` instead of `\`.
4. If no Java path is specified, the system will attempt to use the default Java installation (if available).

## 2. Running the Server

**Follow the instructions below based on your operating system.**

### Windows

1. Run the `start.bat` file to start the server.
2. **Important**: Do not delete the PowerShell script files (`.ps1` files).

You can also manually run `start.ps1` in the console window, but it is recommended to use the batch script (`.bat` file) for simplicity.

### Linux / MacOS

Run `./start.sh` or `bash start.sh` to start the server.

### 3. Notes

When the console displays the following message:

```
Mojang's EULA has not yet been accepted. In order to run a Minecraft server, you must accept Mojang's EULA.
Mojang's EULA is available to read at https://aka.ms/MinecraftEULA
If you agree to Mojang's EULA then type 'I agree'
```

Type `I agree` in the console to accept Mojang's EULA. The server will then continue starting. Next, the server will download the required libraries. Please be patient and ensure your network connection is stable.

If you encounter any issues, please seek help from the community.

For Forge and NeoForge versions 1.17 and above, `run.xx` scripts may be created. This is because `ServerStarterJar` is used for server installation and execution. You can safely ignore these scripts and continue using the `start.xx` scripts. Deleting the `run.xx` scripts will not affect server operation. If `run.xx` is deleted, the server will still be managed by `ServerStarterJar`. For more information about `ServerStarterJar`, visit [ServerStarterJar GitHub](https://github.com/neoforged/ServerStarterJar).
