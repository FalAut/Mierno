JEIAddedEvents.registerRecipeCatalysts((event) => {
    const catalysts = [
        ['mierno:source_flower', 'mierno:source_flower'],
        ['mierno:flowing_source_flower', 'mierno:source_flower'],
        ['mierno:colossal_furnace_core', $RecipeTypes.SMELTING],
        ['minecraft:beacon', 'mierno:beacon_convert'],
        ['mierno:gensousitu_bucket', 'mierno:ore_gen'],
        ['mierno:fired_crucible', 'mierno:crucible_heat_source'],
        ['evilcraft:spirit_furnace', 'mierno:spirit_furnace'],
        ['mierno:engraving_table', 'mierno:engraving'],
    ];

    catalysts.forEach(([input, recipe]) => {
        event.data['addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])'](
            input,
            recipe
        );
    });
});
