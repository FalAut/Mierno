const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");

ForgeModEvents.onEvent("net.minecraftforge.client.event.RegisterKeyMappingsEvent", (event) => {
    event.register(new $KeyMapping("key.mierno.portable_crafting", 67, "key.categories.inventory"));
});
