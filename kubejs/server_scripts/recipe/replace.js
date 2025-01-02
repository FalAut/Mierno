ServerEvents.recipes((event) => {
    event.replaceInput({ id: "naturesaura:tree_ritual/ancient_sapling" }, "sugar_cane", "oak_log");
    event.replaceInput({ id: "naturesaura:tree_ritual/ancient_sapling" }, "dandelion", "poppy");
    event.replaceInput({ id: "naturesaura:offering/clock_hand" }, "nether_star", "clock");
    event.replaceInput({ id: "botania:natura_pylon" }, "ender_eye", "naturesaura:infused_iron_block");
    event.replaceInput({ id: "ars_nouveau:magebloom_crop" }, "ars_nouveau:source_gem", "ars_nouveau:magebloom_fiber");
    event.replaceInput({ id: "botania:light_relay" }, "botania:red_string", "botania:spark");
    event.replaceInput({ id: "botania:spark_upgrade_dispersive" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "botania:spark_upgrade_dominant" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "botania:spark_upgrade_recessive" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "botania:spark_upgrade_isolated" }, "botania:pixie_dust", "botania:mana_powder");
    event.replaceInput({ id: "modularrouters:blank_module" }, "paper", "iron_ingot");
    event.replaceInput({ id: "thermal:chiller_ingot_cast" }, "minecraft:nether_brick", "#forge:ingots");
    event.replaceInput({ id: "naturesaura:altar/prismarine" }, "quartz", "botania:quartz_mana");
    event.replaceInput({ id: "naturesaura:color_changer" }, "naturesaura:token_euphoria", "naturesaura:calling_spirit");
    event.replaceInput(
        { id: "pneumaticcraft:air_compressor" },
        "pneumaticcraft:reinforced_bricks",
        "pneumaticcraft:reinforced_stone"
    );
    event.replaceInput(
        { id: "pneumaticcraft:pressure_chamber_glass" },
        "pneumaticcraft:reinforced_bricks",
        "pneumaticcraft:reinforced_stone"
    );
    event.replaceInput(
        { id: "pneumaticcraft:pressure_chamber_wall" },
        "pneumaticcraft:reinforced_bricks",
        "pneumaticcraft:reinforced_stone"
    );
    event.replaceInput({ id: "pipez:item_pipe" }, "iron_ingot", "thermal:cured_rubber");
    event.replaceInput({ id: "pipez:fluid_pipe" }, "iron_ingot", "thermal:cured_rubber");
    event.replaceInput({ id: "pipez:energy_pipe" }, "iron_ingot", "thermal:cured_rubber");
    event.replaceInput(
        { id: "powah:crafting/capacitor_blazing" },
        "powah:capacitor_basic_large",
        "powah:capacitor_hardened"
    );
    event.replaceInput(
        { id: "powah:crafting/capacitor_niotic" },
        "powah:capacitor_basic_large",
        "powah:capacitor_blazing"
    );
    event.replaceInput(
        { id: "powah:crafting/capacitor_spirited" },
        "powah:capacitor_basic_large",
        "powah:capacitor_niotic"
    );
    event.replaceInput(
        { id: "powah:crafting/capacitor_nitro" },
        "powah:capacitor_basic_large",
        "powah:capacitor_spirited"
    );
    event.replaceInput({ id: "pneumaticcraft:air_compressor" }, "furnace", "thermal:machine_frame");
    event.replaceInput({ id: "pneumaticcraft:small_tank" }, "glass", "pneumaticcraft:pressure_chamber_glass");
    event.replaceInput({ id: "pneumaticcraft:small_tank" }, "minecraft:iron_bars", "mierno:reinforced_stone_frame");
    event.replaceInput({ id: "pneumaticcraft:refinery_output" }, "glass", "pneumaticcraft:pressure_chamber_glass");
    event.replaceInput({ id: "pneumaticcraft:refinery" }, "redstone", "pneumaticcraft:transistor");
    event.replaceInput({ id: "pneumaticcraft:heat_frame" }, "furnace", "mierno:reinforced_stone_frame");
    event.replaceInput(
        { id: "pneumaticcraft:uv_light_box" },
        "pneumaticcraft:pcb_blueprint",
        "mierno:sun_crystal_full"
    );
    event.replaceInput({ id: "occultism:crafting/golden_sacrificial_bowl" }, "gold_ingot", "thermal:electrum_block");
    event.replaceInput({ id: "naturesaura:animal_spawner" }, "naturesaura:sky_ingot", "naturesaura:birth_spirit");
    event.replaceInput({ id: "botania:super_travel_belt" }, "botania:life_essence", "evilcraft:dark_power_gem");
    event.replaceInput({ id: "forbidden_arcanus:deorum_ingot" }, "gold_ingot", "thermal:electrum_ingot");
    event.replaceInput({ id: "forbidden_arcanus:deorum_ingot" }, "charcoal", "forbidden_arcanus:rune");
    event.replaceInput(
        { id: "forbidden_arcanus:arcane_polished_darkstone" },
        "forbidden_arcanus:deorum_ingot",
        "forbidden_arcanus:deorum_block"
    );
    event.replaceInput({ mod: "powah" }, "iron_ingot", "mekanism:ingot_steel");
    event.replaceInput({ id: "evilcraft:crafting/blood_orb_empty" }, "iron_ingot", "forbidden_arcanus:arcane_crystal");
    event.replaceInput({ id: "bloodmagic:ritual_stone_master" }, "obsidian", "bloodmagic:ritualstone");
    event.replaceInput(
        { id: "naturesaura:chunk_loader" },
        Item.of("naturesaura:aura_bottle", '{stored_type:"naturesaura:end"}').strongNBT(),
        "fluxnetworks:flux_core"
    );
    event.replaceInput({ id: "botania:light_relay" }, "botania:dragonstone", "glowstone_dust");
    event.replaceInput(
        { id: "evilcraft:crafting/spectral_glasses" },
        "evilcraft:garmonbozia",
        "evilcraft:dark_power_gem"
    );
});
