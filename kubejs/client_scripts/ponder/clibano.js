Ponder.registry((event) => {
    event.create('forbidden_arcanus:clibano_core').scene('clibano', '炽炉', 'mierno:clibano', (scene, util) => {
        scene.showStructure(0);

        scene.text(100, '可前往「胶囊」章节获取胶囊来快速放置这个结构');
        let base1Pos = [
            [3, 1, 1],
            [3, 1, 3],
            [1, 1, 3],
            [1, 1, 1],
        ];

        base1Pos.forEach((pos) => {
            scene.world.setBlock(pos, 'forbidden_arcanus:polished_darkstone', false);
            scene.world.showSection(pos, 'down');

            scene.idle(5);
        });

        let base2Pos = [
            [3, 1, 2],
            [2, 1, 3],
            [1, 1, 2],
            [2, 1, 1],
            [2, 1, 2],
        ];

        base2Pos.forEach((pos) => {
            scene.world.setBlock(pos, 'forbidden_arcanus:polished_darkstone_bricks', false);
            scene.world.showSection(pos, 'down');

            scene.idle(5);
        });

        let middlePos = [
            [3, 2, 1],
            [3, 2, 2],
            [3, 2, 3],
            [2, 2, 3],
            [1, 2, 3],
            [1, 2, 2],
            [1, 2, 1],
        ];

        middlePos.forEach((pos) => {
            scene.world.setBlock(pos, 'forbidden_arcanus:polished_darkstone_bricks', false);
            scene.world.showSection(pos, 'down');

            scene.idle(5);
        });

        scene.world.setBlock([2, 2, 1], 'forbidden_arcanus:clibano_core', false);
        scene.world.showSection([2, 2, 1], 'down');

        let top1Pos = [
            [3, 3, 1],
            [3, 3, 3],
            [1, 3, 3],
            [1, 3, 1],
        ];

        top1Pos.forEach((pos) => {
            scene.world.setBlock(pos, 'forbidden_arcanus:polished_darkstone', false);
            scene.world.showSection(pos, 'down');

            scene.idle(5);
        });

        let top2Pos = [
            [3, 3, 2],
            [2, 3, 3],
            [1, 3, 2],
            [2, 3, 1],
            [2, 3, 2],
        ];

        top2Pos.forEach((pos) => {
            scene.world.setBlock(pos, 'forbidden_arcanus:polished_darkstone_bricks', false);
            scene.world.showSection(pos, 'down');

            scene.idle(5);
        });

        scene.text(60, '使用洁净粉末潜行右键炽炉核心').attachKeyFrame();
        scene.showControls(60, [2, 2, 1], 'right').rightClick().withItem('forbidden_arcanus:mundabitur_dust');
        scene.overlay.showOutline('red', 1, [2, 2, 1], 60);

        scene.idle(80);

        scene.world.setBlocks([4, 1, 0, 0, 3, 4], 'air', true);

        let link = scene.world.showIndependentSection([3, 4, 1, 1, 6, 3], 'down');
        scene.world.moveSection(link, [0, -3, 0], 0);
    });
});
