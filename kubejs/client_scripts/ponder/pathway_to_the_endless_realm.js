Ponder.registry((event) => {
    event
        .create('bloodmagic:dungeon_alternator')
        .scene('pathway_to_the_endless_realm', '进入恶魔领域', 'mierno:pathway_to_the_endless_realm', (scene, util) => {
            scene.scaleSceneView(0.8);
            scene.showStructure(0);

            scene.idle(20);

            scene.world.setBlock([5, 1, 5], 'bloodmagic:masterritualstone', false);
            scene.world.showSection([5, 1, 5], 'down');

            scene.idle(20);

            scene.text(60, '可以使用仪式推测杖选中「 无尽领域之路 」来搭建仪式').attachKeyFrame();
            scene.showControls(60, [5, 1.5, 5.3], 'left').rightClick().withItem('bloodmagic:ritualdivinerdusk');
            scene.overlay.showOutline('red', 1, [5, 1, 5], 60);

            scene.idle(80);

            scene.showStructure(8);

            scene.idle(20);

            scene
                .text(60, '仪式搭建完成后，使用激活水晶右键主仪式石，并需要消耗灵魂网络中 150000 LP 来激活仪式')
                .attachKeyFrame();
            scene.showControls(60, [5.5, 1.5, 5.8], 'left').rightClick().withItem('bloodmagic:activationcrystalweak');
            scene.overlay.showOutline('red', 1, [5, 1, 5], 60);

            scene.idle(60);
            scene.world.createEntity('lightning_bolt', [5, 1, 5]);
            scene.world.replaceBlocks([10, 1, 0, 0, 7, 10], 'minecraft:smooth_stone', true);

            scene.world.replaceBlocks([5, 6, 5], 'bloodmagic:inversion_pillar_cap', false);
            scene.world.modifyBlock([5, 6, 5], (curState) => curState.with('type', 'top'), false);

            scene.world.replaceBlocks([5, 5, 5], 'bloodmagic:inversion_pillar', false);

            scene.world.replaceBlocks([5, 4, 5], 'bloodmagic:inversion_pillar_cap', false);
            scene.world.modifyBlock([5, 4, 5], (curState) => curState.with('type', 'bottom'), false);

            scene.idle(40);

            scene.text(100, '右键反转之柱来进入恶魔领域').attachKeyFrame();
            scene.showControls(100, [5, 5.5, 5], 'left').rightClick();
        });
});
