StartupEvents.registry("block", (event) => {
    event.create("mierno:ancient_aura_generator_core").blockEntity((info) => {
        info.enableSync();
        info.serverTick(20, 0, (be) => {
            const AURA_OUTPUT = 10000;
            const { level, blockPos } = be;
            if (!$PatchouliAPI.getMultiblock("mierno:ancient_aura_generator").validate(level, blockPos, "none")) return;

            const chunkAuraCap = level.getChunkAt(blockPos).getCapability($NaturesAuraAPI.CAP_AURA_CHUNK).orElse(null);
            const aura = chunkAuraCap.getAuraInArea(level, blockPos, 35);
            const below = level.getBlock(blockPos.below());
            const coords = getCoordsToPut(level, blockPos, 3, (state) => state.block instanceof $LeavesBlock);

            if (coords) {
                if (below != "naturesaura:generator_limit_remover") {
                    if (aura + AURA_OUTPUT >= 2000000) return;
                    chunkAuraCap.storeAura(blockPos, AURA_OUTPUT);
                } else {
                    chunkAuraCap.storeAura(blockPos, AURA_OUTPUT * 2);
                }

                level.destroyBlock(coords, false);
            }
        });
    });
});
