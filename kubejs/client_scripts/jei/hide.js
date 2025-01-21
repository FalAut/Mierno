JEIEvents.hideItems((event) => {
    Ingredient.all.stacks.forEach((stack) => {
        if (stack.mod == "projecte") {
            event.hide(stack);
        }
    });

    event.hide("thermal:crude_oil_bucket");
    event.hide("ad_astra:coal_generator");
    event.hide("mierno:pseudo_inversion_sigil");
    event.hide("ad_astra:etrionic_blast_furnace");
});

JEIEvents.hideFluids((event) => {
    event.hide("thermal:crude_oil");
    event.hide("ad_astra:oil");
});
