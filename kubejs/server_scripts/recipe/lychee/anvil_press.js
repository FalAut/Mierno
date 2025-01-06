ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:block_crushing",
        hide_in_viewer: true,
        post: [
            {
                type: "drop_item",
                contextual: [
                    {
                        type: "chance",
                        chance: 0.5,
                    },
                ],
                item: "thermal:iron_plate",
            },
        ],
        item_in: [
            {
                item: "minecraft:iron_ingot",
            },
        ],
    });

    event.custom({
        type: "lychee:block_crushing",
        hide_in_viewer: true,
        post: [
            {
                type: "drop_item",
                contextual: [
                    {
                        type: "chance",
                        chance: 0.5,
                    },
                ],
                item: "thermal:gold_plate",
            },
        ],
        item_in: [
            {
                item: "minecraft:gold_ingot",
            },
        ],
    });

    event.custom({
        type: "lychee:block_crushing",
        ghost: true,
        post: [
            {
                type: "drop_item",
                contextual: [
                    {
                        type: "chance",
                        chance: 0.5,
                    },
                ],
                item: "thermal:iron_plate",
                nbt: { display: { Lore: ['{"italic":false,"color":"gold","text":"50%"}'] } },
            },
        ],
        item_in: [
            {
                item: "minecraft:iron_ingot",
            },
        ],
    });

    event.custom({
        type: "lychee:block_crushing",
        ghost: true,
        post: [
            {
                type: "drop_item",
                contextual: [
                    {
                        type: "chance",
                        chance: 0.5,
                    },
                ],
                item: "thermal:gold_plate",
                nbt: { display: { Lore: ['{"italic":false,"color":"gold","text":"50%"}'] } },
            },
        ],
        item_in: [
            {
                item: "minecraft:gold_ingot",
            },
        ],
    });
});
