StartupEvents.registry("item", (event) => {
    let upgradeAugments = [
        { id: "mierno:upgrade_augment_signalum", BaseMod: 5 },
        { id: "mierno:upgrade_augment_lumium", BaseMod: 6 },
        { id: "mierno:upgrade_augment_compressed_iron", BaseMod: 7 },
        { id: "mierno:upgrade_augment_ether", BaseMod: 8 },
        { id: "mierno:upgrade_augment_creative", BaseMod: 999 },
    ];

    upgradeAugments.forEach((augment) => {
        event.createCustom(
            augment.id,
            () => new $AugmentItem(new $Item$Properties(), { Type: "Upgrade", BaseMod: augment.BaseMod })
        );
    });

    let speedAndEfficiencyAugments = [
        { id: "mierno:machine_speed_augment_ender", MachineSpeed: 2, MachineEnergy: 1.2 },
        { id: "mierno:machine_speed_augment_signalum", MachineSpeed: 3, MachineEnergy: 1.3 },
        { id: "mierno:machine_speed_augment_lumium", MachineSpeed: 4, MachineEnergy: 1.4 },
        { id: "mierno:machine_speed_augment_compressed_iron", MachineSpeed: 5, MachineEnergy: 1.5 },
        { id: "mierno:machine_efficiency_augment_ender", MachineSpeed: -0.1, MachineEnergy: 0.7 },
        { id: "mierno:machine_efficiency_augment_signalum", MachineSpeed: -0.2, MachineEnergy: 0.5 },
        { id: "mierno:machine_efficiency_augment_lumium", MachineSpeed: -0.3, MachineEnergy: 0.3 },
        { id: "mierno:machine_efficiency_augment_compressed_iron", MachineSpeed: -0.4, MachineEnergy: 0.1 },
    ];

    speedAndEfficiencyAugments.forEach((augment) => {
        event.createCustom(
            augment.id,
            () =>
                new $AugmentItem(new $Item$Properties(), {
                    Type: "Upgrade",
                    MachineSpeed: augment.MachineSpeed,
                    MachineEnergy: augment.MachineEnergy,
                })
        );
    });
});
