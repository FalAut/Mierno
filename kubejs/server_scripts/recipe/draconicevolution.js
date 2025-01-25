ServerEvents.recipes((event) => {
    event.custom({
        type: "draconicevolution:fusion_crafting",
        catalyst: {
            item: "mekanism:ultimate_energy_cube",
        },
        ingredients: [
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
            {
                item: "mierno:memory_matrix",
            },
        ],
        result: {
            item: "mekanism:creative_energy_cube",
            nbt: '{mekData:{EnergyContainers:[{Container:0b,stored:"18446744073709551615.9999"}],componentConfig:{config0:{side0:4,side1:4,side2:4,side3:4,side4:4,side5:4}}}}',
        },
        tier: "CHAOTIC",
        total_energy: 9223372036854775807,
    });
});
