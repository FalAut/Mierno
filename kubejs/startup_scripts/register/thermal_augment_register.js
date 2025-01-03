StartupEvents.registry("item", (event) => {
    let augments = [
        { id: "mierno:upgrade_augment_signalum", type: "Upgrade", BaseMod: 5 },
        { id: "mierno:upgrade_augment_lumium", type: "Upgrade", BaseMod: 6 },
        { id: "mierno:upgrade_augment_compressed_iron", type: "Upgrade", BaseMod: 7 },
        { id: "mierno:upgrade_augment_ether", type: "Upgrade", BaseMod: 8 },
    ];

    augments.forEach((augment) => {
        event.createCustom(
            augment.id,
            () => new $AugmentItem(new $Item$Properties().stacksTo(1), { Type: augment.type, BaseMod: augment.BaseMod })
        );
    });
});
