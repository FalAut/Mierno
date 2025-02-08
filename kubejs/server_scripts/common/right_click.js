BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, 'mierno:oak_crucible', 'leaves', 'water');
});

BlockEvents.rightClicked((event) => {
    handleCrucibleInteraction(event, 'mierno:fired_crucible', 'mierno:fired_crucible_fuel', 'lava');
});

BlockEvents.rightClicked('composter', (event) => {
    const { block, hand, player, item } = event;
    if (hand != 'MAIN_HAND') return;

    const compostLevel = block.blockState.getValue(BlockProperties.LEVEL_COMPOSTER);
    if (compostLevel != 8) return;

    if (!player.isCrouching()) {
        block.popItemFromFace('7x bone_meal', 'up');
    } else if (item.isEmpty()) {
        block.popItemFromFace('7x bone_meal', 'up');
    }
});

BlockEvents.rightClicked('white_concrete', (event) => {
    const { hand, block, player, level } = event;
    if (hand != 'MAIN_HAND') return;

    let dreamTree = $PatchouliAPI.getMultiblock('mierno:first_tree');

    if (dreamTree.validate(level, block.pos, 'none')) {
        dreamTree.simulate(level, block.pos, 'none', false).second.forEach((result) => {
            if (result.stateMatcher == $PatchouliAPI.anyMatcher()) return;

            level.destroyBlock(result.worldPosition, false);
        });
        block.popItemFromFace('oak_sapling', 'up');
        player.swing();
    }
});

BlockEvents.rightClicked((event) => {
    const { hand, item, block, player } = event;
    if (hand != 'MAIN_HAND' || item != 'mierno:source_flower' || block.hasTag('minecraft:dirt')) return;

    player.inventoryMenu.broadcastFullState();
    event.cancel();
});

BlockEvents.rightClicked((event) => {
    const { hand, level, block, item, player, server } = event;

    if (
        hand != 'MAIN_HAND' ||
        !block.hasTag('minecraft:beds') ||
        item != 'naturesaura:token_terror' ||
        level.dimension != 'minecraft:the_nether'
    )
        return;

    let curiosInventory = $CuriosApi.getCuriosInventory(player).resolve().get();
    let foundThirdEye = curiosInventory.equippedCurios.allItems.some((item) => item == 'botania:third_eye');
    let structureTemplate = server.structureManager.get('mierno:demons_dream').get();
    let otherworld = server.getLevel('mierno:otherworld');
    let blockPos = block.pos;

    if (foundThirdEye) {
        player.swing();
        structureTemplate.placeInWorld(otherworld, blockPos, blockPos, new $StructurePlaceSettings(), level.random, 2);
        player.teleportTo('mierno:otherworld', block.pos.x + 2, block.pos.y + 2, block.pos.z + 2, 0, 0);
        player.potionEffects.add('darkness', 100);
        player.potionEffects.add('nausea', 200);
    }
});

BlockEvents.rightClicked('mierno:colossal_furnace_core', (event) => {
    const { block, player, item, level } = event;
    if (item != 'mierno:colossal_furnace_proxy') return;

    const { x, y, z } = block.pos;
    const aabb = AABB.of(x - 1, y, z - 1, x + 1, y + 3, z + 1);

    const isAreaClear = level.getEntitiesWithin(aabb).isEmpty();
    const hasSpace = checkAreaWithAABBIsEmptyBlockWithoutCore(level, aabb, block.pos);

    if (item.count < 26) {
        player.tell(
            Text.translate(
                'message.mierno.colossal_furnace_core_no_enough_item',
                Text.of((26 - item.count).toFixed(0)).yellow()
            ).darkRed()
        );
        return;
    }

    if (!hasSpace) {
        player.tell(Text.translate('message.mierno.colossal_furnace_core_no_space').darkRed());
        return;
    }

    if (!isAreaClear) {
        player.tell(Text.translate('message.mierno.colossal_furnace_core_no_clear').darkRed());
        return;
    }

    const controller = $IMultiController.ofController(level, block.pos).orElse(null);

    if (controller != null) {
        controller.getPattern().autoBuild(player, new $MultiblockState(level, block.pos));
    }
});

BlockEvents.rightClicked((event) => {
    const { block, player, level } = event;
    if (!block.hasTag('minecraft:crops')) return;
    let blockState = level.getBlockState(block.pos);
    let cropBlock = blockState.block;

    if (cropBlock.isMaxAge(blockState)) {
        let loot = $Block.getDrops(blockState, level, block.pos, null, player, player.mainHandItem);
        let seedYeeted = false;
        for (let i in loot) {
            if (loot[i].id == cropBlock.getCloneItemStack(level, block.pos, blockState).id) {
                loot[i].count--;
                seedYeeted = true;
                break;
            }
        }
        loot.forEach((item) => {
            $Block.popResource(level, block.pos, item);
        });
        if (seedYeeted) {
            block.set(block.id, { age: '0' });
            level.playSound(null, block.x, block.y, block.z, 'block.crop.break', 'blocks', 1, 1);
        } else {
            level.destroyBlock(block.pos, true, null, 32);
        }
        player.swing();
        event.cancel();
    }
});

BlockEvents.rightClicked('botania:terra_plate', (event) => {
    const { hand, block, player, level } = event;
    if (hand != 'MAIN_HAND') return;

    let TAA = $PatchouliAPI.getMultiblock('mierno:terrestrial_agglomeration_altar');

    if (!TAA.validate(level, block.pos.below(), 'none')) {
        player.tell(Text.translate('message.mierno.terra_plate_error').red());
    }
});

