ItemEvents.modelProperties((event) => {
    event.register("mierno:sun_crystal", "mierno:solar", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Solar") ? stack.nbt.getInt("Solar") / 100 : 0
    );

    event.register("mierno:moon_stone", "mierno:lunar", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Lunar") ? stack.nbt.getInt("Lunar") / 100 : 0
    );

    event.register("mierno:unstable_ingot", "mierno:stable", (stack, world, living, seed) =>
        stack.nbt && stack.nbt.contains("Stable") ? stack.nbt.getInt("Stable") / 100 : 0
    );
});
