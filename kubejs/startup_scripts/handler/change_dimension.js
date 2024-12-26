ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", (event) => {
    const { entity, dimension } = event;
    if (!entity.isPlayer() || dimension.location() != "minecraft:the_nether") return;

    let /**@type {Internal.Player} */ player = entity;

    let foundToken = player.inventory.allItems.some((item) => item == "naturesaura:token_rage");

    if (!foundToken) {
        player.tell(Text.translate("message.mierno.cant_enter_nether").red().bold());
        event.setCanceled(true);
    }
});
