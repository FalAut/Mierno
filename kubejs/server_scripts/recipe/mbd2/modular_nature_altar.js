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
        .inputItems("gold_ingot")
        .blocksInStructure(1, 100, "mierno:nether_catalyst")
        .outputItems("naturesaura:tainted_gold")
        .inputAura(2000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("gold_block")
        .blocksInStructure(1, 100, "mierno:nether_catalyst")
        .outputItems("naturesaura:tainted_gold_block")
        .inputAura(18000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("naturesaura:bottle_two_the_rebottling")
        .blocksInStructure(1, 100, "mierno:nether_catalyst")
        .outputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}'))
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("naturesaura:bottle_two_the_rebottling")
        .outputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}'))
        .inputAura(1000)
        .duration(1);

    mierno
        .modular_nature_altar()
        .inputItems("naturesaura:bottle_two_the_rebottling")
        .blocksInStructure(1, 100, "mierno:end_catalyst")
        .outputItems(Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:end"}'))
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
