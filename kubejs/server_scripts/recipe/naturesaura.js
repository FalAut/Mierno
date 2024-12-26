ServerEvents.recipes((event) => {
    const { naturesaura } = event.recipes;

    naturesaura.tree_ritual("naturesaura:nature_altar", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
        "oak_sapling",
        "oak_sapling",
        "oak_sapling",
        "smooth_stone",
        "smooth_stone",
        "smooth_stone",
        "smooth_stone",
    ]);

    naturesaura.tree_ritual("naturesaura:offering_table", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
        "naturesaura:token_joy",
        "naturesaura:ancient_stick",
        "naturesaura:ancient_stick",
        "naturesaura:infused_stone",
        "mierno:infused_wood",
        "naturesaura:infused_stone",
        "mierno:infused_wood",
    ]);

    naturesaura.tree_ritual("mierno:engraving_table", [
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
        "mierno:token_base",
        "naturesaura:ancient_stick",
        "naturesaura:ancient_stick",
        "mierno:infused_wood",
        "mierno:infused_wood",
        "mierno:infused_wood",
        "mierno:infused_wood",
    ]);

    naturesaura.tree_ritual("tiab:time_in_a_bottle", [
        "naturesaura:clock_hand",
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
        "naturesaura:sky_ingot",
    ]);

    naturesaura.tree_ritual("mierno:dream_lantern", [
        "minecraft:chain",
        "naturesaura:aura_trove",
        "mierno:sun_crystal_full",
        "mierno:sun_crystal_full",
        "mierno:infused_wood",
        "mierno:infused_wood",
        "mierno:infused_wood",
        "mierno:infused_wood",
    ]);

    naturesaura.tree_ritual("botania:runic_altar", [
        "mierno:sun_crystal_full",
        "botania:mana_diamond",
        "botania:livingrock",
        "botania:livingrock",
        "botania:livingrock",
        "botania:mana_powder",
        "botania:livingrock",
        "botania:manasteel_ingot",
    ]);

    naturesaura.tree_ritual("naturesaura:conversion_catalyst", [
        "mierno:sun_crystal_full",
        "naturesaura:gold_brick",
        "naturesaura:gold_leaf",
        "naturesaura:token_euphoria",
        "naturesaura:calling_spirit",
        "naturesaura:infused_iron",
        "naturesaura:sky_ingot",
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
    ]);

    naturesaura.altar("naturesaura:infused_stone", "minecraft:stone");
    naturesaura.altar("mierno:infused_wood", "#logs");
    naturesaura.altar("minecraft:glowstone_dust", "minecraft:redstone", "naturesaura:conversion_catalyst");
    naturesaura.altar("minecraft:amethyst_shard", "minecraft:emerald", "naturesaura:conversion_catalyst");
    naturesaura.altar("minecraft:quartz", "minecraft:lapis_lazuli", "naturesaura:conversion_catalyst");
    naturesaura.altar("botania:vivid_seeds", "botania:grass_seeds");

    naturesaura.offering("mierno:whos_gift", "mierno:wrapped_gift");
    naturesaura.offering("mierno:dream_wings", "naturesaura:pet_reviver");

    naturesaura.animal_spawner("cow", ["naturesaura:birth_spirit", "botania:rune_earth"]);
    naturesaura.animal_spawner("chicken", ["naturesaura:birth_spirit", "botania:rune_air"]);
    naturesaura.animal_spawner("sheep", ["naturesaura:birth_spirit", "botania:rune_water"]);
    naturesaura.animal_spawner("pig", ["naturesaura:birth_spirit", "botania:rune_fire"]);
});
