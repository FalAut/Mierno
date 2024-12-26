ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityLeaveLevelEvent", (event) => {
    const { entity, level } = event;

    if (level.clientSide || !entity.item || entity.y > level.minBuildHeight) return;
    const resultCount = entity.item.count;
    const resultEntity = entity.block.createEntity("item");

    resultEntity.setPos(entity.x, level.minBuildHeight - 20, entity.z);
    resultEntity.y = level.minBuildHeight - 20;
    resultEntity.setDeltaMovement(new Vec3d(0, (entity.fallDistance - 44) / 50, 0));
    resultEntity.setNoGravity(true);
    resultEntity.setGlowing(true);

    if (entity.item.hasTag("botania:mystical_flowers")) {
        resultEntity.item = "botania:black_lotus";
        resultEntity.item.count = resultCount;
        resultEntity.spawn();
    }
    if (entity.item.hasTag("botania:double_mystical_flowers")) {
        resultEntity.item = "botania:black_lotus";
        resultEntity.item.count = resultCount * 2;
        resultEntity.spawn();
    }
});
