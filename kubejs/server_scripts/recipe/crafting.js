ServerEvents.recipes((event) => {
    const { kubejs, minecraft } = event.recipes;

    minecraft.smelting('ad_astra:etrium_ingot', 'mierno:raw_etrium');
    minecraft.smelting('ad_astra:etrium_ingot', 'mierno:glacio_etrium_ore');

    function fourShaped(/**@type  {OutputItem_} */ output, /**@type  {InputItem_} */ input) {
        kubejs.shaped(output, ['AA', 'AA'], {
            A: input,
        });
    }

    fourShaped('forbidden_arcanus:dark_nether_star_block', 'forbidden_arcanus:dark_nether_star');
    fourShaped('bloodmagic:dungeon_polished', 'bloodmagic:dungeon_stone');

    function fullShaped(/**@type  {OutputItem_} */ output, /**@type  {InputItem_} */ input, disassemble) {
        kubejs.shaped(output, ['AAA', 'AAA', 'AAA'], {
            A: input,
        });

        if (disassemble) kubejs.shapeless(Item.of(input).withCount(9), output);
    }

    fullShaped('mierno:mana_string_block', 'botania:mana_string', true);
    fullShaped('mierno:spirit_attuned_gem_block', 'occultism:spirit_attuned_gem', true);
    fullShaped('minecraft:skeleton_skull', 'minecraft:bone_block');
    fullShaped('ad_astra:etrium_ingot', 'ad_astra:etrium_nugget', true);
    fullShaped('ad_astra:etrium_block', 'ad_astra:etrium_ingot', true);

    event.custom({
        type: 'functionalstorage:custom_compacting',
        higher_input: {
            count: 1,
            item: 'forbidden_arcanus:corrupt_soul',
        },
        lower_input: {
            count: 5,
            item: 'forbidden_arcanus:soul',
        },
    });

    event.custom({
        type: 'functionalstorage:custom_compacting',
        higher_input: {
            count: 1,
            item: 'forbidden_arcanus:enchanted_soul',
        },
        lower_input: {
            count: 2,
            item: 'forbidden_arcanus:corrupt_soul',
        },
    });

    event.custom({
        type: 'functionalstorage:custom_compacting',
        higher_input: {
            count: 1,
            item: 'forbidden_arcanus:enchanted_soul',
        },
        lower_input: {
            count: 10,
            item: 'forbidden_arcanus:soul',
        },
    });

    function copySelf(item) {
        kubejs.shapeless(Item.of(item).withCount(2), item);
    }

    copySelf('botania:blacker_lotus');
    copySelf('botania:creative_pool');
    copySelf('ars_nouveau:creative_source_jar');
    copySelf('pneumaticcraft:creative_compressed_iron_block');
    copySelf('pneumaticcraft:creative_compressor');
    copySelf('evilcraft:creative_blood_drop');
    copySelf('mierno:upgrade_augment_creative');
    copySelf('thermal:machine_efficiency_creative_augment');
    copySelf('forbidden_arcanus:soul_crimson_stone');
    copySelf('ae2:creative_energy_cell');

    kubejs.shapeless(
        Item.of(
            'mekanism:creative_energy_cube',
            2,
            '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'
        ),
        Item.of(
            'mekanism:creative_energy_cube',
            '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}'
        ).weakNBT()
    );
    kubejs.shapeless(
        Item.of('botania:mana_tablet', 2, '{creative:1b,mana:500000}'),
        Item.of('botania:mana_tablet', '{creative:1b,mana:500000}').weakNBT()
    );
    kubejs.shapeless('forbidden_arcanus:aurum_chest_boat', ['forbidden_arcanus:aurum_boat', '#forge:chests/wooden']);
    kubejs.shapeless('forbidden_arcanus:edelwood_chest_boat', [
        'forbidden_arcanus:edelwood_boat',
        '#forge:chests/wooden',
    ]);
    kubejs.shapeless('mierno:flowing_source_flower', ['#botania:floating_flowers', 'mierno:source_flower']);
    kubejs.shapeless('9x botania:mana_string', 'mierno:mana_string_block');
    kubejs.shapeless('mierno:oak_mortar', ['#forge:rods/wooden', 'bowl']);
    kubejs.shapeless('mierno:portable_crafting_table', ['stick', 'crafting_table']);
    kubejs
        .shapeless('mierno:token_base', ['mierno:infused_wood', '#axes', '#forge:shears'])
        .damageIngredient(['#axes', '#forge:shears']);

    kubejs.shapeless('2x ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom');
    kubejs.shapeless(
        Item.of(
            'ae2:meteorite_compass',
            '{display:{Name:\'{"translate":"item.mierno.maze_compass","bold":true,"italic":false}\'}}'
        ).withLore([
            Text.translate('tooltip.mierno.meteorite_compass1').gold().italic(false),
            Text.translate('tooltip.mierno.meteorite_compass2').gold().italic(false),
            Text.translate('tooltip.mierno.meteorite_compass3').gold().italic(false),
        ]),
        ['minecraft:compass', Item.of('naturesaura:aura_bottle', '{stored_type:"mierno:mist"}').weakNBT()]
    );

    kubejs
        .shapeless('bloodmagic:ritualdivinerdusk', ['bloodmagic:ritualdiviner', 'bloodmagic:duskscribetool'])
        .keepIngredient('bloodmagic:duskscribetool');
    kubejs.shapeless('2x bloodmagic:simplekey', ['thermal:iron_plate', 'bloodmagic:simplekey']);
    kubejs.shapeless('flint', ['gravel', 'gravel', 'gravel']);
    kubejs.shapeless('ae2:not_so_mysterious_cube', 'ae2:mysterious_cube').keepIngredient('ae2:mysterious_cube');
    kubejs.shapeless('8x naturesaura:gold_leaf', ['gold_ingot', '#leaves']);
    kubejs.shapeless('mierno:futura_block', 'ae2:controller').keepIngredient('ae2:controller');
    kubejs.shapeless('4x forbidden_arcanus:dark_nether_star', 'forbidden_arcanus:dark_nether_star_block');
    kubejs.shapeless('2x powah:capacitor_basic', '2x powah:capacitor_basic_tiny');
    kubejs.shapeless('2x powah:capacitor_basic_large', '2x powah:capacitor_basic');
    kubejs.shapeless('mierno:dark_eyes', [
        'minecraft:ender_eye',
        'occultism:otherworld_essence',
        Item.of('naturesaura:aura_bottle', '{stored_type:"mierno:heterogeneous"}').weakNBT(),
    ]);
    kubejs.shapeless(
        'botania:pinkinator',
        Item.of(
            'ae2:matter_cannon',
            '{amts:[L;4032L],ic:4032L,internalCurrentPower:200000.0d,keys:[{"#c":"ae2:i",id:"ae2:pink_lumen_paint_ball"}]}'
        ).weakNBT()
    );
    kubejs.shapeless(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'), [
        'ae2:fluid_cell_housing',
        'evilcraft:eternal_water',
    ]);
    kubejs.shapeless('occultism:soul_gem', 'mierno:soul_gem');
    kubejs.shapeless('mierno:soul_gem', 'occultism:soul_gem');
    kubejs.shapeless('minecraft:end_portal_frame', 'mierno:memory_matrix');
    kubejs.shapeless('naturesaura:birth_spirit', 'naturesaura:calling_spirit').modifyResult((grid, result) => {
        if (!grid.player || grid.player.isFake() || grid.menu instanceof $AssemblyHaloContainer) return Item.empty;

        if (grid.find('naturesaura:calling_spirit').count > grid.player.health) {
            grid.player.tell(Text.translate('message.mierno.no_health_craft').red());
            grid.player.closeMenu();

            return Item.empty;
        }

        return result;
    });
    kubejs.shapeless('mierno:1', 'mekanism:pellet_antimatter');
    kubejs.shapeless('mierno:computation_matrix', 'mekanism:antiprotonic_nucleosynthesizer');
    kubejs.shapeless('8x naturesaura:gold_powder', ['thermal:gold_dust', '#leaves']);
    kubejs.shapeless('evilcraft:bucket_eternal_water', ['evilcraft:eternal_water', 'minecraft:bucket']);
    kubejs.shapeless('mierno:item_storage_cell_1m', ['mierno:cell_component_1m', 'mierno:advance_item_cell_housing']);
    kubejs.shapeless('mierno:item_storage_cell_4m', ['mierno:cell_component_4m', 'mierno:advance_item_cell_housing']);
    kubejs.shapeless('mierno:item_storage_cell_16m', ['mierno:cell_component_16m', 'mierno:advance_item_cell_housing']);
    kubejs.shapeless('mierno:item_storage_cell_64m', ['mierno:cell_component_64m', 'mierno:advance_item_cell_housing']);
    kubejs.shapeless('mierno:item_storage_cell_256m', [
        'mierno:cell_component_256m',
        'mierno:advance_item_cell_housing',
    ]);

    kubejs.shaped('bucket', ['A A', ' A '], {
        A: 'white_concrete',
    });

    kubejs.shaped('mierno:gensousitu_bucket', ['ABC', 'D D', ' D '], {
        A: 'water_bucket',
        B: 'naturesaura:calling_spirit',
        C: 'lava_bucket',
        D: 'white_concrete',
    });

    kubejs.shaped('mierno:fire_starter', ['A ', ' A'], {
        A: 'stick',
    });

    kubejs.shaped('4x chest', ['AAA', 'A A', 'AAA'], {
        A: '#logs',
    });

    kubejs
        .shaped(Item.of('mierno:unstable_ingot', '{Stable:100.0d}'), [' A ', ' B ', 'C D'], {
            A: 'thermal:enderium_ingot',
            B: Item.of('mierno:addition_sigil').enchant('mierno:activate', 1).weakNBT(),
            C: 'thermal:signalum_ingot',
            D: 'thermal:lumium_ingot',
        })
        .keepIngredient('mierno:addition_sigil');

    kubejs.shaped('mierno:wooden_shears', [' A', 'A '], {
        A: '#planks',
    });

    kubejs.shaped('mierno:aura_grinder', ['ABA', 'CDC', 'ACA'], {
        A: 'naturesaura:gold_powder',
        B: 'oak_sapling',
        C: 'mierno:fiber',
        D: 'furnace',
    });

    kubejs.shaped('mierno:gift_box', ['ABA', 'BCB', 'ABA'], {
        A: 'red_dye',
        B: 'naturesaura:gold_powder',
        C: 'chest',
    });

    kubejs.shaped('botania:fertilizer', ['ABB', 'BB '], {
        A: 'bone_meal',
        B: '#botania:petals',
    });

    kubejs.shaped('4x botania:livingwood_log', ['AA', 'AA'], {
        A: 'botania:livingwood',
    });

    kubejs.shaped('botania:mana_spreader', ['AAA', 'BC ', 'AAA'], {
        A: '#botania:livingwood_logs',
        B: 'naturesaura:infused_iron',
        C: '#botania:petals',
    });

    kubejs.shaped('grass_block', ['AAA', 'AAA', 'AAA'], {
        A: '#leaves',
    });

    kubejs.shaped('mierno:ancient_aura_generator_core', ['ABA', 'BCB', 'ABA'], {
        A: 'naturesaura:gold_powder',
        B: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        C: 'naturesaura:ancient_bark',
    });

    kubejs.shaped('naturesaura:calling_spirit', [' A ', 'A A', ' A '], {
        A: 'naturesaura:gold_powder',
    });

    kubejs.shaped('ars_nouveau:source_jar', ['AAA', 'BCB', 'AAA'], {
        A: 'ars_nouveau:archwood_slab',
        B: 'botania:elf_glass',
        C: 'ars_nouveau:source_gem',
    });

    kubejs.shaped('ae2:charger', ['ABA', 'A  ', 'ABA'], {
        A: 'ae2:quartz_block',
        B: 'botania:elementium_ingot',
    });

    kubejs.shaped('ae2:inscriber', ['ABA', 'C A', 'ABA'], {
        A: 'ae2:quartz_block',
        B: 'sticky_piston',
        C: 'botania:elementium_ingot',
    });

    kubejs.shaped('botania:apothecary_default', ['ABA', ' A ', 'AAA'], {
        A: 'cobblestone',
        B: 'poppy',
    });

    kubejs.shaped('occultism:otherworld_goggles', [' A ', 'ABA', ' C '], {
        A: 'ars_nouveau:magebloom_fiber',
        B: 'occultism:infused_lenses',
        C: 'occultism:lens_frame',
    });

    kubejs.shaped('8x forbidden_arcanus:darkstone', ['AAA', 'ABA', 'AAA'], {
        A: 'occultism:otherstone',
        B: 'evilcraft:inverted_potentia_empowered',
    });

    kubejs.shaped('4x ae2:quartz_glass', ['ABA', 'BAB', 'ABA'], {
        A: 'ae2:certus_quartz_dust',
        B: 'botania:mana_glass',
    });

    kubejs.shaped('mierno:assembly_room_controller', ['ABA', 'CDE', 'AFA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:calculation_processor',
        C: 'ae2:engineering_processor',
        D: 'ae2:controller',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('mierno:item_input', ['ABA', 'CDE', 'AFA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:cell_component_1k',
        C: 'ae2:engineering_processor',
        D: 'ae2:interface',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('mierno:item_output', ['AFA', 'CDE', 'ABA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:cell_component_1k',
        C: 'ae2:engineering_processor',
        D: 'ae2:interface',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('mierno:energy_input', ['ABA', 'CDE', 'AFA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:cell_component_1k',
        C: 'ae2:engineering_processor',
        D: 'ae2:energy_acceptor',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('mierno:matter_mixer_controller', ['ABA', 'EDE', 'ACA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:calculation_processor',
        C: 'ae2:logic_processor',
        D: 'ae2:controller',
        E: 'thermal:iron_gear',
    });

    kubejs.shaped('mierno:fluid_input', ['ABA', 'CDE', 'AFA'], {
        A: 'mekanism:block_steel',
        B: 'thermal:fluid_cell',
        C: 'ae2:engineering_processor',
        D: 'ae2:interface',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('mierno:fluid_output', ['AFA', 'CDE', 'ABA'], {
        A: 'mekanism:block_steel',
        B: 'thermal:fluid_cell',
        C: 'ae2:engineering_processor',
        D: 'ae2:interface',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('wizards_reborn:orbital_fluid_retainer', ['ABA', ' C ', 'CCC'], {
        A: 'thermal:electrum_plate',
        B: 'thermal:fluid_cell',
        C: 'fluxnetworks:flux_block',
    });

    kubejs.shaped('mierno:unstable_singularity', ['AAA', 'ABA', 'AAA'], {
        A: 'mierno:unstable_ingot',
        B: 'ae2:singularity',
    });

    kubejs.shaped('mierno:fired_crucible', ['A A', 'A A', 'AAA'], {
        A: 'white_concrete',
    });

    kubejs.shaped('mierno:oak_crucible', ['A A', 'A A', 'AAA'], {
        A: 'oak_log',
    });

    kubejs.shaped('thermal:device_tree_extractor', ['AAA', 'ABC', 'ADA'], {
        A: 'thermal:iron_plate',
        B: 'mierno:oak_crucible',
        C: 'naturesaura:color_changer',
        D: 'minecraft:comparator',
    });

    kubejs.shaped('mierno:colossal_furnace_core', ['AAA', 'ABA', 'AAA'], {
        A: 'furnace',
        B: 'cobblestone',
    });

    kubejs.shaped('mierno:colossal_furnace_proxy', ['AAA', 'ABA', 'AAA'], {
        A: 'cobblestone',
        B: 'furnace',
    });

    kubejs.shaped('mierno:cobble_gen_tier1', ['AAA', 'BDC', 'AAA'], {
        A: '#logs',
        B: 'water_bucket',
        C: 'lava_bucket',
        D: 'glass',
    });

    kubejs.shaped('mierno:cobble_gen_tier2', ['AAA', 'ABA', 'AAA'], {
        A: 'cobblestone',
        B: 'mierno:cobble_gen_tier1',
    });

    kubejs.shaped('mierno:cobble_gen_tier3', ['AAA', 'ABA', 'AAA'], {
        A: 'iron_block',
        B: 'mierno:cobble_gen_tier2',
    });

    kubejs.shaped('mierno:cobble_gen_tier4', ['AAA', 'ABA', 'AAA'], {
        A: 'gold_block',
        B: 'mierno:cobble_gen_tier3',
    });

    kubejs.shaped('mierno:cobble_gen_tier5', ['AAA', 'ABA', 'AAA'], {
        A: 'diamond_block',
        B: 'mierno:cobble_gen_tier4',
    });

    kubejs.shaped('mierno:cobble_gen_tier6', ['AAA', 'ABA', 'AAA'], {
        A: 'netherite_block',
        B: 'mierno:cobble_gen_tier5',
    });

    kubejs.shaped('mierno:modular_runic_altar_core', ['ABA', 'ACA', 'ADA'], {
        A: 'ars_nouveau:manipulation_essence',
        B: 'botania:rune_mana',
        C: 'botania:mana_diamond_block',
        D: 'botania:runic_altar',
    });

    kubejs.shaped('mierno:void_ore_miner_controller', ['AAA', 'ABA', 'CCC'], {
        A: 'glass',
        B: 'ae2:controller',
        C: 'mekanism:block_steel',
    });

    kubejs.shaped('3x mekanismgenerators:solar_panel', ['AAA', 'BCB', 'DDD'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:sun_crystal_full',
        D: 'ae2:printed_silicon',
    });

    kubejs.shaped('mekanismgenerators:solar_generator', ['AAA', ' B ', 'BCB'], {
        A: 'mekanismgenerators:solar_panel',
        B: 'mekanism:ingot_steel',
        C: 'ae2:energy_cell',
    });

    kubejs.shaped('mekanismgenerators:advanced_solar_generator', ['ABA', 'ABA', 'BBB'], {
        A: 'mekanismgenerators:solar_generator',
        B: 'mekanism:ingot_steel',
    });

    kubejs.shaped('mierno:reinforced_stone_frame', ['AAA', ' B ', 'B B'], {
        A: 'pneumaticcraft:reinforced_stone',
        B: 'pneumaticcraft:ingot_iron_compressed',
    });

    kubejs.shaped('mierno:mana_input', ['ABA', 'CDE', 'AFA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:cell_component_1k',
        C: 'ae2:engineering_processor',
        D: 'botania:mana_pool',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('mierno:mana_output', ['ABA', 'CDE', 'AFA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:printed_silicon',
        C: 'ae2:engineering_processor',
        D: 'botania:mana_pool',
        E: 'ae2:logic_processor',
        F: 'ae2:cell_component_1k',
    });

    kubejs.shaped('mierno:pressure_input', ['ABA', 'CDE', 'AFA'], {
        A: 'pneumaticcraft:pressure_chamber_wall',
        B: 'pneumaticcraft:pressure_gauge',
        C: 'ae2:engineering_processor',
        D: 'pneumaticcraft:pressure_tube',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped('8x pneumaticcraft:reinforced_stone', ['AAA', 'ABA', 'AAA'], {
        A: 'pneumaticcraft:compressed_stone',
        B: 'pneumaticcraft:compressed_iron_block',
    });

    kubejs.shaped('naturesaura:pet_reviver', ['A A', 'BCB', ' D '], {
        A: 'naturesaura:gold_leaf',
        B: 'naturesaura:sky_ingot',
        C: 'naturesaura:token_joy',
        D: 'minecraft:gold_block',
    });

    kubejs.shaped('mierno:empty_nether_star', [' A ', 'ABA', ' A '], {
        A: 'pneumaticcraft:plastic',
        B: 'ae2:quartz_vibrant_glass',
    });

    kubejs.shaped('mierno:memory_source_drawing_crystal_core', ['ABA', 'BCB', 'ABA'], {
        A: 'forbidden_arcanus:dark_nether_star_block',
        B: 'mierno:memory_source_gem',
        C: 'mierno:unstable_singularity',
    });

    kubejs.shaped('64x naturesaura:depth_ingot', ['ABA', 'CDC', 'ABA'], {
        A: 'minecraft:netherite_ingot',
        B: 'naturesaura:sky_ingot_block',
        C: 'botania:terrasteel_ingot',
        D: 'mierno:unstable_singularity',
    });

    kubejs.shaped('mierno:planting_station', ['AAA', 'ABA', 'CCC'], {
        A: 'glass',
        B: 'flower_pot',
        C: 'minecraft:smooth_stone_slab',
    });

    kubejs.shaped('2x powah:capacitor_basic_tiny', [' AB', 'ACA', 'BA '], {
        A: 'mekanism:ingot_steel',
        B: 'powah:dielectric_paste',
        C: 'redstone_block',
    });

    kubejs.shaped('pneumaticcraft:pressure_gauge', ['AAA', 'ABA', 'AAA'], {
        A: 'thermal:electrum_plate',
        B: 'minecraft:compass',
    });

    kubejs
        .shaped('botania:third_eye', ['ABA', 'CDC', 'AEA'], {
            A: 'mierno:memory_source_gem',
            B: 'pneumaticcraft:etching_acid_bucket',
            C: 'minecraft:nether_star',
            D: 'mierno:unstable_singularity',
            E: 'naturesaura:token_terror',
        })
        .keepIngredient('naturesaura:token_terror');

    kubejs.shaped('ae2:condenser', ['ABA', 'BCB', 'ABA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:fluix_pearl',
        C: 'ae2:singularity',
    });

    kubejs.shaped('occultism:chalk_purple_impure', ['AAA', 'ABA', 'AAA'], {
        A: 'minecraft:amethyst_block',
        B: 'occultism:chalk_white_impure',
    });

    kubejs.shaped('evilcraft:potentia_sphere', ['ABA', 'CDE', 'AFA'], {
        A: 'botania:terrasteel_nugget',
        B: 'malum:warp_flux',
        C: 'malum:astral_weave',
        D: 'evilcraft:blood_orb_filled',
        E: 'malum:rotting_essence',
        F: 'malum:grim_talc',
    });

    kubejs.shaped('evilcraft:effortless_ring', ['CA ', 'ABA', ' A '], {
        A: 'evilcraft:dark_power_gem',
        B: 'botania:super_travel_belt',
        C: 'botania:rune_gluttony',
    });

    kubejs
        .shaped('mierno:colorless_gem', [' A ', ' B ', 'CDC'], {
            A: 'mierno:soul_gem',
            B: Item.of('mierno:division_sigil').enchant('mierno:activate', 1).weakNBT(),
            C: 'forbidden_arcanus:soul',
            D: 'evilcraft:inverted_potentia_empowered',
        })
        .keepIngredient('mierno:division_sigil');

    kubejs.shaped('8x pneumaticcraft:compressed_stone', ['AAA', 'ABA', 'AAA'], {
        A: 'ars_nouveau:sourcestone',
        B: 'pneumaticcraft:ingot_iron_compressed',
    });

    kubejs.shaped('9x forbidden_arcanus:arcane_chiseled_polished_darkstone', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:chiseled_polished_darkstone',
        B: 'forbidden_arcanus:deorum_ingot',
    });

    kubejs.shaped('9x forbidden_arcanus:arcane_polished_darkstone', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:polished_darkstone',
        B: 'forbidden_arcanus:deorum_ingot',
    });

    kubejs.shaped('mierno:modular_alfheim_portal_core', ['ABA', 'CDE', 'AFA'], {
        A: 'botania:terrasteel_nugget',
        B: 'ae2:cell_component_1k',
        C: 'ae2:engineering_processor',
        D: 'mierno:mana_input',
        E: 'ae2:logic_processor',
        F: 'ae2:printed_silicon',
    });

    kubejs.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:white_concrete"}}'),
        ['AAA', 'ABA', 'AAA'],
        {
            A: 'white_concrete',
            B: 'gray_concrete',
        }
    );

    kubejs.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:gray_concrete"}}'),
        ['AAA', 'ABA', 'AAA'],
        {
            A: 'gray_concrete',
            B: 'white_concrete',
        }
    );

    kubejs.shaped('thermal:machine_furnace', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:furnace',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_sawmill', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'thermal:saw_blade',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_pulverizer', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:piston',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_smelter', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:blast_furnace',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_insolator', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'mierno:planting_station',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_centrifuge', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:compass',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_press', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:iron_block',
        C: 'ae2:engineering_processor',
        D: 'minecraft:piston',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_crucible', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'mierno:fired_crucible',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_chiller', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'botania:rune_water',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_refinery', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'thermal:device_tree_extractor',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_pyrolyzer', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:blaze_rod',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_bottler', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:bucket',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_brewer', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:brewing_stand',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('thermal:machine_crystallizer', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'ae2:crystal_resonance_generator',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('mekanism:formulaic_assemblicator', ['ABC', 'DED', 'FGF'], {
        A: 'ae2:logic_processor',
        B: 'minecraft:crafting_table',
        C: 'ae2:engineering_processor',
        D: 'thermal:copper_gear',
        E: 'thermal:machine_frame',
        F: 'thermal:rf_coil',
        G: 'thermal:redstone_servo',
    });

    kubejs.shaped('2x powah:capacitor_niotic', ['ABA', 'BCB', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_niotic',
        C: 'powah:capacitor_blazing',
    });

    kubejs.shaped('2x powah:capacitor_spirited', ['ABA', 'BCB', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_spirited',
        C: 'powah:capacitor_niotic',
    });

    kubejs.shaped('2x powah:capacitor_nitro', ['ABA', 'BCB', 'ABA'], {
        A: 'powah:dielectric_paste',
        B: 'powah:crystal_nitro',
        C: 'powah:capacitor_spirited',
    });

    kubejs.shaped('8x forbidden_arcanus:aureal_bottle', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:arcane_crystal_dust',
        B: 'forbidden_arcanus:xpetrified_orb',
    });

    kubejs.shaped('forbidden_arcanus:corrupti_dust', ['ABA', 'BCB', 'ABA'], {
        A: 'forbidden_arcanus:arcane_crystal_dust',
        B: 'evilcraft:dark_gem_crushed',
        C: 'forbidden_arcanus:mundabitur_dust',
    });

    kubejs.shaped('8x forbidden_arcanus:dark_rune', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:rune',
        B: 'evilcraft:inverted_potentia_empowered',
    });

    kubejs.shaped('8x forbidden_arcanus:corrupted_arcane_crystal', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:arcane_crystal',
        B: 'forbidden_arcanus:corrupti_dust',
    });

    kubejs.shaped('bloodmagic:ritualstone', ['AAA', 'ABA', 'AAA'], {
        A: 'bloodmagic:infusedslate',
        B: 'bloodmagic:blankrune',
    });

    kubejs
        .shaped('bloodmagic:ritualdiviner', [' A ', 'BCD', ' E '], {
            A: 'bloodmagic:firescribetool',
            B: 'bloodmagic:airscribetool',
            C: 'botania:dreamwood_twig',
            D: 'bloodmagic:waterscribetool',
            E: 'bloodmagic:earthscribetool',
        })
        .keepIngredient('bloodmagic:firescribetool')
        .keepIngredient('bloodmagic:airscribetool')
        .keepIngredient('bloodmagic:waterscribetool')
        .keepIngredient('bloodmagic:earthscribetool');

    kubejs.shaped(
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
        ['AAA', 'ABA', 'AAA'],
        {
            A: 'mierno:cobble_gen_tier5',
            B: 'ae2:item_cell_housing',
        }
    );

    kubejs.shaped('mierno:mini_sun', ['AAA', 'ABA', 'AAA'], {
        A: 'glowstone',
        B: 'mierno:sun_crystal_full',
    });

    kubejs.shaped('mierno:modular_mana_pool_core', ['ABA', 'BCB', 'ABA'], {
        A: 'botania:livingrock',
        B: 'botania:rune_mana',
        C: 'botania:terrasteel_ingot',
    });

    kubejs.shaped('mierno:upgrade_augment_signalum', ['ABA', 'CDC', 'ABA'], {
        A: 'thermal:signalum_ingot',
        B: 'thermal:obsidian_glass',
        C: 'thermal:signalum_gear',
        D: 'thermal:upgrade_augment_3',
    });

    kubejs.shaped('mierno:upgrade_augment_lumium', ['ABA', 'CDC', 'ABA'], {
        A: 'thermal:lumium_ingot',
        B: 'thermal:obsidian_glass',
        C: 'thermal:lumium_gear',
        D: 'mierno:upgrade_augment_signalum',
    });

    kubejs.shaped('mierno:upgrade_augment_compressed_iron', ['ABA', 'CDC', 'ABA'], {
        A: 'pneumaticcraft:compressed_iron_block',
        B: 'thermal:obsidian_glass',
        C: 'pneumaticcraft:compressed_iron_gear',
        D: 'mierno:upgrade_augment_lumium',
    });

    kubejs.shaped('mierno:modular_imbuement_chamber_core', ['ABA', 'BCB', 'ABA'], {
        A: 'ars_nouveau:sourcestone',
        B: 'ars_nouveau:source_gem',
        C: 'ars_nouveau:imbuement_chamber',
    });

    kubejs.shaped('mierno:modular_nature_altar_core', ['ABA', 'BCB', 'ABA'], {
        A: 'mekanism:block_steel',
        B: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        C: 'naturesaura:nature_altar',
    });

    kubejs.shaped('ae2:flawless_budding_quartz', ['AAA', 'ABA', 'AAA'], {
        A: 'botania:terrasteel_nugget',
        B: 'ae2:quartz_block',
    });

    kubejs.shaped('naturesaura:generator_limit_remover', ['ABA', 'BCB', 'ABA'], {
        A: 'naturesaura:infused_stone',
        B: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}').weakNBT(),
        C: 'naturesaura:infused_iron_block',
    });

    kubejs.shaped('mierno:upgrade_augment_creative', ['AAA', 'ABA', 'AAA'], {
        A: 'mierno:unstable_singularity',
        B: 'mierno:upgrade_augment_ether',
    });

    kubejs.shaped('thermal:machine_efficiency_creative_augment', ['ABC', 'IED', 'HGF'], {
        A: 'mierno:machine_speed_augment_ender',
        B: 'mierno:machine_speed_augment_signalum',
        C: 'mierno:machine_speed_augment_lumium',
        D: 'mierno:machine_speed_augment_compressed_iron',
        E: 'mierno:upgrade_augment_creative',
        F: 'mierno:machine_efficiency_augment_ender',
        G: 'mierno:machine_efficiency_augment_signalum',
        H: 'mierno:machine_efficiency_augment_lumium',
        I: 'mierno:machine_efficiency_augment_compressed_iron',
    });

    kubejs.shaped('mierno:machine_speed_augment_ender', [' A ', 'BCB', ' A '], {
        A: 'thermal:enderium_gear',
        B: 'thermal:enderium_plate',
        C: 'thermal:machine_speed_augment',
    });

    kubejs.shaped('mierno:machine_speed_augment_signalum', [' A ', 'BCB', ' A '], {
        A: 'thermal:signalum_gear',
        B: 'thermal:signalum_plate',
        C: 'mierno:machine_speed_augment_ender',
    });

    kubejs.shaped('mierno:machine_speed_augment_lumium', [' A ', 'BCB', ' A '], {
        A: 'thermal:lumium_gear',
        B: 'thermal:lumium_plate',
        C: 'mierno:machine_speed_augment_signalum',
    });

    kubejs.shaped('mierno:machine_speed_augment_compressed_iron', [' A ', 'BCB', ' A '], {
        A: 'pneumaticcraft:compressed_iron_gear',
        B: 'pneumaticcraft:ingot_iron_compressed',
        C: 'mierno:machine_speed_augment_lumium',
    });

    kubejs.shaped('mierno:machine_efficiency_augment_ender', [' A ', 'BCB', ' A '], {
        A: 'thermal:enderium_gear',
        B: 'thermal:enderium_plate',
        C: 'thermal:machine_efficiency_augment',
    });

    kubejs.shaped('mierno:machine_efficiency_augment_signalum', [' A ', 'BCB', ' A '], {
        A: 'thermal:signalum_gear',
        B: 'thermal:signalum_plate',
        C: 'mierno:machine_efficiency_augment_ender',
    });

    kubejs.shaped('mierno:machine_efficiency_augment_lumium', [' A ', 'BCB', ' A '], {
        A: 'thermal:lumium_gear',
        B: 'thermal:lumium_plate',
        C: 'mierno:machine_efficiency_augment_signalum',
    });

    kubejs.shaped('mierno:machine_efficiency_augment_compressed_iron', [' A ', 'BCB', ' A '], {
        A: 'pneumaticcraft:compressed_iron_gear',
        B: 'pneumaticcraft:ingot_iron_compressed',
        C: 'mierno:machine_efficiency_augment_lumium',
    });

    kubejs.shaped('evilcraft:eternal_water', [' A ', 'ABA', ' A '], {
        A: 'fluxnetworks:flux_block',
        B: 'water_bucket',
    });

    kubejs.shaped('mierno:falling_star_marker', ['ABA', 'BCB', 'ABA'], {
        A: 'mierno:glowing_obsidian',
        B: 'forbidden_arcanus:deorum_block',
        C: 'bloodmagic:hellforgedparts',
    });

    kubejs.shaped('bloodmagic:dungeon_eye', ['ABA', 'BCB', 'ABA'], {
        A: 'bloodmagic:dungeon_metal',
        B: 'bloodmagic:dungeon_stone',
        C: 'mierno:dark_eyes',
    });

    kubejs.shaped('4x bloodmagic:dungeon_alternator', ['ABA', 'BCB', 'ABA'], {
        A: 'bloodmagic:dungeon_metal',
        B: 'bloodmagic:dungeon_polished',
        C: 'bloodmagic:hellforgedparts',
    });

    kubejs.shaped('8x minecraft:lodestone', ['AAA', 'ABA', 'AAA'], {
        A: 'pneumaticcraft:reinforced_stone',
        B: 'pneumaticcraft:ingot_iron_compressed',
    });

    kubejs.shaped('mekanism:steel_casing', ['ABA', 'BCB', 'ABA'], {
        A: 'ad_astra:steel_plate',
        B: 'forbidden_arcanus:ferrognetic_mixture',
        C: 'thermal:machine_frame',
    });

    kubejs.shaped('mekanism:metallurgic_infuser', ['ABA', 'BCB', 'ADA'], {
        A: 'mekanism:ingot_steel',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'mekanism:steel_casing',
        D: 'thermal:machine_smelter',
    });

    kubejs.shaped('mekanism:metallurgic_infuser', ['ABA', 'BCB', 'ADA'], {
        A: 'mekanism:ingot_steel',
        B: 'mekanism:basic_control_circuit',
        C: 'mekanism:steel_casing',
        D: 'thermal:machine_smelter',
    });

    kubejs.shaped('ad_astra:nasa_workbench', ['ABC', 'DEF', 'GHG'], {
        A: 'pneumaticcraft:assembly_io_unit_import',
        B: 'pneumaticcraft:assembly_controller',
        C: 'pneumaticcraft:assembly_io_unit_export',
        D: 'pneumaticcraft:assembly_laser',
        E: 'pneumaticcraft:assembly_platform',
        F: 'pneumaticcraft:assembly_drill',
        G: 'mekanism:advanced_control_circuit',
        H: 'mekanism:steel_casing',
    });

    kubejs.shaped('minecraft:wither_skeleton_skull', ['AAA', 'ABA', 'AAA'], {
        A: 'forbidden_arcanus:dark_matter',
        B: 'minecraft:skeleton_skull',
    });

    kubejs.shaped('4x ad_astra:etrium_rod', [' A ', ' A '], {
        A: 'ad_astra:etrium_plate',
    });

    kubejs.shaped('pneumaticcraft:module_expansion_card', [' A ', 'BCD', ' E '], {
        A: 'ae2:engineering_processor',
        B: 'ae2:logic_processor',
        C: 'forbidden_arcanus:ferrognetic_mixture',
        D: 'ae2:calculation_processor',
        E: 'pneumaticcraft:printed_circuit_board',
    });

    kubejs.shaped('ad_astra:fuel_refinery', ['AAA', 'BCB', 'ADA'], {
        A: 'ad_astra:steel_plate',
        B: 'mekanism:advanced_fluid_tank',
        C: 'mekanism:steel_casing',
        D: 'pneumaticcraft:refinery',
    });

    kubejs.shaped('mekanism:elite_control_circuit', ['AAA', 'BCB', 'AAA'], {
        A: 'mierno:milkyway_plate',
        B: 'mekanism:alloy_reinforced',
        C: 'mekanism:advanced_control_circuit',
    });

    kubejs.shaped('ad_astra:encased_etrium_block', ['AAA', 'BBB', 'AAA'], {
        A: 'mekanism:ingot_steel',
        B: 'ad_astra:etrium_plate',
    });

    kubejs.shaped('mierno:slime_boots', ['A A', 'B B'], {
        A: 'slime_ball',
        B: 'slime_block',
    });

    kubejs.shaped('mierno:slime_sling', ['ABA', 'C C', ' C '], {
        A: 'string',
        B: 'slime_block',
        C: 'slime_ball',
    });

    kubejs.shaped('ae2:creative_energy_cell', ['AAA', 'ABA', 'AAA'], {
        A: 'ae2:dense_energy_cell',
        B: 'ae2:singularity',
    });

    kubejs.shaped('compactmachines:wall', ['AAA', 'ABA', 'AAA'], {
        A: 'mekanism:block_steel',
        B: 'ae2:singularity',
    });

    kubejs.shaped('mierno:kylin_arm', [' AA', 'BCA', ' B '], {
        A: 'minecraft:white_concrete',
        B: 'minecraft:gray_concrete',
        C: 'minecraft:lava_bucket',
    });

    kubejs.shaped('mierno:cell_component_1m', ['ABA', 'CDC', 'ACA'], {
        A: 'ae2:sky_dust',
        B: 'advanced_ae:quantum_processor',
        C: 'ae2:cell_component_256k',
        D: 'ae2:quartz_vibrant_glass',
    });

    kubejs.shaped('mierno:cell_component_4m', ['ABA', 'CDC', 'ACA'], {
        A: 'ae2:singularity',
        B: 'advanced_ae:quantum_processor',
        C: 'mierno:cell_component_1m',
        D: 'ae2:quartz_vibrant_glass',
    });

    kubejs.shaped('mierno:cell_component_16m', ['ABA', 'CDC', 'ACA'], {
        A: 'ae2:singularity',
        B: 'advanced_ae:quantum_processor',
        C: 'mierno:cell_component_4m',
        D: 'ae2:quartz_vibrant_glass',
    });

    kubejs.shaped('mierno:cell_component_64m', ['ABA', 'CDC', 'ACA'], {
        A: 'mierno:unstable_singularity',
        B: 'advanced_ae:quantum_processor',
        C: 'mierno:cell_component_16m',
        D: 'ae2:quartz_vibrant_glass',
    });

    kubejs.shaped('mierno:cell_component_256m', ['ABA', 'CDC', 'ACA'], {
        A: 'mierno:unstable_singularity',
        B: 'advanced_ae:quantum_processor',
        C: 'mierno:cell_component_64m',
        D: 'ae2:quartz_vibrant_glass',
    });

    kubejs.shaped('mierno:advance_item_cell_housing', ['ABA', 'B B', 'CCC'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:meteorite_steel_ingot',
    });

    kubejs.shaped('mierno:item_storage_cell_1m', ['ABA', 'BDB', 'CCC'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:meteorite_steel_ingot',
        D: 'mierno:cell_component_1m',
    });

    kubejs.shaped('mierno:item_storage_cell_4m', ['ABA', 'BDB', 'CCC'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:meteorite_steel_ingot',
        D: 'mierno:cell_component_4m',
    });

    kubejs.shaped('mierno:item_storage_cell_16m', ['ABA', 'BDB', 'CCC'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:meteorite_steel_ingot',
        D: 'mierno:cell_component_16m',
    });

    kubejs.shaped('mierno:item_storage_cell_64m', ['ABA', 'BDB', 'CCC'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:meteorite_steel_ingot',
        D: 'mierno:cell_component_64m',
    });

    kubejs.shaped('mierno:item_storage_cell_256m', ['ABA', 'BDB', 'CCC'], {
        A: 'ae2:quartz_vibrant_glass',
        B: 'ae2:sky_dust',
        C: 'mierno:meteorite_steel_ingot',
        D: 'mierno:cell_component_256m',
    });

    kubejs.shaped('minecraft:totem_of_undying', ['ABA', 'BCB', ' B '], {
        A: 'minecraft:emerald',
        B: 'thermal:lumium_ingot',
        C: 'mierno:memory_source_gem',
    });
});
