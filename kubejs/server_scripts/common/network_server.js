NetworkEvents.dataReceived('portable_crafting', (event) => {
    const { data, player } = event;

    if (data.getBoolean('portable_crafting')) {
        let test1 = player.inventory.allItems.some((item) => item == 'mierno:portable_crafting_table');
        let test2 = hasCurios(player, 'mierno:portable_crafting_table');

        if (test1 || test2) {
            openCraftingMenu(player);
        }
    }
});

NetworkEvents.dataReceived('converted_time', (event) => {
    const { server, data } = event;

    let playerName = Text.gold(data.playerName).bold();
    let convertedTime = Text.aqua(data.converted_time).bold();
    let text = Text.translate('message.mierno.game_pass', playerName, convertedTime).green().bold();

    server.tell(text);
});
