Ponder.registry((event) => {
    event
        .create(['mierno:falling_star_marker', 'forbidden_arcanus:stella_arcanum'])
        .scene('mark_of_the_falling_tower', '坠星标位', 'mierno:mark_of_the_falling_tower', (scene, util) => {
            scene.scaleSceneView(0.6);
            scene.showStructure(0);

            scene.world.setBlock([8, 1, 8], 'bloodmagic:masterritualstone', false);
            scene.world.showSection([8, 1, 8], 'down');

            scene.idle(20);

            scene.text(20, '可以使用仪式推测杖选中「 坠星标位 」来搭建仪式').attachKeyFrame();
            scene.showControls(60, [8, 1.5, 8.3], 'left').rightClick().withItem('bloodmagic:ritualdivinerdusk');
            scene.overlay.showOutline('red', 1, [8, 1, 8], 60);

            scene.idle(40);

            scene.showStructure(8);

            scene.idle(40);

            scene
                .text(60, '仪式搭建完成后，使用激活水晶右键主仪式石，并需要消耗灵魂网络中 250000 LP 来激活仪式')
                .attachKeyFrame();
            scene.showControls(60, [8.5, 1, 8.8], 'left').rightClick().withItem('bloodmagic:activationcrystalweak');
            scene.overlay.showOutline('red', 1, [8, 1, 8], 60);

            scene.idle(60);
            scene.world.createEntity('lightning_bolt', [8, 1, 8]);

            scene.idle(20);
            scene.world.setBlocks([6, 5, 4, 4, 5, 6], 'air', false);

            scene.text(60, '将坠星标引扔在主仪式石上').attachKeyFrame();
            scene.showControls(60, [8.5, 6, 8.5], 'down').withItem('mierno:falling_star_marker');

            scene.idle(20);

            let marker = scene.world.createItemEntity([8.5, 6, 8.5], [0, 0, 0], 'mierno:falling_star_marker');

            scene.idle(40);

            scene.world.removeEntity(marker);

            scene.idle(40);

            scene.text(60, '等待一段时间后，一颗巨大的陨星会坠向仪式').attachKeyFrame();

            let meteor = scene.world.createEntity('bloodmagic:meteor', [8.5, 10, 8.5]);

            scene.idle(25);

            scene.world.removeEntity(meteor);

            scene.world.setBlocks([16, 0, 0, 0, 8, 16], 'forbidden_arcanus:stella_arcanum', true);

            scene.idle(60);

            scene
                .text(100, '陨星会砸在碰到的第一个方块上，因此建议在仪式上方建立防护罩，以免陨星砸坏仪式')
                .attachKeyFrame();
        });
});
