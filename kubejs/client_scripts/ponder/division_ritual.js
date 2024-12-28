Ponder.registry((event) => {
    event
        .create("mierno:division_sigil")
        .scene("division_ritual", "分割仪式", "mierno:division_ritual", (scene, util) => {
            scene.showStructure();

            scene.idle(20);

            scene
                .text(
                    100,
                    "要激活分割徽章，需要满足一些条件\n1.仪式摆放需要正确\n2.当前时间需要为午夜\n3.祭坛需要露天\n4.祭坛周围亮度需要足够够低"
                )
                .attachKeyFrame();
            scene.text(100, "使用分割徽章右键附魔台来查看条件是否满足", [3.5, 2.5, 3.5]);
            scene.showControls(100, [4, 2.5, 3.5], "right").rightClick().withItem("mierno:division_sigil");

            scene.idle(140);

            scene.text(60, "在一切条件满足后，将分割徽章扔在附魔台上").attachKeyFrame();
            let sigil = scene.world.createItemEntity([3.5, 4, 3.5], [0, 0, 0], "mierno:division_sigil");
            scene.idle(80);

            scene.text(60, "然后献祭一只生物").attachKeyFrame();
            let pig = scene.world.createEntity("pig", [3.5, 3, 3.5]);

            scene.showControls(60, [3.5, 3, 3.5], "left").leftClick().withItem("diamond_sword");
            scene.idle(70);
            scene.world.removeEntity(pig);

            scene.text(100, "若一切顺利，分割徽章会被激活").attachKeyFrame();
            scene.world.removeEntity(sigil);

            scene.world.createEntity("item", [3.5, 4, 3.5], (entity) => {
                entity.mergeNbt({
                    Item: {
                        Count: 1,
                        id: "mierno:division_sigil",
                        tag: { Enchantments: [{ id: "mierno:activate", lvl: 1 }] },
                    },
                    NoGravity: true,
                });
            });

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
