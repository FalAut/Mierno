ServerEvents.recipes((event) => {
    event.custom({
        type: "powah:energizing",
        ingredients: [
            {
                item: "mekanism:ingot_steel",
            },
            {
                item: "thermal:electrum_ingot",
            },
        ],
        energy: 10000,
        result: {
            item: "powah:steel_energized",
            count: 2,
        },
    });

    event.custom({
        type: "powah:energizing",
        ingredients: [{ item: "malum:blazing_quartz" }],
        energy: 120000,
        result: {
            item: "powah:crystal_blazing",
        },
    });

    event.custom({
        type: "powah:energizing",
        ingredients: [{ item: "botania:mana_diamond" }],
        energy: 300000,
        result: {
            item: "powah:crystal_niotic",
        },
    });

    event.custom({
        type: "powah:energizing",
        ingredients: [{ item: "mierno:source_emerald" }],
        energy: 1000000,
        result: {
            item: "powah:crystal_spirited",
        },
    });

    event.custom({
        type: "powah:energizing",
        ingredients: [
            { item: "minecraft:nether_star" },
            { item: "powah:blazing_crystal_block" },
            { item: "powah:niotic_crystal_block" },
            { item: "powah:spirited_crystal_block" },
        ],
        energy: 20000000,
        result: {
            item: "powah:crystal_nitro",
            count: 16,
        },
    });
});
