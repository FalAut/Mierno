StartupEvents.postInit((event) => {
    new $BasicAuraType(
        new ResourceLocation('mierno', 'mist'),
        $ResourceKey.create($ResourceKey.createRegistryKey('dimension_type'), 'mierno:misty_forest'),
        0xb0c4de,
        0
    ).register();

    new $BasicAuraType(
        new ResourceLocation('mierno', 'heterogeneous'),
        $ResourceKey.create($ResourceKey.createRegistryKey('dimension_type'), 'mierno:otherworld'),
        0x3e5b6d,
        0
    ).register();
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
