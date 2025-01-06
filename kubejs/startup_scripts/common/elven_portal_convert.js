ForgeEvents.onEvent("vazkii.botania.api.recipe.ElvenPortalUpdateEvent", (event) => {
    const { portalTile } = event;
    const { level } = portalTile;

    if (level.isClientSide() || level.server.tickCount % 20 || !event.isOpen()) return;
    let pos = portalTile.blockPos.above(2);
    let coords = getCoordsToPut(level, pos, 5, (state) => state.block.idLocation == "botania:livingrock");

    if (coords) {
        level.destroyBlock(coords, false);
        level.setBlock(coords, Block.getBlock("botania:shimmerrock").defaultBlockState(), 2);
    }
});
