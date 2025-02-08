ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:item_inside',
        hide_in_viewer: true,
        post: [
            {
                type: 'prevent_default',
            },
            {
                type: 'custom',
                id: 'unstable_ingot_explosion',
            },
        ],
        item_in: [
            {
                item: 'mierno:unstable_ingot',
            },
        ],
        block_in: '*',
    });

    event.custom({
        type: 'lychee:item_inside',
        hide_in_viewer: true,
        post: [
            {
                type: 'custom',
                id: 'explosion',
            },
        ],
        item_in: [
            {
                item: 'mierno:unstable_singularity',
            },
        ],
        block_in: '*',
    });
});
