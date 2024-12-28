JEIAddedEvents.registerCategories((event) => {
    event.custom("mierno:crucible_heat_source", (category) => {
        const {
            jeiHelpers: { guiHelper },
        } = category;

        category
            .title(Text.translate("jei.mierno.category.crucible_heat_source"))
            .background(guiHelper.createBlankDrawable(100, 50))
            .icon(guiHelper.createDrawableItemStack("mierno:fired_crucible"))
            .handleLookup((layOut, recipe, focuses) => {
                if (recipe.data.fluid) {
                    layOut.addSlot("INPUT", 20, 20).addFluidStack(recipe.data.fluid);
                } else {
                    layOut.addSlot("INPUT", 20, 20).addItemStack(recipe.data.block);
                }

                layOut.addInvisibleIngredients("INPUT").addItemStack("mierno:fired_crucible");
                layOut.addInvisibleIngredients("OUTPUT").addItemStack("mierno:fired_crucible");
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let timeText = Text.translate("mierno.time.seconds", recipe.data.second);
                guiGraphics.drawWordWrap(Client.font, timeText, 45, 25, 100, 0);

                if (recipe.data.block == "mierno:fire_starter") {
                    let bufferSource = guiGraphics.bufferSource();
                    let pose = guiGraphics.pose();

                    pose.pushPose();
                    pose.translate(20, 20, 128);
                    pose.scale(16, 16, 16);
                    pose.mulPose(new Quaternionf().rotationYXZ(30 * DEG_TO_RAD, 180 * DEG_TO_RAD, 0));
                    Client.blockRenderer.renderSingleBlock(
                        Blocks.FIRE.defaultBlockState(),
                        pose,
                        bufferSource,
                        FULL_BRIGHT,
                        NO_OVERLAY
                    );
                    pose.popPose();
                }
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    event
        .custom("mierno:crucible_heat_source")
        .add({ block: "mierno:fire_starter", second: 5 })
        .add({ block: "minecraft:campfire", second: 4 })
        .add({ fluid: "lava", second: 3 })
        .add({ block: "botania:blaze_block", second: 2 })
        .add({ block: "magma_block", second: 1 })
        .add({ block: "powah:blazing_crystal_block", second: 0.05 });
});
