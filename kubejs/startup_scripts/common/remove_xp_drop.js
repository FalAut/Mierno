ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$BreakEvent', (event) => {
    let removeXPDropBlocks = [
        'minecraft:diamond_ore',
        'minecraft:coal_ore',
        'minecraft:emerald_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'minecraft:nether_quartz_ore',
    ];
    if (removeXPDropBlocks.includes(event.state.block.id)) {
        event.setExpToDrop(0);
    }
});
