StartupEvents.registry("item", (event) => {
    event.createCustom(
        "mierno:test",
        () => new $AugmentItem(new $Item$Properties().stacksTo(1), { Type: "Machine", MachineSpeed: 5.0 })
    );
});
