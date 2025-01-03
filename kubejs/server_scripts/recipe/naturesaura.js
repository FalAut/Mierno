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
        "naturesaura:token_euphoria",
        "minecraft:gold_block",
        "naturesaura:infused_stone",
        "naturesaura:infused_stone",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
    ]);

    naturesaura.tree_ritual("naturesaura:crushing_catalyst", [
        "minecraft:flint",
        "minecraft:piston",
        "naturesaura:infused_stone",
        "naturesaura:infused_stone",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
    ]);

    naturesaura.tree_ritual("mierno:nether_catalyst", [
        "minecraft:lava_bucket",
        "minecraft:netherrack",
        "naturesaura:infused_stone",
        "naturesaura:infused_stone",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
    ]);

    naturesaura.tree_ritual("mierno:end_catalyst", [
        "minecraft:end_crystal",
        "minecraft:end_stone",
        "naturesaura:infused_stone",
        "naturesaura:infused_stone",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
        "naturesaura:gold_brick",
    ]);

    naturesaura.tree_ritual("naturesaura:time_changer", [
        "naturesaura:chunk_loader",
        "naturesaura:sky_ingot_block",
        "ars_nouveau:ritual_sunrise",
        "ars_nouveau:ritual_moonfall",
        "naturesaura:calling_spirit",
        "naturesaura:calling_spirit",
        "naturesaura:calling_spirit",
        "naturesaura:calling_spirit",
    ]);

    naturesaura.altar("naturesaura:infused_stone", "minecraft:stone");
    naturesaura.altar("mierno:infused_wood", "#logs");
    naturesaura.altar("minecraft:glowstone_dust", "minecraft:redstone", "naturesaura:conversion_catalyst");
    naturesaura.altar("minecraft:amethyst_shard", "minecraft:emerald", "naturesaura:conversion_catalyst");
    naturesaura.altar("minecraft:quartz", "minecraft:lapis_lazuli", "naturesaura:conversion_catalyst");
    naturesaura.altar("botania:vivid_seeds", "botania:grass_seeds");
    naturesaura.altar("naturesaura:tainted_gold", "gold_ingot", "mierno:nether_catalyst", 2000);
    naturesaura.altar("naturesaura:tainted_gold_block", "gold_block", "mierno:nether_catalyst", 18000);
    naturesaura.altar(
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:nether"}'),
        "naturesaura:bottle_two_the_rebottling",
        "mierno:nether_catalyst"
    );
    naturesaura.altar(
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}'),
        "naturesaura:bottle_two_the_rebottling"
    );
    naturesaura.altar(
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:end"}'),
        "naturesaura:bottle_two_the_rebottling",
        "mierno:end_catalyst"
    );
    naturesaura.altar(
        "minecraft:dragon_breath",
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:end"}').weakNBT(),
        "mierno:end_catalyst"
    );

    naturesaura.offering("mierno:whos_gift", "mierno:wrapped_gift");
    naturesaura.offering("mierno:dream_wings", "naturesaura:pet_reviver");

    naturesaura.animal_spawner("cow", ["naturesaura:birth_spirit", "botania:rune_earth"]);
    naturesaura.animal_spawner("chicken", ["naturesaura:birth_spirit", "botania:rune_air"]);
    naturesaura.animal_spawner("sheep", ["naturesaura:birth_spirit", "botania:rune_water"]);
    naturesaura.animal_spawner("pig", ["naturesaura:birth_spirit", "botania:rune_fire"]);
    naturesaura.animal_spawner("ghast", ["naturesaura:birth_spirit", "minecraft:white_dye"]);
    naturesaura.animal_spawner("thermal:basalz", ["naturesaura:birth_spirit", "ars_nouveau:earth_essence"]);
    naturesaura.animal_spawner("thermal:blitz", ["naturesaura:birth_spirit", "ars_nouveau:air_essence"]);
    naturesaura.animal_spawner("thermal:blizz", ["naturesaura:birth_spirit", "minecraft:blue_ice"]);
});
