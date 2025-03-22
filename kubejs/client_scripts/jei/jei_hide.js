JEIEvents.hideItems((event) => {
    event.hide('thermal:crude_oil_bucket');
    event.hide('mierno:pseudo_inversion_sigil');
    event.hide('projecte:collector_mk1');
    event.hide('projecte:collector_mk2');
    event.hide('projecte:collector_mk3');
    event.hide('projecte:philosophers_stone');
    event.hide('projecte:transmutation_table');
    event.hide('projecte:transmutation_tablet');
    event.hide('thermal:machine_crafter');
});

JEIEvents.hideFluids((event) => {
    event.hide('thermal:crude_oil');
});

JEIEvents.removeCategories((event) => {
    event.remove(['projecte:collector', 'projecte:world_transmutation']);
});
