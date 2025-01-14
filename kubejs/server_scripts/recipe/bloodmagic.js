ServerEvents.recipes((event) => {
    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 1000,
        consumptionRate: 100,
        drainRate: 100,
        input: {
            item: "forbidden_arcanus:dark_rune",
        },
        output: {
            item: "bloodmagic:blankslate",
        },
        upgradeLevel: 0,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 2000,
        consumptionRate: 200,
        drainRate: 200,
        input: {
            item: "bloodmagic:blankslate",
        },
        output: {
            item: "bloodmagic:reinforcedslate",
        },
        upgradeLevel: 1,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 5000,
        consumptionRate: 500,
        drainRate: 500,
        input: {
            item: "bloodmagic:reinforcedslate",
        },
        output: {
            item: "bloodmagic:infusedslate",
        },
        upgradeLevel: 2,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 15000,
        consumptionRate: 1500,
        drainRate: 1500,
        input: {
            item: "bloodmagic:infusedslate",
        },
        output: {
            item: "bloodmagic:demonslate",
        },
        upgradeLevel: 3,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 30000,
        consumptionRate: 3000,
        drainRate: 3000,
        input: {
            item: "bloodmagic:demonslate",
        },
        output: {
            item: "bloodmagic:etherealslate",
        },
        upgradeLevel: 4,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 1000,
        consumptionRate: 100,
        drainRate: 100,
        input: {
            item: "forbidden_arcanus:dark_rune_block",
        },
        output: {
            item: "bloodmagic:blankrune",
        },
        upgradeLevel: 0,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 2000,
        consumptionRate: 5,
        drainRate: 1,
        input: {
            item: "mierno:colorless_gem",
        },
        output: {
            item: "bloodmagic:weakbloodorb",
        },
        upgradeLevel: 0,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 2000,
        consumptionRate: 5,
        drainRate: 1,
        input: {
            item: "evilcraft:blood_infuser",
        },
        output: {
            item: "mierno:blood_converter",
        },
        upgradeLevel: 0,
    });

    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 5000,
        consumptionRate: 500,
        drainRate: 500,
        input: {
            item: "mierno:soul_gem",
        },
        output: {
            item: "bloodmagic:soulsnare",
        },
        upgradeLevel: 2,
    });

    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
            {
                item: "forbidden_arcanus:corrupti_dust",
            },
            {
                item: "forbidden_arcanus:dark_rune",
            },
            {
                item: "forbidden_arcanus:corrupted_arcane_crystal",
            },
            {
                item: "evilcraft:blood_waxed_coal",
            },
        ],
        output: {
            item: "bloodmagic:arcaneashes",
            nbt: "{Damage:0}",
        },
        syphon: 500,
        ticks: 200,
        upgradeLevel: 1,
    });

    event.custom({
        type: "bloodmagic:alchemytable",
        input: [
            {
                item: "ars_nouveau:fire_essence",
            },
            {
                item: "thermal:signalum_dust",
            },
            {
                item: "thermal:lumium_dust",
            },
            {
                item: "forbidden_arcanus:deorum_ingot",
            },
            {
                item: "powah:crystal_blazing",
            },
        ],
        output: {
            item: "bloodmagic:reagentlava",
        },
        syphon: 1000,
        ticks: 200,
        upgradeLevel: 1,
    });

    event.custom({
        type: "bloodmagic:soulforge",
        drain: 50,
        input0: {
            item: "bloodmagic:lavasigil",
        },
        input1: {
            item: "powah:blazing_crystal_block",
        },
        input2: {
            item: "mierno:sun_crystal_full",
        },
        input3: {
            item: "ars_nouveau:fire_essence",
        },
        minimumDrain: 50,
        output: {
            item: "bloodmagic:lavacrystal",
        },
    });

    event.custom({
        type: "bloodmagic:soulforge",
        drain: 1.0,
        input0: {
            item: "forbidden_arcanus:corrupted_arcane_crystal",
        },
        input1: {
            item: "occultism:soul_gem",
        },
        input2: {
            item: "mierno:colorless_gem",
        },
        input3: {
            item: "bloodmagic:arcaneashes",
        },
        minimumDrain: 1.0,
        output: {
            item: "bloodmagic:soulgempetty",
        },
    });

    event.custom({
        type: "bloodmagic:meteor",
        explosion: 8.0,
        input: {
            item: "mierno:glowing_obsidian",
        },
        layers: [
            {
                additionalWeight: 0,
                fill: {
                    block: "forbidden_arcanus:stella_arcanum",
                },
                minWeight: 1000,
                radius: 10,
            },
        ],
        syphon: 0,
    });
});
