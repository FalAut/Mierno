// priority: 9

ServerEvents.loaded((event) => {
    const { server } = event;

    if (!server.persistentData.getBoolean("first_load")) {
        server.gameRules.set("keepInventory", "true");
        server.gameRules.set("doInsomnia", "false");
        server.gameRules.set("doTraderSpawning", "false");
        server.gameRules.set("mobGriefing", "false");
        server.gameRules.set("doWeatherCycle", "false");
        server.gameRules.set("doDaylightCycle", "false");

        server.getLevel("minecraft:overworld").setDayTime(6000);
        server.persistentData.putBoolean("first_load", true);
    }
});

// ServerEvents.loaded((event) => {
//     let fuelItems = {};

//     Ingredient.all.stacks.forEach((itemStack) => {
//         const burnTime = $ForgeHooks.getBurnTime(itemStack, "minecraft:smelting");

//         if (burnTime > 0) {
//             fuelItems[itemStack.id] = burnTime;
//         }
//     });

//     JsonIO.write("kubejs/fuel_items.json", fuelItems);
// });

// ServerEvents.recipes((event) => {
//     let allRecipes = [];

//     event.forEachRecipe({ type: "botanypots:crop" }, (recipe) => {
//         let json = recipe.json;

//         try {
//             let seed = json.get("seed").get("item");

//             let drops = [];
//             let dropsArray = json.get("drops");
//             for (let i = 0; i < dropsArray.size(); i++) {
//                 let drop = dropsArray.get(i);
//                 drops.push(drop.get("output").get("item"));
//             }

//             allRecipes.push({
//                 seed: seed,
//                 outputs: drops,
//             });

//             console.log("Recipe processed:");
//             console.log("Seed:", seed);
//             console.log("Drops:", drops);
//         } catch (error) {
//             console.log(error);
//             console.log(recipe.json);
//         }
//     });

//     JsonIO.write("kubejs/planting.json", {
//         recipes: allRecipes,
//     });
// });

// ItemEvents.rightClicked("stick", (event) => {
//     let allItems = Ingredient.all.stacks.toArray();
//     let randomIndex = Utils.random.nextInt(allItems.length);
//     let randomItem = allItems[randomIndex];

//     event.player.give(randomItem);
// });

