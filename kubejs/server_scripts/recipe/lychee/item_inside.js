ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:item_inside',
        post: [
            {
                type: 'drop_item',
                item: 'naturesaura:token_fear',
            },
        ],
        item_in: [
            {
                item: 'naturesaura:token_joy',
            },
        ],
        block_in: {
            blocks: ['pneumaticcraft:etching_acid'],
            state: {
                level: 0,
            },
        },
    });
});
