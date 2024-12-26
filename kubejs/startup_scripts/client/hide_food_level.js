ForgeEvents.onEvent("net.minecraftforge.client.event.RenderGuiOverlayEvent", (event) => {
    if (event.overlay.id() == "minecraft:food_level") {
        event.setCanceled(true);
    }
});
