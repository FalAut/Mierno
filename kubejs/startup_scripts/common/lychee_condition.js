LycheeEvents.customCondition("can_see_sky", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        return ctx.level.getBlock(ctx.getParam("lychee:block_pos")).canSeeSky ? times : 0;
    };
});

LycheeEvents.customCondition("is_noon", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        const timeOfDay = ctx.level.getDayTime() % 24000;
        const isNoon = timeOfDay >= 5500 && timeOfDay <= 6500;

        return isNoon ? times : 0;
    };
});

LycheeEvents.customCondition("is_midnight", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        const timeOfDay = ctx.level.getDayTime() % 24000;
        const isMidnight = timeOfDay >= 17500 && timeOfDay <= 18500;

        return isMidnight ? times : 0;
    };
});

LycheeEvents.customCondition("beacon_condition", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam("this_entity");

        let testPos = itemEntity.blockPosition();
        let level = itemEntity.level;

        while (testPos.y > level.minBuildHeight) {
            testPos = testPos.below();

            if (level.getBlockState(testPos).getBlock() != Blocks.BEACON) continue;

            let beaconEntity = level.getBlockEntity(testPos);
            if (beaconEntity && !beaconEntity.beamSections.isEmpty()) {
                return times;
            }
        }

        return 0;
    };
});

LycheeEvents.customCondition("validate_misty_forest_portal", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");

        const { level, block } = itemEntity;
        const multiblocks = [
            $PatchouliAPI.getMultiblock("mierno:misty_forest_portal_1"),
            $PatchouliAPI.getMultiblock("mierno:misty_forest_portal_2"),
            $PatchouliAPI.getMultiblock("mierno:misty_forest_portal_3"),
            $PatchouliAPI.getMultiblock("mierno:misty_forest_portal_4"),
        ];

        for (let multiblock of multiblocks) {
            if (multiblock.validate(level, block.pos, "none")) {
                return times;
            }
        }

        return 0;
    };
});

LycheeEvents.customCondition("addition_sigil_validate", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        const itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;

        return global.additionSigilValidate(level, block, times);
    };
});
