ForgeEvents.onEvent('net.minecraftforge.event.entity.ProjectileImpactEvent', (event) => {
    const { projectile, rayTraceResult } = event;
    const level = projectile.level;
    if (level.isClientSide() || projectile.type != 'minecraft:potion' || rayTraceResult.type != 'block') return;

    const potion = projectile.item.nbt.Potion;
    const block = level.getBlock(rayTraceResult.blockPos);

    if (potion == 'mierno:furious' || block == 'minecraft:cauldron') {
        global.multiplicationSigilActivation(level, block);
    }
});
