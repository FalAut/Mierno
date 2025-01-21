const directions = ["east", "west", "south", "north"];
// prettier-ignore
const items = {
    east: ['minecraft:water_breathing', 'minecraft:night_vision', 'minecraft:swiftness', 'minecraft:leaping', 'minecraft:strength', 'minecraft:healing', 'minecraft:invisibility', 'minecraft:fire_resistance', 'minecraft:poison', 'minecraft:harming', 'minecraft:weakness', 'minecraft:slowness'],
    south: ['minecraft:diamond_ore', 'minecraft:lapis_ore', 'minecraft:emerald_ore', 'minecraft:redstone_ore', 'minecraft:gold_ore', 'minecraft:copper_ore', 'minecraft:iron_ore', 'minecraft:coal_ore', 'minecraft:sand', 'minecraft:gravel', 'minecraft:grass_block', 'minecraft:clay'],
    west: ['minecraft:music_disc_stal', 'minecraft:music_disc_strad', 'minecraft:music_disc_mellohi', 'minecraft:music_disc_mall', 'minecraft:music_disc_far', 'minecraft:music_disc_13', 'minecraft:music_disc_cat', 'minecraft:music_disc_chirp', 'minecraft:music_disc_blocks', 'minecraft:music_disc_ward', 'minecraft:music_disc_11', 'minecraft:music_disc_wait'],
    north: ['minecraft:glass', 'minecraft:charcoal', 'minecraft:cooked_cod', 'minecraft:cooked_chicken', 'minecraft:terracotta', 'minecraft:cooked_beef', 'minecraft:cooked_porkchop', 'minecraft:iron_ingot', 'minecraft:gold_ingot', 'minecraft:baked_potato', 'minecraft:stone', 'minecraft:green_dye']
}

function chestCheck(/** @type {Internal.Level_} */ level, /** @type {Internal.BlockPos_} */ blockPos) {
    if (!$PatchouliAPI.getMultiblock("mierno:psu_inver_ritual").validate(level, blockPos)) return;

    let counts = { east: 0, south: 0, west: 0, north: 0 };

    directions.forEach((direction) => {
        let chest = level.getBlock(blockPos).offset(direction, 5);
        chest?.inventory.allItems.forEach((item) => {
            if (direction == "east" && item == "potion" && items.east.includes(item.nbt.Potion)) counts.east++;
            if (items[direction].includes(item.id)) counts[direction]++;
        });
    });

    return counts;
}

function beaconCheck(/** @type {Internal.Level_} */ level, /** @type {Internal.BlockContainerJS_} */ block) {
    const radius = 4;
    const { x, y, z } = block;

    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dz = -radius; dz <= radius; dz++) {
                let blockPos = new BlockPos(x + dx, y + dy, z + dz);
                let block = level.getBlockState(blockPos).block;

                if (block == Blocks.BEACON) return blockPos;
            }
        }
    }
}

BlockEvents.rightClicked("beacon", (event) => {
    const { hand, level, block, player, item } = event;
    if (hand != "MAIN_HAND" || level.dimension != "minecraft:the_end") return;

    let counts = chestCheck(level, block.pos);

    if (counts) {
        player.tell("\n\nStabilization Ritual\n");
        player.tell(`§c- To the north, Children of Fire: ${counts.north} / 12`);
        player.tell(`§a- To the south, Gifts of Earth: ${counts.south} / 12`);
        player.tell(`§b- To the east, Descendants of Water: ${counts.east} / 12`);
        player.tell(`§e- To the west, Spices of Air: ${counts.west} / 12\n`);
        player.tell("Ritual Markings: Completed");

        if (counts && Object.values(counts).every((count) => count == 12)) {
            player.tell("\nEverything is prepared.\n");
            // player.tell("§4Sacrifice one who would sacrifice himself.");
            player.tell("§4在信标上献祭一只铁傀儡");
            player.tell("§4Sacrifice an Iron Golem at the Beacon");
        }
    }
});

