JEIAddedEvents.registerCategories((event) => {
    event.custom('mierno:nether_portal_convert', (category) => {
        const {
            jeiHelpers: { guiHelper },
        } = category;

        category
            .title(Text.translate('jei.mierno.category.nether_portal_convert'))
            .background(guiHelper.createBlankDrawable(145, 95))
            .icon(guiHelper.createDrawableItemStack('obsidian'))
            .handleLookup((layOut, recipe, focuses) => {
                layOut.addSlot('INPUT', 65, 0).addItemStack(recipe.data.input);
                layOut.addSlot('OUTPUT', 112, 42).addItemStack(recipe.data.output);
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                let overlay = guiHelper.createDrawable('botania:textures/gui/elven_trade_overlay.png', 0, 15, 140, 90);
                overlay.draw(guiGraphics, 20, 4);

                renderDynamicTexture(guiGraphics, 'block/nether_portal', 42, 25, 90, 73);
            });
    });
});

JEIAddedEvents.registerRecipes((event) => {
    event.custom('mierno:nether_portal_convert').add({ output: 'fluxnetworks:flux_dust', input: 'minecraft:redstone' });
});

function renderDynamicTexture(guiGraphics, resourceLocation, startX, startY, stopX, stopY) {
    let sprite = Client.getTextureAtlas('textures/atlas/blocks.png').apply(new ResourceLocation(resourceLocation));
    let bufferSource = guiGraphics.bufferSource();
    let vertexConsumer = bufferSource.getBuffer($RenderType.solid());
    let matrix4f = guiGraphics.pose().last().pose();
    let matrix3f = guiGraphics.pose().last().normal();

    const vertices = [
        { x: startX, y: startY, u: sprite.getU0(), v: sprite.getV0() },
        { x: startX, y: stopY, u: sprite.getU0(), v: sprite.getV1() },
        { x: stopX, y: stopY, u: sprite.getU1(), v: sprite.getV1() },
        { x: stopX, y: startY, u: sprite.getU1(), v: sprite.getV0() },
    ];

    vertices.forEach((vertex) => {
        vertexConsumer
            .vertex(matrix4f, vertex.x, vertex.y, 0)
            .color(1, 1, 1, 1)
            .uv(vertex.u, vertex.v)
            .uv2(0xf000f0)
            .normal(matrix3f, 1, 0, 0)
            .endVertex();
    });

    bufferSource.endBatch();
}
