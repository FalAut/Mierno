JEIAddedEvents.registerCategories((event) => {
    event.custom('mierno:engraving', (category) => {
        const { guiHelper } = category.jeiHelpers;

        category
            .title(Text.translate('mierno.engraving_table'))
            .background(guiHelper.createDrawable('mierno:textures/gui/engraving.png', 0, 0, 180, 130))
            .setWidth(180)
            .setHeight(130)
            .icon(guiHelper.createDrawableItemStack('mierno:engraving_table'))
            .handleLookup((layOut, recipe, focuses) => {
                layOut.addSlot('INPUT', 50, 60).addItemStack(recipe.data.input0);

                layOut.addSlot('INPUT', 50, 21).addItemStack(recipe.data.input1);
                layOut.addSlot('INPUT', 74, 35).addItemStack(recipe.data.input2);
                layOut.addSlot('INPUT', 87, 60).addItemStack(recipe.data.input3);
                layOut.addSlot('INPUT', 74, 85).addItemStack(recipe.data.input4);
                layOut.addSlot('INPUT', 50, 103).addItemStack(recipe.data.input5);
                layOut.addSlot('INPUT', 26, 85).addItemStack(recipe.data.input6);
                layOut.addSlot('INPUT', 13, 60).addItemStack(recipe.data.input7);
                layOut.addSlot('INPUT', 26, 35).addItemStack(recipe.data.input8);

                layOut.addSlot('OUTPUT', 139, 60).addItemStack(recipe.data.output);

                layOut.moveRecipeTransferButton(180, 130);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let auraText = Text.translate('recipe.capability.natures_aura.aura', recipe.data.aura);
                guiGraphics.drawWordWrap(Client.font, auraText, 100, 38, 100, 0);
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    let recipes = Client.getConnection().getRecipeManager().getAllRecipesFor('mierno:engraving_table');

    recipes.forEach((/**@type {Internal.MBDRecipe}*/ recipe) => {
        let auraValue = 0;
        let inputs = [];

        recipe.inputs.entrySet().forEach((entry) => {
            entry.value.forEach((content) => {
                /**@type {Internal.Ingredient} */
                let i = content.getContent();

                if (i.TYPE == 'mbd2:sized') {
                    inputs.push(i.first.id);
                } else if (i.TYPE == 'int') {
                    auraValue = i;
                }
            });
        });

        let recipeData = {
            aura: auraValue,
            output: recipe.outputs.entrySet().toArray()[0].value[0].content.first.id,
        };

        for (let i = 0; i < 9; i++) {
            recipeData[`input${i}`] = inputs[i];
        }

        event.custom('mierno:engraving').add(recipeData);
    });
});
