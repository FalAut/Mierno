BlockEvents.rightClicked("beacon", (event) => {
    const { hand, level, block, player, item } = event;
    if (hand != "MAIN_HAND" || !item.hasTag("mierno:sigil") || level.dimension != "minecraft:the_end") return;

    let counts = psuInverChestCheck(level, block.pos);
    if (!counts) return;

    player.tell(Text.translate("message.mierno.psu_inver_ritual.title").gray());
    player.tell(Text.translate("message.mierno.psu_inver_ritual.north", counts.north.toFixed(0)).red());
    player.tell(Text.translate("message.mierno.psu_inver_ritual.south", counts.south.toFixed(0)).green());
    player.tell(Text.translate("message.mierno.psu_inver_ritual.east", counts.east.toFixed(0)).aqua());
    player.tell(Text.translate("message.mierno.psu_inver_ritual.west", counts.west.toFixed(0)).yellow());
    player.tell(Text.translate("message.mierno.psu_inver_ritual.markings").lightPurple());

    if (Object.values(counts).every((count) => count == 12)) {
        player.tell(Text.translate("message.mierno.psu_inver_ritual.prepared").darkRed());
        player.tell(Text.translate("message.mierno.psu_inver_ritual.sacrifice").darkRed());
    }
});

EntityEvents.death((event) => {
    const { entity, level, source, server } = event;

    if (level.dimension != "minecraft:the_end" || !source.actual?.player) return;
    let player = source.player;

    if (entity.type == "minecraft:iron_golem") {
        let beaconPos = psuInverBeaconCheck(level, entity.block);
        if (!beaconPos) return;

        let counts = psuInverChestCheck(level, beaconPos);
        if (counts && Object.values(counts).every((count) => count == 12)) {
            spawnTrialMobs(entity.block);

            player.persistentData.putInt("trial_kill", 0);

            if (server.customBossEvents.get("mierno:trial_bar")) {
                server.customBossEvents.get("mierno:trial_bar").removePlayer(player);
            }

            let counterText = Text.translate("message.mierno.psu_inver_ritual.kill_counter", "0");
            let bar = server.customBossEvents.create("mierno:trial_bar", counterText);

            bar.addPlayer(player);
            bar.setOverlay("notched_20");

            player.sendData("show_title", { message: "message.mierno.psu_inver_ritual.start_title" });
            player.sendData("show_subtitle", { message: "message.mierno.psu_inver_ritual.start_subtitle" });

            level.entities.filterSelector("@e[type=enderman]").forEach((e) => e.discard());

            let directions = ["east", "south", "west", "north"];
            directions.forEach((direction) => level.getBlock(beaconPos).offset(direction, 5).set("air"));
            level.getBlock(beaconPos).set("air");
            entity.block.createExplosion().explosionMode("block").strength(5).causesFire(true).explode();
        }
    }

    if (entity.tags.contains("trial_mob")) {
        let trialMobs = server.entities.filterSelector("@e[tag=trial_mob]");
        let killCount = player.persistentData.getInt("trial_kill") + 1;
        player.persistentData.putInt("trial_kill", killCount);

        let bar = server.customBossEvents.get("mierno:trial_bar");
        bar.progress += 0.01;
        bar.name = Text.translate("message.mierno.psu_inver_ritual.kill_counter", killCount.toFixed(0));

        if (trialMobs.length <= 100) {
            spawnTrialMobs(entity.block);
        }

        if (killCount >= 100) {
            bar.removePlayer(player);
            trialMobs.forEach((e) => e.discard());
            player.sendData("show_title", { message: "message.mierno.psu_inver_ritual.end_title" });
            player.sendData("show_subtitle", { message: "message.mierno.psu_inver_ritual.end_subtitle" });

            player.give("mierno:fake_sigil");
        }
    }
});

EntityEvents.death("player", (event) => {
    const { player, server } = event;
    if (!player.persistentData.get("trial_kill")) return;

    const bar = server.customBossEvents.get("mierno:trial_bar");

    server.entities.filterSelector("@e[tag=trial_mob]").forEach((e) => e.discard());
    player.persistentData.remove("trial_kill");
    bar.removePlayer(player);
});
