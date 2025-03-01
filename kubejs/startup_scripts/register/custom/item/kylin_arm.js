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

    const hasKylin = hasCurios(entity, 'mierno:kylin_arm');
    const hasQuantum = !hasKylin && entity.getItemBySlot('chest') == 'advanced_ae:quantum_chestplate';

    if (!hasKylin && !hasQuantum) return;

    const isInWater = entity.isEyeInFluidType(Fluid.of('water').getFluid().getFluidType());
    const isInAir = !entity.onGround();

    let baseSpeed = originalSpeed * (hasKylin ? 10 : 1);
    let multiplier = 1;

    if (isInWater || isInAir) multiplier *= 5;
    if (isInWater && isInAir) multiplier *= 5;

    event.setNewSpeed(baseSpeed * multiplier);
});
