JEIEvents.hideItems((event) => {
    event.hide('thermal:crude_oil_bucket');
    event.hide('ad_astra:coal_generator');
    event.hide('mierno:pseudo_inversion_sigil');
    event.hide('ad_astra:etrionic_blast_furnace');
    event.hide('projecte:collector_mk1');
    event.hide('projecte:collector_mk2');
    event.hide('projecte:collector_mk3');
    event.hide('projecte:philosophers_stone');
    event.hide('projecte:transmutation_table');
    event.hide('projecte:transmutation_tablet');
    event.hide('thermal:machine_crafter');
    event.hide('ad_astra:oil_bucket');
    event.hide('botanicalextramachinery:catalyst_stone_infinity');
    event.hide('botanicalextramachinery:catalyst_wood_infinity');
});

JEIEvents.hideFluids((event) => {
    event.hide('thermal:crude_oil');
    event.hide('ad_astra:oil');
});

JEIEvents.removeCategories((event) => {
    event.remove(['projecte:collector', 'projecte:world_transmutation']);
});
