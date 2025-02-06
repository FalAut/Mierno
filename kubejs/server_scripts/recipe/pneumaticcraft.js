ServerEvents.recipes((event) => {
    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 1,
                item: 'naturesaura:depth_ingot',
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 1,
                item: 'pneumaticcraft:ingot_iron_compressed',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 1,
                item: 'naturesaura:depth_ingot_block',
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 1,
                item: 'pneumaticcraft:compressed_iron_block',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:explosion_crafting',
        input: {
            item: 'naturesaura:depth_ingot',
        },
        loss_rate: 20,
        results: [
            {
                item: 'pneumaticcraft:ingot_iron_compressed',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:explosion_crafting',
        input: {
            item: 'naturesaura:depth_ingot_block',
        },
        loss_rate: 20,
        results: [
            {
                item: 'pneumaticcraft:compressed_iron_block',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 32,
                item: 'minecraft:lapis_lazuli',
            },
            {
                type: 'pneumaticcraft:stacked_item',
                count: 16,
                item: 'thermal:bronze_plate',
            },
            {
                item: 'powah:capacitor_nitro',
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 16,
                item: 'pneumaticcraft:capacitor',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 64,
                item: 'pneumaticcraft:reinforced_stone',
            },
            {
                type: 'pneumaticcraft:stacked_item',
                count: 32,
                item: 'pneumaticcraft:transistor',
            },
            {
                type: 'pneumaticcraft:stacked_item',
                count: 16,
                item: 'pneumaticcraft:capacitor',
            },
            {
                type: 'pneumaticcraft:stacked_item',
                count: 8,
                item: 'mierno:unstable_singularity',
            },
        ],
        pressure: 3.0,
        results: [
            {
                item: 'pneumaticcraft:creative_compressor',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:pressure_chamber',
        inputs: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 16,
                item: 'pneumaticcraft:ingot_iron_compressed',
            },
            {
                type: 'pneumaticcraft:stacked_item',
                count: 16,
                item: 'thermal:electrum_plate',
            },
            {
                type: 'pneumaticcraft:stacked_item',
                count: 4,
                item: 'powah:crystal_nitro',
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: 'pneumaticcraft:stacked_item',
                count: 16,
                item: 'pneumaticcraft:transistor',
            },
        ],
    });

    event.custom({
        type: 'pneumaticcraft:assembly_laser',
        input: {
            item: 'pneumaticcraft:unassembled_pcb',
        },
        program: 'laser',
        result: {
            item: 'pneumaticcraft:printed_circuit_board',
        },
    });

    event.custom({
        type: 'pneumaticcraft:assembly_laser',
        input: {
            item: 'naturesaura:token_fear',
        },
        program: 'laser',
        result: {
            item: 'naturesaura:token_terror',
        },
    });

    event.custom({
        type: 'pneumaticcraft:thermo_plant',
        air_use_multiplier: 9.9,
        exothermic: false,
        fluid_input: {
            type: 'pneumaticcraft:fluid',
            amount: 9999,
            fluid: 'pneumaticcraft:etching_acid',
        },
        item_input: {
            item: 'pneumaticcraft:compressed_iron_block',
        },
        item_output: {
            item: 'pneumaticcraft:creative_compressed_iron_block',
        },
        pressure: 9.9,
        speed: 0.25,
        temperature: {
            min_temp: 1272,
        },
    });

    event.custom({
        type: 'pneumaticcraft:amadron',
        id: 'pneumaticcraft:amadron/advanced_pressure_tube',
        input: {
            type: 'ITEM',
            amount: 8,
            id: 'pneumaticcraft:reinforced_pressure_tube',
        },
        level: 0,
        output: {
            type: 'ITEM',
            amount: 1,
            id: 'pneumaticcraft:advanced_pressure_tube',
        },
        static: true,
    });
});
