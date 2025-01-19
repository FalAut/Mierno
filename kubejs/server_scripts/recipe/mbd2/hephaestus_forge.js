ServerEvents.recipes((event) => {
    const { mierno } = event.recipes;
    const DURATION = 1;

    mierno
        .hephaestus_forge()
        .inputItems(["minecraft:lodestone", "4x forbidden_arcanus:stellarite_piece", "4x bloodmagic:etherealslate"])
        .outputItems("8x forbidden_arcanus:ferrognetic_mixture")
        .duration(DURATION);
});
