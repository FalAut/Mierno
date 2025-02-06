Ponder.registry((event) => {
    event
        .create('naturesaura:calling_spirit')
        .scene('misty_forest_portal', '激活迷雾森林传送门', 'mierno:misty_forest_portal', (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showStructure();

            scene.showControls(20, [3.5, 5, 3.5], 'down').rightClick().withItem('naturesaura:calling_spirit');
            scene.idle(20);
            let itemEntity = scene.world.createItemEntity(Vec3d(3.5, 5, 3.5), Vec3d.ZERO, 'naturesaura:calling_spirit');
            scene.idle(20);
            scene.world.createEntity('lightning_bolt', [4, 2, 4]);
            scene.world.removeEntity(itemEntity);
            scene.world.setBlocks(
                [
                    [3, 1, 3],
                    [4, 1, 4],
                ],
                'mierno:misty_forest_portal',
                false
            );
        });
});
