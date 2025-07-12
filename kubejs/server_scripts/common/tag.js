// priority: 50

ServerEvents.tags('item', (event) => {
    event.add('lychee:fire_immune', ['botania:scorched_seeds', 'naturesaura:token_anger']);
    event.add('curios:dream_lantern', 'mierno:dream_lantern');
    event.add('curios:token_rage', 'naturesaura:token_rage');
    event.add('botania:special_floating_flowers', 'mierno:flowing_source_flower');

    Ingredient.all.itemIds.forEach((itemId) => {
        event.add('mierno:all_items', itemId);
    });

    event.add('mierno:fired_crucible_fuel', ['gray_concrete']);
    event.add('mierno:modular_offering_input', [
        'naturesaura:infused_iron',
        'naturesaura:tainted_gold',
        'naturesaura:sky_ingot',
        'naturesaura:infused_iron_block',
        'naturesaura:tainted_gold_block',
        'naturesaura:sky_ingot_block',
    ]);

    event.add('mierno:planting_soil', [
        'farmland',
        'forbidden_arcanus:magical_farmland',
        'podzol',
        'muddy_mangrove_roots',
        'mycelium',
        'coarse_dirt',
        'grass_block',
        'rooted_dirt',
        'moss_block',
        'mud',
        'dirt',
    ]);

    event.add('minecraft:saplings', ['naturesaura:ancient_sapling']);

    event.add('occultism:otherworld_goggles', 'botania:third_eye');
    event.add('mierno:sigil', [
        'mierno:addition_sigil',
        'mierno:subtraction_sigil',
        'mierno:multiplication_sigil',
        'mierno:division_sigil',
        'mierno:fake_sigil',
        'mierno:pseudo_inversion_sigil',
    ]);
    event.add('mierno:mana_input_items', [
        'botania:black_lotus',
        'botania:blacker_lotus',
        'botania:mana_tablet',
        'botania:creative_pool',
    ]);

    event.add('forge:ingots', [
        'mierno:meteorite_steel_ingot',
        'mierno:tyumen_ingot',
        'mierno:unstable_ingot',
        'mierno:demon_infused_ingot',
    ]);

    event.add('forge:raw_materials', 'mierno:raw_etrium');
    event.add('mekanism:enriched', [
        'mierno:enriched_etrium',
        'mierno:enriched_deorum',
        'mierno:enriched_etching_acid',
    ]);
    event.add('forge:armors/boots', 'mierno:slime_boots');
    event.add('forge:sandstone/venus_sandstone', 'ad_astra:venus_sandstone');
});

