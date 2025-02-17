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

StartupEvents.registry('mob_effect', (event) => {
    event
        .create('mierno:crazy_cocktails')
        .category('neutral')
        .effectTick((entity, lvl) => {
            let effects = entity.server.registryAccess().registryOrThrow($ResourceKey.createRegistryKey('mob_effect'));

            effects.forEach((/**@type {Internal.MobEffect} */ effect) => {
                if (!effect.class.toString().includes('minecraft')) return;

                entity.potionEffects.add(effect, 100);
            });
        })
        .color(Color.WHITE);
});

StartupEvents.registry('potion', (event) => {
    // event.create('mierno:crazy_cocktails').effect(crazyCocktailsEffect, 60).createObject();
    event.createCustom('mierno:crazy_cocktails', () =>
        new $PotionBuilder('mierno:crazy_cocktails').effect('mierno:crazy_cocktails', 300).createObject()
    );
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
