if (Platform.isClientEnvironment()) {
    let $RenderSystem = Java.loadClass('com.mojang.blaze3d.systems.RenderSystem');

    ForgeEvents.onEvent('net.minecraftforge.client.event.ViewportEvent$RenderFog', (event) => {
        if (event.camera.entity.level.dimension != 'mierno:misty_forest') return;

        if (!event.camera.entity.persistentData.getBoolean('has_dream_lantern')) {
            $RenderSystem.setShaderFogStart(-5);
            $RenderSystem.setShaderFogEnd(5);
        }
    });
}
