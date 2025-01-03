ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;

    let manaInfusions = [];

    event.forEachRecipe({ type: "botania:mana_infusion" }, (recipe) => {
        console.log(recipe.json);
        let input = recipe.originalRecipeIngredients;
        let catalyst;

        if (recipe.json.get("catalyst")) {
            catalyst = recipe.json.get("catalyst").get("block");
        }

        let output = recipe.originalRecipeResult;
        let outputCount = recipe.json.get("output").get("count");

        manaInfusions.push({
            input: input.first.itemIds[0],
            catalyst: catalyst ? catalyst : "null",
            output: output.id,
            outputCount: outputCount ? outputCount : 1,
            mana: recipe.json.get("mana"),
        });
    });

    JsonIO.write("kubejs/mana_infusion.json", { recipes: manaInfusions });

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
