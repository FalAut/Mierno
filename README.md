### 中文版本

# 如何启动/运行服务器

**当然你可以使用自己的方式来启动/运行服务器**

## 准备工作

1. 打开 `variables.txt` 文件。
2. 找到 `JAVA="path/to/java"`。
3. 将 `"path/to/java"` 替换为您的 Java 安装路径，例如：`C:/Program Files/Java/jdk-17/bin/java.exe`.
   **注意**：路径中的分隔符必须使用 `/`，不能使用 `\`。
4. 如果未指定 Java 路径，系统将尝试使用默认的 Java（如果已安装）。
5. 根据您的操作系统类型，继续阅读下方相应的说明。

## Windows

1. 运行 `start.bat` 文件启动服务器。
2. **重要**：请勿删除 PowerShell 脚本文件（`.ps1` 文件）。

您也可以在控制台窗口中手动运行 `start.ps1`，但建议使用批处理脚本（`.bat` 文件）以简化操作。

## Linux

运行 `.\start.sh` 或 `bash start.sh` 启动服务器。

## MacOS

运行 `.\start.sh` 或 `bash start.sh` 启动服务器。

## 注意事项

当控制台显示以下信息时：

```
Mojang's EULA has not yet been accepted. In order to run a Minecraft server, you must accept Mojang's EULA.
Mojang's EULA is available to read at https://aka.ms/MinecraftEULA
If you agree to Mojang's EULA then type 'I agree'
Answer:
```

请在控制台输入 `I agree` 以同意 Mojang 的 EULA，然后服务器将继续启动。接下来，服务器会下载所需的库，请耐心等待并确保网络连接正常。

如遇到问题，请前往社区寻求帮助。

**注意**：Forge 和 NeoForge 1.17 及以上版本会创建 `run.xx` 脚本，这是因为 `ServerStarterJar` 用于安装和运行服务器。您可以忽略这些脚本，继续使用 `start.xx` 脚本。删除 `run.xx` 脚本不会影响服务器的运行。如果删除 `run.xx`，服务器将继续由 `ServerStarterJar` 管理。有关 `ServerStarterJar` 的更多信息，请访问 [ServerStarterJar GitHub](https://github.com/neoforged/ServerStarterJar)。

### English Version

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
