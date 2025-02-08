ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:item_inside',
        hide_in_viewer: true,
        contextual: [
            {
                type: 'weather',
                weather: 'clear',
            },
            {
                type: 'custom',
                id: 'can_see_sky',
            },
            {
                type: 'custom',
                id: 'is_midnight',
            },
        ],
        post: [
            {
                type: 'prevent_default',
            },
            {
                type: 'custom',
                id: 'add_lunar',
            },
        ],
        item_in: [
            {
                item: 'mierno:moon_stone',
            },
        ],
        block_in: '*',
    });

    event.custom({
        type: 'lychee:item_inside',
        ghost: true,
        time: 100,
        comment: 'comment.lychee.canseesky',
        contextual: [
            {
                type: 'weather',
                weather: 'clear',
            },
            {
                type: 'custom',
                id: 'can_see_sky',
            },
            {
                type: 'custom',
                id: 'is_midnight',
            },
        ],
        post: [
            {
                type: 'drop_item',
                item: 'mierno:moon_stone_full',
            },
        ],
        item_in: [
            {
                item: 'mierno:moon_stone',
            },
        ],
        block_in: '*',
    });
});
