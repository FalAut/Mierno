// requires: projecte

ServerEvents.recipes((event) => {
    const { kubejs } = event.recipes;

    event.remove({ input: 'projecte:philosophers_stone' });
    event.replaceInput({ id: 'projecte:condenser_mk1' }, 'diamond', 'projecte:transmutation_tablet');
    event.replaceInput({ id: 'projecte:relay_mk1' }, 'diamond_block', 'projecte:aeternalis_fuel_block');

    kubejs.shapeless('8x projecte:red_matter', 'mierno:tyumen_ingot');
    kubejs.shapeless('8x projecte:dark_matter', 'projecte:red_matter');
    kubejs.shapeless('8x projecte:aeternalis_fuel', 'projecte:dark_matter');
    kubejs.shapeless('8x projecte:mobius_fuel', 'projecte:aeternalis_fuel');
    kubejs.shapeless('8x projecte:alchemical_coal', 'projecte:mobius_fuel');
    kubejs.shapeless('projecte:interdiction_torch', ['projecte:aeternalis_fuel', 'stick']);
});
