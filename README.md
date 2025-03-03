### 导航 Navigation

-   [中文说明](#如何启动运行服务器)
-   [English Instructions](#how-to-startrun-the-server)

---

# 如何启动/运行服务器

**当然你可以使用自己的方式来启动/运行服务器**

## 1.准备工作

### 模组文件夹

**由于许可证问题，一些模组不允许分发，但目前没有很好的办法为服务端自动安装模组，因此我们需要为服务端手动添加整合包模组**

1.  将已安装好的整合包目录中的 mods 文件夹复制到服务端目录中
2.  由于服务器无法加载客户端模组，因此我们需要在服务端中删除它们

    -   对于 **Windows**：可运行 `DeleteClientMods.bat` 或 `DeleteClientMods.ps1` 来自动删除客户端模组
    -   对于 **Linux / MacOS**：可运行 `.\start.sh` 或 `bash start.sh` 来自动删除客户端模组

    -   当然你也可以手动删除模组，下面是需要删除的模组列表

    ```
    brightnessslider-forge-1.0-1.20.jar
    configured-forge-1.20.1-2.2.3.jar
    Controlling-forge-1.20.1-12.0.2.jar
    craftingtweaks-forge-1.20.1-18.2.5.jar
    embeddium-0.3.31+mc1.20.1.jar
    ExtremeSoundMuffler-3.48-forge-1.20.1.jar
    invtweaks-1.20.1-1.2.0.jar
    jecharacters-1.20.1-forge-4.5.11.jar
    JustEnoughMekanismMultiblocks-1.20.1-4.10.jar
    lanserverproperties-1.11.1-forge.jar
    modpack-update-checker-1.20.1-forge-0.15.4.jar
    MouseTweaks-forge-mc1.20.1-2.25.1.jar
    notenoughcrashes-4.4.7+1.20.1-forge.jar
    oculus-mc1.20.1-1.8.0.jar
    probejs-6.0.1-forge.jar
    Searchables-forge-1.20.1-1.0.3.jar
    YeetusExperimentus-Forge-2.3.1-build.6+mc1.20.1.jar
    ```

### 配置 Java 路径

1. 打开 `variables.txt` 文件。
2. 找到 `JAVA="path/to/java"`。
3. 将 `"path/to/java"` 替换为您的 Java 安装路径，例如：`C:/Program Files/Java/jdk-17/bin/java.exe`
    - **注意**: 路径中的分隔符必须使用 `/`，不能使用 `\`
4. 如果未指定 Java 路径，系统将尝试使用默认的 Java（如果已安装）。

## 2.运行服务器

**根据您的操作系统类型，阅读下方相应的说明**

## Windows

1. 运行 `start.bat` 文件启动服务器。
2. **重要**：请勿删除 PowerShell 脚本文件（`.ps1` 文件）。

您也可以在控制台窗口中手动运行 `start.ps1`，但建议使用批处理脚本（`.bat` 文件）以简化操作。

## Linux / MacOS

运行 `.\start.sh` 或 `bash start.sh` 启动服务器。

### 3.注意事项

当控制台显示以下信息时：

```
Mojang's EULA has not yet been accepted. In order to run a Minecraft server, you must accept Mojang's EULA.
Mojang's EULA is available to read at https://aka.ms/MinecraftEULA
If you agree to Mojang's EULA then type 'I agree'
Answer:
```

请在控制台输入 `I agree` 以同意 Mojang 的 EULA，然后服务器将继续启动。接下来，服务器会下载所需的库，请耐心等待并确保网络连接正常。

如遇到问题，请前往社区寻求帮助。

Forge 和 NeoForge 1.17 及以上版本会创建 `run.xx` 脚本，这是因为 `ServerStarterJar` 用于安装和运行服务器。您可以忽略这些脚本，继续使用 `start.xx` 脚本。删除 `run.xx` 脚本不会影响服务器的运行。如果删除 `run.xx`，服务器将继续由 `ServerStarterJar` 管理。有关 `ServerStarterJar` 的更多信息，请访问 [ServerStarterJar GitHub](https://github.com/neoforged/ServerStarterJar)。

---

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
    configured-forge-1.20.1-2.2.3.jar
    Controlling-forge-1.20.1-12.0.2.jar
    craftingtweaks-forge-1.20.1-18.2.5.jar
    embeddium-0.3.31+mc1.20.1.jar
    ExtremeSoundMuffler-3.48-forge-1.20.1.jar
    invtweaks-1.20.1-1.2.0.jar
    jecharacters-1.20.1-forge-4.5.11.jar
    JustEnoughMekanismMultiblocks-1.20.1-4.10.jar
    lanserverproperties-1.11.1-forge.jar
    modpack-update-checker-1.20.1-forge-0.15.4.jar
    MouseTweaks-forge-mc1.20.1-2.25.1.jar
    notenoughcrashes-4.4.7+1.20.1-forge.jar
    oculus-mc1.20.1-1.8.0.jar
    probejs-6.0.1-forge.jar
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
