Ponder.registry((ponder) => {
    ponder
        .create('forbidden_arcanus:hephaestus_forge')
        .scene('hephaestus_forge', '赫菲斯托斯锻炉', 'mierno:hephaestus_forge', (scene, util) => {
            scene.showStructure();
            scene.scaleSceneView(0.8);
            scene.idle(20);

            scene.text(200, '可使用「多方块建造工具」来快速放置这个结构');
            scene.world.hideSection([0, 1, 0, 9, 5, 9], 'down');
            scene.idle(20);

            scene.text(30, '神秘雕纹磨制暗黑石', [4, 1, 4]).attachKeyFrame();
            let positions = [
                [4, 1, 1],
                [6, 1, 2],
                [2, 1, 2],
                [7, 1, 4],
                [1, 1, 4],
                [6, 1, 6],
                [2, 1, 6],
                [4, 1, 7],
                [4, 1, 4],
            ];
            positions.forEach((pos) => scene.world.showSection(pos, 'up'));
            scene.idle(60);

            [
                [4, 1, 3],
                [5, 1, 4],
                [3, 1, 4],
                [4, 1, 5],
            ].forEach((pos) => {
                scene.world.showSection(pos, 'up');
            });
            scene.text(35, '雕纹神秘磨制暗黑石', [4, 1, 5]).attachKeyFrame();
            scene.idle(60);

            scene.world.showSection([0, 1, 0, 9, 1, 9], 'up');
            scene.text(35, '磨制暗黑石', [1, 1, 7]).attachKeyFrame();
            scene.idle(60);

            scene.text(35, '锻造台', [5.5, 1, 5.5]).attachKeyFrame();
            scene.world.setBlock([4, 2, 4], 'minecraft:smithing_table', false);
            scene.idle(5);
            scene.world.showSection([4, 2, 4], 'down');
            scene.idle(35);
            scene.text(30, '使用洁净粉末潜行右键锻造台').attachKeyFrame();
            scene.overlay.showOutline('red', 1, [4, 2, 4], 30);
            scene.idle(5);
            scene
                .showControls(30, [5.5, 1.5, 5.5], 'right')
                .rightClick()
                .whileSneaking()
                .withItem('forbidden_arcanus:mundabitur_dust');
            scene.idle(20);

            scene.world.createEntity('forbidden_arcanus:crimson_lightning_bolt', [5, 3, 5]);
            scene.idle(5);
            scene.world.setBlock([4, 2, 4], 'forbidden_arcanus:hephaestus_forge', true);
            scene.idle(30);

            scene.text(60, '合成材料需要放置在暗黑石基座上，基座可以放置在这些位置上').attachKeyFrame();
            let pedestalPos = [
                [6, 2, 6],
                [4, 2, 7],
                [2, 2, 6],
                [1, 2, 4],
                [2, 2, 2],
                [4, 2, 1],
                [6, 2, 2],
                [7, 2, 4],
            ];
            pedestalPos.forEach((pos) => {
                scene.world.setBlock(pos, 'forbidden_arcanus:darkstone_pedestal', true);
                scene.world.showSection(pos, 'up');
                scene.idle(5);
            });

            pedestalPos.forEach((pos) => {
                scene.world.modifyBlockEntityNBT(pos, (nbt) => {
                    nbt.ItemHeight = 120;
                    nbt.Stack = { Count: 1, id: 'forbidden_arcanus:xpetrified_orb' };
                });
                scene.idle(5);
            });

            scene.idle(20);

            scene
                .text(60, '基座所在的位置也可以放置神秘水晶方尖碑，它们可为赫菲斯托斯锻炉缓慢地恢复辉光能量')
                .attachKeyFrame();

            scene.world.setBlocks([4, 2, 7, 4, 4, 7], 'forbidden_arcanus:arcane_crystal_obelisk', true);
            scene.world.modifyBlock([4, 2, 7], (curState) => curState.with('part', 'lower'), false);
            scene.world.modifyBlock([4, 3, 7], (curState) => curState.with('part', 'middle'), false);
            scene.world.modifyBlock([4, 4, 7], (curState) => curState.with('part', 'upper'), false);
            scene.world.showSection([4, 2, 7, 4, 4, 7], 'up');
            scene.idle(80);

            scene.text(100, '在放置所需合成材料后，使用锻造锤右键锻台来启动仪式').attachKeyFrame();
            scene.world.modifyBlockEntityNBT([4, 2, 4], (nbt) => {
                nbt.Inventory = { Items: [{ Count: 1, Slot: 4, id: 'minecraft:diamond' }], Size: 9 };
            });
            scene
                .showControls(100, [5.5, 1.5, 5.5], 'right')
                .rightClick()
                .withItem('#forbidden_arcanus:blacksmith_gavel');
        });
});
