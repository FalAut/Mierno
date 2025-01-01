ServerEvents.recipes((event) => {
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "explosion",
        },
        ingredients: [
            {
                item: "mierno:unstable_singularity",
            },
            {
                item: "naturesaura:token_anger",
            },
        ],
        result: {
            count: 1,
            item: "naturesaura:token_rage",
        },
    });

    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "minecraft:water",
        },
        ingredients: [
            {
                item: "ae2:charged_certus_quartz_crystal",
            },
            {
                item: "botania:elf_glass",
            },
            {
                item: "botania:pixie_dust",
            },
        ],
        result: {
            count: 2,
            item: "ae2:fluix_crystal",
        },
    });

    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "fluid",
            tag: "minecraft:water",
        },
        ingredients: [
            {
                item: "ae2:charged_certus_quartz_crystal",
            },
            {
                item: "ae2:fluix_dust",
            },
        ],
        result: {
            item: "ae2:fluix_crystal",
        },
    });

    event.custom({
        type: "expatternprovider:circuit_cutter",
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: "pneumaticcraft:etching_acid",
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: "forge:storage_blocks/certus_quartz",
            },
        },
        output: {
            count: 4,
            item: "ae2:printed_calculation_processor",
        },
    });

    event.custom({
        type: "expatternprovider:circuit_cutter",
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: "pneumaticcraft:etching_acid",
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: "forge:storage_blocks/diamond",
            },
        },
        output: {
            count: 4,
            item: "ae2:printed_engineering_processor",
        },
    });

    event.custom({
        type: "expatternprovider:circuit_cutter",
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: "pneumaticcraft:etching_acid",
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: "forge:storage_blocks/gold",
            },
        },
        output: {
            count: 4,
            item: "ae2:printed_logic_processor",
        },
    });

    event.custom({
        type: "expatternprovider:circuit_cutter",
        fluid_input: {
            amount: 100,
            ingredient: {
                fluid: "pneumaticcraft:etching_acid",
            },
        },
        item_input: {
            amount: 1,
            ingredient: {
                tag: "forge:storage_blocks/silicon",
            },
        },
        output: {
            count: 4,
            item: "ae2:printed_silicon",
        },
    });

    event.custom({
        type: "ae2:charger",
        ingredient: {
            item: "mierno:sun_crystal",
        },
        result: {
            item: "mierno:sun_crystal_full",
        },
    });
});
