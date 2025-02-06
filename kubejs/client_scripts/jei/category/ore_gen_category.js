JEIAddedEvents.registerCategories((event) => {
    event.custom('mierno:ore_gen', (category) => {
        const {
            jeiHelpers: { guiHelper },
        } = category;

        category
            .title(Text.translate('jei.mierno.category.ore_gen'))
            .background(guiHelper.createBlankDrawable(100, 50))
            .icon(guiHelper.createDrawableItemStack('mierno:gensousitu_bucket'))
            .handleLookup((layOut, recipe, focuses) => {
                layOut.addSlot('INPUT', 20, 20).addItemStack(recipe.data.input);
                layOut.addSlot('OUTPUT', 40, 20).addItemStack(recipe.data.output);
                layOut.addSlot('CATALYST', 60, 20).addFluidStack('mierno:gensousitu');
                layOut.addInvisibleIngredients('OUTPUT').addItemStack(recipe.data.also);
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    event
        .custom('mierno:ore_gen')
        .add({ input: 'iron_block', output: 'iron_ore', also: 'raw_iron' })
        .add({ input: 'gold_block', output: 'gold_ore', also: 'raw_gold' })
        .add({ input: 'diamond_block', output: 'diamond_ore', also: 'diamond' })
        .add({ input: 'lapis_block', output: 'lapis_ore', also: 'lapis_lazuli' })
        .add({ input: 'emerald_block', output: 'emerald_ore', also: 'emerald' })
        .add({ input: 'coal_block', output: 'coal_ore', also: 'coal' })
        .add({ input: 'redstone_block', output: 'redstone_ore', also: 'redstone' })
        .add({ input: 'copper_block', output: 'copper_ore', also: 'raw_copper' })
        .add({ input: 'exposed_copper', output: 'copper_ore', also: 'raw_copper' })
        .add({ input: 'weathered_copper', output: 'copper_ore', also: 'raw_copper' })
        .add({ input: 'oxidized_copper', output: 'copper_ore', also: 'raw_copper' })
        .add({ input: 'netherite_block', output: 'ancient_debris', also: 'netherite_scrap' })
        .add({ input: 'crying_obsidian', output: 'obsidian', also: 'obsidian' })
        .add({ input: 'mierno:mini_sun', output: 'glowstone', also: 'glowstone_dust' })
        .add({ input: 'quartz_block', output: 'nether_quartz_ore', also: 'quartz' });
});
