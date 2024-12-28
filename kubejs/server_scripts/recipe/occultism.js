ServerEvents.recipes((event) => {
    const { occultism } = event.recipes;

    occultism.spirit_fire("occultism:otherworld_ashes", "occultism:otherstone");
    occultism.spirit_fire("occultism:spirit_attuned_gem", "ars_nouveau:source_gem");
    occultism.spirit_fire("occultism:candle_white", "minecraft:torch");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft_with_spirit_name",
            activation_item: {
                item: "occultism:book_of_binding_bound_djinni",
            },
            pentacle_id: "occultism:craft_djinni",
            duration: 60,
            ritual_dummy: {
                item: "occultism:ritual_dummy/craft_infused_pickaxe",
            },
            ingredients: [
                {
                    item: "botania:rune_lust",
                },
                {
                    item: "ars_nouveau:abjuration_essence",
                },
                {
                    item: "occultism:spirit_attuned_pickaxe_head",
                },
                {
                    item: "occultism:otherworld_essence",
                },
                {
                    item: "botania:dreamwood_twig",
                },
                {
                    item: "botania:dreamwood_twig",
                },
            ],
            result: {
                item: "occultism:infused_pickaxe",
            },
        })
        .id("occultism:ritual/craft_infused_pickaxe");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "evilcraft:effortless_ring",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "botania:rune_envy",
                },
                {
                    item: "botania:rune_lust",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
            ],
            result: {
                item: "evilcraft:vengeance_ring",
            },
        })
        .id("mierno:occultism_ritual/vengeance_ring");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "evilcraft:vengeance_ring",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "botania:rune_pride",
                },
                {
                    item: "botania:rune_lust",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
            ],
            result: {
                item: "evilcraft:vengeance_focus",
            },
        })
        .id("mierno:vengeance_focus/blood_pact_of_asmodeus");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "evilcraft:vengeance_ring",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "botania:rune_wrath",
                },
                {
                    item: "botania:rune_greed",
                },
                {
                    item: "evilcraft:blood_orb_filled",
                },
                {
                    item: "evilcraft:blood_orb_filled",
                },
                {
                    item: "evilcraft:blood_orb_filled",
                },
                {
                    item: "evilcraft:blood_orb_filled",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
            ],
            result: {
                item: "evilcraft:piercing_vengeance_focus",
            },
        })
        .id("mierno:piercing_vengeance_focus/blood_pact_of_asmodeus");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "occultism:soul_gem",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "evilcraft:blood_chest",
                },
                {
                    item: "minecraft:ender_chest",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
                {
                    item: "occultism:iesnium_ingot",
                },
            ],
            result: {
                item: "evilcraft:box_of_eternal_closure",
            },
        })
        .id("mierno:box_of_eternal_closure/blood_pact_of_asmodeus");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "evilcraft:blood_infusion_core",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "ars_nouveau:manipulation_essence",
                },
                {
                    item: "evilcraft:dark_tank",
                },
            ],
            result: {
                item: "evilcraft:blood_infuser",
            },
        })
        .id("mierno:blood_infuser/blood_pact_of_asmodeus");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "evilcraft:environmental_accumulation_core",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:bloody_cobblestone",
                },
                {
                    item: "evilcraft:garmonbozia",
                },
                {
                    item: "evilcraft:blood_infusion_core",
                },
            ],
            result: {
                item: "evilcraft:sanguinary_environmental_accumulator",
            },
        })
        .id("mierno:sanguinary_environmental_accumulator/blood_pact_of_asmodeus");

    event
        .custom({
            type: "occultism:ritual",
            ritual_type: "occultism:craft",
            activation_item: {
                item: "mierno:colossal_furnace_core",
            },
            pentacle_id: "occultism:blood_pact_of_asmodeus",
            duration: 60,
            ritual_dummy: {
                item: "mierno:ritual_dummy/blood_pact_of_asmodeus",
            },
            ingredients: [
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_power_gem",
                },
                {
                    item: "evilcraft:dark_blood_brick",
                },
                {
                    item: "evilcraft:dark_blood_brick",
                },
                {
                    item: "evilcraft:dark_blood_brick",
                },
                {
                    item: "evilcraft:dark_blood_brick",
                },
                {
                    item: "evilcraft:garmonbozia",
                },
                {
                    item: "evilcraft:blood_infusion_core",
                },
                {
                    item: "evilcraft:dark_tank",
                },
            ],
            result: {
                item: "evilcraft:spirit_furnace",
            },
        })
        .id("mierno:spirit_furnace/blood_pact_of_asmodeus");
});
