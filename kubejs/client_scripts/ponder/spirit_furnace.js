Ponder.registry((event) => {
    event
        .create('evilcraft:spirit_furnace')
        .scene('spirit_furnace', '灵魂炉', 'mierno:spirit_furnace', (scene, util) => {
            scene.showStructure(0);
            scene.setSceneOffsetY(-1);

            scene.text(20, '灵魂炉需要一个多方块结构才能运作').attachKeyFrame();
            scene.idle(40);
            scene.text(200, '使用沾满血的暗黑砖搭建一个中空的结构体').attachKeyFrame();

            for (let y = 1; y <= 4; y++) {
                for (let z = 5; z >= 3; z--) {
                    for (let x = 3; x <= 5; x++) {
                        scene.world.showSection([x, y, z], 'down');
                        scene.idle(3);
                    }
                }
            }
            scene.idle(20);

            scene.text(60, '将灵魂炉放在任意一面', [4, 2, 3]).attachKeyFrame();
            scene.overlay.showOutline('red', 1, [4, 2, 3], 60);
            scene.idle(80);

            scene.text(20, '灵魂炉处可用管道连接', [4, 2, 2]);
            scene.world.showSection([4, 0, 2, 4, 2, 2], 'up');
            scene.overlay.showOutline('red', 1, [4, 2, 2], 20);
            scene.idle(40);

            scene.text(60, '根据永恒灵魂箱中生物的体型，我们需要更改灵魂炉的大小').attachKeyFrame();
            scene.idle(80);
            scene
                .text(
                    60,
                    '比如永恒灵魂箱中的生物为掠夺者，因为它的高度为2格，则我们需要3x4x3大小的灵魂炉，也就是结构体的中空为2格'
                )
                .attachKeyFrame();
            scene.text(60, '现在的大小刚刚好', [3, 4, 5]);
            scene.idle(80);

            scene
                .text(
                    60,
                    '若永恒灵魂箱中的生物为凋灵骷髅或末影人，因为它们的高度为2-3格，则我们需要3x5x3大小的灵魂炉，也就是结构体的中空为3格'
                )
                .attachKeyFrame();
            scene.text(60, '此时我们需要增加一层', [3, 4, 5]);
            scene.world.destroyBlock([4, 4, 4]);
            scene.idle(20);
            scene.world.setBlocks([3, 5, 3, 5, 5, 5], false, 'evilcraft:dark_blood_brick');
            scene.world.modifyBlocks([3, 5, 3, 5, 5, 5], (curState) => curState.with('active', 'true'), false);
            scene.world.showSection([3, 5, 3, 5, 5, 5], 'up');
            scene.idle(80);

            scene
                .text(200, '若永恒灵魂箱中的生物为恶魂，此时我们需要6x6x6大小的灵魂炉，也就是结构体的中空为4x4')
                .attachKeyFrame();
            scene.world.hideSection([5, 1, 2, 3, 5, 5], 'down');
            scene.idle(40);
            scene.world.setBlocks([7, 0, 2, 2, 6, 7], false, 'evilcraft:dark_blood_brick');
            scene.world.setBlock([5, 2, 2], 'evilcraft:spirit_furnace', false);
            scene.world.modifyBlocks([7, 0, 2, 2, 6, 7], (curState) => curState.with('active', 'true'), false);
            scene.world.showSection([7, 0, 2, 2, 6, 7], 'up');
        });
});
