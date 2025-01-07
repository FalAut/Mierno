/**
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
