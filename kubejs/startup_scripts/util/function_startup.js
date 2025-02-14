/**
 *
 * @param {Internal.Level} level
 * @param {BlockPos} blockPos
 * @param {number} range
 * @param {function(Internal.BlockState): boolean} condition
 * @returns {BlockPos | null}
 */
function getCoordsToPut(level, blockPos, range, condition) {
    if (blockPos == null) return null;

    let possibleCoords = [];

    for (let i = -range; i <= range; i++) {
        for (let j = -range; j <= range; j++) {
            for (let k = -range; k <= range; k++) {
                let pos = blockPos.offset(i, j, k);
                let state = level.getBlockState(pos);

                if (condition(state)) {
                    possibleCoords.push(pos);
                }
            }
        }
    }

    if (possibleCoords.length === 0) return null;

    return possibleCoords[level.random.nextInt(possibleCoords.length)];
}

/**
 *
 * @param {Internal.Player} player
 * @param {boolean} enable
 * @returns
 */
function toggleFlying(player, enable) {
    if (player.isCreative() || player.isSpectator()) return;

    if (player.abilities.mayfly != enable) {
        player.abilities.mayfly = enable;
        if (!enable) player.abilities.flying = false;
        player.onUpdateAbilities();
    }
}

/**
 *
 * @param {Internal.LivingEntity} entity
 * @returns {Internal.BlockContainerJS}
 */
function getRayTraceBlock(entity) {
    const block = entity.rayTrace().block;
    if (block?.blockState?.fluidState?.fluidType == 'minecraft:empty') {
        return block;
    }
    return null;
}

/**
 *
 * @param {number} n
 * @param {number} a0
 * @param {number} d
 * @returns {number}
 */
function sum(n, a0, d) {
    return (n * (2 * a0 + (n - 1) * d)) / 2;
}

/**
 *
 * @param {number} level
 * @returns {number}
 */
function getExperienceForLevel(level) {
    if (level == 0) return 0;
    if (level <= 15) return sum(level, 7, 2);
    if (level <= 30) return 315 + sum(level - 15, 37, 5);
    return 1395 + sum(level - 30, 112, 9);
}

/**
 *
 * @param {Internal.ServerPlayer} player
 * @returns {number}
 */
function getPlayerXP(player) {
    return getExperienceForLevel(player.experienceLevel) + player.totalExperience;
}

/**
 *
 * @param {Internal.ServerPlayer} player
 * @param {number} bounceY
 */
function setBounceData(player, bounceY) {
    let bounceData = player.persistentData.get('bounceData');
    if (!bounceData) {
        bounceData = {
            bounceTick: 0,
            bounceY: 0,
            lastX: 0,
            lastZ: 0,
            wasInAir: false,
            groundTimer: 0,
        };
    }
    bounceData.bounceTick = player.age;
    bounceData.bounceY = bounceY;

    player.persistentData.put('bounceData', bounceData);
}

/**
 *
 * @param {Internal.LivingFallEvent} event
 * @returns
 */
function onFallWithSlimeBoots(event) {
    const { entity, distance } = event;
    if (!entity.isPlayer()) return;

    if (entity.getItemBySlot('feet') != 'mierno:slime_boots') return;

    if (!entity.crouching && distance > 2) {
        if (entity.abilities.mayfly) {
            event.setDistance(distance);
        } else {
            event.setDamageMultiplier(0);
            entity.resetFallDistance();
        }

        if (entity.level.isClientSide()) {
            const motion = entity.deltaMovement;
            entity.setDeltaMovement(new Vec3d(motion.x(), motion.y() * -0.9, motion.z()));
            entity.hasImpulse = true;
            entity.setOnGround(false);
        } else if (event.isCancelable()) {
            event.setCanceled(true);
        }

        entity.level.playSound(null, entity.blockPosition(), 'entity.slime.squish', 'master');

        for (let i = 0; i < 8; i++) {
            const angle = entity.random.nextFloat() * JavaMath.PI * 2;
            const radius = 0.5 * (0.5 + entity.random.nextFloat());
            const xOffset = Math.sin(angle) * radius;
            const zOffset = Math.cos(angle) * radius;
            entity.level.addParticle('minecraft:item_slime', entity.x + xOffset, entity.y, entity.z + zOffset, 0, 0, 0);
        }

        setBounceData(entity, entity.deltaMovement.y());
    }
}

/**@type {Internal.Player} */
function hasCurios(player, curiosItem) {
    let curioInv = $CuriosApi.getCuriosInventory(player).resolve();
    if (curioInv.isEmpty()) {
        return false;
    }
    let itemHandler = curioInv.get().getEquippedCurios();

    return itemHandler.allItems.some((item) => item == curiosItem);
}
