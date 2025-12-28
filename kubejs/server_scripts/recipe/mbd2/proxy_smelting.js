ServerEvents.recipes((event) => {
    Ingredient.all.stacks.forEach((itemStack) => {
        const burnTime = $ForgeHooks.getBurnTime(itemStack, 'minecraft:smelting');

        if (burnTime > 0) {
            let recipe = event.recipes.mierno.proxy_smelting();

            recipe.isFuel(true);
            recipe.slotName('fuel_slot', (builder) => {
                builder.inputItems(itemStack);
            });
            recipe.duration(burnTime);
        }
    });
});

MBDRecipeTypeEvents.onTransferProxyRecipe('mierno:proxy_smelting', (e) => {
    let event = e.event;
    const { recipeType, proxyTypeId, proxyType, proxyRecipeId, proxyRecipe } = event;

    if (proxyTypeId === 'minecraft:smelting') {
        let input = proxyRecipe.getIngredients()[0];
        let output = proxyRecipe.getResultItem(null);
        let cookingTime = proxyRecipe.cookingTime;

        var recipe = recipeType
            .recipeBuilder()
            .slotName('item_slot', (builder) => {
                builder.inputItems(input);
            })
            .duration(cookingTime)
            .outputItems(output)
            .id(proxyRecipeId + '_mbd2')
            .buildMBDRecipe();

        event.mbdRecipe = recipe;
    }
});
