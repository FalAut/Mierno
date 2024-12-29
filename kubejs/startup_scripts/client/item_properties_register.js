StartupEvents.postInit((event) => {
    if (!Platform.isClientEnvironment()) return;
    const $ItemProperties = Java.loadClass("net.minecraft.client.renderer.item.ItemProperties");

    $ItemProperties.register("mierno:sun_crystal", "solar", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Solar") ? stack.nbt.getInt("Solar") / 100 : 0
    );

    $ItemProperties.register("mierno:moon_stone", "lunar", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Lunar") ? stack.nbt.getInt("Lunar") / 100 : 0
    );

    $ItemProperties.register("mierno:unstable_ingot", "stable", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Stable") ? stack.nbt.getInt("Stable") / 100 : 0
    );
});
