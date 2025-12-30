BlockEvents.broken((event) => {
    const { block } = event;
    if (block.id != 'mierno:datura') return;

    block.popItemFromFace('occultism:datura', 'up');
    block.popItemFromFace('occultism:datura_seeds', 'up');
});

FTBQuestsEvents.customTask('69390B6D020D01A4', (event) => {
    event.maxProgress = 1;

    event.setCheckTimer(20);

    event.setCheck((task, player) => {
        let check = player.inventory.allItems.some((item) => item.hasTag('botania:mystical_flowers'));
        if (check) {
            task.progress++;
        }
    });
});

EntityEvents.spawned('naturesaura:structure_finder', (event) => {
    event.entity.setGlowing(true);
});

EntityEvents.spawned('tiab:time_accelerator_entity_type', (event) => {
    const { entity } = event;

    if (entity.block.hasTag('mierno:tiab_blacklist_block')) {
        event.cancel();
    }
});

EntityEvents.spawned('villager', (event) => {
    event.cancel();
});

EntityEvents.spawned('bloodmagic:meteor', (event) => {
    const { entity, level } = event;

    entity.setGlowing(true);

    let lightningBoltEntity = level.createEntity('lightning_bolt');
    lightningBoltEntity.setVisualOnly(true);
    lightningBoltEntity.moveTo(new Vec3d(entity.x, entity.y, entity.z));
    lightningBoltEntity.spawn();
});

ItemEvents.crafted('naturesaura:birth_spirit', (event) => {
    const { player, level } = event;

    if (player != null && !player.isFake()) {
        player.attack(getDamageSource(level, 'out_of_world'), 2);
        player.invulnerableTime = 0;
    }
});

EntityEvents.drops('ender_dragon', (event) => {
    const { level } = event;

    const center = level.getBlock(0, 72, 0);

    /**@type {Internal.ItemEntity} */
    let itemEntity = center.createEntity('item');
    itemEntity.setItem('mierno:subtraction_sigil');
    itemEntity.moveTo(Vec3d.atCenterOf(center.pos));
    itemEntity.setNoGravity(true);
    itemEntity.spawn();
});

BlockEvents.broken(
    [
        'forbidden_arcanus:clibano_center',
        'forbidden_arcanus:clibano_corner',
        'forbidden_arcanus:clibano_side_vertical',
        'forbidden_arcanus:clibano_side_horizontal',
    ],
    (event) => {
        event.block.set('minecraft:air');
        event.cancel();
    }
);

EntityEvents.spawned('wither', (event) => {
    /**@type {Internal.WitherBoss} */
    let living = event.entity;
    living.setHealth(300);
    living.setNoAi(true);
});

// BlockEvents.placed('mierno:memory_matrix', (event) => {
//     const { block, level, server } = event;

//     let areas = LoquatAreaManager.of(level).byPosition(block.pos);
//     areas.forEach((area) => {
//         if (area.tags.contains('destroyed_end_portal')) {
//             let centerPos = new BlockPos(area.center.x(), area.center.y(), area.center.z());
//             let portalPos = centerPos.below().north(2).west(4);
//             let structureTemplate = server.structureManager.get('mierno:activated_end_portal').get();

//             level.getBlock(centerPos).set('stone');
//             structureTemplate.placeInWorld(level, portalPos, portalPos, new $StructurePlaceSettings(), level.random, 2);
//         }
//     });
// });

// LoquatEvents.playerEnteredArea((event) => {
//     const { area, player } = event;

//     if (area.tags.contains('destroyed_end_portal')) {
//         player.tell(':D');
//     }
// });
