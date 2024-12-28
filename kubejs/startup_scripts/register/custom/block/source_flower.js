StartupEvents.registry("block", (event) => {
    const POSITIONS = [
        [-1, 0, -1],
        [-1, 0, 0],
        [-1, 0, 1],
        [0, 0, 1],
        [1, 0, 1],
        [1, 0, 0],
        [1, 0, -1],
        [0, 0, -1],
    ];

    const RECIPES = [
        { input: "botania:shimmerrock", output: "ars_nouveau:sourcestone", cost: 100, time: 60 },
        { input: "mierno:mana_string_block", output: "ars_nouveau:magebloom_block", cost: 300, time: 80 },
    ];

    function sourceFlower(/**@type {Internal.BlockEntityJS} */ be) {
        const { block, level, tick } = be;

        POSITIONS.forEach(([dx, dy, dz]) => {
            let targetPos = block.pos.offset(dx, dy, dz);
            if (level.getBlockState(targetPos).isAir()) return;

            const { x, y, z } = targetPos;
            const targetBlock = level.getBlock(targetPos);
            const timerKey = `conversionTimer_${x}_${y}_${z}`;
            const recipeKey = `currentRecipe_${x}_${y}_${z}`;

            let source = be.persistentData.getInt("source");
            let conversionTimer = be.persistentData.getInt(timerKey);
            let currentRecipeIndex = be.persistentData.getInt(recipeKey);

            let matchedRecipe = null;
            for (let i = 0; i < RECIPES.length; i++) {
                if (targetBlock == RECIPES[i].input) {
                    matchedRecipe = RECIPES[i];
                    if (i != currentRecipeIndex) {
                        conversionTimer = 0;
                        currentRecipeIndex = i;
                        be.persistentData.putInt(recipeKey, currentRecipeIndex);
                    }
                    break;
                }
            }

            if (matchedRecipe && source >= matchedRecipe.cost) {
                conversionTimer++;
                be.persistentData.putInt(timerKey, conversionTimer);

                if (conversionTimer >= matchedRecipe.time) {
                    level.destroyBlock(targetPos, false);
                    level.setBlock(targetPos, Block.getBlock(matchedRecipe.output).defaultBlockState(), 11);
                    source -= matchedRecipe.cost;
                    be.persistentData.putInt("source", source);
                    be.persistentData.putInt(timerKey, 0);
                }
            } else if (!matchedRecipe) {
                be.persistentData.putInt(timerKey, 0);
                be.persistentData.putInt(recipeKey, -1);
            }
        });

        if (be.persistentData.getInt("source") < 10000 && tick % 20 == 0) {
            if ($SourceUtil.takeSourceWithParticles(block.pos, level, 6, 1000) != null) {
                let source = be.persistentData.getInt("source");
                source += 1000;
                be.persistentData.putInt("source", source);
            }
        }
    }

    event
        .create("mierno:source_flower")
        .tag("minecraft:flowers")
        .box(4.8, 0, 4.8, 12.8, 16, 12.8)
        .grassSoundType()
        .hardness(0)
        .defaultCutout()
        .noCollision()
        .blockEntity((info) => {
            info.serverTick(1, 0, (be) => {
                sourceFlower(be);
            });
        });

    event
        .create("mierno:flowing_source_flower")
        .grassSoundType()
        .hardness(0.5)
        .defaultCutout()
        .box(1.6, 1.6, 1.6, 14.4, 14.4, 14.4)
        .blockEntity((info) => {
            info.serverTick(1, 0, (be) => {
                sourceFlower(be);
            });
        });
});

ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent", (event) => {
    const { pos, level } = event;
    let blockState = level.getBlockState(pos.above());

    if (
        blockState == Block.getBlock("mierno:source_flower").defaultBlockState() ||
        blockState == Block.getBlock("mierno:datura").defaultBlockState()
    ) {
        level.destroyBlock(pos.above(), true);
    }
});
