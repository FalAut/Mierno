ServerEvents.recipes((event) => {
    event.custom({
        type: "ae2:transform",
        circumstance: {
            type: "explosion",
        },
        ingredients: [
            {
                item: "mierno:unstable_singularity",
            },
            {
                item: "naturesaura:token_anger",
            },
        ],
        result: {
            count: 1,
            item: "naturesaura:token_rage",
        },
    });
});
