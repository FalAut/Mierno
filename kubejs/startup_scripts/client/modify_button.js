const $NewChangelogScreen = Java.loadClass("com.jab125.mpuc.client.gui.screen.changelog.NewChangelogScreen");
const $Button = Java.loadClass("net.minecraft.client.gui.components.Button");

ForgeEvents.onEvent("net.minecraftforge.client.event.ScreenEvent$Init$Post", (event) => {
    const { screen } = event;

    if (screen instanceof $NewChangelogScreen) {
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
