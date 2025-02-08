ServerEvents.recipes((event) => {
    event.custom({
        type: 'evilcraft:environmental_accumulator',
        item: 'occultism:spirit_attuned_gem',
        weather: 'ANY',
        result: {
            item: 'evilcraft:dark_gem',
            weather: 'ANY',
        },
        duration: 60,
        cooldownTime: 100,
    });

    event.custom({
        type: 'evilcraft:environmental_accumulator',
        item: 'evilcraft:inverted_potentia',
        weather: 'ANY',
        result: {
            item: 'evilcraft:inverted_potentia_empowered',
            weather: 'ANY',
        },
    });

    event.custom({
        type: 'evilcraft:environmental_accumulator',
        item: 'mierno:spirit_attuned_gem_block',
        weather: 'ANY',
        result: {
            item: 'evilcraft:dark_block',
            weather: 'ANY',
        },
        duration: 540,
        cooldownTime: 900,
    });

    event.custom({
        type: 'evilcraft:blood_infuser',
        item: 'forbidden_arcanus:test_tube',
        fluid: {
            fluid: 'evilcraft:blood',
            amount: 30000,
        },
        result: {
            item: {
                item: 'forbidden_arcanus:blood_test_tube',
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
        type: 'evilcraft:blood_infuser',
        item: 'forbidden_arcanus:blood_test_tube',
        fluid: {
            fluid: 'evilcraft:blood',
            amount: 30000,
        },
        result: {
            item: {
                item: 'forbidden_arcanus:blood_test_tube',
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
        type: 'evilcraft:blood_infuser',
        item: 'evilcraft:blood_orb_empty',
        fluid: {
            fluid: 'evilcraft:blood',
            amount: 10000,
        },
        result: {
            item: 'evilcraft:blood_orb_filled',
        },
        duration: 100,
        xp: 2.2,
        tier: 1,
    });

    event.custom({
        type: 'evilcraft:blood_infuser',
        item: 'mierno:colorless_gem',
        fluid: {
            fluid: 'evilcraft:blood',
            amount: 640000,
        },
        result: {
            item: Item.of(
                'evilcraft:creative_blood_drop',
                '{Fluid:{Amount:500,FluidName:"evilcraft:blood"},capacity:1000}'
            ),
        },
        duration: 19980,
        xp: 2.2,
        tier: 3,
    });
});
