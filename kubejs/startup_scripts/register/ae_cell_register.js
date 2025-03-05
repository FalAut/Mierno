StartupEvents.registry('item', (event) => {
    event.create('mierno:advance_item_cell_housing');

    for (let index = 0; index <= 4; index++) {
        let mb = Math.pow(4, index);
        let byte = mb * 1024;

        event.create(`mierno:cell_component_${mb}m`);

        event.createCustom(
            `mierno:item_storage_cell_${mb}m`,
            () =>
                new $BasicStorageCell(
                    new $Item$Properties().stacksTo(1),
                    Item.of(`mierno:cell_component_${mb}m`),
                    Item.of('mierno:advance_item_cell_housing'),
                    (index + 6) * 0.5,
                    byte,
                    (byte * 1024) / 128,
                    63,
                    $AEKeyType.items()
                )
        );
    }
});

Item.of('apple').withNBT({ TestNBT: true }).withCount(100).strongNBT();

Item.of('apple', 100, { TestNBT: true }).strongNBT();

StartupEvents.postInit((event) => {
    let cards = ['ae2:void_card', 'ae2:equal_distribution_card', 'ae2:fuzzy_card', 'ae2:inverter_card'];

    for (let index = 0; index <= 4; index++) {
        let mb = Math.pow(4, index);

        cards.forEach((card) => {
            $Upgrades.add(Item.of(card), Item.of(`mierno:item_storage_cell_${mb}m`), 1);
        });
    }
});
