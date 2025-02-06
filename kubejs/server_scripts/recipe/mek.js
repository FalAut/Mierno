ServerEvents.recipes((event) => {
    event.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput: { amount: 80, infuse_type: "mierno:etching_acid" },
        itemInput: { ingredient: { item: "pneumaticcraft:module_expansion_card" } },
        output: { item: "mekanism:basic_control_circuit", count: 8 },
    });

    event.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput: { amount: 200, infuse_type: "mierno:deorum" },
        itemInput: { ingredient: { item: "bloodmagic:ingot_hellforged" } },
        output: { item: "mierno:demon_infused_ingot", count: 8 },
    });

    event.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput: { amount: 20, infuse_type: "mekanism:redstone" },
        itemInput: { ingredient: { item: "mierno:demon_infused_ingot" } },
        output: { item: "mekanism:alloy_infused" },
    });

    event.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput: { amount: 20, infuse_type: "mierno:etrium" },
        itemInput: { ingredient: { item: "mekanism:alloy_infused" } },
        output: { item: "mekanism:alloy_reinforced" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "ad_astra:etrium_nugget" } },
        output: { amount: 1, infuse_type: "mierno:etrium" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "ad_astra:etrium_ingot" } },
        output: { amount: 9, infuse_type: "mierno:etrium" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "ad_astra:etrium_block" } },
        output: { amount: 81, infuse_type: "mierno:etrium" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "mierno:solid_etching_acid" } },
        output: { amount: 10, infuse_type: "mierno:etching_acid" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "mierno:enriched_etrium" } },
        output: { amount: 80, infuse_type: "mierno:etrium" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "mierno:enriched_deorum" } },
        output: { amount: 80, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "mierno:enriched_etching_acid" } },
        output: { amount: 80, infuse_type: "mierno:etching_acid" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "forbidden_arcanus:deorum_nugget" } },
        output: { amount: 1, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "forbidden_arcanus:deorum_ingot" } },
        output: { amount: 9, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "forbidden_arcanus:deorum_block" } },
        output: { amount: 81, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:enriching",
        input: { ingredient: { item: "mierno:solid_etching_acid" } },
        output: { item: "mierno:enriched_etching_acid" },
    });

    event.custom({
        type: "mekanism:enriching",
        input: { ingredient: { item: "ad_astra:etrium_ingot" } },
        output: { item: "mierno:enriched_etrium" },
    });

    event.custom({
        type: "mekanism:enriching",
        input: { ingredient: { item: "forbidden_arcanus:deorum_ingot" } },
        output: { item: "mierno:enriched_deorum" },
    });

    event.custom({
        type: "mekanism:crystallizing",
        chemicalType: "gas",
        input: { amount: 1, gas: "mekanism:antimatter" },
        output: { item: "mekanism:pellet_antimatter" },
    });

    event.custom({
        type: "mekanism:oxidizing",
        input: { ingredient: { tag: "forge:pellets/antimatter" } },
        output: { amount: 1, gas: "mekanism:antimatter" },
    });

    event.custom({
        type: "mekanism:reaction",
        duration: 100,
        fluidInput: { amount: 1000, tag: "minecraft:water" },
        gasInput: { amount: 1, gas: "mekanism:polonium" },
        gasOutput: { amount: 1, gas: "mekanism:spent_nuclear_waste" },
        itemInput: { ingredient: { tag: "forge:dusts/fluorite" } },
        itemOutput: { item: "mekanism:pellet_polonium" },
    });

    event.custom({
        type: "mekanism:reaction",
        duration: 100,
        fluidInput: { amount: 1000, tag: "minecraft:water" },
        gasInput: { amount: 1, gas: "mekanism:plutonium" },
        gasOutput: { amount: 1, gas: "mekanism:spent_nuclear_waste" },
        itemInput: { ingredient: { tag: "forge:dusts/fluorite" } },
        itemOutput: { item: "mekanism:pellet_plutonium" },
    });

    event.custom({
        type: "mekanism:activating",
        input: { amount: 1, gas: "mekanism:nuclear_waste" },
        output: { amount: 1, gas: "mekanism:polonium" },
    });

    event.custom({
        type: "mekanism:centrifuging",
        input: { amount: 1, gas: "mekanism:nuclear_waste" },
        output: { amount: 1, gas: "mekanism:plutonium" },
    });
});
