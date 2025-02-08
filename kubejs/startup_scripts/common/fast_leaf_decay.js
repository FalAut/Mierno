let plannedUpdates = [];
let scheduledUpdates = [];

const MinimumDecayTime = 4;
const MaximumDecayTime = 11;

ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent', (event) => {
    const { level, pos, state, notifiedSides } = event;
    if (level.isClientSide() || !state.isAir()) return;

    for (let facing of notifiedSides) {
        let offPos = pos.relative(facing);
        if (level.isAreaLoaded(offPos, 1)) {
            let state = level.getBlockState(offPos);

            if (state.block instanceof $LeavesBlock) {
                let minimum = MinimumDecayTime;
                let jitter = MaximumDecayTime - MinimumDecayTime;
                let delay = minimum + Utils.random.nextInt(jitter);

                plannedUpdates.push({
                    levelAccessor: level,
                    pos: offPos,
                    tick: delay,
                });
            }
        }
    }
});

ForgeEvents.onEvent('net.minecraftforge.event.TickEvent$ServerTickEvent', (event) => {
    if (event.side != 'SERVER' && event.phase != 'END') return;
    if (plannedUpdates.length > 0) {
        Array.prototype.push.apply(scheduledUpdates, plannedUpdates);
        plannedUpdates = [];
    }

    let newScheduledUpdates = [];

    for (let blockUpdate of scheduledUpdates) {
        blockUpdate.tick--;

        if (blockUpdate.tick <= 0) {
            let levelAccessor = blockUpdate.levelAccessor;

            if (levelAccessor != null && levelAccessor.isAreaLoaded(blockUpdate.pos, 1)) {
                let state = levelAccessor.getBlockState(blockUpdate.pos);

                if (state.block instanceof $LeavesBlock) {
                    state.randomTick(levelAccessor, blockUpdate.pos, levelAccessor.getRandom());
                }
            }
        } else {
            newScheduledUpdates.push(blockUpdate);
        }
    }

    scheduledUpdates = newScheduledUpdates;
});
