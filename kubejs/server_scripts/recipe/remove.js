// priority: 9

ServerEvents.recipes((event) => {
    event.remove({ type: 'occultism:miner' });

    let recipesToRemoveID = [
        'naturesaura:gold_fiber',
        'naturesaura:wood_stand',
        'naturesaura:gold_powder',
        'naturesaura:calling_spirit',
        'naturesaura:tree_ritual/nature_altar',
        'naturesaura:tree_ritual/token_joy',
        'tiab:time_in_a_bottle',
        'naturesaura:offering_table',
        'botania:fertilizer_dye',
        'botania:petal_apothecary/pure_daisy',
        'botania:pure_daisy/livingrock',
        'botania:pure_daisy/livingwood',
        'botania:mana_spreader',
        'botania:mana_infusion/mana_powder_dye',
        'naturesaura:offering/token_euphoria',
        'botania:runic_altar/water',
        'botania:runic_altar/earth',
        'botania:runic_altar/mana',
        'botania:runic_altar/fire',
        'botania:runic_altar/air',
        'botania:runic_altar',
        'botania:runic_altar_alt',
        'botania:terra_plate',
        'botania:petal_apothecary/loonium',
        'forbidden_arcanus:aurum_chest_boat',
        'forbidden_arcanus:edelwood_chest_boat',
        'botania:alfheim_portal',
        'botania:alchemy_catalyst',
        'naturesaura:tree_ritual/conversion_catalyst',
        'naturesaura:altar/infused_stone',
        'botania:terra_plate/terrasteel_ingot',
        'ars_nouveau:imbuement_chamber',
        'botania:elven_trade/pixie_dust',
        'ars_nouveau:imbuement_lapis',
        'ars_nouveau:imbuement_amethyst',
        'ars_nouveau:imbuement_amethyst_block',
        'ars_nouveau:source_jar',
        'botania:elven_trade/dragonstone',
        'ae2:network/blocks/crystal_processing_charger',
        'ae2:network/blocks/inscribers',
        'ars_nouveau:magebloom_fiber',
        'ars_nouveau:enchanting_apparatus',
        'ars_nouveau:arcane_core',
        'ars_nouveau:wilden_summon_alt',
        'ars_nouveau:ritual_wilden_summon',
        'botania:vivid_seeds',
        'botania:scorched_seeds',
        'botania:mutated_seeds',
        'botania:infused_seeds',
        'ae2:network/blocks/io_condenser',
        'thermal:machine_frame',
        /thermal:parts\/[^\/]*_gear/,
        'thermal:fire_charge/enderium_ingot_2',
        'thermal:machines/smelter/smelter_alloy_enderium',
        'thermal:enderium_dust_2',
        'thermal:fire_charge/lumium_ingot_4',
        'thermal:machines/smelter/smelter_alloy_lumium',
        'thermal:lumium_dust_4',
        'thermal:fire_charge/signalum_ingot_4',
        'thermal:machines/smelter/smelter_alloy_signalum',
        'thermal:signalum_dust_4',
        'ars_nouveau:imbuement_conjuration_essence',
        'ars_nouveau:imbuement_abjuration_essence',
        'thermal:rubber_from_vine',
        'thermal:rubber_from_dandelion',
        'occultism:spirit_fire/otherworld_ashes',
        'occultism:spirit_fire/spirit_attuned_gem',
        'occultism:spirit_fire/otherstone',
        'occultism:crafting/goggles',
        'occultism:ritual/craft_soul_gem',
        'forbidden_arcanus:mundabitur_dust',
        'ae2:decorative/quartz_glass',
        'thermal:rf_coil',
        'thermal:redstone_servo',
        'thermal:machine_press',
        'naturesaura:tree_ritual/token_anger',
        'naturesaura:offering/token_rage',
        'thermal:device_tree_extractor',
        'thermal:machines/press/press_vine_to_latex',
        'thermal:machines/press/press_dandelion_to_latex',
        'mekanismgenerators:generator/solar',
        'mekanismgenerators:generator/advanced_solar',
        'powah:crafting/dielectric_paste',
        'powah:crafting/dielectric_paste_2',
        'mekanism:processing/tin/ingot/from_ore_smelting',
        'thermal:smelting/lead_ingot_from_deepslate_ore_smelting',
        'thermal:smelting/silver_ingot_from_deepslate_ore_smelting',
        'thermal:smelting/nickel_ingot_from_deepslate_ore_smelting',
        'mekanism:processing/tin/ingot/from_ore_blasting',
        'thermal:smelting/lead_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/silver_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/nickel_ingot_from_deepslate_ore_blasting',
        'thermal:smelting/tin_ingot_from_raw_smelting',
        'mekanism:processing/tin/ingot/from_dust_smelting',
        'mekanism:processing/lead/ingot/from_dust_smelting',
        'thermal:smelting/lead_ingot_from_raw_smelting',
        'occultism:smelting/silver_ingot_from_dust',
        'occultism:smelting/silver_ingot_from_raw',
        'thermal:smelting/nickel_ingot_from_raw_smelting',
        'thermal:smelting/nickel_ingot_from_dust_smelting',
        'thermal:smelting/tin_ingot_from_raw_blasting',
        'mekanism:processing/tin/ingot/from_dust_blasting',
        'thermal:smelting/lead_ingot_from_raw_blasting',
        'mekanism:processing/lead/ingot/from_dust_blasting',
        'occultism:blasting/silver_ingot_from_raw',
        'occultism:blasting/silver_ingot_from_dust',
        'thermal:smelting/nickel_ingot_from_raw_blasting',
        'thermal:smelting/nickel_ingot_from_dust_blasting',
        'mekanismgenerators:solar_panel',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:pressure_chamber/compressed_iron_ingot',
        'pneumaticcraft:thermo_plant/plastic_from_biodiesel',
        'pneumaticcraft:pressure_chamber/compressed_iron_block',
        'pneumaticcraft:reinforced_stone',
        'pneumaticcraft:pressure_chamber/compressed_stone',
        'naturesaura:pet_reviver',
        'forbidden_arcanus:dark_nether_star_block_from_dark_nether_star',
        'pneumaticcraft:pressure_chamber/etching_acid',
        'forbidden_arcanus:dark_nether_star_from_dark_nether_star_block',
        'forbidden_arcanus:obsidian_with_iron',
        'forbidden_arcanus:dark_nether_star',
        'forbidden_arcanus:dark_matter',
        'naturesaura:depth_ingot_creation',
        'occultism:crafting/candle',
        'powah:crafting/capacitor_basic',
        'powah:crafting/capacitor_basic_tiny',
        'pneumaticcraft:pressure_chamber/capacitor',
        'pneumaticcraft:pressure_chamber/transistor',
        'pneumaticcraft:pressure_gauge',
        'pneumaticcraft:assembly/unassembled_pcb',
        'naturesaura:offering/token_terror',
        'naturesaura:tree_ritual/token_fear',
        'thermal:machines/centrifuge/centrifuge_oil_red_sand',
        'thermal:machines/centrifuge/centrifuge_oil_sand',
        'botania:third_eye',
        'evilcraft:crafting/eternal_water',
        'ae2:charger/meteorite_compass',
        'occultism:spirit_fire/book_of_binding_empty',
        'occultism:crafting/chalk_purple_impure',
        'evilcraft:crafting/potentia_sphere',
        'occultism:ritual/craft_infused_pickaxe',
        'occultism:crafting/divination_rod',
        'evilcraft:crafting/effortless_ring',
        'evilcraft:crafting/vengeance_ring',
        'evilcraft:crafting/vengeance_focus',
        'evilcraft:special/box_of_eternal_closure',
        'evilcraft:crafting/blood_infuser',
        'evilcraft:crafting/sanguinary_environmental_accumulator',
        'evilcraft:crafting/spirit_furnace',
        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:compressed_iron_gear',
        'pneumaticcraft:pressure_chamber/empty_pcb',
        'pneumaticcraft:empty_pcb_from_failed_pcb',
        'forbidden_arcanus:arcane_chiseled_polished_darkstone',
        'ars_nouveau:imbuement_air_essence',
        'ars_nouveau:imbuement_fire_essence',
        'ars_nouveau:imbuement_water_essence',
        'ars_nouveau:imbuement_earth_essence',
        'ars_nouveau:imbuement_manipulation_essence',
        'expatternprovider:cutter/logic',
        'expatternprovider:cutter/silicon',
        'expatternprovider:cutter/calculation',
        'expatternprovider:cutter/engineering',
        'botania:elven_trade/dragonstone_block',
        'ae2:transform/fluix_crystals',
        'ae2:transform/fluix_crystal',
        'expatternprovider:water_cell',
        'thermal:machine_furnace',
        'thermal:machine_sawmill',
        'thermal:machine_pulverizer',
        'thermal:machine_smelter',
        'thermal:machine_insolator',
        'thermal:machine_centrifuge',
        'thermal:machine_press',
        'thermal:machine_crucible',
        'thermal:machine_chiller',
        'thermal:machine_refinery',
        'thermal:machine_pyrolyzer',
        'thermal:machine_bottler',
        'thermal:machine_brewer',
        'thermal:machine_crystallizer',
        'thermal:machine_crafter',
        'powah:energizing/energized_steel',
        'thermal:machines/pyrolyzer/pyrolyzer_coal',
        'thermal:machines/pyrolyzer/pyrolyzer_bitumen',
        'powah:energizing/spirited_crystal',
        'powah:energizing/niotic_crystal',
        'malum:blazing_quartz_from_blasting',
        'malum:blazing_quartz_from_smelting',
        'powah:energizing/blazing_crystal',
        'powah:energizing/blazing_crystal_2',
        'powah:crafting/capacitor_spirited',
        'powah:crafting/capacitor_nitro',
        'powah:crafting/capacitor_niotic',
        'powah:energizing/nitro_crystal',
        'pneumaticcraft:thermopneumatic_processing_plant',
        'pneumaticcraft:vortex_tube',
        'pneumaticcraft:refinery',
        'pneumaticcraft:etching_tank',
        'pneumaticcraft:uv_light_box',
        'botania:gaia_pylon',
        'evilcraft:crafting/piercing_vengeance_focus',
        'evilcraft:blood_infuser/base/blood_orb_filled',
        'forbidden_arcanus:aureal_bottle',
        'naturesaura:altar/tainted_gold',
        'naturesaura:altar/tainted_gold_block',
        'naturesaura:altar/breath',
        'forbidden_arcanus:dark_rune',
        'bloodmagic:altar/slate',
        'bloodmagic:blood_rune_blank',
        'bloodmagic:altar/weakbloodorb',
        'bloodmagic:blood_altar',
        'forbidden_arcanus:corrupti_dust',
        'bloodmagic:ritual_stone_blank',
        'naturesaura:time_changer',
        'bloodmagic:altar/dusk_tool',
        'bloodmagic:altar/fire_tool',
        'bloodmagic:altar/air_tool',
        'bloodmagic:altar/water_tool',
        'bloodmagic:altar/earth_tool',
        'bloodmagic:ritual_diviner_0',
        'bloodmagic:ritual_diviner_1',
        'mekanismgenerators:generator/wind',
        'expatternprovider:cobblestone_cell',
        'naturesaura:tree_ritual/crushing_catalyst',
        'ae2:shaped/not_so_mysterious_cube',
        'thermal:machines/crucible/crucible_ender_pearl',
        'powah:crafting/capacitor_basic_large',
        'evilcraft:environmental_accumulator/inverted_potentia_empowered',
        'botania:mana_infusion/mana_powder_dust',
        'forbidden_arcanus:smelting/arcane_crystal_dust_from_smelting',
        'forbidden_arcanus:blasting/arcane_crystal_dust_from_blasting',
        'naturesaura:generator_limit_remover',
        'naturesaura:altar/infused_iron',
        'naturesaura:altar/infused_iron_block',
        'forbidden_arcanus:arcane_polished_darkstone',
        'bloodmagic:altar/imbuedslate',
        'bloodmagic:altar/reinforcedslate',
        'bloodmagic:altar/demonicslate',
        'bloodmagic:altar/etherealslate',
        'bloodmagic:soul_forge',
        'bloodmagic:alchemy_table',
        'bloodmagic:alchemytable/arcane_ash',
        'bloodmagic:alchemytable/reagent_lava',
        'bloodmagic:altar/soul_snare',
        'bloodmagic:lava_crystal',
        'bloodmagic:soulforge/pettytartaricgem',
        'minecraft:lodestone',
        'forbidden_arcanus:clibano_core',
        'mekanism:steel_casing',
        'mekanism:control_circuit/basic',
        'mekanism:metallurgic_infuser',
        'mekanism:metallurgic_infusing/alloy/infused',
        'bloodmagic:meteor/mekanism',
        'ad_astra:nasa_workbench',
        'ad_astra:refining/fuel_from_refining_oil',
        'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_packed_ice',
        'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_blue_ice',
        'ad_astra:cryo_freezing/cryo_fuel_from_cryo_freezing_ice',
        'mekanism:metallurgic_infusing/alloy/reinforced',
        'ad_astra:compressing/steel_plate_from_compressing_steel_blocks',
        'pneumaticcraft:module_expansion_card',
        'ad_astra:fuel_refinery',
        'ad_astra:etrium_block',
        'mekanism:control_circuit/elite',
        'mekanism:processing/lategame/antimatter_pellet/from_gas',
        'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals',
        'ad_astra:etrionic_blast_furnace',
        'mekanism:processing/lategame/antimatter/from_pellet',
        'thermal:devices/tree_extractor/tree_extractor_dark_oak',
        'thermal:devices/tree_extractor/tree_extractor_spruce',
        'thermal:devices/tree_extractor/tree_extractor_acacia',
        'thermal:devices/tree_extractor/tree_extractor_oak',
        'thermal:devices/tree_extractor/tree_extractor_rubberwood',
        'thermal:devices/tree_extractor/tree_extractor_birch',
        'thermal:devices/tree_extractor/tree_extractor_cherry',
        'thermal:devices/tree_extractor/tree_extractor_jungle',
        'bloodmagic:soulforge/sanguine_reverter',
        'mekanism:processing/lategame/plutonium_pellet/from_reaction',
        'mekanism:processing/lategame/polonium_pellet/from_reaction',
        'ad_astra:steel_block',
        'projecte:philosophers_stone',
        'projecte:philosophers_stone_alt',
        'projecte:transmutation_table',
        'projecte:transmutation_tablet',
        'projecte:dark_matter',
        'projecte:red_matter',
        'projecte:red_matter_alt',
        'projecte:collector_mk1',
        'projecte:collector_mk2',
        'projecte:collector_mk3',
        'mekanism:processing/lategame/plutonium',
        'mekanism:processing/lategame/polonium',
        'advanced_ae:quantum_processor_print_eae',
    ];

    recipesToRemoveID.forEach((recipe) => {
        event.remove({ id: recipe });
    });
});
