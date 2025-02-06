Ponder.registry((event) => {
    //修改祭坛物品
    function ModifyAltarItem(scene, input) {
        scene.world.modifyBlockEntityNBT([4, 2, 4], (nbt) => {
            nbt.items = {
                Items: [{ Count: 1, id: input }],
            };
        });
    }

    //模拟祭坛配方
    function AltarRecipe(scene, input, output) {
        scene.showControls(20, [4.5, 2.5, 4.5], 'right').rightClick().withItem(input);
        scene.idle(10);
        ModifyAltarItem(scene, input);
        scene.idle(60);
        scene.particles.simple(1, 'explosion', [4.5, 3, 4.5]).scale(0.7);
        ModifyAltarItem(scene, output);
    }

    //第一个场景 - 自然祭坛
    event
        .create([
            'naturesaura:nature_altar',
            'naturesaura:conversion_catalyst',
            'naturesaura:crushing_catalyst',
            'mierno:nether_catalyst',
            'mierno:end_catalyst',
        ])
        .scene('nature_altar', '自然祭坛', 'mierno:nature_altar', (scene, util) => {
            scene.scaleSceneView(0.8);
            scene.showStructure();

            //文字 - 祭坛搭建完成后，会缓慢吸收周围的灵气，并存入自然祭坛
            scene.text(40, '祭坛搭建完成后，会缓慢吸收周围的灵气，并存入自然祭坛').colored('green').attachKeyFrame();
            scene.idle(50);

            //文字 - 将需要灌注的物品放入自然祭坛，若自然祭坛存有足够的灵气，则会将其中的物品进行灵气灌注
            scene
                .text(100, '将需要灌注的物品放入自然祭坛，若自然祭坛存有足够的灵气，则会将其中的物品进行灵气灌注')
                .colored('green')
                .attachKeyFrame();

            //铁锭→灌注铁锭
            AltarRecipe(scene, 'iron_ingot', 'naturesaura:infused_iron');
            scene.idle(40);
            ModifyAltarItem(scene, 'air');

            //文字 - 可在这四个位置放置催化器
            scene.text(60, '可在这四个位置放置催化器').colored('green').attachKeyFrame();
            //催化器
            let catalystPos = [
                [6, 3, 2],
                [2, 3, 2],
                [2, 3, 6],
                [6, 3, 6],
            ];
            catalystPos.forEach((block) => {
                scene.world.setBlock(block, 'naturesaura:conversion_catalyst', false);
                scene.overlay.showOutline('red', 1, block, 20);
                scene.idle(20);
                scene.world.setBlock(block, 'air', false);
            });

            //文字 - 放置催化剂后，自然祭坛会有更多的配方
            scene.text(200, '放置催化剂后，自然祭坛会有更多的配方').colored('green').attachKeyFrame();
            //嬗变催化器 木炭→煤炭
            scene.world.setBlock([6, 3, 6], 'naturesaura:conversion_catalyst', false);
            AltarRecipe(scene, 'charcoal', 'coal');
            scene.idle(40);
            ModifyAltarItem(scene, 'air');
            //崩坏催化器 甘蔗→糖
            scene.world.setBlock([2, 3, 2], 'naturesaura:crushing_catalyst', false);
            AltarRecipe(scene, 'sugar_cane', 'sugar');
        });
});
