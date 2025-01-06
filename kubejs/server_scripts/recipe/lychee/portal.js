ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:item_inside",
        hide_in_viewer: true,
        contextual: [
            {
                type: "custom",
                id: "validate_misty_forest_portal",
            },
        ],
        post: [
            {
                type: "custom",
                id: "place_misty_forest_portal",
            },
        ],
        item_in: [
            {
                item: "naturesaura:calling_spirit",
            },
        ],
        block_in: {
            blocks: ["water"],
            state: {
                level: 0,
            },
        },
    });
});
