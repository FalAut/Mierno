ServerEvents.recipes((event) => {
    event.custom({
        type: "evilcraft:environmental_accumulator",
        item: "occultism:spirit_attuned_gem",
        weather: "ANY",
        result: {
            item: "evilcraft:dark_gem",
            weather: "ANY",
        },
        duration: 60,
        cooldownTime: 100,
    });

    event.custom({
        type: "evilcraft:environmental_accumulator",
        item: "mierno:spirit_attuned_gem_block",
        weather: "ANY",
        result: {
            item: "evilcraft:dark_block",
            weather: "ANY",
        },
        duration: 540,
        cooldownTime: 900,
    });

    event.custom({
        type: "evilcraft:blood_infuser",
        item: "forbidden_arcanus:test_tube",
        fluid: {
            fluid: "evilcraft:blood",
            amount: 30000,
        },
        result: {
            item: {
                item: "forbidden_arcanus:blood_test_tube",
                nbt: {
                    Blood: 3000,
                },
            },
        },

        duration: 100,
        xp: 0.05,
        tier: 3,
    });

    event.custom({
        type: "evilcraft:blood_infuser",
        item: "forbidden_arcanus:blood_test_tube",
        fluid: {
            fluid: "evilcraft:blood",
            amount: 30000,
        },
        result: {
            item: {
                item: "forbidden_arcanus:blood_test_tube",
                nbt: {
                    Blood: 3000,
                },
            },
        },

        duration: 100,
        xp: 0.05,
        tier: 3,
    });
});
