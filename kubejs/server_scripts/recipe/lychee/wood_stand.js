ServerEvents.recipes((event) => {
    event.custom({
        type: "lychee:block_interacting",
        post: [
            {
                type: "prevent_default",
            },
            {
                type: "place",
                block: "naturesaura:wood_stand",
            },
            {
                type: "execute",
                command: "particle block naturesaura:wood_stand ~ ~ ~ 0 0 0 1 50",
                hide: true,
            },
            {
                type: "damage_item",
                damage: 1,
            },
        ],
        item_in: {
            tag: "axes",
        },
        block_in: {
            tag: "stripped_logs",
        },
    });
});
