ServerEvents.recipes((event) => {
    event.custom({
        type: "mekanism:metallurgic_infusing",
        chemicalInput: { amount: 80, infuse_type: "mierno:etching_acid" },
        itemInput: { ingredient: { item: "pneumaticcraft:printed_circuit_board" } },
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
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "mierno:solid_etching_acid" } },
        output: { amount: 10, infuse_type: "mierno:etching_acid" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "mierno:enriched_etching_acid" } },
        output: { amount: 100, infuse_type: "mierno:etching_acid" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "forbidden_arcanus:deorum_nugget" } },
        output: { amount: 1, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "forbidden_arcanus:deorum_ingot" } },
        output: { amount: 10, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:infusion_conversion",
        input: { ingredient: { item: "forbidden_arcanus:deorum_block" } },
        output: { amount: 100, infuse_type: "mierno:deorum" },
    });

    event.custom({
        type: "mekanism:enriching",
        input: { ingredient: { item: "mierno:solid_etching_acid" } },
        output: { item: "mierno:enriched_etching_acid" },
    });
});
