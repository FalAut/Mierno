// priority: 50

ServerEvents.tags("item", (event) => {
    event.add("lychee:fire_immune", ["botania:scorched_seeds", "naturesaura:token_anger"]);
    event.add("curios:dream_lantern", "mierno:dream_lantern");
    event.add("botania:special_floating_flowers", "mierno:flowing_source_flower");

    Ingredient.all.itemIds.forEach((itemId) => {
        event.add("mierno:all_items", itemId);
    });

    event.add("mierno:fired_crucible_fuel", ["gray_concrete"]);
    event.add("mierno:modular_offering_input", [
        "naturesaura:infused_iron",
        "naturesaura:tainted_gold",
        "naturesaura:sky_ingot",
        "naturesaura:infused_iron_block",
        "naturesaura:tainted_gold_block",
        "naturesaura:sky_ingot_block",
    ]);

    event.add("mierno:planting_soil", [
        "farmland",
        "forbidden_arcanus:magical_farmland",
        "podzol",
        "muddy_mangrove_roots",
        "mycelium",
        "coarse_dirt",
        "grass_block",
        "rooted_dirt",
        "moss_block",
        "mud",
        "dirt",
    ]);

    event.add("minecraft:saplings", ["naturesaura:ancient_sapling"]);

    event.add("occultism:otherworld_goggles", "botania:third_eye");
});

ServerEvents.tags("block", (event) => {
    event.add("minecraft:dirt", ["white_concrete", "botania:enchanted_soil"]);
    event.add("stripped_logs", /:stripped.*log$/);
    event.add("botania:special_floating_flowers", "mierno:flowing_source_flower");
    event.add("mierno:crucible_heat_source", [
        "fire",
        "powah:blazing_crystal_block",
        "minecraft:campfire",
        "botania:blaze_block",
        "lava",
        "magma_block",
    ]);

    event.add("minecraft:mineable/axe", ["mierno:infused_wood"]);
    event.add("minecraft:needs_iron_tool", [
        "mierno:reinforced_stone_frame",
        "mierno:futura_block",
        "mierno:source_fluidlink",
    ]);
    event.add("minecraft:mineable/pickaxe", [
        "mierno:reinforced_stone_frame",
        "mierno:futura_block",
        "mierno:source_fluidlink",
    ]);

    event.add("minecraft:wither_immune", [
        "mierno:memory_source_drawing_crystal_core",
        "botania:bifrost_perm",
        "botania:light_relay",
        "forbidden_arcanus:dark_nether_star_block",
        "ae2:quartz_vibrant_glass",
    ]);

    event.add("minecraft:saplings", ["naturesaura:ancient_sapling"]);

    event.add("minecraft:mineable/pickaxe", [
        "bloodmagic:speedrune2",
        "bloodmagic:sacrificerune2",
        "bloodmagic:selfsacrificerune2",
        "bloodmagic:dislocationrune2",
        "bloodmagic:altarcapacityrune2",
        "bloodmagic:bettercapacityrune2",
        "bloodmagic:orbcapacityrune2",
        "bloodmagic:accelerationrune2",
        "bloodmagic:chargingrune2",
    ]);

    event.add("minecraft:needs_diamond_tool", [
        "bloodmagic:speedrune2",
        "bloodmagic:sacrificerune2",
        "bloodmagic:selfsacrificerune2",
        "bloodmagic:dislocationrune2",
        "bloodmagic:altarcapacityrune2",
        "bloodmagic:bettercapacityrune2",
        "bloodmagic:orbcapacityrune2",
        "bloodmagic:accelerationrune2",
        "bloodmagic:chargingrune2",
    ]);
});

ServerEvents.tags("fluid", (event) => {
    event.remove("forge:crude_oil", "thermal:crude_oil");
    event.removeAll("minecraft:water");
    event.add("minecraft:water", "water");
});

ServerEvents.tags("worldgen/biome", (event) => {
    event.add("mierno:has_structure/dark_temple", "mierno:otherworld");
});
