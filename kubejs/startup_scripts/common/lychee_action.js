LycheeEvents.customAction("add_solar", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam("this_entity");
        let count = itemEntity.item.count;

        if (!itemEntity.nbt.Item.tag) {
            itemEntity.mergeNbt({
                Item: {
                    Count: count,
                    id: "mierno:sun_crystal",
                    tag: {
                        Solar: 0,
                    },
                },
            });
        }

        let amount = itemEntity.nbt.Item.tag.Solar;
        if (amount >= 100) {
            itemEntity.mergeNbt({
                Item: {
                    Count: count,
                    id: "mierno:sun_crystal_full",
                },
            });
            return;
        }

        itemEntity.mergeNbt({
            Item: {
                Count: count,
                id: "mierno:sun_crystal",
                tag: {
                    Solar: amount + 1,
                },
            },
        });
    };
});

LycheeEvents.customAction("place_misty_forest_portal", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;

        $PortalPlacer.attemptPortalLight(level, block.pos, $PortalIgnitionSource.ItemUseSource("barrier"));
        let lightningBoltEntity = block.createEntity("lightning_bolt");

        lightningBoltEntity.setVisualOnly(true);
        lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
        lightningBoltEntity.spawn();
    };
});

LycheeEvents.customAction("addition_sigil_activation", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        let itemEntity = ctx.getParam("this_entity");
        const { level, block } = itemEntity;

        const resultEntity = block.createEntity("item");
        resultEntity.item = Item.of("mierno:addition_sigil").enchant("mierno:activate", 1);
        resultEntity.moveTo(Vec3d.atCenterOf(block.pos.above()));
        resultEntity.setDeltaMovement(new Vec3d(0, 0.01, 0));
        resultEntity.setNoGravity(true);
        resultEntity.setGlowing(true);
        resultEntity.spawn();

        level.broadcastEntityEvent(resultEntity, 35);

        const multiblock = $PatchouliAPI.getMultiblock("mierno:addition_sigil_activation_ritual");
        multiblock.simulate(level, block.pos.below(), "none", false).second.forEach((result) => {
            if (result.character == "A") {
                level.setBlock(
                    result.worldPosition.below(),
                    Block.getBlock("botania:infused_grass").defaultBlockState(),
                    2
                );
            }
            if (result.character == "B") {
                level.setBlock(
                    result.worldPosition.above(),
                    Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                    2
                );
            }
        });

        const lightningBoltEntity = block.createEntity("lightning_bolt");
        lightningBoltEntity.setVisualOnly(true);
        lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
        lightningBoltEntity.spawn();
    };
});

LycheeEvents.customAction("beacon_action", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam("this_entity");

        let random = Utils.getRandom();
        let deltaMovement = new Vec3d(
            random.nextGaussian() * 0.01 + 0.03,
            random.nextGaussian() * 0.05 + 0.1,
            random.nextGaussian() * 0.01 + 0.03
        );

        let oldCount = itemEntity.item.count;

        itemEntity.setItem("minecraft:nether_star");
        itemEntity.item.setCount(oldCount);
        itemEntity.setDeltaMovement(deltaMovement);
        itemEntity.setNoGravity(true);
        itemEntity.setGlowing(true);

        const { x, y, z } = itemEntity;

        itemEntity.level.spawnParticles("end_rod", true, x, y, z, 0, 0, 0, 20, 0.1);
    };
});

LycheeEvents.customAction("unstable_ingot_explosion", (event) => {
    event.action.applyFunc = (recipe, ctx, times) => {
        /**@type {Internal.ItemEntity} */
        let itemEntity = ctx.getParam("this_entity");
        let count = itemEntity.item.count;

        if (!itemEntity.nbt.Item.tag) {
            itemEntity.mergeNbt({
                Item: {
                    Count: count,
                    id: "mierno:unstable_ingot",
                    tag: {
                        Stable: 100,
                    },
                },
            });
        }

        let amount = itemEntity.nbt.Item.tag.Stable;
        if (amount <= 10) {
            itemEntity.block.createExplosion().explosionMode("none").strength(5).explode();
            return;
        }

        itemEntity.mergeNbt({
            Item: {
                Count: count,
                id: "mierno:unstable_ingot",
                tag: {
                    Stable: amount - 10,
                },
            },
        });
    };
});
