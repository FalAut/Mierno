ServerEvents.recipes((event) => {
    event.custom({
        type: "ad_astra:refining",
        cookingtime: 1,
        energy: 30,
        input: {
            ingredient: {
                fluid: "pneumaticcraft:oil",
            },
            millibuckets: 5,
        },
        result: {
            fluid: "ad_astra:fuel",
            millibuckets: 5,
        },
    });
});
