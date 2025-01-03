ServerEvents.recipes((event) => {
    event.custom({
        type: "bloodmagic:altar",
        altarSyphon: 1000,
        consumptionRate: 5,
        drainRate: 5,
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
        altarSyphon: 1000,
        consumptionRate: 5,
        drainRate: 5,
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
        type: "bloodmagic:meteor",
        explosion: 8.0,
        input: {
            item: "bedrock",
        },
        layers: [
            {
                additionalWeight: 0,
                fill: {
                    block: "minecraft:diamond_ore",
                },
                minWeight: 0,
                radius: 2,
            },
            {
                additionalWeight: 0,
                fill: {
                    block: "minecraft:cobblestone",
                },
                minWeight: 1000,
                radius: 5,
                weightMap: [
                    {
                        index: 0,
                        tag: "forge:ores/sapphire",
                        weight: 100,
                    },
                    {
                        index: 0,
                        tag: "forge:ores/ruby",
                        weight: 100,
                    },
                    {
                        block: "minecraft:diamond_ore",
                        weight: 100,
                    },
                    {
                        block: "minecraft:emerald_ore",
                        weight: 75,
                    },
                    {
                        index: 0,
                        tag: "forge:ores/cinnabar",
                        weight: 200,
                    },
                ],
            },
        ],
        syphon: 0,
    });
});
