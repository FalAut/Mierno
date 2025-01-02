const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");

global.PortableCrafting = new $KeyMapping("key.mierno.portable_crafting", 67, "key.categories.inventory");

ForgeModEvents.onEvent("net.minecraftforge.client.event.RegisterKeyMappingsEvent", (event) => {
    event.register(global.PortalCrafting);
});
