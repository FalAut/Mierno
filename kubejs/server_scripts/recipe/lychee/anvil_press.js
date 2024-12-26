ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:block_crushing",
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
        falling_block: "anvil",
        landing_block: "*",
    });

    event.custom({
        type: "lychee:block_crushing",
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
        falling_block: "anvil",
        landing_block: "*",
    });
});
