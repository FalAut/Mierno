ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', (event) => {
    const { entity, dimension } = event;
    if (!entity.isPlayer() || dimension.location() != 'minecraft:the_nether') return;

    /**@type {Internal.Player} */
    const player = entity;
    const curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();
    const hasTokenInCurios = curiosInventory.equippedCurios.allItems.some((item) => item == 'naturesaura:token_rage');
    const hasTokenInInventory = player.inventory.allItems.some((item) => item == 'naturesaura:token_rage');

    if (!hasTokenInInventory && !hasTokenInCurios) {
        player.tell(Text.translate('message.mierno.cant_enter_nether').red().bold());
        event.setCanceled(true);
    }
});
