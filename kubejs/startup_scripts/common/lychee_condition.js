LycheeEvents.customCondition("can_see_sky", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        return ctx.level.getBlock(ctx.getParam("lychee:block_pos")).canSeeSky ? times : 0;
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
        let itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;
        const multiblock = $PatchouliAPI.getMultiblock("mierno:addition_sigil_activation_ritual");
        if (multiblock.validate(level, block.pos.below(), "none")) {
            return times;
        }
        return 0;
    };
});

LycheeEvents.customCondition("addition_sigil_validate", (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;
        const multiblock = $PatchouliAPI.getMultiblock("mierno:addition_sigil_activation_ritual");
        if (multiblock.validate(level, block.pos.below(), "none")) {
            return times;
        }
        return 0;
    };
});
