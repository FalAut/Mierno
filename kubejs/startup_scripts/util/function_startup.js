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
    if (block?.blockState?.fluidState?.fluidType == "minecraft:empty") {
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
