const $ModernFixClient = Java.loadClass("org.embeddedt.modernfix.ModernFixClient");
const $SystemToast = Java.loadClass("net.minecraft.client.gui.components.toasts.SystemToast");
const $BrandingControl = Java.loadClass("net.minecraftforge.internal.BrandingControl");
const $ArrayList = Java.loadClass("java.util.ArrayList");
const $MpucApi = Java.loadClass("com.jab125.mpuc.api.MpucApi");

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

        // Ding
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
