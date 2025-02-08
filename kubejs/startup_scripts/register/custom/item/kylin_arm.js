StartupEvents.registry('item', (event) => {
    event
        .create('mierno:kylin_arm')
        .rarity('uncommon')
        .unstackable()
        .tag('curios:kylin_arm')
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .canEquip(() => true)
                .canUnequip(() => true)
        );
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$HarvestCheck', (event) => {
    const { entity } = event;

    if (hasCurios(entity, 'mierno:kylin_arm')) {
        event.setCanHarvest(true);
    }
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed', (event) => {
    const { entity, originalSpeed } = event;
    if (hasCurios(entity, 'mierno:kylin_arm')) {
        event.setNewSpeed(originalSpeed * 10);
    }
});
