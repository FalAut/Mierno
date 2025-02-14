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
