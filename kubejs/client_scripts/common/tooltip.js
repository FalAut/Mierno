ItemEvents.tooltip((event) => {
    let shiftTooltipItems = [
        { item: 'mierno:fired_crucible', lines: 5 },
        { item: 'mierno:oak_crucible', lines: 3 },
        { item: 'mierno:ancient_aura_generator_core', lines: 6 },
        { item: 'mierno:dream_lantern', lines: 5 },
        { item: 'mierno:colossal_furnace_core', lines: 7 },
        { item: 'mierno:modular_runic_altar_core', lines: 3 },
        { item: 'mierno:terrestrial_agglomeration_crystal', lines: 3 },
        { item: 'botania:third_eye', lines: 4 },
        { item: 'mierno:memory_source_drawing_crystal_core', lines: 5 },
        { item: 'occultism:divination_rod', lines: 4 },
        { item: 'naturesaura:time_changer', lines: 5 },
        { item: 'mierno:kylin_arm', lines: 3 },
    ];

    shiftTooltipItems.forEach((shiftTooltipItem) => {
        const { item, lines } = shiftTooltipItem;

        event.addAdvanced(item, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, Text.translate('tooltip.mierno.hold_shift', Text.yellow('Shift')).gold());
            } else {
                text.add(1, Text.translate('tooltip.mierno.hold_shift', Text.white('Shift')).darkGray());

                let itemId = item.id.split(':')[1];

                for (let i = 1; i <= lines; i++) {
                    text.add(i + 1, Text.translate(`tooltip.mierno.${itemId}_${i}`).gold());
                }
            }
        });
    });

    event.addAdvancedToAll((itemStack, advanced, text) => {
        if (itemStack.item instanceof $ArmorItem) {
            text.addLast(Text.translate('tooltip.mierno.right_click_to_equip').yellow());
        }
    });

    event.add('mierno:modular_imbuement_chamber_core', [
        Text.translate('tooltip.mierno.modular_imbuement_chamber_core_1').gold(),
        Text.translate('tooltip.mierno.modular_imbuement_chamber_core_2').gold(),
    ]);
    event.add('mierno:modular_mana_pool_core', Text.translate('tooltip.mierno.modular_mana_pool_core_1').gold());
    event.add('oak_sapling', Text.translate('tooltip.mierno.oak_sapling').gold());
    event.add('mierno:oak_mortar', Text.translate('tooltip.mierno.oak_mortar').gold());
    event.add('mierno:dream_latern', Text.translate('tooltip.mierno.dream_latern').gold());
    event.add('botania:black_lotus', Text.translate('tooltip.mierno.black_lotus').gold());
    event.add(
        ['mierno:source_flower', 'mierno:flowing_source_flower'],
        [
            Text.translate('tooltip.mierno.source_flower_1').gray().italic(true),
            Text.translate('tooltip.mierno.source_flower_2').gold(),
        ]
    );
    event.add('mierno:dream_wings', Text.translate('tooltip.mierno.dream_wings').gold());
    event.add('mierno:fire_starter', Text.translate('tooltip.mierno.fire_starter').gold());

    event.add('mierno:gensousitu_bucket', [
        Text.translate('tooltip.mierno.gensousitu_bucket_1').gold(),
        Text.translate('tooltip.mierno.gensousitu_bucket_2').gold(),
    ]);
    event.add('mierno:whos_gift', Text.translate('tooltip.mierno.whos_gift').gold());

    const cobbleGenData = [
        { tier: 1, cobbleCount: 1, time: 6, maxBuffer: 64 },
        { tier: 2, cobbleCount: 2, time: 5, maxBuffer: 128 },
        { tier: 3, cobbleCount: 4, time: 4, maxBuffer: 192 },
        { tier: 4, cobbleCount: 8, time: 3, maxBuffer: 256 },
        { tier: 5, cobbleCount: 16, time: 2, maxBuffer: 512 },
        { tier: 6, cobbleCount: 32, time: 1, maxBuffer: 1024 },
    ];

    cobbleGenData.forEach((data) => {
        event.add(`mierno:cobble_gen_tier${data.tier}`, [
            Text.translate('tooltip.mierno.cobble_gen_1', data.cobbleCount.toFixed(0)).gold(),
            Text.translate('tooltip.mierno.cobble_gen_2', data.time.toFixed(0)).gold(),
            Text.translate('tooltip.mierno.cobble_gen_3', data.maxBuffer.toFixed(0)).gold(),
            Text.translate('tooltip.mierno.cobble_gen_4').green(),
        ]);
    });

    event.addAdvanced('mierno:portable_crafting_table', (item, advanced, text) => {
        text.addLast(Text.translate('tooltip.mierno.portable_crafting_table_1').gold());
        text.addLast(
            Text.translate(
                'tooltip.mierno.portable_crafting_table_2',
                Text.keybind('key.mierno.portable_crafting').green()
            ).gold()
        );
    });

    event.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.remove(1);
    });

    event.add(
        [
            'thermal:tin_ore',
            'thermal:lead_ore',
            'thermal:silver_ore',
            'thermal:nickel_ore',
            'powah:uraninite_ore_poor',
            'powah:uraninite_ore',
            'powah:uraninite_ore_dense',
        ],
        Text.translate('tooltip.mierno.overworld_ore').gold()
    );

    event.add(
        [
            'minecraft:sunflower',
            'minecraft:sugar_cane',
            'minecraft:cocoa_beans',
            'minecraft:nether_wart',
            'minecraft:glow_berries',
            'minecraft:sweet_berries',
            'minecraft:warped_fungus',
            'minecraft:crimson_fungus',
            'minecraft:brown_mushroom',
            'minecraft:red_mushroom',
            'minecraft:kelp',
            'minecraft:carrot',
            'minecraft:bamboo',
            'minecraft:string',
            'minecraft:blaze_rod',
            'minecraft:white_wool',
            'ars_nouveau:drygmy_se',
            'ars_nouveau:starbuncle_se',
            'ars_nouveau:whirlisprig_se',
            'minecraft:feather',
            'minecraft:cactus',
            'minecraft:chorus_flower',
            'minecraft:leather',
            'minecraft:egg',
            'minecraft:pumpkin_seeds',
            'minecraft:melon_seeds',
            'minecraft:snowball',
            'minecraft:spider_eye',
        ],
        Text.translate('tooltip.mierno.market_can_buy').gold()
    );

    event.add('naturesaura:animal_spawner', Text.translate('tooltip.mierno.animal_spawner').gold());
    event.add(
        'ftbquests:book',
        Text.translate('tooltip.mierno.ftbquests_book', Text.keybind('key.ftbquests.quests').green()).gray()
    );
    event.add('naturesaura:birth_spirit', Text.translate('tooltip.mierno.birth_spirit').gold());

    event.add('fluxnetworks:flux_dust', Text.translate('tooltip.mierno.flux_dust').gold());
    event.add('mierno:colorless_gem', Text.translate('tooltip.mierno.colorless_gem').gold());
    event.add('mierno:unstable_ingot', Text.translate('tooltip.mierno.unstable_ingot').gold());
    event.add('mierno:unstable_singularity', Text.translate('tooltip.mierno.unstable_singularity').gold());
    event.add('mierno:source_fluidlink', [
        Text.translate('tooltip.mierno.source_fluidlink_1').gold(),
        Text.translate('tooltip.mierno.source_fluidlink_2').gold(),
    ]);
    event.add('wizards_reborn:orbital_fluid_retainer', [
        Text.translate('tooltip.mierno.orbital_fluid_retainer_1').gold(),
        Text.translate('tooltip.mierno.orbital_fluid_retainer_2').gold(),
    ]);
    event.add('ars_nouveau:source_jar', Text.translate('tooltip.mierno.source_jar').gold());
    event.add('mierno:dark_eyes', Text.translate('tooltip.mierno.dark_eyes').gold());
    event.add('evilcraft:spiked_plate', Text.translate('tooltip.mierno.spiked_plate').gold());
    event.add('evilcraft:hardened_blood_shard', Text.translate('tooltip.mierno.hardened_blood_shard').gold());
    event.add('naturesaura:fortress_finder', Text.translate('tooltip.mierno.fortress_finder').gold());

    event.add(
        'malum:astral_weave',
        Text.translate('tooltip.mierno.spirit_furnace_product', Text.translate('entity.minecraft.ghast').green()).gold()
    );
    event.add(
        'malum:warp_flux',
        Text.translate(
            'tooltip.mierno.spirit_furnace_product',
            Text.translate('entity.minecraft.enderman').green()
        ).gold()
    );
    event.add(
        'malum:grim_talc',
        Text.translate(
            'tooltip.mierno.spirit_furnace_product',
            Text.translate('entity.minecraft.wither_skeleton').green()
        ).gold()
    );
    event.add(
        'malum:rotting_essence',
        Text.translate(
            'tooltip.mierno.spirit_furnace_product',
            Text.translate('entity.minecraft.pillager').green()
        ).gold()
    );

    event.add('evilcraft:dark_power_gem', Text.translate('tooltip.mierno.dark_power_gem').gold());
    event.add('evilcraft:vengeance_ring', [
        Text.translate('tooltip.mierno.vengeance_ring_1').gold(),
        Text.translate('tooltip.mierno.vengeance_ring_2').gold(),
    ]);

    event.add(
        [
            'ae2:calculation_processor_press',
            'ae2:engineering_processor_press',
            'ae2:logic_processor_press',
            'ae2:silicon_press',
        ],
        Text.translate('tooltip.mierno.ae2_press').gold()
    );

    event.add(['minecraft:clay_ball', 'botania:clayconia'], Text.translate('tooltip.mierno.clay_ball').gold());

    event.add('ars_nouveau:imbuement_chamber', Text.translate('tooltip.mierno.imbuement_chamber').red());
    event.add(
        'mierno:modular_alfheim_portal_core',
        Text.translate('tooltip.mierno.modular_alfheim_portal_core').gold()
    );
    event.add('evilcraft:eternal_water', Text.translate('tooltip.mierno.eternal_water').gold());

    event.add('botania:pinkinator', [
        Text.translate('tooltip.mierno.pinkinator_1').gold(),
        Text.translate('tooltip.mierno.pinkinator_2').gold(),
    ]);

    event.add('bloodmagic:altar', Text.translate('tooltip.mierno.creative_blood_drop').gold());
    event.add('bloodmagic:dislocationrune', Text.translate('tooltip.mierno.dislocationrune').gold());
    event.add('bloodmagic:accelerationrune', Text.translate('tooltip.mierno.accelerationrune').gold());
    event.add('forbidden_arcanus:xpetrified_orb', Text.translate('tooltip.mierno.xpetrified_orb').gold());
    event.add('forbidden_arcanus:aureal_bottle', Text.translate('tooltip.mierno.aureal_bottle').gold());
    event.add('forbidden_arcanus:soul', Text.translate('tooltip.mierno.soul').gold());
    event.add('forbidden_arcanus:corrupt_soul', Text.translate('tooltip.mierno.corrupt_soul').gold());
    event.add('forbidden_arcanus:enchanted_soul', Text.translate('tooltip.mierno.enchanted_soul').gold());
    event.add('mierno:blood_converter', Text.translate('tooltip.mierno.blood_converter').gold());
    event.add('forbidden_arcanus:blood_test_tube', Text.translate('tooltip.mierno.blood_test_tube').gold());
    event.add(
        'naturesaura:bottle_two_the_rebottling',
        Text.translate('tooltip.mierno.bottle_two_the_rebottling').gold()
    );
    event.add(
        [
            'forbidden_arcanus:arcane_crystal_ore',
            'forbidden_arcanus:xpetrified_ore',
            'forbidden_arcanus:runic_stone',
            'occultism:otherstone',
        ],
        Text.translate('tooltip.mierno.otherworld_ore').gold()
    );

    event.add('mierno:sun_crystal_full', Text.translate('tooltip.mierno.sun_crystal_full').gold());
    event.add('mierno:moon_stone_full', Text.translate('tooltip.mierno.moon_stone_full').gold());
    event.add('evilcraft:condensed_blood', Text.translate('tooltip.mierno.condensed_blood').gold());
    event.add(
        ['bloodmagic:ritualdiviner', 'bloodmagic:ritualdivinerdusk'],
        Text.translate('tooltip.mierno.ritualdiviner').gold()
    );
    event.add('thermal:blitz_rod', Text.translate('tooltip.mierno.blitz_rod').gold());
    event.add('thermal:basalz_rod', Text.translate('tooltip.mierno.basalz_rod').gold());
    event.add('naturesaura:gold_fiber', Text.translate('tooltip.mierno.gold_fiber').gold());
    event.add('ae2:not_so_mysterious_cube', Text.translate('tooltip.mierno.not_so_mysterious_cube').gold());
    event.add('mierno:futura_block', Text.translate('tooltip.mierno.futura_block').gold());
    event.add('thermal:rubberwood_sapling', Text.translate('tooltip.mierno.rubberwood_sapling').gold());
    event.add('minecraft:ghast_tear', Text.translate('tooltip.mierno.ghast_tear').gold());
    event.add('botania:blacker_lotus', Text.translate('tooltip.mierno.blacker_lotus').gold());
    event.add('evilcraft:vengeance_essence', Text.translate('tooltip.mierno.vengeance_essence').gold());
    event.add('evilcraft:creative_blood_drop', Text.translate('tooltip.mierno.creative_blood_drop').gold());
    event.add('forbidden_arcanus:clibano_core', Text.translate('tooltip.mierno.clibano_core').gold());
    event.add(
        ['thermal:apatite_ore', 'thermal:cinnabar_ore', 'thermal:niter_ore', 'thermal:sulfur_ore'],
        Text.translate('tooltip.mierno.mistyforest_ore').gold()
    );
    event.add(
        ['evilcraft:blood_infuser', 'evilcraft:sanguinary_environmental_accumulator', 'evilcraft:spirit_furnace'],
        Text.translate('tooltip.mierno.evilcraft_machine').gold()
    );
    event.add('evilcraft:spirit_furnace', Text.translate('tooltip.mierno.spirit_furnace').gold());
    event.add('forbidden_arcanus:stella_arcanum', Text.translate('tooltip.mierno.stella_arcanum').gold());
    event.add('mierno:tyumen_ingot', '§eEMC§r: 9,223,372,036,854,775,807');
    event.add('mekanism:ingot_steel', Text.translate('tooltip.mierno.ingot_steel').gold());
});
