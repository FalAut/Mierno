Ponder.registry((event) => {
    event
        .create("mierno:ancient_aura_generator_core")
        .scene("ancient_aura_generator", "灵气制造", "mierno:ancient_aura_generator", (scene, util) => {
            scene.setSceneOffsetY(-1);
            scene.scaleSceneView(0.8);
            scene.showStructure();

            scene.idle(20);
            scene.text(40, "在以核心半径 3 格范围内放置树叶").attachKeyFrame();
            scene.world.setBlock([3, 4, 2], Blocks.OAK_LEAVES.defaultBlockState(), false);

            scene.idle(60);
            scene.text(100, "树叶会被核心吸收，从而转化为灵气，每个树叶可转化 10000 灵气").attachKeyFrame();
            scene.world.destroyBlock([3, 4, 2]);

            scene.idle(120);
            scene.text(50, "当附近的灵气值超过某个值，灵气制造将会停止").attachKeyFrame();

            scene.idle(60);
            scene.text(100, "在核心下方放置制造催化剂可打破这个限制，并可产生原先 2 倍的灵气").attachKeyFrame();
            scene.world.setBlock(
                [3, 3, 3],
                Block.getBlock("naturesaura:generator_limit_remover").defaultBlockState(),
                false
            );
        });
});
