if (Platform.isClientEnvironment()) {
    ForgeEvents.onEvent('net.minecraftforge.client.event.CustomizeGuiOverlayEvent$BossEventProgress', (event) => {
        /**@type {Internal.TranslatableContents} */
        let bossNameContents = event.getBossEvent().getName().getContents();

        if (bossNameContents.getKey() == 'entity.minecraft.wither') {
            event.getBossEvent().setDarkenScreen(false);
            event.setCanceled(true);
        }
    });
}
