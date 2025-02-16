Ponder.registry((event) => {
    event
        .create('mierno:subtraction_sigil')
        .scene('subtraction_ritual', '削减仪式', 'mierno:subtraction_ritual', (scene, util) => {
            scene.showStructure();
            scene.idle(20);

            scene
                .text(
                    160,
                    '要激活削减徽章，需要满足一些条件\n1.仪式摆放需要正确\n2.当前维度为下界\n3.祭坛周围的灵气需要足够低\n4.重生锚的充能需要达到最大值'
                )
                .attachKeyFrame();

            scene.text(40, '使用萤石右键重生锚为其充能', [3.5, 2.5, 3.5]);
            // for (let i = 1; i <= 4; i++) {
            //     scene.showControls(5, [4, 2.5, 3.5], 'right').rightClick().withItem('glowstone');
            //     console.log(`${i.toFixed(0)}`);
            //     scene.world.modifyBlock([3, 2, 3], (curState) => curState.with('charges', `${i.toFixed(0)}`), true);
            //     scene.idle(60);
            // }

            scene.showControls(5, [4, 2.5, 3.5], 'right').rightClick().withItem('glowstone');
            scene.world.modifyBlock([3, 2, 3], (curState) => curState.with('charges', '1'), true);
            scene.idle(10);

            scene.showControls(5, [4, 2.5, 3.5], 'right').rightClick().withItem('glowstone');
            scene.world.modifyBlock([3, 2, 3], (curState) => curState.with('charges', '2'), true);
            scene.idle(10);

            scene.showControls(5, [4, 2.5, 3.5], 'right').rightClick().withItem('glowstone');
            scene.world.modifyBlock([3, 2, 3], (curState) => curState.with('charges', '3'), true);
            scene.idle(10);

            scene.showControls(5, [4, 2.5, 3.5], 'right').rightClick().withItem('glowstone');
            scene.world.modifyBlock([3, 2, 3], (curState) => curState.with('charges', '4'), true);
            scene.idle(10);

            scene.idle(20);
            scene.text(100, '使用削减徽章右键重生锚来查看条件是否满足', [3.5, 2.5, 3.5]);
            scene.showControls(100, [4, 2.5, 3.5], 'right').rightClick().withItem('mierno:subtraction_sigil');

            scene.idle(120);

            scene.text(60, '在一切条件满足后，将削减徽章扔在重生锚上').attachKeyFrame();
            let sigil = scene.world.createItemEntity([3.5, 4, 3.5], [0, 0, 0], 'mierno:subtraction_sigil');
            scene.idle(80);

            scene.text(60, '然后在重生锚上产生一个爆炸').attachKeyFrame();
            scene.world.createEntity('tnt', [3.5, 5, 3.5]);
            scene.idle(80);

            scene.text(100, '若一切顺利，削减徽章会被激活').attachKeyFrame();
            scene.world.removeEntity(sigil);

            scene.world.createEntity('item', [3.5, 4, 3.5], (entity) => {
                entity.mergeNbt({
                    Item: {
                        Count: 1,
                        id: 'mierno:subtraction_sigil',
                        tag: { Enchantments: [{ id: 'mierno:activate', lvl: 1 }] },
                    },
                    NoGravity: true,
                });
            });

            scene.world.setBlocks(
                [1, 1, 1, 5, 1, 5],
                Block.getBlock('botania:scorched_grass').defaultBlockState(),
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
