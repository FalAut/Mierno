Ponder.registry((event) => {
    event
        .create("botania:terra_plate")
        .scene(
            "terrestrial_agglomeration_altar",
            "泰拉凝聚祭坛",
            "mierno:terrestrial_agglomeration_altar",
            (scene, util) => {
                scene.showStructure();
                scene.scaleSceneView(0.8);
                scene.setSceneOffsetY(-1);

                for (let degree = 0; degree <= 360; degree++) {
                    scene.rotateCameraY(1);
                    if (degree % 3 == 0) scene.idle(1);
                }
            }
        );
});
