CapabilityEvents.blockEntity((event) => {
    event.attach(
        "wizards_reborn:orbital_fluid_retainer",
        BotaniaCapabilityBuilder.MANA.blockEntity()
            .receiveMana((be, amount) => {
                let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                fluid.fill(Fluid.of("mierno:liquid_mana", 0.1 * amount), "EXECUTE");
            })
            .getCurrentMana((be) => {
                let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                return fluid.getFluidInTank(0).getAmount();
            })
            .isFull((be) => {
                let fluid = be.getCapability(ForgeCapabilities.FLUID_HANDLER).orElse(null);
                return fluid.getTankCapacity(0) <= fluid.getFluidInTank(0).getAmount();
            })
    );

    event.attach(
        "ars_nouveau:source_jar",
        BotaniaCapabilityBuilder.MANA.blockEntity()
            .receiveMana((be, amount) => {
                be.addSource(0.1 * amount);
            })
            .getCurrentMana((be) => {
                return be.getSource();
            })
            .isFull((be) => {
                return be.getSource() == be.getMaxSource();
            })
    );
});
