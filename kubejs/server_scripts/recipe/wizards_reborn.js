ServerEvents.recipes((event) => {
    const { wizards_reborn } = event.recipes;

    wizards_reborn.mortar("mierno:fiber", "#leaves");
    wizards_reborn.mortar("naturesaura:gold_powder", "naturesaura:gold_leaf");
});
