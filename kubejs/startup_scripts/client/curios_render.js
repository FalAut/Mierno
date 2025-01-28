const $CuriosRendererRegistry = Java.loadClass("top.theillusivec4.curios.api.client.CuriosRendererRegistry");
const $RendererCurios = Java.loadClass("com.prunoideae.powerfuljs.capabilities.forge.mods.curios.RendererCurios");
const $OverlayTexture = Java.loadClass("net.minecraft.client.renderer.texture.OverlayTexture");

StartupEvents.postInit((event) => {
    $CuriosRendererRegistry.register(
        "mierno:dream_wings",
        () =>
            new $RendererCurios((ctx) => {
                const { matrixStack, renderTypeBuffer, slotContext, light, partialTicks } = ctx;
                const model = Client.modelManager.getModel("botania:icon/tiara_wing_1");

                const living = slotContext.entity();
                const flying = living.isPlayer() && living.getAbilities().flying;
                const time = living.age + partialTicks;
                const frequency = flying ? 0.4 : 0.2;
                const amplitude = flying ? 30 : 5;
                const flap = 20 + (Math.sin(time * frequency) + 0.5) * amplitude;

                matrixStack.pushPose();
                CuriosRenderer.translateIfSneaking(matrixStack, living);
                matrixStack.translate(0, 0.5, 0.2);

                for (let i = 0; i < 2; i++) {
                    matrixStack.pushPose();

                    let degrees = i == 0 ? flap : 180 - flap;
                    matrixStack.mulPose(new Quaternionf().rotateY((degrees / 180) * JavaMath.PI));

                    matrixStack.translate(-1, 0, 0);
                    matrixStack.mulPose(new Quaternionf().rotateZ((-60 / 180) * JavaMath.PI));
                    matrixStack.scale(1.5, -1.5, -1.5);

                    Client.itemRenderer.render(
                        "mierno:dream_wings",
                        "none",
                        false,
                        matrixStack,
                        renderTypeBuffer,
                        light,
                        $OverlayTexture.NO_OVERLAY,
                        model
                    );
                    matrixStack.popPose();
                }

                matrixStack.popPose();
            })
    );

    // $CuriosRendererRegistry.register(
    //     "occultism:otherworld_goggles",
    //     () =>
    //         new $RendererCurios((ctx) => {
    //             const { matrixStack, renderTypeBuffer, slotContext, light } = ctx;
    //             const living = slotContext.entity();
    //             const armor = !living.getItemBySlot("chest").isEmpty();

    //             for (let i = 0; i < 3; i++) {
    //                 matrixStack.pushPose();

    //                 CuriosRenderer.translateIfSneaking(matrixStack, living);
    //                 switch (i) {
    //                     case 0:
    //                         break;
    //                     case 1:
    //                         let time = $ClientTickHandler.total() * 0.12;
    //                         let dist = 0.05;
    //                         matrixStack.translate(Math.sin(time) * dist, Math.cos(time * 0.5) * dist, 0);

    //                         matrixStack.scale(0.75, 0.75, 1);
    //                         matrixStack.translate(0, 0.1, -0.025);
    //                         break;
    //                     case 2:
    //                         matrixStack.translate(0, 0, -0.05);
    //                         break;
    //                 }

    //                 matrixStack.translate(-0.3, 0.6, armor ? 0.1 : 0.15);
    //                 matrixStack.scale(0.6, -0.6, -0.6);
    //                 let model = Client.modelManager.getModel(`botania:icon/third_eye_${i}`);
    //                 let buffer = renderTypeBuffer.getBuffer($Sheets.cutoutBlockSheet());
    //                 Client.getBlockRenderer()
    //                     .getModelRenderer()
    //                     .renderModel(
    //                         matrixStack.last(),
    //                         buffer,
    //                         null,
    //                         model,
    //                         1,
    //                         1,
    //                         1,
    //                         light,
    //                         $OverlayTexture.NO_OVERLAY
    //                     );

    //                 matrixStack.popPose();
    //             }
    //         })
    // );
});
