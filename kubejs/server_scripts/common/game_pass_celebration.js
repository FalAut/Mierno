PlayerEvents.inventoryChanged('mierno:fake_sigil', (event) => {
    const { player, level } = event;
    player.sendData('game_pass', { playtime: player.stats.playTime, playerName: player.username });

    const fireworks = [
        // 🌈 彩虹大球 + 多层爆炸 + 轨迹 + 闪烁
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:1b,Colors:[I;16711680,16744448,16776960,65280,255,16711935],FadeColors:[I;16777215],Trail:1b,Flicker:1b},{Type:4b,Colors:[I;16766720],FadeColors:[I;16776960],Trail:1b,Flicker:1b}]}}'
        ),

        // 💜💙 紫蓝星形 + 渐变 + 轨迹 + 闪烁
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:2b,Colors:[I;10494192,255],FadeColors:[I;16738740,65280],Trail:1b,Flicker:1b}]}}'
        ),

        // 🌟 金色超级爆炸 + 轨迹 + 闪烁
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:4b,Colors:[I;16766720,16750848],FadeColors:[I;16776960,16711680],Trail:1b,Flicker:1b}]}}'
        ),

        // 🍀 绿色螺旋 + 混色渐变 + 轨迹
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:3b,Colors:[I;65280,16750848],FadeColors:[I;255,16711680],Trail:1b}]}}'
        ),

        // 🔥 红黄渐变小球 + 轨迹
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:0b,Colors:[I;16711680],FadeColors:[I;16776960],Trail:1b}]}}'
        ),

        // 💖 青色+粉色混合大球 + 轨迹 + 闪烁
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:1b,Colors:[I;65480,16711935],FadeColors:[I;16744448],Trail:1b,Flicker:1b}]}}'
        ),

        // 🌈 五彩爆炸型 + 多层烟花
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:4b,Colors:[I;16711680,65280,255,16711935],Trail:1b,Flicker:1b},{Type:0b,Colors:[I;16711680,255,16777215],FadeColors:[I;16766720],Trail:1b}]}}'
        ),

        // ⚪ 纯白色小球 + 轨迹 + 渐变紫色
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:0b,Colors:[I;16777215],FadeColors:[I;10494192],Trail:1b}]}}'
        ),

        // 🌠 炫彩超多层烟花
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:0b,Colors:[I;16711680],Trail:1b},{Type:3b,Colors:[I;65280],FadeColors:[I;255],Trail:1b,Flicker:1b},{Type:2b,Colors:[I;255,16711935],FadeColors:[I;16750848],Trail:1b,Flicker:1b}]}}'
        ),

        // 🍊 紫色+橙色星形 + 轨迹 + 渐变
        Item.of(
            'minecraft:firework_rocket',
            '{Fireworks:{Flight:0.5b,Explosions:[{Type:2b,Colors:[I;10494192,16750848],FadeColors:[I;16766720],Trail:1b,Flicker:1b}]}}'
        ),
    ];

    for (let i = 0; i < fireworks.length; i++) {
        level.addFreshEntity(
            new $FireworkRocketEntity(
                level,
                player.blockPosition().x + Math.random() * 20 - 10,
                player.blockPosition().y + 1,
                player.blockPosition().z + Math.random() * 20 - 10,
                fireworks[i]
            )
        );
    }
});
