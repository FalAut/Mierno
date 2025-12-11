ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;
    const DURATION = 100;

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:earth_essence',
            'ars_nouveau:air_essence',
            'ars_nouveau:abjuration_essence',
        ])
        .outputItems('ars_nouveau:conjuration_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:fire_essence',
            'ars_nouveau:water_essence',
            'ars_nouveau:abjuration_essence',
        ])
        .outputItems('ars_nouveau:manipulation_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom',
            'botania:rune_earth',
        ])
        .outputItems('ars_nouveau:earth_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom',
            'botania:rune_fire',
        ])
        .outputItems('ars_nouveau:fire_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom',
            'botania:rune_water',
        ])
        .outputItems('ars_nouveau:water_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom',
            'botania:rune_air',
        ])
        .outputItems('ars_nouveau:air_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            '#minecraft:arrows',
            'ars_nouveau:source_gem',
            'ars_nouveau:wilden_spike',
            'ars_nouveau:air_essence',
        ])
        .outputItems('ars_nouveau:pierce_arrow')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems(['#minecraft:arrows', 'ars_nouveau:source_gem', 'minecraft:diamond', 'ars_nouveau:air_essence'])
        .outputItems('ars_nouveau:amplify_arrow')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            '#minecraft:arrows',
            'ars_nouveau:source_gem',
            'ars_nouveau:wilden_horn',
            'ars_nouveau:air_essence',
        ])
        .outputItems('ars_nouveau:split_arrow')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            '#minecraft:arrows',
            'ars_nouveau:source_gem',
            'ars_nouveau:wilden_horn',
            'ars_nouveau:air_essence',
        ])
        .outputItems('ars_nouveau:split_arrow')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems(['4x occultism:otherworld_essence', '4x occultism:iesnium_ingot', 'occultism:spirit_attuned_gem'])
        .outputItems('mierno:soul_gem')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems(['3x ars_nouveau:sourceberry_bush', 'minecraft:emerald'])
        .outputItems('mierno:source_emerald')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'ars_nouveau:source_gem',
            'ars_nouveau:magebloom_fiber',
            'ars_nouveau:magebloom',
            'botania:rune_mana',
        ])
        .outputItems('ars_nouveau:abjuration_essence')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems(['botania:shimmerrock', 'botania:elementium_ingot', 'botania:pixie_dust', 'botania:dragonstone'])
        .outputItems('ars_nouveau:source_gem')
        .duration(DURATION);

    mierno
        .modular_imbuement_chamber()
        .inputItems([
            'botania:pixie_dust',
            'botania:elementium_ingot',
            'minecraft:nether_star',
            'botania:dragonstone',
            'ars_nouveau:source_gem',
        ])
        .outputItems('mierno:memory_source_gem')
        .duration(DURATION);
});
