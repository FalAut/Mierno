JEIEvents.hideItems((event) => {
    Ingredient.all.stacks.forEach((stack) => {
        if (stack.mod == "projecte") {
            event.hide(stack);
        }
    });

    event.hide("thermal:crude_oil_bucket");
});

JEIEvents.hideFluids((event) => {
    event.hide("thermal:crude_oil");
    event.hide("ad_astra:oil");
});
