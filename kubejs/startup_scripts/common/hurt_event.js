ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
    const { source } = event;

    if (source.getType() == "evilcraft.spiked") {
        event.setAmount(0);
    }
});
