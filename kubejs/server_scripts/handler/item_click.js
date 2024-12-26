ItemEvents.rightClicked((event) => {
    const { item, player, level } = event;

    if (item == "mierno:whos_gift") {
        player.give("iron_block");
        player.give("gold_block");
        player.give("copper_block");
        player.give("coal_block");
        player.give("redstone_block");
        player.give("lapis_block");
        player.give("diamond_block");
        player.give("emerald_block");

        item.count--;
        player.swing();
    }

    if (item == "mierno:dream_lantern" && player.lookAngle.y() == 1) {
        const /**@type {Internal.ServerPlayer} */ serverPlayer = player;

        if (serverPlayer.respawnPosition) {
            const { x, y, z } = serverPlayer.getRespawnPosition();
            const respawnDimension = serverPlayer.getRespawnDimension().location();

            serverPlayer.teleportTo(respawnDimension, x, y, z, 0, 0);
        } else {
            const { x, y, z } = level.getSharedSpawnPos();

            serverPlayer.teleportTo("overworld", x, y, z, 0, 0);
        }
    }

    if (item == "mierno:portable_crafting_table") {
        openCraftingMenu(player);
        player.swing();
    }
});
