ServerEvents.recipes((event) => {
    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "minecraft:nether_star",
        },
        output: "mierno:memory_source_gem",
        pedestalItems: [
            {
                item: {
                    item: "botania:elementium_ingot",
                },
            },
            {
                item: {
                    item: "botania:dragonstone",
                },
            },
            {
                item: {
                    item: "ars_nouveau:source_gem",
                },
            },
            {
                item: {
                    item: "botania:pixie_dust",
                },
            },
        ],
        source: 2000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "minecraft:emerald",
        },
        output: "mierno:source_emerald",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:sourceberry_bush",
                },
            },
            {
                item: {
                    item: "ars_nouveau:sourceberry_bush",
                },
            },
            {
                item: {
                    item: "ars_nouveau:sourceberry_bush",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "botania:shimmerrock",
        },
        output: "ars_nouveau:source_gem",
        pedestalItems: [
            {
                item: {
                    item: "botania:elementium_ingot",
                },
            },
            {
                item: {
                    item: "botania:dragonstone",
                },
            },
            {
                item: {
                    item: "botania:pixie_dust",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "ars_nouveau:ritual_wilden_summon",
        },
        pedestalItems: [
            {
                item: "ars_nouveau:conjuration_essence",
            },
            {
                item: "ars_nouveau:abjuration_essence",
            },
            {
                item: "ars_nouveau:manipulation_essence",
            },
            {
                item: "ars_nouveau:magebloom",
            },
            {
                item: "botania:terrasteel_ingot",
            },
        ],
        reagent: [{ type: "forge:nbt", item: "botania:mana_tablet", count: 1, nbt: "{mana:500000}" }],
        sourceCost: 5000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "ae2:condenser",
        },
        pedestalItems: [
            {
                item: "ars_nouveau:jar_of_light",
            },
            {
                item: "ae2:fluix_pearl",
            },
            {
                item: "ae2:fluix_pearl",
            },
            {
                item: "ars_nouveau:void_jar",
            },
            {
                item: "ae2:fluix_pearl",
            },
            {
                item: "ae2:fluix_pearl",
            },
        ],
        reagent: [{ item: "ars_nouveau:wilden_tribute" }],
        sourceCost: 10000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "mierno:source_fluidlink",
        },
        pedestalItems: [
            {
                item: "thermal:electrum_block",
            },
            {
                item: "thermal:electrum_block",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
            {
                item: "ars_nouveau:source_gem_block",
            },
        ],
        reagent: [{ item: "ars_nouveau:manipulation_essence" }],
        sourceCost: 10000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "mierno:terrestrial_agglomeration_crystal",
        },
        pedestalItems: [
            {
                item: "botania:rune_mana",
            },
            {
                item: "botania:rune_water",
            },
            {
                item: "botania:rune_fire",
            },
            {
                item: "botania:rune_earth",
            },
            {
                item: "botania:rune_air",
            },
        ],
        reagent: [{ item: "botania:livingrock" }],
        sourceCost: 10000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "occultism:divination_rod",
        },
        pedestalItems: [
            {
                item: "botania:dreamwood_twig",
            },
            {
                item: "botania:dreamwood_twig",
            },
            {
                item: "botania:dreamwood_twig",
            },
            {
                item: "ars_nouveau:manipulation_essence",
            },
            {
                item: "occultism:otherworld_essence",
            },
        ],
        reagent: [{ item: "occultism:spirit_attuned_gem" }],
        sourceCost: 10000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "evilcraft:eternal_water",
        },
        pedestalItems: [
            {
                item: "fluxnetworks:flux_block",
            },
            {
                item: "fluxnetworks:flux_block",
            },
            {
                item: "fluxnetworks:flux_block",
            },
            {
                item: "fluxnetworks:flux_block",
            },
        ],
        reagent: [{ item: "naturesaura:spring" }],
        sourceCost: 5000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "occultism:spirit_attuned_gem",
        },
        output: "mierno:soul_gem",
        pedestalItems: [
            {
                item: {
                    item: "occultism:otherworld_essence",
                },
            },
            {
                item: {
                    item: "occultism:iesnium_ingot",
                },
            },
            {
                item: {
                    item: "occultism:otherworld_essence",
                },
            },
            {
                item: {
                    item: "occultism:iesnium_ingot",
                },
            },
            {
                item: {
                    item: "occultism:otherworld_essence",
                },
            },
            {
                item: {
                    item: "occultism:iesnium_ingot",
                },
            },
            {
                item: {
                    item: "occultism:otherworld_essence",
                },
            },
            {
                item: {
                    item: "occultism:iesnium_ingot",
                },
            },
        ],
        source: 2000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:conjuration_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:air_essence",
                },
            },
            {
                item: {
                    item: "ars_nouveau:earth_essence",
                },
            },
            {
                item: {
                    item: "ars_nouveau:abjuration_essence",
                },
            },
        ],
        source: 2000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:manipulation_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:fire_essence",
                },
            },
            {
                item: {
                    item: "ars_nouveau:water_essence",
                },
            },
            {
                item: {
                    item: "ars_nouveau:abjuration_essence",
                },
            },
        ],
        source: 2000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:earth_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom",
                },
            },
            {
                item: {
                    item: "botania:rune_earth",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:water_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom",
                },
            },
            {
                item: {
                    item: "botania:rune_water",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:fire_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom",
                },
            },
            {
                item: {
                    item: "botania:rune_fire",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:air_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom",
                },
            },
            {
                item: {
                    item: "botania:rune_air",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:imbuement",
        count: 1,
        input: {
            item: "ars_nouveau:source_gem",
        },
        output: "ars_nouveau:abjuration_essence",
        pedestalItems: [
            {
                item: {
                    item: "ars_nouveau:magebloom_fiber",
                },
            },
            {
                item: {
                    item: "ars_nouveau:magebloom",
                },
            },
            {
                item: {
                    item: "botania:rune_mana",
                },
            },
        ],
        source: 1000,
    });

    event.custom({
        type: "ars_nouveau:enchanting_apparatus",
        output: {
            item: "ars_nouveau:creative_source_jar",
        },
        pedestalItems: Array(8).fill({
            item: Item.of(
                "ars_nouveau:source_jar",
                '{BlockEntityTag:{Items:[],id:"ars_nouveau:source_jar",source:10000}}'
            ).weakNBT(),
        }),
        reagent: [{ item: "ars_nouveau:summon_focus" }],
        sourceCost: 10000,
    });
});
