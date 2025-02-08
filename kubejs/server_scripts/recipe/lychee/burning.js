ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:item_burning',
        post: [
            {
                type: 'drop_item',
                item: 'botania:scorched_seeds',
            },
        ],
        item_in: {
            item: 'botania:grass_seeds',
        },
    });

    event.custom({
        type: 'lychee:item_burning',
        post: [
            {
                type: 'drop_item',
                item: 'naturesaura:token_anger',
            },
        ],
        item_in: {
            item: 'naturesaura:token_joy',
        },
    });
});
