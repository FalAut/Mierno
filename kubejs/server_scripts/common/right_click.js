BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, "mierno:oak_crucible", "leaves", "water");
    handleCrucibleInteraction(event, "mierno:fired_crucible", "mierno:fired_crucible_fuel", "lava");
});

BlockEvents.rightClicked("composter", (event) => {
    const { block, hand } = event;
    if (hand != "MAIN_HAND") return;

    const compostLevel = block.blockState.getValue(BlockProperties.LEVEL_COMPOSTER);

    if (compostLevel == 8) {
        block.popItemFromFace("7x bone_meal", "up");
    }
});

BlockEvents.rightClicked("white_concrete", (event) => {
    const { hand, block, player, level } = event;
    if (hand != "MAIN_HAND") return;

    let dreamTree = $PatchouliAPI.getMultiblock("mierno:first_tree");

    if (dreamTree.validate(level, block.pos, "none")) {
        dreamTree.simulate(level, block.pos, "none", false).second.forEach((result) => {
            if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;

            level.destroyBlock(result.worldPosition, false);
        });
        block.popItemFromFace("oak_sapling", "up");
        player.swing();
    }
});

BlockEvents.rightClicked((event) => {
    const { hand } = event;
    if (hand != "MAIN_HAND") return;

    if (item == "mierno:source_flower") {
        if (!block.hasTag("minecraft:dirt")) {
            player.inventoryMenu.broadcastFullState();
            event.cancel();
        }
    }
});
BlockEvents.rightClicked((event) => {
    const { hand, level, block, item, player, server } = event;
    if (hand != "MAIN_HAND") return;

    let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();
    let foundThirdEye = curiosInventory.equippedCurios.allItems.some((item) => item == "botania:third_eye");
    let structureTemplate = server.structureManager.get("mierno:demons_dream").get();
    let otherworld = server.getLevel("mierno:otherworld");

    if (
        level.dimension == "minecraft:the_nether" &&
        block.hasTag("minecraft:beds") &&
        foundThirdEye &&
        item == "naturesaura:token_terror"
    ) {
        player.swing();
        structureTemplate.placeInWorld(
            otherworld,
            block.pos,
            block.pos,
            new $StructurePlaceSettings(),
            level.random,
            2
        );
        player.teleportTo("mierno:otherworld", block.pos.x + 2, block.pos.y + 2, block.pos.z + 2, 0, 0);
        player.potionEffects.add("darkness", 100);
        player.potionEffects.add("nausea", 200);
    }
});

BlockEvents.rightClicked("mierno:colossal_furnace_core", (event) => {
    const { block, player, item, level } = event;
    if (item != "mierno:colossal_furnace_proxy") return;

    let controller = $IMultiController.ofController(level, block.pos).orElse(null);

    if (controller != null && item.count >= 26) {
        controller.getPattern().autoBuild(player, new $MultiblockState(level, block.pos));
    }
});

BlockEvents.rightClicked("botania:alfheim_portal", (event) => {
    const { hand, item, player } = event;
    if (hand != "MAIN_HAND" || item != "tiab:time_in_a_bottle") return;

    player.setStatusMessage(Text.translate("tooltip.mierno.alfheim_portal").darkRed());
    event.cancel();
});

BlockEvents.rightClicked((event) => {
    const { block, player, level } = event;
    if (!block.hasTag("minecraft:crops")) return;
    let blockState = level.getBlockState(block.pos);
    let cropBlock = blockState.block;

    if (cropBlock.isMaxAge(blockState)) {
        let loot = $Block.getDrops(blockState, level, block.pos, null, player, player.mainHandItem);
        let seedYeeted = false;
        for (let i in loot) {
            if (loot[i].id == cropBlock.getCloneItemStack(level, block.pos, blockState).id) {
                loot[i].count--;
                seedYeeted = true;
                break;
            }
        }
        loot.forEach((item) => {
            $Block.popResource(level, block.pos, item);
        });
        if (seedYeeted) {
            block.set(block.id, { age: "0" });
            level.playSound(null, block.x, block.y, block.z, "block.crop.break", "blocks", 1, 1);
        } else {
            level.destroyBlock(block.pos, true, null, 32);
        }
        player.swing();
        event.cancel();
    }
});

ItemEvents.rightClicked("mierno:whos_gift", (event) => {
    const { item, player } = event;

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
});

ItemEvents.rightClicked("mierno:dream_lantern", (event) => {
    const { player, level } = event;

    if (player.lookAngle.y() == 1) {
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
});

ItemEvents.rightClicked("mierno:portable_crafting_table", (event) => {
    const { player } = event;

    openCraftingMenu(player);
    player.swing();
});
