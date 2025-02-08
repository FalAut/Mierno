ServerEvents.recipes((event) => {
    event.custom({
        type: 'lychee:block_interacting',
        post: [
            {
                type: 'place',
                block: 'minecraft:crying_obsidian',
            },
            {
                type: 'execute',
                command: 'particle block crying_obsidian ~ ~ ~ 0 0 0 1 50',
                hide: true,
            },
        ],
        item_in: {
            item: 'minecraft:ghast_tear',
        },
        block_in: 'minecraft:obsidian',
    });
});
