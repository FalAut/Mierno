BlockEvents.modification((event) => {
    event.modify(
        [
            "mierno:memory_source_drawing_crystal_core",
            "botania:bifrost_perm",
            "botania:light_relay",
            "forbidden_arcanus:dark_nether_star_block",
            "ae2:quartz_vibrant_glass",
        ],
        (block) => {
            block.setExplosionResistance(1200);
        }
    );
});

ItemEvents.modification((event) => {
    Ingredient.all.stacks.forEach((itm) => {
        if (itm.edible) {
            event.modify(itm, (item) => {
                item.setFoodProperties((food) => {
                    food.alwaysEdible();
                });
            });
        }
    });

    const betterStackItem = [
        "evilcraft:inverted_potentia",
        "evilcraft:inverted_potentia_empowered",
        "forbidden_arcanus:aureal_bottle",
        "forbidden_arcanus:splash_aureal_bottle",
        "minecraft:ender_pearl",
        "minecraft:bucket",
        "minecraft:snowball",
        "minecraft:egg",
        "minecraft:honey_bottle",
        "forbidden_arcanus:xpetrified_orb",
    ];

    betterStackItem.forEach((itemID) => {
        event.modify(itemID, (item) => {
            item.setMaxStackSize(64);
        });
    });
});
