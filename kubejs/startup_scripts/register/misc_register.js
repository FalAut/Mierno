NaturesAuraEvents.init((event) => {
    event.custom('mierno:mist', 'mierno:misty_forest', 0xb0c4de);
    event.custom('mierno:heterogeneous', 'mierno:otherworld', 0x3e5b6d);
});

StartupEvents.registry('enchantment', (event) => {
    event.create('mierno:activate');
    event.create('mierno:undying').armor();
    event.create('mierno:last_stand').armor().maxLevel(2);
});

StartupEvents.postInit((event) => {
    $CustomPortalBuilder
        .beginPortal()
        ['frameBlock(net.minecraft.resources.ResourceLocation)']('minecraft:grass_block')
        .destDimID('mierno:misty_forest')
        .customPortalBlock(Block.getBlock('mierno:misty_forest_portal'))
        .tintColor(255, 255, 255)
        .flatPortal()
        .forcedSize(2, 2)
        .lightWithItem('debug_stick')
        .onlyLightInOverworld()
        .registerPortal();
});
