JEIEvents.hideItems((event) => {
    // Ingredient.of("@projecte").stacks.forEach((stack) => {
    //     event.hide(stack);
    // });

    event.hide("thermal:crude_oil_bucket");
    event.hide("ad_astra:coal_generator");
    event.hide("mierno:pseudo_inversion_sigil");
    event.hide("ad_astra:etrionic_blast_furnace");
    event.hide("projecte:collector_mk1");
    event.hide("projecte:collector_mk2");
    event.hide("projecte:collector_mk3");
    event.hide("projecte:philosophers_stone");
    event.hide("projecte:transmutation_table");
    event.hide("projecte:transmutation_tablet");
});

JEIEvents.hideFluids((event) => {
    event.hide("thermal:crude_oil");
    event.hide("ad_astra:oil");
});

JEIEvents.removeCategories((event) => {
    event.remove(["projecte:collector", "projecte:world_transmutation"]);
});