// const nbtPaths = [
//     "kubejs/dark_temple/blocks/air.nbt",
//     "kubejs/dark_temple/blocks/gold.nbt",
//     "kubejs/dark_temple/bridge/bridge_pieces/bridge.nbt",
//     "kubejs/dark_temple/bridge/connectors/back_bridge_bottom.nbt",
//     "kubejs/dark_temple/bridge/connectors/back_bridge_top.nbt",
//     "kubejs/dark_temple/bridge/legs/leg_0.nbt",
//     "kubejs/dark_temple/bridge/legs/leg_1.nbt",
//     "kubejs/dark_temple/bridge/ramparts/rampart_0.nbt",
//     "kubejs/dark_temple/bridge/ramparts/rampart_1.nbt",
//     "kubejs/dark_temple/bridge/rampart_plates/plate_0.nbt",
//     "kubejs/dark_temple/bridge/starting_pieces/entrance.nbt",
//     "kubejs/dark_temple/bridge/starting_pieces/entrance_base.nbt",
//     "kubejs/dark_temple/bridge/starting_pieces/entrance_face.nbt",
//     "kubejs/dark_temple/bridge/walls/wall_base_0.nbt",
//     "kubejs/dark_temple/bridge/walls/wall_base_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/air_base.nbt",
//     "kubejs/dark_temple/hoglin_stable/connectors/end_post_connector.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/inner_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/inner_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/inner_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/inner_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/inner_4.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/outer_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/outer_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/outer_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/outer_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/large_stables/outer_4.nbt",
//     "kubejs/dark_temple/hoglin_stable/posts/end_post.nbt",
//     "kubejs/dark_temple/hoglin_stable/posts/stair_post.nbt",
//     "kubejs/dark_temple/hoglin_stable/ramparts/ramparts_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/ramparts/ramparts_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/ramparts/ramparts_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/rampart_plates/rampart_plate_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/inner_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/inner_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/inner_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/inner_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/outer_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/outer_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/outer_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/small_stables/outer_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_1_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_1_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_1_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_1_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_1_4.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_2_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_2_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_2_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_2_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_2_4.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_3_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_3_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_3_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_3_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/stairs/stairs_3_4.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/stairs_0_mirrored.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/stairs_1_mirrored.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/stairs_2_mirrored.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/stairs_3_mirrored.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/stairs_4_mirrored.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/starting_stairs_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/starting_stairs_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/starting_stairs_2.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/starting_stairs_3.nbt",
//     "kubejs/dark_temple/hoglin_stable/starting_pieces/starting_stairs_4.nbt",
//     "kubejs/dark_temple/hoglin_stable/walls/side_wall_0.nbt",
//     "kubejs/dark_temple/hoglin_stable/walls/side_wall_1.nbt",
//     "kubejs/dark_temple/hoglin_stable/walls/wall_base.nbt",
//     "kubejs/dark_temple/mobs/crossbow_piglin.nbt",
//     "kubejs/dark_temple/mobs/empty.nbt",
//     "kubejs/dark_temple/mobs/hoglin.nbt",
//     "kubejs/dark_temple/mobs/melee_piglin.nbt",
//     "kubejs/dark_temple/mobs/melee_piglin_always.nbt",
//     "kubejs/dark_temple/mobs/sword_piglin.nbt",
//     "kubejs/dark_temple/treasure/big_air_full.nbt",
//     "kubejs/dark_temple/treasure/bases/lava_basin.nbt",
//     "kubejs/dark_temple/treasure/bases/centers/center_0.nbt",
//     "kubejs/dark_temple/treasure/bases/centers/center_1.nbt",
//     "kubejs/dark_temple/treasure/bases/centers/center_2.nbt",
//     "kubejs/dark_temple/treasure/bases/centers/center_3.nbt",
//     "kubejs/dark_temple/treasure/brains/center_brain.nbt",
//     "kubejs/dark_temple/treasure/connectors/center_to_wall_middle.nbt",
//     "kubejs/dark_temple/treasure/connectors/center_to_wall_top.nbt",
//     "kubejs/dark_temple/treasure/connectors/center_to_wall_top_entrance.nbt",
//     "kubejs/dark_temple/treasure/corners/bottom/corner_0.nbt",
//     "kubejs/dark_temple/treasure/corners/bottom/corner_1.nbt",
//     "kubejs/dark_temple/treasure/corners/edges/bottom.nbt",
//     "kubejs/dark_temple/treasure/corners/edges/middle.nbt",
//     "kubejs/dark_temple/treasure/corners/edges/top.nbt",
//     "kubejs/dark_temple/treasure/corners/middle/corner_0.nbt",
//     "kubejs/dark_temple/treasure/corners/middle/corner_1.nbt",
//     "kubejs/dark_temple/treasure/corners/top/corner_0.nbt",
//     "kubejs/dark_temple/treasure/corners/top/corner_1.nbt",
//     "kubejs/dark_temple/treasure/entrances/entrance_0.nbt",
//     "kubejs/dark_temple/treasure/extensions/empty.nbt",
//     "kubejs/dark_temple/treasure/extensions/fire_room.nbt",
//     "kubejs/dark_temple/treasure/extensions/house_0.nbt",
//     "kubejs/dark_temple/treasure/extensions/house_1.nbt",
//     "kubejs/dark_temple/treasure/extensions/large_bridge_0.nbt",
//     "kubejs/dark_temple/treasure/extensions/large_bridge_1.nbt",
//     "kubejs/dark_temple/treasure/extensions/large_bridge_2.nbt",
//     "kubejs/dark_temple/treasure/extensions/large_bridge_3.nbt",
//     "kubejs/dark_temple/treasure/extensions/roofed_bridge.nbt",
//     "kubejs/dark_temple/treasure/extensions/small_bridge_0.nbt",
//     "kubejs/dark_temple/treasure/extensions/small_bridge_1.nbt",
//     "kubejs/dark_temple/treasure/extensions/small_bridge_2.nbt",
//     "kubejs/dark_temple/treasure/extensions/small_bridge_3.nbt",
//     "kubejs/dark_temple/treasure/ramparts/bottom_wall_0.nbt",
//     "kubejs/dark_temple/treasure/ramparts/lava_basin_main.nbt",
//     "kubejs/dark_temple/treasure/ramparts/lava_basin_side.nbt",
//     "kubejs/dark_temple/treasure/ramparts/mid_wall_main.nbt",
//     "kubejs/dark_temple/treasure/ramparts/mid_wall_side.nbt",
//     "kubejs/dark_temple/treasure/ramparts/top_wall.nbt",
//     "kubejs/dark_temple/treasure/roofs/center_roof.nbt",
//     "kubejs/dark_temple/treasure/roofs/corner_roof.nbt",
//     "kubejs/dark_temple/treasure/roofs/wall_roof.nbt",
//     "kubejs/dark_temple/treasure/stairs/lower_stairs.nbt",
//     "kubejs/dark_temple/treasure/walls/entrance_wall.nbt",
//     "kubejs/dark_temple/treasure/walls/lava_wall.nbt",
//     "kubejs/dark_temple/treasure/walls/bottom/wall_0.nbt",
//     "kubejs/dark_temple/treasure/walls/bottom/wall_1.nbt",
//     "kubejs/dark_temple/treasure/walls/bottom/wall_2.nbt",
//     "kubejs/dark_temple/treasure/walls/bottom/wall_3.nbt",
//     "kubejs/dark_temple/treasure/walls/mid/wall_0.nbt",
//     "kubejs/dark_temple/treasure/walls/mid/wall_1.nbt",
//     "kubejs/dark_temple/treasure/walls/mid/wall_2.nbt",
//     "kubejs/dark_temple/treasure/walls/outer/bottom_corner.nbt",
//     "kubejs/dark_temple/treasure/walls/outer/medium_outer_wall.nbt",
//     "kubejs/dark_temple/treasure/walls/outer/mid_corner.nbt",
//     "kubejs/dark_temple/treasure/walls/outer/outer_wall.nbt",
//     "kubejs/dark_temple/treasure/walls/outer/tall_outer_wall.nbt",
//     "kubejs/dark_temple/treasure/walls/outer/top_corner.nbt",
//     "kubejs/dark_temple/treasure/walls/top/main_entrance.nbt",
//     "kubejs/dark_temple/treasure/walls/top/wall_0.nbt",
//     "kubejs/dark_temple/treasure/walls/top/wall_1.nbt",
//     "kubejs/dark_temple/units/air_base.nbt",
//     "kubejs/dark_temple/units/center_pieces/center_0.nbt",
//     "kubejs/dark_temple/units/center_pieces/center_1.nbt",
//     "kubejs/dark_temple/units/center_pieces/center_2.nbt",
//     "kubejs/dark_temple/units/edges/edge_0.nbt",
//     "kubejs/dark_temple/units/fillers/stage_0.nbt",
//     "kubejs/dark_temple/units/pathways/pathway_0.nbt",
//     "kubejs/dark_temple/units/pathways/pathway_wall_0.nbt",
//     "kubejs/dark_temple/units/ramparts/ramparts_0.nbt",
//     "kubejs/dark_temple/units/ramparts/ramparts_1.nbt",
//     "kubejs/dark_temple/units/ramparts/ramparts_2.nbt",
//     "kubejs/dark_temple/units/rampart_plates/plate_0.nbt",
//     "kubejs/dark_temple/units/stages/stage_0_0.nbt",
//     "kubejs/dark_temple/units/stages/stage_0_1.nbt",
//     "kubejs/dark_temple/units/stages/stage_0_2.nbt",
//     "kubejs/dark_temple/units/stages/stage_0_3.nbt",
//     "kubejs/dark_temple/units/stages/stage_1_0.nbt",
//     "kubejs/dark_temple/units/stages/stage_1_1.nbt",
//     "kubejs/dark_temple/units/stages/stage_1_2.nbt",
//     "kubejs/dark_temple/units/stages/stage_1_3.nbt",
//     "kubejs/dark_temple/units/stages/stage_2_0.nbt",
//     "kubejs/dark_temple/units/stages/stage_2_1.nbt",
//     "kubejs/dark_temple/units/stages/stage_3_0.nbt",
//     "kubejs/dark_temple/units/stages/stage_3_1.nbt",
//     "kubejs/dark_temple/units/stages/stage_3_2.nbt",
//     "kubejs/dark_temple/units/stages/stage_3_3.nbt",
//     "kubejs/dark_temple/units/stages/rot/stage_1_0.nbt",
//     "kubejs/dark_temple/units/walls/connected_wall.nbt",
//     "kubejs/dark_temple/units/walls/wall_base.nbt",
//     "kubejs/dark_temple/units/wall_units/edge_0_large.nbt",
//     "kubejs/dark_temple/units/wall_units/unit_0.nbt",
// ];

