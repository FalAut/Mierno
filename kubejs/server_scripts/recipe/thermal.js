ServerEvents.recipes((event) => {
    const { thermal } = event.recipes;

    /**
     * 急速冷冻机
     * @param {OutputItem_} output
     * @param {Fluid_} inputFluid
     * @param {number} amount
     * @param {InputItem_} inputCast
     * @param {number} energy
     */
    function chiller(output, inputFluid, amount, inputCast, energy) {
        event.custom({
            type: 'thermal:chiller',
            ingredients: [
                {
                    fluid: inputFluid,
                    amount: amount ? amount : 1000,
                },
                {
                    item: inputCast ? inputCast : 'thermal:chiller_ingot_cast',
                },
            ],
            result: [
                {
                    item: output,
                    count: 1,
                },
            ],
        });
    }

    chiller('thermal:enderium_ingot', 'thermal:ender');
    chiller('thermal:lumium_ingot', 'mierno:molten_lumium');
    chiller('thermal:signalum_ingot', 'mierno:molten_signalum');
    chiller('evilcraft:condensed_blood', 'evilcraft:blood', 500, 'thermal:chiller_ball_cast');
    chiller('mierno:solid_etching_acid', 'pneumaticcraft:etching_acid', 100);

    event.custom({
        type: 'thermal:chiller',
        ingredients: [
            {
                fluid: 'evilcraft:blood',
                amount: 1000,
            },
        ],
        result: [
            {
                item: 'evilcraft:hardened_blood',
                count: 1,
            },
        ],
    });

    /**
     * 磨粉机
     * @param {OutputItem_} output
     * @param {InputItem_} input
     */
    function pulverizer(output, input) {
        let count = 1;
        let match = output.match(/^(\d+)x\s*(.+)$/);
        if (match) {
            count = parseInt(match[1]);
            output = match[2];
        }

        // 创建自定义配方
        event.custom({
            type: 'thermal:pulverizer',
            ingredient: input.startsWith('#') ? { tag: input.substring(1) } : { item: input },
            result: [
                {
                    item: output,
                    count: count,
                },
            ],
        });
    }

    pulverizer('4x forbidden_arcanus:mundabitur_dust', 'mierno:colorless_gem');
    pulverizer('ae2:certus_quartz_dust', '#ae2:all_certus_quartz');
    pulverizer('evilcraft:dark_gem_crushed', 'evilcraft:dark_gem');
    pulverizer('ae2:fluix_dust', 'ae2:fluix_crystal');
    pulverizer('ae2:sky_dust', 'ae2:sky_stone_block');
    pulverizer('ae2:ender_dust', 'minecraft:ender_pearl');
    pulverizer('forbidden_arcanus:arcane_crystal_dust', 'forbidden_arcanus:arcane_crystal');

    event.custom({
        type: 'thermal:refinery',
        ingredient: {
            fluid: 'thermal:latex',
            amount: 100,
        },
        result: [
            {
                item: 'thermal:rubber',
                chance: 0.8,
            },
        ],
        energy: 4000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'thermal:iron_plate',
                count: 16,
            },
            {
                item: 'ae2:quartz_vibrant_glass',
                count: 4,
            },
            {
                item: 'ae2:printed_silicon',
                count: 4,
            },
        ],
        result: [
            {
                item: 'thermal:machine_frame',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'minecraft:stone',
                count: 8,
            },
            {
                item: 'ars_nouveau:magebloom_fiber',
                count: 1,
            },
            {
                item: 'ars_nouveau:source_gem',
                count: 1,
            },
        ],
        result: [
            {
                item: 'ars_nouveau:sourcestone',
                count: 8,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'naturesaura:infused_iron',
                count: 16,
            },
            {
                item: 'naturesaura:calling_spirit',
                count: 1,
            },
        ],
        result: [
            {
                item: 'naturesaura:sky_ingot',
                count: 16,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'naturesaura:tainted_gold',
                count: 16,
            },
            {
                item: 'naturesaura:calling_spirit',
                count: 1,
            },
        ],
        result: [
            {
                item: 'naturesaura:sky_ingot',
                count: 32,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'ad_astra:ostrum_plate',
            },
            {
                item: 'ad_astra:calorite_plate',
            },
            {
                item: 'ad_astra:desh_plate',
            },
        ],
        result: [
            {
                item: 'mierno:milkyway_plate',
                count: 6,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'minecraft:redstone',
                count: 16,
            },
            {
                item: 'thermal:iron_plate',
                count: 8,
            },
        ],
        result: [
            {
                item: 'thermal:redstone_servo',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'minecraft:redstone',
                count: 16,
            },
            {
                item: 'thermal:gold_plate',
                count: 8,
            },
        ],
        result: [
            {
                item: 'thermal:rf_coil',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:bottler',
        ingredients: [
            {
                item: 'mierno:upgrade_augment_compressed_iron',
            },
            {
                fluid: 'mierno:ether_memory_source',
                amount: 4000,
            },
        ],
        result: [
            {
                item: 'mierno:upgrade_augment_ether',
            },
        ],
        experience: 0.1,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'minecraft:blaze_powder',
                count: 8,
            },
            {
                item: 'botania:quartz_mana',
                count: 1,
            },
        ],
        result: [
            {
                item: 'malum:blazing_quartz',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'thermal:cured_rubber',
                count: 1,
            },
            {
                item: 'minecraft:clay_ball',
                count: 1,
            },
            {
                item: 'fluxnetworks:flux_dust',
                count: 1,
            },
        ],
        result: [
            {
                item: 'powah:dielectric_paste',
                count: 16,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'minecraft:nether_star',
                count: 1,
            },
            {
                item: 'forbidden_arcanus:processed_obsidian_block',
                count: 1,
            },
            {
                item: 'forbidden_arcanus:dark_matter',
                count: 1,
            },
        ],
        result: [
            {
                item: 'forbidden_arcanus:dark_nether_star',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'obsidian',
                count: 1,
            },
            {
                item: 'iron_block',
                count: 1,
            },
        ],
        result: [
            {
                item: 'forbidden_arcanus:obsidian_with_iron',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'forbidden_arcanus:stellarite_piece',
                count: 4,
            },
            {
                item: 'bloodmagic:etherealslate',
                count: 4,
            },
            {
                item: 'minecraft:lodestone',
                count: 1,
            },
        ],
        result: [
            {
                item: 'forbidden_arcanus:ferrognetic_mixture',
                count: 8,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'ae2:matter_ball',
                count: 64,
            },
            {
                item: 'botania:black_lotus',
                count: 1,
            },
            {
                item: 'naturesaura:tainted_gold',
                count: 1,
            },
        ],
        result: [
            {
                item: 'forbidden_arcanus:dark_matter',
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:smelter',
        ingredients: [
            {
                item: 'ae2:matter_ball',
                count: 64,
            },
            {
                item: 'botania:blacker_lotus',
                count: 1,
            },
            {
                item: 'naturesaura:tainted_gold',
                count: 1,
            },
        ],
        result: [
            {
                item: 'forbidden_arcanus:dark_matter',
                count: 8,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: 'thermal:press',
        ingredients: [
            {
                item: 'pneumaticcraft:ingot_iron_compressed',
                count: 4,
            },
            {
                item: 'thermal:press_gear_die',
            },
        ],
        result: [
            {
                item: 'pneumaticcraft:compressed_iron_gear',
            },
        ],
    });

    event.custom({
        type: 'thermal:press',
        ingredients: [
            {
                item: 'minecraft:lapis_lazuli',
                count: 4,
            },
            {
                item: 'thermal:press_gear_die',
            },
        ],
        result: [
            {
                item: 'thermal:lapis_gear',
            },
        ],
    });

    event.custom({
        type: 'thermal:press',
        ingredients: [
            {
                item: 'minecraft:lapis_lazuli',
                count: 4,
            },
            {
                item: 'thermal:press_gear_die',
            },
        ],
        result: [
            {
                item: 'thermal:lapis_gear',
            },
        ],
    });

    event.custom({
        type: 'thermal:press',
        ingredients: [
            {
                item: 'mekanism:ingot_steel',
            },
        ],
        result: [
            {
                item: 'ad_astra:steel_plate',
            },
        ],
    });

    event.custom({
        type: 'thermal:press',
        ingredients: [
            {
                item: 'ad_astra:etrium_ingot',
            },
        ],
        result: [
            {
                item: 'ad_astra:etrium_plate',
            },
        ],
    });

    event.custom({
        type: 'thermal:pyrolyzer',
        ingredient: {
            item: 'fluxnetworks:flux_dust',
        },
        result: [
            {
                item: 'thermal:tar',
            },
            {
                item: 'thermal:tar',
                chance: 0.25,
            },
            {
                fluid: 'thermal:heavy_oil',
                amount: 250,
            },
        ],
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:acacia_log',
            Properties: {
                axis: 'y',
            },
        },
        leaves: {
            Name: 'minecraft:acacia_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:acacia_sapling',
        min_height: 5,
        max_height: 10,
        min_leaves: 8,
        max_leaves: 12,
        result: {
            fluid: 'thermal:resin',
            amount: 150,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:birch_log',
            Properties: {
                axis: 'y',
            },
        },
        leaves: {
            Name: 'minecraft:birch_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:birch_sapling',
        min_height: 5,
        max_height: 13,
        min_leaves: 16,
        max_leaves: 24,
        result: {
            fluid: 'thermal:sap',
            amount: 100,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:cherry_log',
        },
        leaves: {
            Name: 'minecraft:cherry_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:cherry_sapling',
        min_height: 4,
        max_height: 8,
        min_leaves: 16,
        max_leaves: 24,
        result: {
            fluid: 'thermal:resin',
            amount: 150,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:dark_oak_log',
            Properties: {
                axis: 'y',
            },
        },
        leaves: {
            Name: 'minecraft:dark_oak_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:dark_oak_sapling',
        min_height: 5,
        max_height: 8,
        min_leaves: 16,
        max_leaves: 24,
        result: {
            fluid: 'thermal:sap',
            amount: 200,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:jungle_log',
            Properties: {
                axis: 'y',
            },
        },
        leaves: {
            Name: 'minecraft:jungle_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:jungle_sapling',
        min_height: 5,
        max_height: 16,
        min_leaves: 16,
        max_leaves: 24,
        result: {
            fluid: 'thermal:latex',
            amount: 150,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:oak_log',
        },
        leaves: {
            Name: 'minecraft:oak_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:oak_sapling',
        min_height: 4,
        max_height: 10,
        min_leaves: 16,
        max_leaves: 24,
        result: {
            fluid: 'thermal:resin',
            amount: 150,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'minecraft:spruce_log',
            Properties: {
                axis: 'y',
            },
        },
        leaves: {
            Name: 'minecraft:spruce_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'minecraft:spruce_sapling',
        min_height: 5,
        max_height: 16,
        min_leaves: 8,
        max_leaves: 12,
        result: {
            fluid: 'thermal:resin',
            amount: 250,
        },
    });

    event.custom({
        type: 'thermal:tree_extractor',
        trunk: {
            Name: 'thermal:rubberwood_log',
            Properties: {
                axis: 'y',
            },
        },
        leaves: {
            Name: 'thermal:rubberwood_leaves',
            Properties: {
                persistent: 'false',
            },
        },
        sapling: 'thermal:rubberwood_sapling',
        min_height: 4,
        max_height: 16,
        min_leaves: 16,
        max_leaves: 24,
        result: {
            fluid: 'thermal:latex',
            amount: 300,
        },
    });

    event.custom({
        type: 'thermal:smelter',
        ingredient: {
            item: 'forbidden_arcanus:runic_stone',
        },
        result: [
            {
                item: 'forbidden_arcanus:rune',
                count: 5,
                chance: 1.0,
            },
            {
                item: 'forbidden_arcanus:rune',
                count: 3,
                chance: 0.8,
            },
            {
                item: 'forbidden_arcanus:rune',
                count: 2,
                chance: 0.5,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredient: {
            item: 'forbidden_arcanus:arcane_crystal_ore',
        },
        result: [
            {
                item: 'forbidden_arcanus:arcane_crystal',
                count: 5,
                chance: 1.0,
            },
            {
                item: 'forbidden_arcanus:arcane_crystal',
                count: 3,
                chance: 0.8,
            },
            {
                item: 'forbidden_arcanus:arcane_crystal',
                count: 2,
                chance: 0.5,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredient: {
            item: 'occultism:raw_iesnium',
        },
        result: [
            {
                item: 'occultism:iesnium_ingot',
                count: 5,
                chance: 1.0,
            },
            {
                item: 'occultism:iesnium_ingot',
                count: 3,
                chance: 0.8,
            },
            {
                item: 'occultism:iesnium_ingot',
                count: 2,
                chance: 0.5,
            },
        ],
    });

    event.custom({
        type: 'thermal:smelter',
        ingredient: {
            item: 'occultism:iesnium_ore',
        },
        result: [
            {
                item: 'occultism:iesnium_ingot',
                count: 5,
                chance: 1.0,
            },
            {
                item: 'occultism:iesnium_ingot',
                count: 3,
                chance: 0.8,
            },
            {
                item: 'occultism:iesnium_ingot',
                count: 2,
                chance: 0.5,
            },
        ],
    });
});
