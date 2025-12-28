StartupEvents.registry('block', (event) => {
    event.create('mierno:ancient_aura_generator_core').blockEntity((info) => {
        info.enableSync();
        info.serverTick(20, 0, (be) => {
            const AURA_OUTPUT = 50000;
            const { level, blockPos } = be;
            if (!$PatchouliAPI.getMultiblock('mierno:ancient_aura_generator').validate(level, blockPos, 'none')) return;

            const aura = AuraChunk.getAuraInArea(level, blockPos, 35);
            const below = level.getBlock(blockPos.below());
            const coords = getCoordsToPut(level, blockPos, 3, (state) => state.block instanceof $LeavesBlock);

            if (coords) {
                if (below != 'naturesaura:generator_limit_remover') {
                    if (aura + AURA_OUTPUT >= 2000000) return;
                    AuraChunk.storeAura(level, blockPos, AURA_OUTPUT);
                } else {
                    AuraChunk.storeAura(level, blockPos, AURA_OUTPUT * 2);
                }

                level.destroyBlock(coords, false);
            }
        });
    });
});
