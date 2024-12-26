ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_sloth")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_autumn")
        .inputItems("botania:rune_air");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_gluttony")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_winter")
        .inputItems("botania:rune_fire");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_lust")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_summer")
        .inputItems("botania:rune_air");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_envy")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_winter")
        .inputItems("botania:rune_water");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_pride")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_summer")
        .inputItems("botania:rune_fire");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_wrath")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_winter")
        .inputItems("botania:rune_earth");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_greed")
        .inputMana(12000)
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("#botania:mana_diamond_gems")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_spring")
        .inputItems("botania:rune_water");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_spring")
        .inputMana(8000)
        .inputItems("#minecraft:saplings")
        .inputItems("#minecraft:saplings")
        .inputItems("#minecraft:saplings")
        .inputItems("minecraft:wheat")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_water")
        .inputItems("botania:rune_fire");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_summer")
        .inputMana(8000)
        .inputItems("#minecraft:sand")
        .inputItems("#minecraft:sand")
        .inputItems("minecraft:slime_ball")
        .inputItems("minecraft:melon_slice")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_earth")
        .inputItems("botania:rune_air");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_autumn")
        .inputMana(8000)
        .inputItems("#minecraft:leaves")
        .inputItems("#minecraft:leaves")
        .inputItems("#minecraft:leaves")
        .inputItems("minecraft:spider_eye")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_fire")
        .inputItems("botania:rune_air");

    mierno
        .modular_runic_altar()
        .outputItems("botania:rune_winter")
        .inputMana(8000)
        .inputItems("#minecraft:wool")
        .inputItems("minecraft:snow_block")
        .inputItems("minecraft:snow_block")
        .inputItems("minecraft:cake")
        .inputItems("botania:livingrock")
        .chance(0)
        .inputItems("botania:rune_water")
        .inputItems("botania:rune_earth");
});
