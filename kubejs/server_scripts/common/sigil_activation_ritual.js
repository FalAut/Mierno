const SIGIL_RITUAL_CONFIGS = [
    {
        ritualType: 'addition',
        blockType: 'crafting_table',
        check: createRitualChecker('addition', (level, block, multiblock) => {
            const time = level.getDayTime() % 24000;
            const chunkAuraCap = level.getChunkAt(block.pos).getCapability($NaturesAuraAPI.CAP_AURA_CHUNK).orElse(null);
            const aura = chunkAuraCap.getAuraInArea(level, block.pos, 35);

            return [
                [multiblock.validate(level, block.pos, 'none'), 'multiblock'],
                [time >= 5500 && time <= 6500, 'noon'],
                [aura >= 1000000, 'aura'],
                [block.up.canSeeSky, 'canseesky'],
            ];
        }),
    },
    {
        ritualType: 'division',
        blockType: 'enchanting_table',
        check: createRitualChecker('division', (level, block, multiblock) => {
            const blockLight = level.getBrightness('block', block.pos);
            const time = level.getDayTime() % 24000;
            const isMidnight = time >= 17500 && time <= 18500;

            return [
                [multiblock.validate(level, block.pos, 'none'), 'multiblock'],
                [isMidnight, 'midnight'],
                [level.isNight() && blockLight <= 0, 'dark'],
                [block.up.canSeeSky, 'canseesky'],
            ];
        }),
    },
];

SIGIL_RITUAL_CONFIGS.forEach((config) => {
    BlockEvents.rightClicked(config.blockType, (event) => {
        const { item, level, block, player } = event;

        if (item != `mierno:${config.ritualType}_sigil`) return;

        player.tell(Text.translate(`message.mierno.${config.ritualType}_activation_ritual.title`).red());

        if (config.check(level, block, player)) {
            player.tell(Text.translate('message.mierno.activation_ritual.prepared').lightPurple());
            player.tell(Text.translate(`message.mierno.${config.ritualType}_activation_ritual.next_step`).darkRed());
        }

        player.swing();
    });
});

global.additionSigilValidate = (level, block, times) => {
    const ritualConfig = SIGIL_RITUAL_CONFIGS.find((config) => config.ritualType == 'addition');

    if (ritualConfig.check(level, block.down)) {
        return times;
    }
    return 0;
};

EntityEvents.death((event) => {
    const { entity, level } = event;
    const block = entity.block;
    const ritualConfig = SIGIL_RITUAL_CONFIGS.find((config) => config.ritualType == 'division');

    if (!ritualConfig.check(level, block)) return;

    const multiblock = $PatchouliAPI.getMultiblock('mierno:division_sigil_activation_ritual');
    multiblock.simulate(level, block.pos, 'none', false).second.forEach((result) => {
        if (result.character == 'A') {
            level.setBlock(
                result.worldPosition.below(),
                Block.getBlock('botania:mutated_grass').defaultBlockState(),
                2
            );
        }
        if (result.character == 'B') {
            level.setBlock(
                result.worldPosition.above(),
                Blocks.REDSTONE_WIRE.defaultBlockState().setValue(BlockProperties.POWER, new $Integer('15')),
                2
            );
        }
    });

    let lightningBoltEntity = block.createEntity('lightning_bolt');
    lightningBoltEntity.setVisualOnly(true);
    lightningBoltEntity.moveTo(Vec3d.atCenterOf(block.pos));
    lightningBoltEntity.spawn();

    level.getEntitiesWithin(AABB.ofBlock(block.pos)).forEach((entity) => {
        if (entity?.item != 'mierno:division_sigil') return;

        /**@type {Internal.ItemEntity} */
        let itemEntity = entity;
        itemEntity.setItem(Item.of('mierno:division_sigil').enchant('mierno:activate', 1));
        itemEntity.moveTo(Vec3d.atCenterOf(block.pos.above()));
        itemEntity.setDeltaMovement(new Vec3d(0, 0.01, 0));
        itemEntity.setNoGravity(true);
        itemEntity.setGlowing(true);
        level.broadcastEntityEvent(entity, 35);
    });
});
