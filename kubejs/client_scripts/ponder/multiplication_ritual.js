Ponder.registry((event) => {
    event
        .create('mierno:multiplication_sigil')
        .scene('multiplication_ritual', '融合仪式', 'mierno:multiplication_ritual', (scene, util) => {
            scene.showStructure();
            scene.idle(20);

            scene
                .text(
                    100,
                    '要激活融合徽章，需要满足一些条件\n1.仪式摆放需要正确\n2.当前维度为泪水之城\n3.当前天气为雷雨\n4.炼药锅需要装满水'
                )
                .attachKeyFrame();
            scene.text(100, '使用融合徽章右键炼药锅来查看条件是否满足', [3.5, 2.5, 3.5]);
            scene.showControls(100, [4, 2.5, 3.5], 'right').rightClick().withItem('mierno:multiplication_sigil');

            scene.idle(120);

            scene.text(60, '在一切条件满足后，将融合徽章扔在炼药锅里').attachKeyFrame();
            let sigil = scene.world.createItemEntity([3.5, 5, 3.5], [0, 0, 0], 'mierno:multiplication_sigil');
            scene.idle(80);

            scene.text(60, '然后向炼药锅喷一瓶狂乱的鸡尾酒').attachKeyFrame();
            scene
                .showControls(60, [4, 2.5, 3.5], 'right')
                .rightClick()
                .withItem(Item.of('minecraft:splash_potion', '{Potion:"mierno:crazy_cocktails"}'));
            scene.idle(80);

            scene.text(100, '若一切顺利，融合徽章会被激活').attachKeyFrame();
            scene.world.removeEntity(sigil);

            scene.world.createEntity('item', [3.5, 4, 3.5], (entity) => {
                entity.mergeNbt({
                    Item: {
                        Count: 1,
                        id: 'mierno:multiplication_sigil',
                        tag: { Enchantments: [{ id: 'mierno:activate', lvl: 1 }] },
                    },
                    NoGravity: true,
                });
            });

            scene.world.setBlocks(
                [1, 1, 1, 5, 1, 5],
                Block.getBlock('botania:infused_grass').defaultBlockState(),
                true
            );

            scene.world.setBlocks(
                [2, 2, 2, 2, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer('15')),
                false
            );

            scene.world.setBlocks(
                [4, 2, 2, 4, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer('15')),
                false
            );

            scene.world.setBlock(
                [3, 2, 2],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer('15')),
                false
            );

            scene.world.setBlock(
                [3, 2, 4],
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer('15')),
                false
            );
        });
});
