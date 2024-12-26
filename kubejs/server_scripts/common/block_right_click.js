// 坩埚
BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, "mierno:oak_crucible", "leaves", "water");
    handleCrucibleInteraction(event, "mierno:fired_crucible", "mierno:fired_crucible_fuel", "lava");
});

// 堆肥桶
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
    const { hand, level, block, item, player, server } = event;
    if (hand != "MAIN_HAND") return;

    if (item == "mierno:source_flower") {
        if (!block.hasTag("minecraft:dirt")) {
            player.inventoryMenu.broadcastFullState();
            event.cancel();
        }
    }

    let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();
    let foundThirdEye = curiosInventory.equippedCurios.allItems.some((item) => item == "botania:third_eye");
    const structureTemplate = server.structureManager.get("mierno:demons_dream").get();
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
