if (Platform.isClientEnvironment()) {
    let $TitleScreen = Java.loadClass("net.minecraft.client.gui.screens.TitleScreen");
    let $Button = Java.loadClass("net.minecraft.client.gui.components.Button");
    let $ButtonUtils = Java.loadClass("com.jab125.mpuc.client.util.ButtonUtils");
    let $NewChangelogScreen = Java.loadClass("com.jab125.mpuc.client.gui.screen.changelog.NewChangelogScreen");
    let $ModernFixClient = Java.loadClass("org.embeddedt.modernfix.ModernFixClient");
    let $SystemToast = Java.loadClass("net.minecraft.client.gui.components.toasts.SystemToast");
    let $BrandingControl = Java.loadClass("net.minecraftforge.internal.BrandingControl");
    let $ArrayList = Java.loadClass("java.util.ArrayList");
    let $SimpleSoundInstance = Java.loadClass("net.minecraft.client.resources.sounds.SimpleSoundInstance");
    let $SoundInstance = Java.loadClass("net.minecraft.client.resources.sounds.SoundInstance");
    let $MpucApi = Java.loadClass("com.jab125.mpuc.api.MpucApi");

    ForgeEvents.onEvent("net.minecraftforge.client.event.ScreenEvent$Init$Post", (event) => {
        const { screen } = event;

        if (screen instanceof $TitleScreen) {
            let buttonWidth = 50;
            let buttonHeight = 20;
            let margin = 10;

            let buttons = [
                { label: "QQ交流群", link: "https://qm.qq.com/q/YnQwckyuaK" },
                { label: "QQ频道", link: "https://pd.qq.com/s/48af4i42y" },
                { label: "Github", link: "https://github.com/FalAut/Mierno" },
                { label: "Discord", link: "https://discord.com/invite/dECQZNNngD" },
            ];

            buttons.forEach((button, index) => {
                screen.addRenderableWidget(
                    $Button
                        .builder(button.label, () => {
                            $ButtonUtils.confirmLink(screen, false, button.link);
                        })
                        .bounds(
                            screen.width - buttonWidth - margin,
                            screen.height - (buttonHeight + margin) * (buttons.length - index),
                            buttonWidth,
                            buttonHeight
                        )
                        .build()
                );
            });
        } else if (screen instanceof $NewChangelogScreen) {
            screen.renderables.forEach((widget) => {
                if (widget instanceof $Button) {
                    if (widget.message.toString() == "empty") {
                        widget.visible = false;
                    } else if (widget.message.getString() == "Generic") {
                        widget.setMessage("Github");
                    }
                }
            });
        }
    });

    let isStartup = false;

    ForgeEvents.onEvent("net.minecraftforge.event.TickEvent$ClientTickEvent", (event) => {
        if (event.phase != "END" || isStartup) return;

        let gameStartTimeSeconds = $ModernFixClient.gameStartTimeSeconds.toFixed(1);

        if (gameStartTimeSeconds != -1) {
            Client.toasts.addToast(
                new $SystemToast(
                    "narrator_toggle",
                    Text.translate("mierno.startup.time", gameStartTimeSeconds),
                    Text.translate("mierno.startup.performance")
                )
            );

            let currentModpackVersion = $MpucApi.getInstance().getCurrentModpackVersion();
            Client.setTitle(`Mierno v${currentModpackVersion}`);

            let brandingControl = new $BrandingControl();
            let brandingsField = $BrandingControl.__javaObject__.getDeclaredField("brandings");
            brandingsField.setAccessible(true);
            let computeBranding = $BrandingControl.__javaObject__.getDeclaredMethod("computeBranding");
            computeBranding.setAccessible(true);
            computeBranding.invoke(null);

            let brandings = brandingsField.get(brandingControl);

            let newBrandings = new $ArrayList();
            newBrandings.addAll(brandings);

            let lastestModpackVersion = $MpucApi.getInstance().getLatestModpackVersion();

            let noUpdate = currentModpackVersion == lastestModpackVersion;
            let updateMessage;

            if (Client.languageManager.selected == "zh_cn") {
                newBrandings.add(`游戏启动用时：§a${gameStartTimeSeconds}§r 秒`);
                updateMessage = noUpdate ? "" : `§c存在新版本 §e${lastestModpackVersion}！`;
                newBrandings.add(`当前整合包版本：§a${currentModpackVersion}§r ${updateMessage}`);
            } else {
                newBrandings.add(`Game took §a${gameStartTimeSeconds}§r seconds to start`);
                updateMessage = noUpdate ? "" : `§cNew version §e${lastestModpackVersion} exists!`;
                newBrandings.add(`Current modpack version：§a${currentModpackVersion}§r ${updateMessage}`);
            }

            brandingsField.set(brandingControl, newBrandings);

            Client.soundManager.play(
                new $SimpleSoundInstance(
                    "entity.experience_orb.pickup",
                    "master",
                    0.25,
                    1.0,
                    $SoundInstance.createUnseededRandom(),
                    false,
                    0,
                    "none",
                    0,
                    0,
                    0,
                    true
                )
            );

            isStartup = true;
        }
    });
}
