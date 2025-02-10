if (Platform.isClientEnvironment()) {
    let $KeyMapping = Java.loadClass('net.minecraft.client.KeyMapping');
    let $GLFWkey = Java.loadClass('org.lwjgl.glfw.GLFW');

    global.portableCrafting = new $KeyMapping(
        'key.mierno.portable_crafting',
        $GLFWkey.GLFW_KEY_C,
        'key.categories.inventory'
    );

    global.toggleZoom = new $KeyMapping('key.mierno.toggle_zoom', $GLFWkey.GLFW_KEY_Z, 'key.categories.gameplay');

    ForgeModEvents.onEvent('net.minecraftforge.client.event.RegisterKeyMappingsEvent', (event) => {
        event.register(global.portableCrafting);
        event.register(global.toggleZoom);
    });
}
