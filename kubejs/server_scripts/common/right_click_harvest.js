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