// nbtPaths.forEach((path) => {
//     let nbt = NBTIO.read(path);

//     let replaceTable = [
//         { input: "minecraft:polished_blackstone_bricks", output: "evilcraft:dark_brick" },
//         { input: "minecraft:blackstone", output: "evilcraft:dark_blood_brick" },
//         { input: "minecraft:cracked_polished_blackstone_bricks", output: "evilcraft:dark_blood_brick" },
//         { input: "minecraft:polished_blackstone_brick_stairs", output: "evilcraft:dark_blood_brick_stairs" },
//         { input: "minecraft:basalt", output: "evilcraft:bloody_cobblestone" },
//         { input: "minecraft:gilded_blackstone", output: "evilcraft:bloody_cobblestone" },
//         { input: "minecraft:chiseled_polished_blackstone", output: "minecraft:chiseled_nether_bricks" },
//         { input: "minecraft:lantern", output: "occultism:spirit_lantern" },
//         { input: "minecraft:magma_block", output: "evilcraft:hardened_blood" },
//         { input: "minecraft:blackstone_wall", output: "forbidden_arcanus:polished_darkstone_wall" },
//         { input: "minecraft:gold_block", output: "evilcraft:hardened_blood" },
//         { input: "minecraft:polished_basalt", output: "evilcraft:bloody_cobblestone" },
//         { input: "minecraft:blackstone_slab", output: "forbidden_arcanus:polished_darkstone_slab" },
//     ];

//     let palette = nbt.palette;

//     for (let i = 0; i < palette.length; i++) {
//         let name = palette[i];
//         let blockName = name.getString("Name");

//         replaceTable.forEach((entry) => {
//             if (blockName === entry.input) {
//                 name.putString("Name", entry.output);
//             }
//         });
//     }

//     NBTIO.write(path, nbt);
// });

// let nbtPaths = ["kubejs/test.nbt"];

// nbtPaths.forEach((path) => {
//     let jigsawNbt = NBTIO.read(path);

//     jigsawNbt.blocks.forEach((block) => {
//         if (!block.nbt) return;

//         if (block.nbt.getString("LootTable")) {
//             block.nbt.putString("LootTable", "mierno:chests/dark_temple");
//         }

//         let pool = block.nbt.getString("pool");

//         if (!pool) return;

//         if (pool.startsWith("minecraft:bastion")) {
//             let newPool = pool.replace("minecraft:bastion", "mierno:dark_temple");
//             block.nbt.putString("pool", newPool);
//         }

//         block.nbt.putString("final_state", "evilcraft:dark_brick");

//         NBTIO.write(path, jigsawNbt);
//     });
// });
