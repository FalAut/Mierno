StartupEvents.registry('item', (event) => {
    event
        .create('mierno:fire_starter')
        .burnTime(200)
        .maxDamage(2)
        .use((level, player) => !!getRayTraceBlock(player))
        .useAnimation('bow')
        .useDuration(() => 60)
        .finishUsing((itemStack, level, entity) => {
            if (!getRayTraceBlock(entity)) return itemStack;
            const block = getRayTraceBlock(entity);

            Items.FLINT_AND_STEEL.useOn(
                new $UseOnContext(entity, 'MAIN_HAND', new $BlockHitResult(Vec3d.ZERO, 'UP', block.pos, false))
            );

            level.playSound(null, block.pos, 'item.firecharge.use', 'master');

            return itemStack;
        });
});

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingEntityUseItemEvent$Tick', (event) => {
    const { item, entity } = event;
    if (item != 'mierno:fire_starter' || !getRayTraceBlock(entity)) return;

    const block = getRayTraceBlock(entity);
    const runs = Utils.random.nextInt(30);

    for (let i = 0; i < runs; i++) {
        entity.level.addParticle('smoke', block.x + 0.5, block.y + 1, block.z + 0.5, 0, 0, 0);
    }
});
