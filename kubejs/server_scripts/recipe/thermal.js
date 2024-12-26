ServerEvents.recipes((event) => {
    const { thermal } = event.recipes;

    function chiller(output, inputFluid, amount, inputCast, energy) {
        event.custom({
            type: "thermal:chiller",
            ingredients: [
                {
                    fluid: inputFluid,
                    amount: amount ? amount : 1000,
                },
                {
                    item: inputCast ? inputCast : "thermal:chiller_ingot_cast",
                },
            ],
            result: [
                {
                    item: output,
                    count: 1,
                },
            ],
            energy: energy ? energy : 20000,
        });
    }

    chiller("thermal:enderium_ingot", "thermal:ender");
    chiller("thermal:lumium_ingot", "mierno:molten_lumium");
    chiller("thermal:signalum_ingot", "mierno:molten_signalum");

    event.custom({
        type: "thermal:pulverizer",
        ingredient: {
            item: "mierno:colorless_gem",
        },
        result: [
            {
                item: "forbidden_arcanus:mundabitur_dust",
            },
            {
                item: "forbidden_arcanus:mundabitur_dust",
                chance: 0.5,
            },
        ],
    });

    event.custom({
        type: "thermal:refinery",
        ingredient: {
            fluid: "thermal:latex",
            amount: 100,
        },
        result: [
            {
                item: "thermal:rubber",
                chance: 0.8,
            },
        ],
        energy: 4000,
    });

    event.custom({
        type: "thermal:smelter",
        ingredients: [
            {
                item: "thermal:iron_plate",
                count: 16,
            },
            {
                item: "ae2:quartz_vibrant_glass",
                count: 4,
            },
            {
                item: "ae2:printed_silicon",
                count: 4,
            },
        ],
        result: [
            {
                item: "thermal:machine_frame",
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: "thermal:smelter",
        ingredients: [
            {
                item: "thermal:cured_rubber",
                count: 1,
            },
            {
                item: "minecraft:clay_ball",
                count: 1,
            },
            {
                item: "fluxnetworks:flux_dust",
                count: 1,
            },
        ],
        result: [
            {
                item: "powah:dielectric_paste",
                count: 16,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: "thermal:smelter",
        ingredients: [
            {
                item: "minecraft:nether_star",
                count: 1,
            },
            {
                item: "forbidden_arcanus:processed_obsidian_block",
                count: 1,
            },
            {
                item: "forbidden_arcanus:dark_matter",
                count: 1,
            },
        ],
        result: [
            {
                item: "forbidden_arcanus:dark_nether_star",
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: "thermal:smelter",
        ingredients: [
            {
                item: "obsidian",
                count: 1,
            },
            {
                item: "iron_block",
                count: 1,
            },
        ],
        result: [
            {
                item: "forbidden_arcanus:obsidian_with_iron",
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: "thermal:smelter",
        ingredients: [
            {
                item: "ae2:matter_ball",
                count: 64,
            },
            {
                item: "botania:black_lotus",
                count: 1,
            },
            {
                item: "naturesaura:tainted_gold",
                count: 1,
            },
        ],
        result: [
            {
                item: "forbidden_arcanus:dark_matter",
                count: 1,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: "thermal:smelter",
        ingredients: [
            {
                item: "ae2:matter_ball",
                count: 64,
            },
            {
                item: "botania:blacker_lotus",
                count: 1,
            },
            {
                item: "naturesaura:tainted_gold",
                count: 1,
            },
        ],
        result: [
            {
                item: "forbidden_arcanus:dark_matter",
                count: 8,
            },
        ],
        energy: 8000,
    });

    event.custom({
        type: "thermal:press",
        ingredients: [
            {
                tag: "pneumaticcraft:ingot_iron_compressed",
                count: 4,
            },
            {
                item: "thermal:press_gear_die",
            },
        ],
        result: [
            {
                item: "pneumaticcraft:compressed_iron_gear",
            },
        ],
    });
});
