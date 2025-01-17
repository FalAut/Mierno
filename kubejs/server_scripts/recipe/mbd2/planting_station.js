ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;

    JsonIO.read("kubejs/planting.json").recipes.forEach((recipeData) => {
        plantingStation(recipeData.outputs.toArray(), recipeData.seed);
    });

    /**
     * 种植站
     * @param {OutputItem_[]} output
     * @param {InputItem_[]} seed
     * @returns {Special.Recipes.PlantingStationMierno}
     */
    function plantingStation(output, seed) {
        let recipe = mierno.planting_station();

        recipe.inputAura(100);
        recipe.inputFluids(Fluid.of("water", 100));
        recipe.outputItems(output);

        recipe.slotName("seed_slot", (builder) => {
            builder.chance(0).inputItems(seed);
        });

        recipe.slotName("soil_slot", (builder) => {
            builder.chance(0).inputItems("#mierno:planting_soil");
        });

        recipe.chance(0.5).outputItems(seed);

        return recipe;
    }

    Ingredient.of("#minecraft:saplings").stacks.forEach((stack) => {
        let specialSaplings = [
            "minecraft:oak_sapling",
            "occultism:otherworld_sapling_natural",
            "malum:azure_runewood_sapling",
            "minecraft:mangrove_propagule",
            "minecraft:azalea",
            "minecraft:flowering_azalea",
        ];

        if (!specialSaplings.includes(stack.id)) {
            const saplingId = stack.id;
            const [namespace, itemPath] = saplingId.split(":");
            const woodType = itemPath.replace("_sapling", "");

            plantingStation([`3x ${namespace}:${woodType}_log`, `5x ${namespace}:${woodType}_leaves`], saplingId);
        }
    });

    plantingStation(["3x oak_log", "5x oak_leaves"], "oak_sapling").chance(0.5).outputItems("apple");
    plantingStation(["6x oak_log", "hanging_roots"], "azalea");
    plantingStation(["6x oak_log", "hanging_roots"], "flowering_azalea");
    plantingStation(["6x mangrove_log", "mangrove_roots"], "mangrove_propagule");
    plantingStation(["3x malum:runewood_log", "5x malum:azure_runewood_leaves"], "malum:azure_runewood_sapling");

    plantingStation("minecraft:feather", "minecraft:feather");
    plantingStation("minecraft:blaze_rod", "minecraft:blaze_rod");
    plantingStation("minecraft:ender_pearl", "minecraft:ender_pearl");

    plantingStation("minecraft:leather", "minecraft:leather");

    plantingStation(["2x ars_nouveau:magebloom"], "ars_nouveau:magebloom_crop");

    mierno
        .planting_station()
        .inputAura(100)
        .inputFluids(Fluid.of("water", 100))
        .outputItems("3x forbidden_arcanus:deorum_nugget")
        .slotName("seed_slot", (builder) => {
            builder.chance(0).inputItems("forbidden_arcanus:golden_orchid_seeds");
        })
        .slotName("soil_slot", (builder) => {
            builder.chance(0).inputItems("#mierno:planting_soil");
        })
        .chance(0.5)
        .outputItems("5x forbidden_arcanus:deorum_nugget");
});
