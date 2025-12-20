JEIAddedEvents.registerCategories((event) => {
    event.custom('mierno:engraving', (category) => {
        const {
            jeiHelpers: { guiHelper },
        } = category;

        category
            .title(Text.translate('mierno.engraving_table'))
            .background(guiHelper.createDrawable('mierno:textures/block/engraving_table_top.png', 0, 0, 120, 105))
            .setWidth(180)
            .setHeight(130)
            .icon(guiHelper.createDrawableItemStack('mierno:engraving_table'))
            .handleLookup((layOut, recipe, focuses) => {
                layOut.addSlot('INPUT', 45, 40).addItemStack(recipe.data.input0);

                layOut.addSlot('INPUT', 45, 5).addItemStack(recipe.data.input1);
                layOut.addSlot('INPUT', 70, 15).addItemStack(recipe.data.input2);
                layOut.addSlot('INPUT', 80, 40).addItemStack(recipe.data.input3);
                layOut.addSlot('INPUT', 70, 65).addItemStack(recipe.data.input4);
                layOut.addSlot('INPUT', 45, 75).addItemStack(recipe.data.input5);
                layOut.addSlot('INPUT', 20, 65).addItemStack(recipe.data.input6);
                layOut.addSlot('INPUT', 10, 40).addItemStack(recipe.data.input7);
                layOut.addSlot('INPUT', 20, 15).addItemStack(recipe.data.input8);

                layOut.addSlot('OUTPUT', 112, 42).addItemStack(recipe.data.output);

                layOut.moveRecipeTransferButton(180, 130);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let overlay = guiHelper.createDrawable(
                    'mierno:textures/gui/aura_grinder_progress_filled.png',
                    0,
                    0,
                    64,
                    44
                );
                overlay.draw(guiGraphics, 24, 0);
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    event.custom('mierno:engraving').add({
        output: 'mierno:moon_stone',
        input0: 'mierno:colorless_gem',
        input1: 'forbidden_arcanus:mundabitur_dust',
        input2: 'naturesaura:calling_spirit',
        input3: 'naturesaura:sky_ingot',
        input4: 'naturesaura:sky_ingot',
        input5: 'forbidden_arcanus:aureal_bottle',
        input6: 'naturesaura:sky_ingot',
        input7: 'naturesaura:sky_ingot',
        input8: 'naturesaura:calling_spirit',
    });
});
