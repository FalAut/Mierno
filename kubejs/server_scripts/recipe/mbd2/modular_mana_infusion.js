ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;

    JsonIO.read("kubejs/mana_infusion.json").recipes.forEach((recipeData) => {
        if (recipeData.catalyst != "null") {
            mierno
                .modular_mana_infusion()
                .inputItems(recipeData.input)
                .blocksInStructure(1, 100, recipeData.catalyst)
                .outputItems(Item.of(recipeData.output).withCount(recipeData.outputCount))
                .inputMana(recipeData.mana)
                .duration(1);
        } else {
            mierno
                .modular_mana_infusion()
                .inputItems(recipeData.input)
                .outputItems(recipeData.output)
                .inputMana(recipeData.mana)
                .duration(1);
        }
    });
});
