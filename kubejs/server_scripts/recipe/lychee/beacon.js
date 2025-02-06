ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:item_inside',
        hide_in_viewer: true,
        contextual: [
            {
                type: 'custom',
                id: 'beacon_condition',
            },
        ],
        post: [
            {
                type: 'prevent_default',
            },
            {
                type: 'custom',
                id: 'beacon_action',
            },
        ],
        item_in: [
            {
                item: 'mierno:empty_nether_star',
            },
        ],
        block_in: '*',
    });
});
