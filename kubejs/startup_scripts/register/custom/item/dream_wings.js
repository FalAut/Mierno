StartupEvents.registry('item', (event) => {
    event
        .create('mierno:dream_wings')
        .rarity('epic')
        .tag('curios:dream_wings')
        .unstackable()
        .attachCapability(
            CuriosCapabilityBuilder.CURIOS.itemStack()
                .canEquip(() => true)
                .canUnequip(() => true)
                .onEquip((stack, ctx) => toggleFlying(ctx.entity(), true))
                .onUnequip((stack, ctx) => toggleFlying(ctx.entity(), false))
                .curioTick((stack, ctx) => toggleFlying(ctx.entity(), true))
        );
});
