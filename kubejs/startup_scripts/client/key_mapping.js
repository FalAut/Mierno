const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");

global.portableCrafting = new $KeyMapping(
    "key.mierno.portable_crafting",
    $GLFWkey.GLFW_KEY_C,
    "key.categories.inventory"
);

ForgeModEvents.onEvent("net.minecraftforge.client.event.RegisterKeyMappingsEvent", (event) => {
    event.register(global.portableCrafting);
});
