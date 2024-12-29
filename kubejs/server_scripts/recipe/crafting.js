ServerEvents.recipes((event) => {
    const { kubejs, minecraft } = event.recipes;

    function fourShaped(/**@type  {OutputItem_} */ output, /**@type  {InputItem_} */ input) {
        kubejs.shaped(output, ["AA", "AA"], {
            A: input,
        });

        event.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: {
                count: 1,
                item: output,
            },
            lower_input: {
                count: 4,
                item: input,
            },
        });
    }

    fourShaped("forbidden_arcanus:dark_nether_star_block", "forbidden_arcanus:dark_nether_star");

    function fullShaped(/**@type  {OutputItem_} */ output, /**@type  {InputItem_} */ input) {
        kubejs.shaped(output, ["AAA", "AAA", "AAA"], {
            A: input,
        });

        event.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: {
                count: 1,
                item: output,
            },
            lower_input: {
                count: 9,
                item: input,
            },
        });

        kubejs.shapeless(Item.of(input).withCount(9), output);
    }

    fullShaped("mierno:mana_string_block", "botania:mana_string");
    fullShaped("mierno:spirit_attuned_gem_block", "occultism:spirit_attuned_gem");

    kubejs.shapeless("forbidden_arcanus:aurum_chest_boat", ["forbidden_arcanus:aurum_boat", "#forge:chests/wooden"]);
    kubejs.shapeless("forbidden_arcanus:edelwood_chest_boat", [
        "forbidden_arcanus:edelwood_boat",
        "#forge:chests/wooden",
    ]);
    kubejs.shapeless("mierno:flowing_source_flower", ["#botania:floating_flowers", "mierno:source_flower"]);
    kubejs.shapeless("9x botania:mana_string", "mierno:mana_string_block");
    kubejs.shapeless("mierno:oak_mortar", ["stick", "bowl"]);
    kubejs.shapeless("mierno:portable_crafting_table", ["stick", "crafting_table"]);
    kubejs
        .shapeless("mierno:token_base", ["mierno:infused_wood", "#axes", "#forge:shears"])
        .damageIngredient(["#axes", "#forge:shears"]);

    kubejs
        .shapeless("botania:spark", ["mierno:dream_lantern", "#botania:petals", "#botania:petals", "gold_nugget"])
        .keepIngredient("mierno:dream_lantern");

    kubejs
        .shapeless("botania:light_relay", [
            "mierno:dream_lantern",
            "#botania:petals",
            "#botania:petals",
            "botania:spark",
        ])
        .keepIngredient("mierno:dream_lantern");

    kubejs.shapeless("2x ars_nouveau:magebloom_fiber", "ars_nouveau:magebloom");
    kubejs.shapeless(
        Item.of(
            "ae2:meteorite_compass",
            '{display:{Name:\'{"translate":"item.mierno.maze_compass","bold":true,"italic":false}\'}}'
        ).withLore([
            Text.translate("tooltip.mierno.meteorite_compass1").gold().italic(false),
            Text.translate("tooltip.mierno.meteorite_compass2").gold().italic(false),
            Text.translate("tooltip.mierno.meteorite_compass3").gold().italic(false),
        ]),
        ["minecraft:compass", Item.of("naturesaura:aura_bottle", '{stored_type:"mierno:mist"}').weakNBT()]
    );

    kubejs
        .shapeless("bloodmagic:ritualdivinerdusk", ["bloodmagic:ritualdiviner", "bloodmagic:duskscribetool"])
        .keepIngredient("bloodmagic:duskscribetool");

    kubejs.shapeless("4x ae2:not_so_mysterious_cube", "ae2:mysterious_cube");
    kubejs.shapeless("naturesaura:gold_leaf", ["gold_ingot", "#leaves"]);
    kubejs.shapeless("mierno:futura_block", "ae2:controller").keepIngredient("ae2:controller");
    kubejs.shapeless("2x botania:blacker_lotus", "botania:blacker_lotus");
    kubejs.shapeless("4x forbidden_arcanus:dark_nether_star", "forbidden_arcanus:dark_nether_star_block");
    kubejs.shapeless("2x powah:capacitor_basic", "2x powah:capacitor_basic_tiny");
    kubejs.shapeless("2x powah:capacitor_basic_large", "2x powah:capacitor_basic");
    kubejs.shapeless("mierno:dark_eyes", ["minecraft:ender_eye", "occultism:otherworld_essence"]);
    kubejs.shapeless(
        "botania:pinkinator",
        Item.of(
            "ae2:matter_cannon",
            '{amts:[L;4032L],ic:4032L,internalCurrentPower:200000.0d,keys:[{"#c":"ae2:i",id:"ae2:pink_lumen_paint_ball"}]}'
        ).weakNBT()
    );
    kubejs.shapeless(Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:f",id:"minecraft:water"}}'), [
        "ae2:fluid_cell_housing",
        "evilcraft:eternal_water",
    ]);

    kubejs.shapeless("naturesaura:birth_spirit", "naturesaura:calling_spirit").modifyResult((grid, result) => {
        if (!grid.player || grid.player.isFake() || grid.menu instanceof $AssemblyHaloContainer) return Item.empty;

        if (grid.find("naturesaura:calling_spirit").count > grid.player.health) {
            grid.player.tell(Text.translate("message.mierno.no_health_craft").red());
            grid.player.closeMenu();

            return Item.empty;
        }

        return result;
    });

    kubejs.shaped("bucket", ["A A", " A "], {
        A: "white_concrete",
    });

    kubejs.shaped("mierno:gensousitu_bucket", ["ABC", "D D", " D "], {
        A: "water_bucket",
        B: "naturesaura:calling_spirit",
        C: "lava_bucket",
        D: "white_concrete",
    });

    kubejs.shaped("mierno:fire_starter", ["A ", " A"], {
        A: "stick",
    });

    kubejs.shaped("4x chest", ["AAA", "A A", "AAA"], {
        A: "#logs",
    });

    kubejs
        .shaped(Item.of("mierno:unstable_ingot", "{Stable:100.0d}"), [" A ", " B ", "C D"], {
            A: "thermal:enderium_ingot",
            B: Item.of("mierno:addition_sigil").enchant("mierno:activate", 1).weakNBT(),
            C: "thermal:signalum_ingot",
            D: "thermal:lumium_ingot",
        })
        .keepIngredient("mierno:addition_sigil");

    kubejs.shaped("mierno:wooden_shears", [" A", "A "], {
        A: "#planks",
    });

    kubejs.shaped("mierno:aura_grinder", ["ABA", "CDC", "ACA"], {
        A: "naturesaura:gold_powder",
        B: "oak_sapling",
        C: "mierno:fiber",
        D: "furnace",
    });

    kubejs.shaped("mierno:gift_box", ["ABA", "BCB", "ABA"], {
        A: "red_dye",
        B: "naturesaura:gold_powder",
        C: "chest",
    });

    kubejs.shaped("botania:fertilizer", ["ABB", "BB "], {
        A: "bone_meal",
        B: "#botania:petals",
    });

    kubejs.shaped("mierno:wrapped_gift", ["ABC", "DEF", "GHI"], {
        A: "stone",
        B: "minecraft:oak_sapling",
        C: "naturesaura:gold_fiber",
        D: "naturesaura:gold_leaf",
        E: "mierno:gift_box",
        F: Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
        G: "naturesaura:ancient_sapling",
        H: "naturesaura:token_joy",
        I: "naturesaura:calling_spirit",
    });

    kubejs.shaped("4x botania:livingwood_log", ["AA", "AA"], {
        A: "botania:livingwood",
    });

    kubejs.shaped("botania:mana_spreader", ["AAA", "BC ", "AAA"], {
        A: "#botania:livingwood_logs",
        B: "naturesaura:infused_iron",
        C: "#botania:petals",
    });

    kubejs.shaped("grass_block", ["AAA", "AAA", "AAA"], {
        A: "#leaves",
    });

    kubejs.shaped("mierno:ancient_aura_generator_core", ["ABA", "BCB", "ABA"], {
        A: "naturesaura:gold_powder",
        B: Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:overworld"}').weakNBT(),
        C: "naturesaura:ancient_bark",
    });

    kubejs.shaped("naturesaura:calling_spirit", [" A ", "A A", " A "], {
        A: "naturesaura:gold_powder",
    });

    kubejs.shaped("ars_nouveau:source_jar", ["AAA", "BCB", "AAA"], {
        A: "ars_nouveau:archwood_slab",
        B: "botania:elf_glass",
        C: "ars_nouveau:source_gem",
    });

    kubejs.shaped("ae2:charger", ["ABA", "A  ", "ABA"], {
        A: "ae2:quartz_block",
        B: "botania:elementium_ingot",
    });

    kubejs.shaped("ae2:inscriber", ["ABA", "C A", "ABA"], {
        A: "ae2:quartz_block",
        B: "sticky_piston",
        C: "botania:elementium_ingot",
    });

    kubejs.shaped("botania:apothecary_default", ["ABA", " A ", "AAA"], {
        A: "cobblestone",
        B: "poppy",
    });

    kubejs.shaped("occultism:otherworld_goggles", [" A ", "ABA", " C "], {
        A: "ars_nouveau:magebloom_fiber",
        B: "occultism:infused_lenses",
        C: "occultism:lens_frame",
    });

    kubejs.shaped("8x forbidden_arcanus:darkstone", ["AAA", "ABA", "AAA"], {
        A: "occultism:otherstone",
        B: "evilcraft:inverted_potentia_empowered",
    });

    kubejs.shaped("ae2:quartz_glass", ["ABA", "BAB", "ABA"], {
        A: "ae2:certus_quartz_dust",
        B: "botania:mana_glass",
    });

    kubejs.shaped("mierno:assembly_room_controller", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:calculation_processor",
        C: "ae2:engineering_processor",
        D: "ae2:controller",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mierno:item_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mierno:item_output", ["AFA", "CDE", "ABA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mierno:energy_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "ae2:energy_acceptor",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mierno:matter_mixer_controller", ["ABA", "EDE", "ACA"], {
        A: "mekanism:block_steel",
        B: "ae2:calculation_processor",
        C: "ae2:logic_processor",
        D: "ae2:controller",
        E: "thermal:iron_gear",
    });

    kubejs.shaped("mierno:fluid_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "thermal:fluid_cell",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mierno:fluid_output", ["AFA", "CDE", "ABA"], {
        A: "mekanism:block_steel",
        B: "thermal:fluid_cell",
        C: "ae2:engineering_processor",
        D: "ae2:interface",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("wizards_reborn:orbital_fluid_retainer", ["ABA", " C ", "CCC"], {
        A: "thermal:electrum_plate",
        B: "thermal:fluid_cell",
        C: "fluxnetworks:flux_block",
    });

    kubejs.shaped("mierno:unstable_singularity", ["AAA", "ABA", "AAA"], {
        A: "mierno:unstable_ingot",
        B: "ae2:singularity",
    });

    kubejs.shaped("mierno:fired_crucible", ["A A", "A A", "AAA"], {
        A: "white_concrete",
    });

    kubejs.shaped("mierno:oak_crucible", ["A A", "A A", "AAA"], {
        A: "oak_log",
    });

    kubejs.shaped("thermal:device_tree_extractor", ["AAA", "ABC", "ADA"], {
        A: "thermal:iron_plate",
        B: "mierno:oak_crucible",
        C: "naturesaura:color_changer",
        D: "minecraft:comparator",
    });

    kubejs.shaped("mierno:colossal_furnace_core", ["AAA", "ABA", "AAA"], {
        A: "furnace",
        B: "cobblestone",
    });

    kubejs.shaped("mierno:colossal_furnace_proxy", ["AAA", "ABA", "AAA"], {
        A: "cobblestone",
        B: "furnace",
    });

    kubejs.shaped("mierno:cobble_gen_tier1", ["AAA", "BDC", "AAA"], {
        A: "#logs",
        B: "water_bucket",
        C: "lava_bucket",
        D: "glass",
    });

    kubejs.shaped("mierno:cobble_gen_tier2", ["AAA", "ABA", "AAA"], {
        A: "cobblestone",
        B: "mierno:cobble_gen_tier1",
    });

    kubejs.shaped("mierno:cobble_gen_tier3", ["AAA", "ABA", "AAA"], {
        A: "iron_block",
        B: "mierno:cobble_gen_tier2",
    });

    kubejs.shaped("mierno:cobble_gen_tier4", ["AAA", "ABA", "AAA"], {
        A: "gold_block",
        B: "mierno:cobble_gen_tier3",
    });

    kubejs.shaped("mierno:cobble_gen_tier5", ["AAA", "ABA", "AAA"], {
        A: "diamond_block",
        B: "mierno:cobble_gen_tier4",
    });

    kubejs.shaped("mierno:cobble_gen_tier6", ["AAA", "ABA", "AAA"], {
        A: "netherite_block",
        B: "mierno:cobble_gen_tier5",
    });

    kubejs.shaped("mierno:modular_runic_altar_core", ["ABA", "ACA", "ADA"], {
        A: "ars_nouveau:manipulation_essence",
        B: "botania:rune_mana",
        C: "botania:mana_diamond_block",
        D: "botania:runic_altar",
    });

    kubejs.shaped("mierno:void_ore_miner_controller", ["AAA", "ABA", "CCC"], {
        A: "glass",
        B: "ae2:controller",
        C: "mekanism:block_steel",
    });

    kubejs.shaped("3x mekanismgenerators:solar_panel", ["AAA", "BCB", "DDD"], {
        A: "ae2:quartz_vibrant_glass",
        B: "ae2:sky_dust",
        C: "mierno:sun_crystal_full",
        D: "ae2:printed_silicon",
    });

    kubejs.shaped("mekanismgenerators:solar_generator", ["AAA", " B ", "BCB"], {
        A: "mekanismgenerators:solar_panel",
        B: "mekanism:ingot_steel",
        C: "ae2:energy_cell",
    });

    kubejs.shaped("mekanismgenerators:advanced_solar_generator", ["ABA", "ABA", "BBB"], {
        A: "mekanismgenerators:solar_generator",
        B: "mekanism:ingot_steel",
    });

    kubejs.shaped("mierno:reinforced_stone_frame", ["AAA", " B ", "B B"], {
        A: "pneumaticcraft:reinforced_stone",
        B: "pneumaticcraft:ingot_iron_compressed",
    });

    kubejs.shaped("mierno:mana_input", ["ABA", "CDE", "AFA"], {
        A: "mekanism:block_steel",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "botania:mana_pool",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("mierno:pressure_input", ["ABA", "CDE", "AFA"], {
        A: "pneumaticcraft:pressure_chamber_wall",
        B: "pneumaticcraft:pressure_gauge",
        C: "ae2:engineering_processor",
        D: "pneumaticcraft:pressure_tube",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped("8x pneumaticcraft:reinforced_stone", ["AAA", "ABA", "AAA"], {
        A: "pneumaticcraft:compressed_stone",
        B: "pneumaticcraft:compressed_iron_block",
    });

    kubejs.shaped("naturesaura:pet_reviver", ["A A", "BCB", " D "], {
        A: "naturesaura:gold_leaf",
        B: "naturesaura:sky_ingot",
        C: "naturesaura:token_joy",
        D: "minecraft:gold_block",
    });

    kubejs.shaped("mierno:empty_nether_star", [" A ", "ABA", " A "], {
        A: "pneumaticcraft:plastic",
        B: "ae2:quartz_vibrant_glass",
    });

    kubejs.shaped("mierno:memory_source_drawing_crystal_core", ["ABA", "BCB", "ABA"], {
        A: "forbidden_arcanus:dark_nether_star_block",
        B: "mierno:memory_source_gem",
        C: "mierno:unstable_singularity",
    });

    kubejs.shaped("64x naturesaura:depth_ingot", ["ABA", "CDC", "ABA"], {
        A: "minecraft:netherite_scrap",
        B: "naturesaura:sky_ingot",
        C: "botania:terrasteel_ingot",
        D: "mierno:unstable_singularity",
    });

    kubejs.shaped("mierno:planting_station", ["AAA", "ABA", "CCC"], {
        A: "glass",
        B: "flower_pot",
        C: "minecraft:smooth_stone_slab",
    });

    kubejs.shaped("2x powah:capacitor_basic_tiny", [" AB", "ACA", "BA "], {
        A: "mekanism:ingot_steel",
        B: "powah:dielectric_paste",
        C: "redstone_block",
    });

    kubejs.shaped("pneumaticcraft:pressure_gauge", ["AAA", "ABA", "AAA"], {
        A: "thermal:electrum_plate",
        B: "minecraft:compass",
    });

    kubejs
        .shaped("botania:third_eye", ["ABA", "CDC", "AEA"], {
            A: "mierno:memory_source_gem",
            B: "pneumaticcraft:etching_acid_bucket",
            C: "minecraft:nether_star",
            D: "mierno:unstable_singularity",
            E: "naturesaura:token_terror",
        })
        .keepIngredient("naturesaura:token_terror");

    kubejs.shaped("ae2:condenser", ["ABA", "BCB", "ABA"], {
        A: "mekanism:block_steel",
        B: "ae2:fluix_pearl",
        C: "ae2:singularity",
    });

    kubejs.shaped("mierno:modular_offering_table_controller", ["ABA", "CDC", "AEA"], {
        A: "naturesaura:infused_stone",
        B: "minecraft:poppy",
        C: "naturesaura:color_changer",
        D: "naturesaura:aura_trove",
        E: "naturesaura:calling_spirit",
    });

    kubejs.shaped("occultism:chalk_purple_impure", ["AAA", "ABA", "AAA"], {
        A: "minecraft:amethyst_block",
        B: "occultism:chalk_white_impure",
    });

    kubejs.shaped("evilcraft:potentia_sphere", ["ABA", "CDE", "AFA"], {
        A: "botania:terrasteel_nugget",
        B: "malum:warp_flux",
        C: "malum:astral_weave",
        D: "evilcraft:blood_orb_filled",
        E: "malum:rotting_essence",
        F: "malum:grim_talc",
    });

    kubejs.shaped("evilcraft:effortless_ring", ["CA ", "ABA", " A "], {
        A: "evilcraft:dark_power_gem",
        B: "botania:super_travel_belt",
        C: "botania:rune_gluttony",
    });

    kubejs
        .shaped("mierno:colorless_gem", ["   ", "ABC", "   "], {
            A: "evilcraft:inverted_potentia_empowered",
            B: Item.of("mierno:division_sigil").enchant("mierno:activate", 1).weakNBT(),
            C: Item.of("occultism:soul_gem").weakNBT(),
        })
        .keepIngredient("mierno:division_sigil");

    kubejs.shaped("8x pneumaticcraft:compressed_stone", ["AAA", "ABA", "AAA"], {
        A: "ars_nouveau:sourcestone",
        B: "pneumaticcraft:ingot_iron_compressed",
    });

    kubejs.shaped("8x forbidden_arcanus:arcane_chiseled_polished_darkstone", ["AAA", "ABA", "AAA"], {
        A: "forbidden_arcanus:chiseled_polished_darkstone",
        B: "forbidden_arcanus:deorum_block",
    });

    kubejs.shaped("mierno:modular_alfheim_portal_core", ["ABA", "CDE", "AFA"], {
        A: "botania:terrasteel_nugget",
        B: "ae2:cell_component_1k",
        C: "ae2:engineering_processor",
        D: "mierno:mana_input",
        E: "ae2:logic_processor",
        F: "ae2:printed_silicon",
    });

    kubejs.shaped(
        Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:i",id:"minecraft:white_concrete"}}'),
        ["AAA", "ABA", "AAA"],
        {
            A: "white_concrete",
            B: "gray_concrete",
        }
    );

    kubejs.shaped(
        Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:i",id:"minecraft:gray_concrete"}}'),
        ["AAA", "ABA", "AAA"],
        {
            A: "gray_concrete",
            B: "white_concrete",
        }
    );

    kubejs.shaped("thermal:machine_furnace", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:furnace",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_sawmill", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "thermal:saw_blade",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_pulverizer", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:piston",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_smelter", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:blast_furnace",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_insolator", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "mierno:planting_station",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_centrifuge", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:compass",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_press", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:iron_block",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_crucible", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "mierno:fired_crucible",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_chiller", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "botania:rune_water",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_refinery", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "thermal:device_tree_extractor",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_pyrolyzer", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:blaze_rod",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_bottler", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:bucket",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_brewer", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:brewing_stand",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_crystallizer", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "ae2:crystal_resonance_generator",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("thermal:machine_crafter", ["ABC", "DED", "FGF"], {
        A: "ae2:logic_processor",
        B: "minecraft:crafting_table",
        C: "ae2:engineering_processor",
        D: "thermal:copper_gear",
        E: "thermal:machine_frame",
        F: "thermal:rf_coil",
        G: "thermal:redstone_servo",
    });

    kubejs.shaped("2x powah:capacitor_niotic", ["ABA", "BCB", "ABA"], {
        A: "powah:dielectric_paste",
        B: "powah:crystal_niotic",
        C: "powah:capacitor_blazing",
    });

    kubejs.shaped("2x powah:capacitor_spirited", ["ABA", "BCB", "ABA"], {
        A: "powah:dielectric_paste",
        B: "powah:crystal_spirited",
        C: "powah:capacitor_niotic",
    });

    kubejs.shaped("2x powah:capacitor_nitro", ["ABA", "BCB", "ABA"], {
        A: "powah:dielectric_paste",
        B: "powah:crystal_nitro",
        C: "powah:capacitor_spirited",
    });

    kubejs.shaped("forbidden_arcanus:aureal_bottle", ["AAA", "ABA", "AAA"], {
        A: "forbidden_arcanus:arcane_crystal_dust",
        B: "forbidden_arcanus:xpetrified_orb",
    });

    kubejs.shaped("forbidden_arcanus:corrupti_dust", ["ABA", "BCB", "ABA"], {
        A: "forbidden_arcanus:arcane_crystal_dust",
        B: "evilcraft:dark_gem_crushed",
        C: "forbidden_arcanus:mundabitur_dust",
    });

    kubejs.shaped("8x forbidden_arcanus:dark_rune", ["AAA", "ABA", "AAA"], {
        A: "forbidden_arcanus:rune",
        B: "evilcraft:inverted_potentia_empowered",
    });

    kubejs.shaped("8x forbidden_arcanus:corrupted_arcane_crystal", ["AAA", "ABA", "AAA"], {
        A: "forbidden_arcanus:arcane_crystal",
        B: "forbidden_arcanus:corrupti_dust",
    });

    kubejs.shaped("bloodmagic:ritualstone", ["AAA", "ABA", "AAA"], {
        A: "bloodmagic:infusedslate",
        B: "bloodmagic:blankrune",
    });

    kubejs
        .shaped("bloodmagic:ritualdiviner", [" A ", "BCD", " E "], {
            A: "bloodmagic:firescribetool",
            B: "bloodmagic:airscribetool",
            C: "botania:dreamwood_twig",
            D: "bloodmagic:waterscribetool",
            E: "bloodmagic:earthscribetool",
        })
        .keepIngredient("bloodmagic:firescribetool")
        .keepIngredient("bloodmagic:airscribetool")
        .keepIngredient("bloodmagic:waterscribetool")
        .keepIngredient("bloodmagic:earthscribetool");
});
