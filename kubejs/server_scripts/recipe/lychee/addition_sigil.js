ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:block_crushing',
        hide_in_viewer: true,
        contextual: [
            {
                type: 'custom',
                id: 'addition_sigil_validate',
            },
        ],
        post: [
            {
                type: 'custom',
                id: 'addition_sigil_activation',
            },
        ],
        item_in: [
            {
                item: 'mierno:addition_sigil',
            },
        ],
        falling_block: 'anvil',
        landing_block: 'crafting_table',
    });
});
