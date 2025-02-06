ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityTravelToDimensionEvent', (event) => {
    const { entity, dimension } = event;
    if (!entity.item || dimension.location() != 'minecraft:the_nether') return;

    let itemCount = entity.item.count;

    if (entity.item == 'minecraft:redstone') {
        entity.discard();
        entity.block.popItem(Item.of('fluxnetworks:flux_dust').withCount(itemCount));
        event.setCanceled(true);
    } else if (entity.item == 'fluxnetworks:flux_dust') {
        event.setCanceled(true);
    }
});
