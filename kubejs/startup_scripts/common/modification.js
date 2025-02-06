BlockEvents.modification((event) => {
    event.modify(
        [
            'mierno:memory_source_drawing_crystal_core',
            'botania:bifrost_perm',
            'botania:light_relay',
            'forbidden_arcanus:dark_nether_star_block',
            'ae2:quartz_vibrant_glass',
            'mierno:glowing_obsidian',
        ],
        (block) => {
            block.setExplosionResistance(1200);
        }
    );

    event.modify(['mierno:molten_lumium', 'mierno:molten_signalum'], (block) => {
        block.setLightEmission(15);
    });

    event.modify('minecraft:enchanting_table', (block) => {
        block.setLightEmission(0);
    });
});

ItemEvents.modification((event) => {
    Ingredient.all.itemIds.forEach((id) => {
        event.modify(id, (item) => {
            if (item.edible) {
                item.setFoodProperties((food) => {
                    food.alwaysEdible();
                });
            }
        });
    });

    event.modify(
        [
            'evilcraft:inverted_potentia',
            'evilcraft:inverted_potentia_empowered',
            'forbidden_arcanus:aureal_bottle',
            'forbidden_arcanus:splash_aureal_bottle',
            'minecraft:ender_pearl',
            'minecraft:bucket',
            'minecraft:snowball',
            'minecraft:egg',
            'minecraft:honey_bottle',
            'forbidden_arcanus:xpetrified_orb',
            'evilcraft:dark_power_gem',
        ],
        (item) => {
            item.setMaxStackSize(64);
        }
    );
});
