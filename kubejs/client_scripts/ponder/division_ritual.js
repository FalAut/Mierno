Ponder.registry((event) => {
    event
        .create("mierno:division_sigil")
        .scene("division_ritual", "分割仪式", "mierno:division_ritual", (scene, util) => {
            scene.showStructure();

            scene.idle(20);

            scene.showControls(20, [3.5, 2.5, 3.5], "left").rightClick().withItem("mierno:division_sigil");

            scene.idle(20);
            let pig = scene.world.createEntity("pig", [3.5, 3, 3.5]);

            scene.showControls(20, [3.5, 3, 3.5], "left").leftClick().withItem("diamond_sword");
            scene.idle(12);

            scene.world.removeEntity(pig);

            scene.world.setBlocks(
                [1, 1, 1, 5, 1, 5],
                Block.getBlock("botania:mutated_grass").defaultBlockState(),
                true
            );

            scene.world.setBlocks(
                [2, 2, 2, 2, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );

            scene.world.setBlocks(
                [4, 2, 2, 4, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );

            scene.world.setBlock(
                [3, 2, 2],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );

            scene.world.setBlock(
                [3, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer("15")),
                false
            );
        });
});
