ServerEvents.recipes((event) => {
    event.custom({
        type: 'forbidden_arcanus:clibano_combustion',
        cooking_time: 20,
        experience: 1.0,
        fire_type: 'enchanted_fire',
        ingredient: {
            item: 'forbidden_arcanus:stella_arcanum',
        },
        residue: {
            chance: 0.1,
            name: 'deorum',
        },
        result: {
            item: 'forbidden_arcanus:stellarite_piece',
            count: 64,
        },
    });
});
