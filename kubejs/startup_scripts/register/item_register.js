StartupEvents.registry("item", (event) => {
    event.create("mierno:wooden_shears", "shears").maxDamage(50);
    event.create("mierno:fiber").color(0x4caf50).texture("naturesaura:item/gold_fiber");
    event.createCustom("mierno:oak_mortar", () => new $MortarItem(new $Item$Properties().stacksTo(1), 400));
    event.create("mierno:token_base");
    event.create("mierno:gift_box");
    event.create("mierno:wrapped_gift").glow(true);
    event.create("mierno:whos_gift").glow(true);
    event.create("mierno:portable_crafting_table").unstackable().tag("curios:portable_crafting_table");
    event.create("mierno:tyumen_ingot").glow(true).rarity("epic");
    event.create("mierno:empty_nether_star");
    event.create("mierno:memory_source_gem").rarity("epic");
    event.create("mierno:sun_crystal_full").unstackable().glow(true).rarity("uncommon");
    event.createCustom("mierno:dream_lantern", () => new $ItemAuraCache("dream_lantern", 2560000));
    event.create("mierno:addition_sigil").unstackable();
    event.create("mierno:subtraction_sigil").unstackable();
    event.create("mierno:multiplication_sigil").unstackable();
    event.create("mierno:division_sigil").unstackable();
    event.create("mierno:pseudo_inversion_sigil").unstackable().rarity("epic").glow(true);
    event.create("mierno:colorless_gem").rarity("epic");
    event.create("mierno:unstable_singularity").rarity("epic");

    let darkTemple = $ResourceKey.create(REGISTRIES_STRUCTURE, "mierno:dark_temple");
    event.createCustom("mierno:dark_eyes", () => new $ItemStructureFinder("dark_eyes", darkTemple, 0x808080, 512));
    event.createCustom(
        "mierno:ritual_dummy/blood_pact_of_asmodeus",
        () => new $DummyTooltipItem(new $Item$Properties().stacksTo(1))
    );
});