BlockEvents.rightClicked('bloodmagic:altar', (event) => {
    const { hand, item, block } = event;
    if (hand != 'MAIN_HAND' || item != 'evilcraft:creative_blood_drop') return;

    let fluidCap = block.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);

    fluidCap.getFluidInTank(0).setAmount(fluidCap.getTankCapacity(0));
});

BlockEvents.rightClicked('bloodmagic:dungeon_eye', (event) => {
    const { hand, block, player, level, server } = event;
    if (hand != 'MAIN_HAND') return;

    let demonReactor = $PatchouliAPI.getMultiblock('mierno:demon_reactor');
    if (!demonReactor.validate(level, block.pos, 'none')) return;

    let lightningBoltEntity = block.createEntity('lightning_bolt');
    lightningBoltEntity.setVisualOnly(true);
    lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
    lightningBoltEntity.spawn();

    level.destroyBlock(block.pos, false);
    block.set('bloodmagic:dungeon_controller');

    let direction = ['east', 'south', 'west', 'north'];
    direction.forEach((dire) => block[dire].set('evilcraft:spirit_portal'));

    player.potionEffects.add('darkness');
    player.swing();

    server.scheduleInTicks(40, (callback) => {
        demonReactor.simulate(level, block.pos, 'none', false).second.forEach((result) => {
            if (result.character == 'B') {
                level.destroyBlock(result.worldPosition, false);
                level.getBlock(result.worldPosition).set('mierno:glowing_obsidian');
            }
        });
        player.tell(Text.darkRed('???????????????????????').obfuscated());

        server.scheduleInTicks(40, (callback) => {
            demonReactor.simulate(level, block.pos, 'none', false).second.forEach((result) => {
                if (result.character == 'C') {
                    level.destroyBlock(result.worldPosition, false);
                    level.getBlock(result.worldPosition).set('mierno:glowing_obsidian');
                }
            });
            player.tell(Text.darkRed('???????????????????????????????????').obfuscated());

            server.scheduleInTicks(40, (callback) => {
                demonReactor.simulate(level, block.pos, 'none', false).second.forEach((result) => {
                    if (result.character == 'D') {
                        level.destroyBlock(result.worldPosition, false);
                        level.getBlock(result.worldPosition).set('mierno:glowing_obsidian');
                    }
                });
                player.tell(Text.darkRed('???????????????????????????????').obfuscated());

                server.scheduleInTicks(40, (callback) => {
                    demonReactor.simulate(level, block.pos, 'none', false).second.forEach((result) => {
                        if (result.character == 'A') {
                            level.destroyBlock(result.worldPosition.below(2), false);
                            level.getBlock(result.worldPosition.below(2)).set('mierno:glowing_obsidian');
                        }
                    });
                    player.tell(Text.darkRed('??????????????????????????').obfuscated());

                    server.scheduleInTicks(40, (callback) => {
                        demonReactor.simulate(level, block.pos, 'none', false).second.forEach((result) => {
                            if (result.character == '0') {
                                level.destroyBlock(result.worldPosition, false);
                                level.getBlock(result.worldPosition).set('mierno:glowing_obsidian');
                                player.tell(Text.darkRed('???????????????').obfuscated());
                                player.tell(Text.red('...'));
                                player.tell(Text.translate('message.mierno.nothing_happened').red());
                                block.createExplosion().explosionMode('none').strength(100).explode();
                                level.playSound(null, block.pos, 'block.beacon.deactivate', 'master');
                            }
                        });
                    });
                });
            });
        });
    });
});

ItemEvents.rightClicked('mierno:whos_gift', (event) => {
    const { item, player } = event;

    player.give('iron_block');
    player.give('gold_block');
    player.give('copper_block');
    player.give('coal_block');
    player.give('redstone_block');
    player.give('lapis_block');
    player.give('diamond_block');
    player.give('emerald_block');

    item.count--;
    player.swing();
});

ItemEvents.rightClicked('mierno:dream_lantern', (event) => {
    const { player, level } = event;

    if (player.lookAngle.y() == 1) {
        const /**@type {Internal.ServerPlayer} */ serverPlayer = player;

        if (serverPlayer.respawnPosition) {
            const { x, y, z } = serverPlayer.getRespawnPosition();
            const respawnDimension = serverPlayer.getRespawnDimension().location();

            serverPlayer.teleportTo(respawnDimension, x, y, z, 0, 0);
        } else {
            const { x, y, z } = level.getSharedSpawnPos();

            serverPlayer.teleportTo('overworld', x, y, z, 0, 0);
        }
    }
});

ItemEvents.rightClicked('mierno:portable_crafting_table', (event) => {
    const { player } = event;

    openCraftingMenu(player);
    player.swing();
});

ItemEvents.rightClicked('mierno:dark_eyes', (event) => {
    const { player, hand } = event;

    spawnStructureFinderEye(player, hand, 'mierno:dark_temple', 512);
});

// ItemEvents.rightClicked((event) => {
//     const { item } = event;

//     // [{"#c":"ae2:i",caps:{"celestisynth:celestisynthitemstackcapabilities":{cs.aquaSkin:0}},id:"minecraft:oak_planks"}] [net.minecraft.nbt.ListTag]
//     let keys = item.nbt.keys;

//     keys.forEach((key) => {
//         key.remove('caps')
//     });
// });
