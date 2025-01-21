ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;
    const DURATION = 1;

    mierno
        .modular_elven_trade()
        .inputItems("2x botania:mana_diamond_block")
        .inputMana(1000)
        .outputItems("botania:dragonstone_block")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("botania:livingwood")
        .inputMana(1000)
        .outputItems("botania:dreamwood")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("botania:mana_quartz")
        .inputMana(1000)
        .outputItems("ae2:quartz_block")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("botania:livingwood_log")
        .inputMana(1000)
        .outputItems("botania:dreamwood_log")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("2x botania:manasteel_ingot")
        .inputMana(1000)
        .outputItems("botania:elementium_ingot")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("2x botania:manasteel_block")
        .inputMana(1000)
        .outputItems("botania:elementium_block")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("botania:mana_glass")
        .inputMana(1000)
        .outputItems("botania:elf_glass")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("minecraft:quartz")
        .inputMana(1000)
        .outputItems("botania:quartz_elven")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("minecraft:quartz")
        .inputMana(1000)
        .outputItems("botania:quartz_elven")
        .duration(DURATION);
    mierno
        .modular_elven_trade()
        .inputItems(Item.of("botania:lexicon").strongNBT())
        .inputMana(1000)
        .outputItems(Item.of("botania:lexicon", '{"botania:elven_unlock":1b}').strongNBT())
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("2x botania:mana_powder")
        .inputMana(1000)
        .outputItems("botania:pixie_dust")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("2x botania:quartz_mana")
        .inputMana(1000)
        .outputItems("ae2:certus_quartz_crystal")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("2x botania:mana_diamond")
        .inputMana(1000)
        .outputItems("botania:dragonstone")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("botania:mana_pearl")
        .inputMana(1000)
        .outputItems("ae2:sky_stone_block")
        .duration(DURATION);

    mierno
        .modular_elven_trade()
        .inputItems("botania:livingrock")
        .inputMana(1000)
        .outputItems("botania:shimmerrock")
        .duration(DURATION);
});