ServerEvents.tags('block', (event) => {
    event.add('minecraft:dirt', ['white_concrete', 'botania:enchanted_soil']);
    event.add('stripped_logs', /:stripped.*log$/);
    event.add('botania:special_floating_flowers', 'mierno:flowing_source_flower');
    event.add('mierno:crucible_heat_source', [
        'fire',
        'powah:blazing_crystal_block',
        'minecraft:campfire',
        'botania:blaze_block',
        'lava',
        'magma_block',
    ]);

    event.add('minecraft:mineable/axe', [
        'mierno:infused_wood',
        'mierno:cobble_gen_tier1',
        'mierno:engraving_table',
        'mierno:oak_crucible',
    ]);

    event.add('minecraft:needs_iron_tool', [
        'mierno:reinforced_stone_frame',
        'mierno:futura_block',
        'mierno:source_fluidlink',
        'mierno:cobble_gen_tier3',
        'mierno:cobble_gen_tier4',
        'mierno:cobble_gen_tier5',
        'mierno:cobble_gen_tier6',
        'mierno:energy_input',
        'mierno:fluid_input',
        'mierno:fluid_output',
        'mierno:item_input',
        'mierno:item_output',
        'mierno:mana_input',
        'mierno:mana_output',
        'mierno:void_ore_miner_controller',
        'mierno:printing_room_controller',
        'mierno:oil_drilling_rig_controller',
        'mierno:terrestrial_agglomeration_crystal',
        'mierno:modular_runic_altar_core',
        'mierno:modular_offering_table_controller',
        'mierno:modular_nature_altar_core',
        'mierno:modular_mana_pool_core',
        'mierno:modular_imbuement_chamber_core',
        'mierno:modular_alfheim_portal_core',
        'mierno:memory_source_drawing_crystal_core',
        'mierno:colossal_furnace_core',
        'mierno:computation_matrix',
        'mierno:assembly_room_controller',
        'mierno:pressure_input',
    ]);
    event.add('minecraft:mineable/pickaxe', [
        'mierno:reinforced_stone_frame',
        'mierno:futura_block',
        'mierno:nether_catalyst',
        'mierno:end_catalyst',
        'mierno:source_fluidlink',
        'bloodmagic:speedrune2',
        'bloodmagic:sacrificerune2',
        'bloodmagic:selfsacrificerune2',
        'bloodmagic:dislocationrune2',
        'bloodmagic:altarcapacityrune2',
        'bloodmagic:bettercapacityrune2',
        'bloodmagic:orbcapacityrune2',
        'bloodmagic:accelerationrune2',
        'bloodmagic:chargingrune2',
        'mierno:glowing_obsidian',
        'mierno:glacio_etrium_ore',
        'mierno:deepslate_etrium_ore',
        'mierno:aura_grinder',
        'mierno:blood_converter',
        'mierno:cobble_gen_tier2',
        'mierno:cobble_gen_tier3',
        'mierno:cobble_gen_tier4',
        'mierno:cobble_gen_tier5',
        'mierno:cobble_gen_tier6',
        'mierno:fired_crucible',
        'mierno:colossal_furnace_proxy',
        'mierno:energy_input',
        'mierno:fluid_input',
        'mierno:fluid_output',
        'mierno:item_input',
        'mierno:item_output',
        'mierno:mana_input',
        'mierno:mana_output',
        'mierno:void_ore_miner_controller',
        'mierno:printing_room_controller',
        'mierno:oil_drilling_rig_controller',
        'mierno:terrestrial_agglomeration_crystal',
        'mierno:modular_runic_altar_core',
        'mierno:modular_offering_table_controller',
        'mierno:modular_nature_altar_core',
        'mierno:modular_mana_pool_core',
        'mierno:modular_imbuement_chamber_core',
        'mierno:modular_alfheim_portal_core',
        'mierno:memory_source_drawing_crystal_core',
        'mierno:colossal_furnace_core',
        'mierno:computation_matrix',
        'mierno:assembly_room_controller',
        'mierno:pressure_input',
        'mierno:planting_station',
        'evilcraft:environmental_accumulator',
    ]);

    event.add('minecraft:needs_diamond_tool', [
        'bloodmagic:speedrune2',
        'bloodmagic:sacrificerune2',
        'bloodmagic:selfsacrificerune2',
        'bloodmagic:dislocationrune2',
        'bloodmagic:altarcapacityrune2',
        'bloodmagic:bettercapacityrune2',
        'bloodmagic:orbcapacityrune2',
        'bloodmagic:accelerationrune2',
        'bloodmagic:chargingrune2',
        'mierno:glowing_obsidian',
        'mierno:glacio_etrium_ore',
        'mierno:deepslate_etrium_ore',
        'mierno:cobble_gen_tier6',
    ]);

    event.add('minecraft:wither_immune', [
        'mierno:memory_source_drawing_crystal_core',
        'botania:bifrost_perm',
        'botania:light_relay',
        'forbidden_arcanus:dark_nether_star_block',
        'ae2:quartz_vibrant_glass',
    ]);

    event.add('minecraft:saplings', ['naturesaura:ancient_sapling']);

    event.add('mierno:terra_altar_frame', [
        'botania:pattern_framed_livingwood',
        'mierno:item_input',
        'mierno:item_output',
        'mierno:mana_input',
    ]);

    event.add('mierno:tiab_blacklist_block', ['bloodmagic:alchemyarray']);
});

ServerEvents.tags('fluid', (event) => {
    event.remove('forge:crude_oil', 'thermal:crude_oil');
    event.removeAll('minecraft:water');
    event.add('minecraft:water', 'water');
});

ServerEvents.tags('worldgen/biome', (event) => {
    event.add('mierno:has_structure/dark_temple', 'mierno:otherworld');
    event.add('mierno:is_glacio', ['ad_astra:glacio_snowy_barrens', 'ad_astra:glacio_ice_peaks']);
});

ServerEvents.tags('mekanism:infuse_type', (event) => {
    event.add('mekanism:bio', 'mekanism:bio');
    event.add('mekanism:tin', 'mekanism:tin');
});
