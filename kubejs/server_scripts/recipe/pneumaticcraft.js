ServerEvents.recipes((event) => {
    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 1,
                item: "naturesaura:depth_ingot",
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 1,
                item: "pneumaticcraft:ingot_iron_compressed",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:explosion_crafting",
        input: {
            item: "naturesaura:depth_ingot",
        },
        loss_rate: 20,
        results: [
            {
                item: "pneumaticcraft:ingot_iron_compressed",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:explosion_crafting",
        input: {
            item: "naturesaura:depth_ingot_block",
        },
        loss_rate: 20,
        results: [
            {
                item: "pneumaticcraft:compressed_iron_block",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 32,
                item: "minecraft:lapis_lazuli",
            },
            {
                type: "pneumaticcraft:stacked_item",
                count: 16,
                item: "thermal:bronze_plate",
            },
            {
                item: "powah:capacitor_nitro",
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 16,
                item: "pneumaticcraft:capacitor",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 16,
                item: "pneumaticcraft:ingot_iron_compressed",
            },
            {
                type: "pneumaticcraft:stacked_item",
                count: 16,
                item: "thermal:electrum_plate",
            },
            {
                type: "pneumaticcraft:stacked_item",
                count: 4,
                item: "powah:capacitor_nitro",
            },
        ],
        pressure: 3.0,
        results: [
            {
                type: "pneumaticcraft:stacked_item",
                count: 16,
                item: "pneumaticcraft:transistor",
            },
        ],
    });

    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: {
            item: "pneumaticcraft:unassembled_pcb",
        },
        program: "laser",
        result: {
            item: "pneumaticcraft:printed_circuit_board",
        },
    });

    event.custom({
        type: "pneumaticcraft:assembly_laser",
        input: {
            item: "naturesaura:token_fear",
        },
        program: "laser",
        result: {
            item: "naturesaura:token_terror",
        },
    });
});
