ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:item_inside",
        comment: "comment.lychee.canseesky",
        time: 10,
        contextual: [
            {
                type: "weather",
                weather: "clear",
            },
            {
                type: "time",
                value: {
                    min: 5500,
                    max: 6500,
                },
            },
            {
                type: "custom",
                id: "can_see_sky",
            },
        ],
        post: [
            {
                type: "drop_item",
                item: "naturesaura:gold_fiber",
            },
        ],
        item_in: [
            {
                item: "mierno:fiber",
            },
        ],
        block_in: "*",
    });
});
