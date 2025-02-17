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
    {
        ritualType: 'subtraction',
        blockType: 'respawn_anchor',
        check: createRitualChecker('subtraction', (level, block, multiblock) => {
            const isNether = level.dimension == 'minecraft:the_nether';
            const maxCharge = block.blockState.getValue(BlockProperties.RESPAWN_ANCHOR_CHARGES) >= 4;
            const chunkAuraCap = level.getChunkAt(block.pos).getCapability($NaturesAuraAPI.CAP_AURA_CHUNK).orElse(null);
            const aura = chunkAuraCap.getAuraInArea(level, block.pos, 35);

            return [
                [multiblock.validate(level, block.pos, 'none'), 'multiblock'],
                [isNether, 'nether'],
                [aura <= 0, 'low_aura'],
                [maxCharge, 'max_charge'],
            ];
        }),
    },
    {
        ritualType: 'multiplication',
        blockType: ['cauldron', 'water_cauldron'],
        check: createRitualChecker('multiplication', (level, block, multiblock) => {
            const isTearsCity = true;
            const isThundering = level.isThundering();
            const maxLevel =
                block == 'minecraft:water_cauldron'
                    ? block.blockState.getValue(BlockProperties.LEVEL_CAULDRON) >= 3
                    : false;

            return [
                [multiblock.validate(level, block.pos, 'none'), 'multiblock'],
                [isTearsCity, 'city_of_tears'],
                [isThundering, 'thundering'],
                [maxLevel, 'max_level'],
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

// 聚合徽章激活
global.additionSigilActivation = (anvilEntity) => {
    const { level, block } = anvilEntity;
    const ritualConfig = SIGIL_RITUAL_CONFIGS.find((config) => config.ritualType == 'addition');

    if (!ritualConfig.check(level, block.down)) return;

    level.getEntitiesWithin(AABB.ofBlock(block.pos)).forEach((entity) => {
        if (entity?.item != 'mierno:addition_sigil') return;

        sigilRitualActivationEffect('addition', entity, level, block.down, 'botania:vivid_grass');
    });
};

// 分割徽章激活
EntityEvents.death((event) => {
    const { entity, level } = event;
    const block = entity.block;
    const ritualConfig = SIGIL_RITUAL_CONFIGS.find((config) => config.ritualType == 'division');

    if (!ritualConfig.check(level, block)) return;

    level.getEntitiesWithin(AABB.ofBlock(block.pos)).forEach((entity) => {
        if (entity?.item != 'mierno:division_sigil') return;

        sigilRitualActivationEffect('division', entity, level, block, 'botania:mutated_grass');
    });
});

// 削减徽章激活
LevelEvents.beforeExplosion((event) => {
    const { block, level } = event;
    if (block.down != 'minecraft:respawn_anchor') return;

    const ritualConfig = SIGIL_RITUAL_CONFIGS.find((config) => config.ritualType == 'subtraction');

    if (!ritualConfig.check(level, block.down)) return;

    level.getEntitiesWithin(AABB.ofBlock(block.pos)).forEach((entity) => {
        if (entity?.item != 'mierno:subtraction_sigil') return;

        sigilRitualActivationEffect('subtraction', entity, level, block.down, 'botania:scorched_grass');

        level.setBlock(
            block.pos.below(),
            Blocks.RESPAWN_ANCHOR.defaultBlockState().setValue(
                BlockProperties.RESPAWN_ANCHOR_CHARGES,
                new $Integer('0')
            ),
            2
        );

        event.cancel();
    });
});

// 融合徽章激活
global.multiplicationSigilActivation = (level, block) => {
    let ritualConfig = SIGIL_RITUAL_CONFIGS.find((config) => config.ritualType == 'multiplication');
    if (!ritualConfig.check(level, block)) return;

    level.getEntitiesWithin(AABB.ofBlock(block.pos)).forEach((entity) => {
        if (entity?.item != 'mierno:multiplication_sigil') return;

        sigilRitualActivationEffect('multiplication', entity, level, block, 'botania:infused_grass');

        level.setBlock(block.pos, Blocks.CAULDRON.defaultBlockState(), 2);
    });
};

EntityEvents.spawned((event) => {
    console.log(event.entity.nbt);
});
