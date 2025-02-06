Ponder.registry((event) => {
    event.create('naturesaura:wood_stand').scene('tree_ritual', '森林仪式', 'mierno:tree_ritual', (scene, util) => {
        scene.scaleSceneView(0.8);
        scene.showStructure();
        scene.idle(20);

        //放置木基座物品
        scene.text(100, '§l首先在木基座上放置\n§a§l仪式需要的物品\n§e§l摆放顺序任意').attachKeyFrame();
        let woodStandPos = [
            [7, 1, 1],
            [8, 1, 4],
            [7, 1, 7],
            [4, 1, 8],
            [1, 1, 7],
            [0, 1, 4],
            [1, 1, 1],
            [4, 1, 0],
        ];
        let clickPos = woodStandPos.map((pos) => {
            return pos.map((num) => num + 0.5);
        });
        for (let i = 0; i < woodStandPos.length; i++) {
            scene.showControls(10, clickPos[i], 'right').rightClick();
            scene.world.modifyBlockEntityNBT(woodStandPos[i], (nbt) => {
                nbt.items = {
                    Items: [{ Count: 1, id: 'cobblestone' }],
                };
            });
            scene.idle(10);
        }
        scene.idle(40);

        //金叶粉
        scene.text(80, '§e§l像这样摆放金叶粉', [3, 0, 7]).attachKeyFrame();
        scene.idle(20);

        let stoneBricksPos = [
            [3, 0, 2],
            [4, 0, 2],
            [5, 0, 2],
            [5, 0, 3],
            [6, 0, 3],
            [6, 0, 4],
            [6, 0, 5],
            [5, 0, 5],
            [5, 0, 6],
            [4, 0, 6],
            [3, 0, 6],
            [3, 0, 5],
            [2, 0, 5],
            [2, 0, 4],
            [2, 0, 3],
            [3, 0, 3],
        ];
        scene.text(60, '§l可在下方放置方块来\n§a§l标记位置', [3, 0, 5]).attachKeyFrame();
        stoneBricksPos.forEach((block) => {
            scene.world.setBlock(block, 'minecraft:stone_bricks', true);
        });
        scene.idle(80);

        //催熟树苗
        scene.text(40, '§l然后放置§e§l仪式配方中\n§a§l指定的树苗', [4.5, 1.5, 4.5]).attachKeyFrame();
        scene.world.setBlock([4, 1, 4], 'oak_sapling', true);
        scene.idle(40);
        scene.text(40, '§l等待树苗§a§l生长§f§l或直接§a§l催熟').attachKeyFrame();
        for (let j = 0; j < 3; j++) {
            scene.showControls(1, [4.5, 1.5, 4.5], 'right').rightClick().withItem('bone_meal');
            scene.idle(10);
            let particlePos = [4, 1.1, 4];
            for (let i = 0; i < particlePos.length; i++) {
                particlePos[i] += Math.random() * 0.5;
                scene.particles.simple(1, 'happy_villager', particlePos);
            }
        }

        //树
        scene.world.setBlocks([4, 1, 4, 4, 3, 4], false, 'oak_log');
        scene.world.setBlocks([6, 4, 2, 2, 5, 6], false, 'oak_leaves');
        scene.world.setBlocks([5, 6, 3, 3, 6, 5], false, 'oak_leaves');
        let leavesPos = [
            [5, 7, 4],
            [4, 7, 4],
            [3, 7, 4],
            [4, 7, 3],
            [4, 7, 5],
        ];
        leavesPos.forEach((block) => {
            scene.world.setBlock(block, 'oak_leaves', false);
        });
        scene.idle(30);

        //进行仪式
        scene.text(100, '§l如果放置的物品正确，此时会进行仪式\n§e§l并消耗金叶粉、树和基座上的物品').attachKeyFrame();
        //清除物品
        woodStandPos.forEach((block) => {
            scene.world.modifyBlockEntityNBT(block, (nbt) => {
                nbt.items = {
                    Items: [{ Count: 1, id: 'air' }],
                };
            });
        });
        //树
        scene.world.setBlocks([4, 1, 4, 4, 3, 4], true, 'air');
        scene.world.setBlocks([6, 4, 2, 2, 5, 6], true, 'air');
        scene.world.setBlocks([5, 6, 3, 3, 6, 5], true, 'air');
        leavesPos.forEach((block) => {
            scene.world.setBlock(block, 'air', true);
        });
        //金叶粉
        scene.world.replaceBlocks([6, 1, 2, 2, 1, 6], 'air', true);

        scene.idle(120);
        scene.text(40, '§a§l仪式结束后，会出现产物').attachKeyFrame();
        scene.world.createItemEntity([4.5, 3, 4.5], [0, 0, 0], 'naturesaura:token_joy');
    });
});
