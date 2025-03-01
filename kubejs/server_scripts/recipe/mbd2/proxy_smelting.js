ServerEvents.recipes((event) => {
    Object.entries(JsonIO.read('kubejs/fuel_items.json')).forEach(([itemId, burnTime]) => {
        let recipe = event.recipes.mierno.proxy_smelting();

        recipe.isFuel(true);
        recipe.slotName('fuel_input', (builder) => {
            builder.inputItems(itemId);
        });
        recipe.duration(burnTime);
    });
});
