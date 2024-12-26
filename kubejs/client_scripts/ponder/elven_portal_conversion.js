Ponder.registry((event) => {
    event
        .create(["botania:alfheim_portal", "botania:shimmerrock"])
        .scene("elven_portal_conversion", "精灵门转化", "mierno:elven_portal_conversion", (scene, util) => {
            scene.showStructure();
            scene.scaleSceneView(0.8);
            scene.idle(20);

            scene.text(40, "在激活的精灵门核心半径5格范围内放置活石");
            scene.showControls(20, [3.5, 2, 3.5], "down").rightClick().withItem("botania:livingrock");
            scene.world.setBlock([3, 1, 3], Block.getBlock("botania:livingrock").defaultBlockState(), false);

            scene.idle(50);
            scene.world.setBlock([3, 1, 3], Block.getBlock("botania:shimmerrock").defaultBlockState(), true);
            scene.text(40, "活石会被转化为微光石");
        });
});
