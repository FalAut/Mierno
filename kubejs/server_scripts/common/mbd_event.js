MBDMachineEvents.onBeforeRecipeWorking("mierno:fired_crucible", (event) => {
    const info = event.event;
    const { machine } = info;
    const heatSource = machine.level.getBlock(machine.pos.below());

    if (heatSource.hasTag("mierno:crucible_heat_source")) {
        if (heatSource.id == "minecraft:campfire" && heatSource.properties.lit == "false") {
            info.setCanceled(true);
        }
    } else {
        info.setCanceled(true);
    }
});

MBDMachineEvents.onBeforeRecipeModify("mierno:fired_crucible", (event) => {
    const info = event.event;
    const { machine, recipe } = info;
    const heatSource = machine.level.getBlock(machine.pos.below());
    const copyRecipe = recipe.copy();

    switch (heatSource.id) {
        case "minecraft:campfire":
            copyRecipe.duration = 80;
            break;
        case "minecraft:lava":
            copyRecipe.duration = 60;
            break;
        case "botania:blaze_block":
            copyRecipe.duration = 40;
            break;
        case "minecraft:magma_block":
            copyRecipe.duration = 20;
            break;
        case "powah:blazing_crystal_block":
            copyRecipe.duration = 1;
            break;
        default:
            break;
    }

    info.setRecipe(copyRecipe);
});

MBDMachineEvents.onBeforeRecipeModify("mierno:colossal_furnace_core", (event) => {
    const info = event.event;
    const { machine, recipe } = info;

    let cap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
    let furnaceCount = cap.getStackInSlot(27).count;

    let parallelRecipe = machine.applyParallel(recipe, furnaceCount);
    let copyRecipe = parallelRecipe.copy();
    let reductionFactor = Math.max(1 - 0.01 * furnaceCount, 0.1);
    copyRecipe.duration = Math.ceil(recipe.duration * reductionFactor);

    info.setRecipe(copyRecipe);
});

MBDMachineEvents.onTick("mierno:memory_source_drawing_crystal_core", (event) => {
    const { machine } = event.event;
    const { level, pos } = machine;

    if (!$IMultiController.ofController(level, pos).orElse(null).isFormed()) return;
    machine.triggerGeckolibAnim("formed");

    const { x, y, z } = pos;
    let aabb = AABB.of(x - 2, y + 6 - 2, z - 2, x + 2, y + 6 + 2, z + 2);
    let entities = level.getEntitiesWithin(aabb);

    for (let entity of entities) {
        if (entity.type == "minecraft:wither" || entity.type == "botania:pink_wither") {
            level.getPlayers().forEach((player) => entity.stopSeenByPlayer(player));

            if (machine.machineStateName == "working") {
                entity.setNoAi(true);
                if (entity.getHealth() >= 150) {
                    entity.attack(entity.damageSources().generic(), 5);
                    entity.setInvulnerableTicks(0);
                } else {
                    entity.setInvulnerableTicks(100);
                    entity.heal(1);
                }
            }
        }
    }
});

MBDMachineEvents.onBeforeRecipeModify("mierno:modular_imbuement_chamber_core", (event) => {
    const info = event.event;
    const { machine, recipe } = info;

    if ($SourceUtil.takeSourceWithParticles(machine.pos, machine.level, 6, 100) != null) {
        let copyRecipe = recipe.copy();

        copyRecipe.duration = 1;

        info.setRecipe(copyRecipe);
    }
});

MBDMachineEvents.onTick(["mierno:brain_in_a_jar", "mierno:computation_matrix"], (event) => {
    const { machine } = event.event;
    const { level, pos } = machine;
    const controller = $IMultiController.ofController(level, pos).orElse(null);

    if (controller.isFormed()) {
        machine.triggerGeckolibAnim("formed");
    } else {
        machine.triggerGeckolibAnim("idel");
    }

    //     /**@type {Internal.GeckolibRenderer} */
    //     const render = machine.machineState.getRenderer();
    //     const animation = render.getAnimatableFromMachine(machine).getAnimatableInstanceCache().getTriggeredAnimation();
    // new $AnimationController()
    //     console.log(animation);
});

MBDMachineEvents.onTick("mierno:modular_mana_pool_core", (event) => {
    const { machine } = event.event;
    const { level, pos } = machine;

    if (!$IMultiController.ofController(level, pos).orElse(null).isFormed()) return;

    let manaCap = machine.getCapability(BotaniaCapabilities.MANA_RECEIVER).orElse(null);
    let itemCap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
    let manaItem = itemCap.getStackInSlot(0);

    let remainingMana = 1000000 - manaCap.getCurrentMana();

    if (!manaCap.isFull()) {
        if (manaItem == "botania:black_lotus" && remainingMana >= 8000) {
            manaCap.receiveMana(8000);
            manaItem.count--;
        } else if (manaItem == "botania:blacker_lotus" && remainingMana >= 100000) {
            manaCap.receiveMana(100000);
            manaItem.count--;
        }
    }

    // const { x, y, z } = pos;
    // let aabb = AABB.of(x - 2, y, z - 2, x + 2, y + 3, z + 2);
    // let entities = level.getEntitiesWithin(aabb);

    // for (let entity of entities) {
    //     if (entity.type != "minecraft:item") return;

    //     if (!manaCap.isFull()) {
    //         if (entity.item == "botania:black_lotus") {
    //             manaCap.receiveMana(entity.item.count * 8000);
    //             entity.discard();
    //         } else if (entity.item == "botania:blacker_lotus") {
    //             manaCap.receiveMana(entity.item.count * 100000);
    //             entity.discard();
    //         }
    //     }
    // }
});

// let cobbleGens = [
//     "mierno:cobble_gen_tier1",
//     "mierno:cobble_gen_tier2",
//     "mierno:cobble_gen_tier3",
//     "mierno:cobble_gen_tier4",
//     "mierno:cobble_gen_tier5",
//     "mierno:cobble_gen_tier6",
// ];

// MBDMachineEvents.onTick(cobbleGens, (event) => {
//     const { machine } = event.event;
//     const { pos, customData, level } = machine;
//     const ticksExisted = (customData.getInt("ticksExisted") || 0) + 1;
//     customData.putInt("ticksExisted", ticksExisted);
//     if (ticksExisted % 20 != 0) return;

//     const upBlock = level.getBlock(pos.above());
//     if (!upBlock.entity) return;

//     let machinecap = machine.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);
//     let upCap = upBlock.entity.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null);

//     if (!upCap) return;

//     let isFull = true;
//     for (let slot = 0; slot < upCap.slots; slot++) {
//         let stackInSlot = upCap.getStackInSlot(slot);
//         let maxStackSize = stackInSlot.getMaxStackSize();
//         let currentStackSize = stackInSlot.getCount();

//         if (stackInSlot.isEmpty() || currentStackSize < maxStackSize) {
//             isFull = false;
//             break;
//         }
//     }

//     if (isFull) return;

//     for (let slot = 0; slot < machinecap.slots; slot++) {
//         let extractItem = machinecap.extractItem(slot, 1, false);
//         if (!extractItem.isEmpty()) {
//             upCap.insertItem(extractItem, false);
//         }
//     }
// });
