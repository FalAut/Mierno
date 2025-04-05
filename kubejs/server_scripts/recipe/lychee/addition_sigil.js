ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:block_crushing',
        hide_in_viewer: true,
        post: [
            {
                type: 'custom',
                id: 'addition_sigil_activation',
            },
        ],
        landing_block: 'crafting_table',
    });
});
