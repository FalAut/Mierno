MBDMachineEvents.onBeforeRecipeWorking('mierno:fired_crucible', (event) => {
    const mbdEvent = event.getEvent();
    const { machine } = mbdEvent;
    const heatSource = machine.level.getBlock(machine.pos.below());

    if (heatSource.hasTag('mierno:crucible_heat_source')) {
        if (heatSource.id == 'minecraft:campfire' && heatSource.properties.lit == 'false') {
            mbdEvent.setCanceled(true);
        }
    } else {
        mbdEvent.setCanceled(true);
    }
});

MBDMachineEvents.onBeforeRecipeModify('mierno:fired_crucible', (event) => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;
    const heatSource = machine.level.getBlock(machine.pos.below());
    const copyRecipe = recipe.copy();

    switch (heatSource.id) {
        case 'minecraft:campfire':
            copyRecipe.duration = 80;
            break;
        case 'minecraft:lava':
            copyRecipe.duration = 60;
            break;
        case 'botania:blaze_block':
            copyRecipe.duration = 40;
            break;
        case 'minecraft:magma_block':
            copyRecipe.duration = 20;
            break;
        case 'powah:blazing_crystal_block':
            copyRecipe.duration = 1;
            break;
        default:
            break;
    }

    mbdEvent.setRecipe(copyRecipe);
});

MBDMachineEvents.onUI('mierno:engraving_table', (event) => {
    const mbdEvent = event.getEvent();
    const { root, player } = mbdEvent;
    /**@type {ButtonWidget} */
    const aLinearScar = root.getFirstWidgetById('my_bicycle_journey');

    aLinearScar.setOnPressCallback((clickData) => {
        if (clickData.isRemote) return;

        if (player) {
            player.sendData('xei_lookup_engraving');
        } else {
            Utils.server.getPlayerList().getPlayer(Client.player.uuid).sendData('xei_lookup_engraving');
        }
    });
});

MBDMachineEvents.onUI('mierno:colossal_furnace_core', (event) => {
    const mbdEvent = event.getEvent();
    const { root, player } = mbdEvent;
    /**@type {ButtonWidget} */
    const aLinearScar = root.getFirstWidgetById('my_bicycle_journey');

    aLinearScar.setOnPressCallback((clickData) => {
        if (clickData.isRemote) return;

        if (player) {
            player.sendData('xei_lookup_smelting');
        } else {
            Utils.server.getPlayerList().getPlayer(Client.player.uuid).sendData('xei_lookup_smelting');
        }
    });
});

MBDMachineEvents.onBeforeRecipeModify('mierno:colossal_furnace_core', (event) => {
    const mbdEvent = event.getEvent();
    const { machine, recipe } = mbdEvent;

    /**@type {Internal.ItemSlotCapabilityTrait} */
    let upgradeTrait = machine.getTraitByName('upgrade_slot');
    let storage = upgradeTrait.storage;
    let upgradeCount = storage.getStackInSlot(0).count;

    let parallelRecipe = machine.applyParallel(recipe, upgradeCount);
    let copyRecipe = parallelRecipe.copy();
    let reductionFactor = Math.max(1 - 0.01 * upgradeCount, 0.1);
    copyRecipe.duration = Math.ceil(recipe.duration * reductionFactor);

    mbdEvent.setRecipe(copyRecipe);
});

MBDMachineEvents.onBeforeRecipeWorking(
    ['mierno:aura_grinder', 'mierno:engraving_table', 'mierno:planting_station', 'mierno:modular_nature_altar_core'],
    (event) => {
        const mbdEvent = event.getEvent();
        const { machine } = mbdEvent;
        const level = machine.level;

        const aura = AuraChunk.getAuraInArea(level, machine.pos, 20);

        if (aura <= 0) mbdEvent.setCanceled(true);
    }
);

// MBDMachineEvents.onBeforeRecipeModify('mierno:modular_imbuement_chamber_core', (event) => {
//     const mbdEvent = event.getEvent();
//     const { machine, recipe } = mbdEvent;

//     if ($SourceUtil.takeSourceWithParticles(machine.pos, machine.level, 6, 100) != null) {
//         let copyRecipe = recipe.copy();

//         copyRecipe.duration = 1;

//         mbdEvent.setRecipe(copyRecipe);
//     }
// });

// MBDMachineEvents.onTick(
//     [
//         'mierno:modular_mana_pool_core',
//         'mierno:modular_runic_altar_core',
//         'mierno:terrestrial_agglomeration_crystal',
//         'mierno:modular_alfheim_portal_core',
//         'mierno:mana_input',
//     ],
//     (event) => {
//         const { machine } = event.getEvent();

//         let manaCap = machine.getCapability(BotaniaCapabilities.MANA_RECEIVER).orElse(null);
//         let itemCap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
//         let remainingMana = 1000000 - manaCap.getCurrentMana();
//         let manaItem = itemCap.getStackInSlot(0);

//         if (manaCap.isFull()) return;

//         switch (manaItem) {
//             case 'botania:black_lotus':
//                 if (remainingMana >= 8000) {
//                     manaCap.receiveMana(8000);
//                     manaItem.count--;
//                 }
//                 break;
//             case 'botania:blacker_lotus':
//                 if (remainingMana >= 100000) {
//                     manaCap.receiveMana(100000);
//                     manaItem.count--;
//                 }
//                 break;
//             case 'botania:mana_tablet':
//                 if (manaItem.nbt.getBoolean('creative')) {
//                     manaCap.receiveMana(remainingMana);
//                 } else if (remainingMana >= 1000) {
//                     manaItem.getCapability(BotaniaCapabilities.MANA_ITEM).orElse(null).addMana(-1000);
//                     manaCap.receiveMana(1000);
//                 }
//                 break;
//             case 'botania:creative_pool':
//                 manaCap.receiveMana(remainingMana);
//                 break;
//             default:
//                 break;
//         }
//     }
// );
