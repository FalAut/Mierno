LoquatEvents.playerEnteredArea((event) => {
    const { area, player, areaManager } = event;
    const { tags } = area;
    if (player.spectator) return;
    let startRoom = areaManager.byTag("start_room").findFirst().orElse(null);

    if (tags.contains("maze") && !tags.contains("start_room") && !tags.contains("end_room")) {
        player.tell(Text.translate("message.mierno.enter_maze").gray());
        player.tell(Text.translate("message.mierno.maze_beginning_1").gold());
        player.tell(Text.translate("message.mierno.maze_beginning_2").gold());
        player.tell(Text.translate("message.mierno.maze_beginning_3").gold());
        player.tell(Text.translate("message.mierno.maze_beginning_4").gold());

        player.teleportTo(startRoom.center.x(), startRoom.center.y(), startRoom.center.z());
    }

    if (tags.contains("end_room")) {
        player.tell(Text.translate("message.mierno.end_room_1").gold());
        player.tell(Text.translate("message.mierno.end_room_2").gold());
        player.tell(Text.translate("message.mierno.end_room_3").gold());
    }
});

ItemEvents.rightClicked((event) => {
    const { item, hand, level, player } = event;
    if (item != "ae2:meteorite_compass" || hand != "MAIN_HAND" || level.dimension != "mierno:misty_forest") return;
    player.tell(Text.translate("message.mierno.locating_maze").gold());

    const playerPos = player.blockPosition();
    const closestMaze = LoquatAreaManager.of(level)
        .byTag("maze")
        .min((a, b) => {
            const distA = Math.sqrt(Math.pow(a.center.x() - playerPos.x, 2) + Math.pow(a.center.z() - playerPos.z, 2));
            const distB = Math.sqrt(Math.pow(b.center.x() - playerPos.x, 2) + Math.pow(b.center.z() - playerPos.z, 2));
            console.log(distA);
            console.log(distB);
            return distA - distB;
        })
        .orElse(null);

    if (closestMaze) {
        level.setBlock(
            new BlockPos(closestMaze.center.x(), closestMaze.center.y() - 3, closestMaze.center.z()),
            Block.getBlock("ae2:mysterious_cube").defaultBlockState(),
            3
        );
        player.tell(Text.translate("message.mierno.maze_locating_success").green());
    } else {
        player.tell(Text.translate("message.mierno.maze_locating_fail").red());
    }
});

BlockEvents.rightClicked((event) => {
    const { hand, block, level, player } = event;

    if (
        block != "minecraft:player_wall_head" ||
        block.entityData.SkullOwner.getString("Name") != "Fa1Aut" ||
        hand != "MAIN_HAND" ||
        level.dimension != "mierno:misty_forest"
    ) {
        return;
    }

    let areas = LoquatAreaManager.of(level).byPosition(block.pos);

    areas.forEach((area) => {
        if (area.tags.contains("end_room")) {
            let earthPos = getFirstBlockAbove(level, player.blockPosition());
            player.teleportTo(earthPos.x, earthPos.y, earthPos.z);

            player.give(Item.of("tiab:time_in_a_bottle", "{storedTime:622080000,totalAccumulatedTime:622080000}"));
            player.give("botania:blacker_lotus");
            player.give(Item.of("botania:overgrowth_seed", 64));
        }
    });
});

BlockEvents.broken((event) => {
    const { block, level } = event;

    if (block == "ae2:mysterious_cube") {
        let areas = LoquatAreaManager.of(level).byPosition(block.pos);
        areas.forEach((area) => {
            if (area.tags.contains("maze")) {
                event.cancel();
            }
        });
    }
});
