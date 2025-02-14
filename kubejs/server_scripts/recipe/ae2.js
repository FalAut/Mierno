ServerEvents.recipes((event) => {
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            top: {
                item: 'naturesaura:token_anger',
            },
            middle: {
                item: 'mierno:unstable_singularity',
            },
            bottom: {
                item: 'naturesaura:token_anger',
            },
        },
        mode: 'press',
        result: {
            item: 'naturesaura:token_rage',
        },
    });

    event.custom({
        type: 'ae2:transform',
        circumstance: {
            type: 'fluid',
            tag: 'minecraft:water',
        },
        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal',
            },
            {
                item: 'botania:elf_glass',
            },
            {
                item: 'botania:pixie_dust',
            },
        ],
        result: {
            count: 2,
            item: 'ae2:fluix_crystal',
        },
    });

    event.custom({
        type: 'ae2:transform',
        circumstance: {
            type: 'fluid',
            tag: 'minecraft:lava',
        },
        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal',
            },
            {
                item: 'mekanism:ingot_steel',
            },
            {
                item: 'ae2:sky_dust',
            },
        ],
        result: {
            count: 2,
            item: 'mierno:meteorite_steel_ingot',
        },
    });

    event.custom({
        type: 'ae2:transform',
        circumstance: {
            type: 'fluid',
            tag: 'minecraft:water',
        },
        ingredients: [
            {
                item: 'ae2:charged_certus_quartz_crystal',
            },
            {
                item: 'ae2:fluix_dust',
            },
        ],
        result: {
            item: 'ae2:fluix_crystal',
        },
    });

    event.custom({
        type: 'expatternprovider:circuit_cutter',
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: 'pneumaticcraft:etching_acid',
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: 'forge:storage_blocks/certus_quartz',
            },
        },
        output: {
            count: 9,
            item: 'ae2:printed_calculation_processor',
        },
    });

    event.custom({
        type: 'expatternprovider:circuit_cutter',
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: 'pneumaticcraft:etching_acid',
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: 'forge:storage_blocks/diamond',
            },
        },
        output: {
            count: 9,
            item: 'ae2:printed_engineering_processor',
        },
    });

    event.custom({
        type: 'expatternprovider:circuit_cutter',
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: 'pneumaticcraft:etching_acid',
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: 'forge:storage_blocks/gold',
            },
        },
        output: {
            count: 9,
            item: 'ae2:printed_logic_processor',
        },
    });

    event.custom({
        type: 'expatternprovider:circuit_cutter',
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: 'pneumaticcraft:etching_acid',
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: 'forge:storage_blocks/silicon',
            },
        },
        output: {
            count: 9,
            item: 'ae2:printed_silicon',
        },
    });

    event.custom({
        type: 'ae2:charger',
        ingredient: {
            item: 'mierno:sun_crystal',
        },
        result: {
            item: 'mierno:sun_crystal_full',
        },
    });

    event.custom({
        type: 'expatternprovider:circuit_cutter',
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: 'pneumaticcraft:etching_acid',
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                item: 'advanced_ae:quantum_alloy_block',
            },
        },
        output: {
            count: 9,
            item: 'advanced_ae:printed_quantum_processor',
        },
    });

    event.custom({
        type: 'advanced_ae:reaction',
        energy: 200000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:water',
            },
        },
        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: 'ae2:charged_certus_quartz_crystal',
                },
            },
            {
                amount: 16,
                ingredient: {
                    item: 'botania:elf_glass',
                },
            },
            {
                amount: 16,
                ingredient: {
                    item: 'botania:pixie_dust',
                },
            },
        ],
        output: {
            '#': 64,
            '#c': 'ae2:i',
            id: 'ae2:fluix_crystal',
        },
    });

    event.custom({
        type: 'advanced_ae:reaction',
        energy: 200000,
        fluid: {
            fluidStack: {
                Amount: 500,
                FluidName: 'minecraft:lava',
            },
        },
        input_items: [
            {
                amount: 16,
                ingredient: {
                    item: 'ae2:charged_certus_quartz_crystal',
                },
            },
            {
                amount: 16,
                ingredient: {
                    item: 'mekanism:ingot_steel',
                },
            },
            {
                amount: 16,
                ingredient: {
                    item: 'ae2:sky_dust',
                },
            },
        ],
        output: {
            '#': 64,
            '#c': 'ae2:i',
            id: 'mierno:meteorite_steel_ingot',
        },
    });
});
