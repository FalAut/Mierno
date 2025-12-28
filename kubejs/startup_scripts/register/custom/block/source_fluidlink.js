StartupEvents.registry('block', (event) => {
    event
        .create('mierno:source_fluidlink')
        .hardness(2)
        .requiresTool(true)
        .box(1.6, 1.6, 1.6, 14.4, 14.4, 14.4)
        .defaultCutout()
        .blockEntity((info) => {
            info.serverTick(10, 0, (be) => {
                const { block, level } = be;
                const tank = block.up;

                if (tank.id == 'ae2:sky_stone_tank') {
                    const tankCap = tank.entity.getCapability(ForgeCapabilities.FLUID_HANDLER).resolve().get();
                    const amount = tankCap.getFluidInTank(0).amount;
                    const maxAmount = tankCap.getTankCapacity(0);

                    if (amount < maxAmount && $SourceUtil.takeSourceWithParticles(tank.pos, level, 6, 200) != null) {
                        tankCap.fill(Fluid.of('mierno:liquid_source', 100), 'execute');
                    }
                }
            });
        });
});
