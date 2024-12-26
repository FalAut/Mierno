Ponder.registry((event) => {
    event.create("oak_sapling").scene("first_tree", "First Tree", "mierno:first_tree", (scene, util) => {
        scene.setSceneOffsetY(-1);
        scene.scaleSceneView(0.8);
        scene.showStructure(0);
        scene.text(60, "首先，我们需要搭建一个结构");
        scene.idle(10);
        for (let y = 1; y <= 3; y++) {
            scene.world.showSection([2, y, 2], "down");
            scene.idle(10);
        }

        for (let y = 4; y <= 7; y++) {
            for (let x = 0; x < 6; x++) {
                scene.world.showSection(
                    [
                        [x, y, 0],
                        [x, y, 5],
                    ],
                    "down"
                );
                scene.idle(3);
            }
        }
        scene.idle(10);

        scene.text(20, "搭建完毕后，右键底部的方块").attachKeyFrame();
        scene.showControls(20, [2, 1.5, 2.5], "left").rightClick();
        scene.overlay.showOutline("red", 1, [2, 1, 2], 20);
        scene.idle(20);

        for (let x = 0; x <= 6; x++) {
            for (let y = 1; y <= 8; y++) {
                for (let z = 0; z <= 6; z++) {
                    scene.world.destroyBlock([x, y, z]);
                }
            }
        }

        scene.world.createItemEntity([2.5, 1.5, 2.5], Vec3d.ZERO, "oak_sapling");

        scene.idle(40);
        scene.text(100, "可前往「胶囊」章节获取胶囊来快速放置这个结构");
    });
});
