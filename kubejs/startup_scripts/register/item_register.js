StartupEvents.registry('item', (event) => {
    event.create('mierno:wooden_shears', 'shears').maxDamage(50);
    event.create('mierno:fiber').color(0x4caf50).texture('naturesaura:item/gold_fiber');
    event.createCustom('mierno:oak_mortar', () => new $MortarItem(new $Item$Properties().stacksTo(1), 400));
    event.create('mierno:token_base');
    event.create('mierno:gift_box');
    event.create('mierno:wrapped_gift').glow(true);
    event.create('mierno:whos_gift').glow(true);
    event.create('mierno:portable_crafting_table').unstackable().tag('curios:portable_crafting_table');
    event.create('mierno:tyumen_ingot').glow(true).rarity('epic');
    event.create('mierno:empty_nether_star');
    event.create('mierno:memory_source_gem').rarity('epic');
    event.create('mierno:sun_crystal_full').unstackable().glow(true).rarity('uncommon');
    event.create('mierno:moon_stone_full').unstackable().glow(true).rarity('epic');
    event.createCustom('mierno:dream_lantern', () => new $ItemAuraCache('dream_lantern', 2560000));
    event.create('mierno:dark_eyes');
    event.create('mierno:addition_sigil').unstackable();
    event.create('mierno:subtraction_sigil').unstackable();
    event.create('mierno:multiplication_sigil').unstackable();
    event.create('mierno:division_sigil').unstackable();
    event.create('mierno:pseudo_inversion_sigil').unstackable().rarity('epic');
    event.create('mierno:colorless_gem').rarity('epic');
    event.create('mierno:unstable_singularity').rarity('epic');
    event.create('mierno:source_emerald');
    event.create('mierno:soul_gem').texture('occultism:item/soul_gem').glow(true);
    event.create('mierno:falling_star_marker').unstackable().glow(true).rarity('uncommon');
    event.create('mierno:demon_infused_ingot').rarity('uncommon');
    event.create('mierno:solid_etching_acid');
    event.create('mierno:enriched_etching_acid');
    event.create('mierno:enriched_etrium');
    event.create('mierno:enriched_deorum');
    event.create('mierno:raw_etrium');
    event.create('mierno:milkyway_plate');
    event.create('mierno:fake_sigil').texture('mierno:item/pseudo_inversion_sigil').unstackable();
    event.create('mierno:0').glow(true);
    event.create('mierno:1').glow(true);
    event.create('mierno:2').glow(true);
    event.create('mierno:3').glow(true);
    event.create('mierno:4').glow(true);
    event.create('mierno:5').glow(true);
    event.create('mierno:6').glow(true);
    event.create('mierno:7').glow(true);
    event.create('mierno:8').glow(true);
    event.create('mierno:9').glow(true);
    event.createCustom(
        'mierno:ritual_dummy/blood_pact_of_asmodeus',
        () => new $DummyTooltipItem(new $Item$Properties().stacksTo(1))
    );
});