EntityEvents.death((event) => {
    const { entity, level, source, server } = event;

    if (level.dimension != "minecraft:the_end" || !source.actual?.player) return;
    let player = source.player;

    if (entity.type == "minecraft:iron_golem") {
        let blockPos = beaconCheck(level, entity.block);
        let counts = chestCheck(level, blockPos);

        if (counts && Object.values(counts).every((count) => count == 12)) {
            directions.forEach((direction) => level.getBlock(blockPos).offset(direction, 5).set("air"));
            level.getBlock(blockPos).set("air");

            let mobs = ["zombie", "spider", "cave_spider", "witch", "zombie_villager"];

            for (let i = 0; i < 200; i++) {
                let mob = mobs[Utils.random.nextInt(0, mobs.length - 1)];
                let mobEntity = entity.block.createEntity(mob);
                mobEntity.addTag("trial_mob");
                mobEntity.x = Utils.random.nextInt(entity.x - 50, entity.x + 50);
                mobEntity.y = 65;
                mobEntity.z = Utils.random.nextInt(entity.z - 50, entity.z + 50);
                mobEntity.spawn();
            }

            server.runCommandSilent("effect give @e[tag=trial_mob] minecraft:speed infinite 4");
            player.persistentData.putInt("trial_kill", 0);
            let bar = server.customBossEvents.create("mierno:trial_bar", "Kill: 0 / 100");
            bar.addPlayer(player);
            bar.setOverlay("notched_20");

            server.runCommandSilent(`title ${player.username} title "Trial Start"`);
            server.runCommandSilent(`title ${player.username} subtitle "The Siege has begun in 'The End'"`);

            entity.block.createExplosion().explosionMode("block").strength(5).causesFire(true).explode();
        }
    }

    if (entity.tags.contains("trial_mob")) {
        let amount = player.persistentData.getInt("trial_kill");
        let bar = server.customBossEvents.get("mierno:trial_bar");

        amount++;
        player.persistentData.putInt("trial_kill", amount);
        bar.progress += 0.01;
        bar.name = `Kill: ${amount} / 100`;

        if (amount >= 100) {
            bar.removePlayer(player);
            server.runCommandSilent("kill @e[tag=trial_mob]");
            server.runCommandSilent(`title ${player.username} title "Your Sigil has stabilized"`);
            server.runCommandSilent(`title ${player.username} subtitle "The Siege has ended in 'The End'"`);

            player.give("mierno:fake_sigil");

            player.sendData("game_pass", { playtime: player.stats.playTime });
        }
    }
});

const $FireworkRocketEntity = Java.loadClass("net.minecraft.world.entity.projectile.FireworkRocketEntity");

PlayerEvents.inventoryChanged("mierno:fake_sigil", (event) => {
    const { player, level } = event;
    let pos = player.blockPosition();
    player.sendData("game_pass", { playtime: player.stats.playTime, playerName: player.username });

    // prettier-ignore
    let fireworkVariations = [
        // 🌈 彩虹大球 + 多层爆炸 + 轨迹 + 闪烁
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:1b,Colors:[I;16711680,16744448,16776960,65280,255,16711935],FadeColors:[I;16777215],Trail:1b,Flicker:1b},{Type:4b,Colors:[I;16766720],FadeColors:[I;16776960],Trail:1b,Flicker:1b}]}}"
        ),

        // 💜💙 紫蓝星形 + 渐变 + 轨迹 + 闪烁
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:2b,Colors:[I;10494192,255],FadeColors:[I;16738740,65280],Trail:1b,Flicker:1b}]}}"
        ),

        // 🌟 金色超级爆炸 + 轨迹 + 闪烁
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:4b,Colors:[I;16766720,16750848],FadeColors:[I;16776960,16711680],Trail:1b,Flicker:1b}]}}"
        ),

        // 🍀 绿色螺旋 + 混色渐变 + 轨迹
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:3b,Colors:[I;65280,16750848],FadeColors:[I;255,16711680],Trail:1b}]}}"
        ),

        // 🔥 红黄渐变小球 + 轨迹
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:0b,Colors:[I;16711680],FadeColors:[I;16776960],Trail:1b}]}}"
        ),

        // 💖 青色+粉色混合大球 + 轨迹 + 闪烁
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:1b,Colors:[I;65480,16711935],FadeColors:[I;16744448],Trail:1b,Flicker:1b}]}}"
        ),

        // 🌈 五彩爆炸型 + 多层烟花
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:4b,Colors:[I;16711680,65280,255,16711935],Trail:1b,Flicker:1b},{Type:0b,Colors:[I;16711680,255,16777215],FadeColors:[I;16766720],Trail:1b}]}}"
        ),

        // ⚪ 纯白色小球 + 轨迹 + 渐变紫色
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:0b,Colors:[I;16777215],FadeColors:[I;10494192],Trail:1b}]}}"
        ),

        // 🌠 炫彩超多层烟花
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:0b,Colors:[I;16711680],Trail:1b},{Type:3b,Colors:[I;65280],FadeColors:[I;255],Trail:1b,Flicker:1b},{Type:2b,Colors:[I;255,16711935],FadeColors:[I;16750848],Trail:1b,Flicker:1b}]}}"
        ),

        // 🍊 紫色+橙色星形 + 轨迹 + 渐变
        Item.of(
            "minecraft:firework_rocket",
            "{Fireworks:{Flight:0.5b,Explosions:[{Type:2b,Colors:[I;10494192,16750848],FadeColors:[I;16766720],Trail:1b,Flicker:1b}]}}"
        ),
    ];

    for (let i = 0; i < fireworkVariations.length; i++) {
        let firework = new $FireworkRocketEntity(
            level,
            pos.x + Math.random() * 20 - 10,
            pos.y + 1,
            pos.z + Math.random() * 20 - 10,
            fireworkVariations[i]
        );

        level.addFreshEntity(firework);
    }
});

NetworkEvents.dataReceived("converted_time", (event) => {
    const { server, data } = event;

    let playerName = Text.gold(data.playerName).bold();
    let convertedTime = Text.aqua(data.converted_time).bold();
    let text = Text.translate("message.mierno.game_pass", playerName, convertedTime).green().bold();

    server.tell(text);
});
