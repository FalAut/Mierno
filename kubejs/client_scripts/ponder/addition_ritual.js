Ponder.registry((event) => {
    event
        .create('mierno:addition_sigil')
        .scene('addition_ritual', '聚合仪式', 'mierno:addition_ritual', (scene, util) => {
            scene.showStructure();
            scene.idle(20);

            scene
                .text(
                    100,
                    '要激活聚合徽章，需要满足一些条件\n1.仪式摆放需要正确\n2.当前时间需要为正午\n3.祭坛周围需要充足的灵气\n4.祭坛需要露天'
                )
                .attachKeyFrame();
            scene.text(100, '使用聚合徽章右键工作台来查看条件是否满足', [3.5, 2.5, 3.5]);
            scene.showControls(100, [4, 2.5, 3.5], 'right').rightClick().withItem('mierno:addition_sigil');

            scene.idle(120);

            scene.text(60, '在一切条件满足后，将聚合徽章扔在工作台上').attachKeyFrame();
            let sigil = scene.world.createItemEntity([3.5, 4, 3.5], [0, 0, 0], 'mierno:division_sigil');
            scene.idle(80);

            scene.text(40, '然后在工作台上落下一个铁砧').attachKeyFrame();
            scene.world.setBlock([3, 5, 3], 'anvil', false);
            scene.idle(60);

            scene.world.setBlock([3, 5, 3], 'air', false);
            scene.world.createEntity('falling_block', [3.5, 5, 3.5], (entity) => {
                entity.mergeNbt({ BlockState: { Name: 'minecraft:anvil' } });
            });
            scene.idle(12);

            scene.text(100, '若一切顺利，聚合徽章会被激活').attachKeyFrame();
            scene.world.removeEntity(sigil);

            scene.world.createEntity('item', [3.5, 5, 3.5], (entity) => {
                entity.mergeNbt({
                    Item: {
                        Count: 1,
                        id: 'mierno:addition_sigil',
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
