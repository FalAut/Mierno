ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;

    JsonIO.read("kubejs/nature_altar.json").recipes.forEach((recipeData) => {
        if (recipeData.catalyst != "null") {
            mierno
                .modular_nature_altar()
                .inputItems(recipeData.input)
                .blocksInStructure(1, 100, recipeData.catalyst)
                .outputItems(recipeData.output)
                .inputAura(recipeData.aura)
                .duration(1);
        } else {
            mierno
                .modular_nature_altar()
                .inputItems(recipeData.input)
                .outputItems(recipeData.output)
                .inputAura(recipeData.aura)
                .duration(1);
        }
    });

    mierno
        .modular_nature_altar()
        .inputItems("minecraft:stone")
        .outputItems("naturesaura:infused_stone")
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("iron_block")
        .outputItems("naturesaura:infused_iron_block")
        .inputAura(9000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("iron_ingot")
        .outputItems("naturesaura:infused_iron")
        .inputAura(1000)
        .duration(1);

    mierno.modular_nature_altar().inputItems("#logs").outputItems("mierno:infused_wood").inputAura(1000).duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("redstone")
        .blocksInStructure(1, 100, "naturesaura:conversion_catalyst")
        .outputItems("minecraft:glowstone_dust")
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("emerald")
        .blocksInStructure(1, 100, "naturesaura:conversion_catalyst")
        .outputItems("minecraft:amethyst_shard")
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("lapis_lazuli")
        .blocksInStructure(1, 100, "naturesaura:conversion_catalyst")
        .outputItems("minecraft:quartz")
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("botania:grass_seeds")
        .blocksInStructure(1, 100, "naturesaura:conversion_catalyst")
        .outputItems("botania:vivid_seeds")
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("gold_ingot")
        .blocksInStructure(1, 100, "mierno:nether_catalyst")
        .outputItems("naturesaura:tainted_gold")
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("gold_block")
        .blocksInStructure(1, 100, "mierno:nether_catalyst")
        .outputItems("naturesaura:tainted_gold_block")
        .inputAura(9000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("naturesaura:bottle_two_the_rebottling")
        .blocksInStructure(1, 100, "mierno:nether_catalyst")
        .outputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}').strongNBT())
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("naturesaura:bottle_two_the_rebottling")
        .outputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').strongNBT())
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("naturesaura:bottle_two_the_rebottling")
        .blocksInStructure(1, 100, "mierno:end_catalyst")
        .outputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:end"}').strongNBT())
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:end"}').weakNBT())
        .blocksInStructure(1, 100, "mierno:end_catalyst")
        .outputItems("minecraft:dragon_breath")
        .inputAura(1000)
        .duration(1);
});
