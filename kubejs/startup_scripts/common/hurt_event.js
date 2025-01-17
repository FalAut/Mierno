ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingHurtEvent", (event) => {
    const { source } = event;

    if (source.getType() == "evilcraft.spiked") {
        event.setAmount(0);
    }

    if (event.entity.type == "ars_nouveau:wilden_boss") {
        event.setAmount(100);
    }
});
