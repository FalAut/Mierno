const $Color = Java.loadClass("java.awt.Color");
const PERIOD = 3600;
const PHASE_OFFSET = PERIOD * 0.9;

ForgeEvents.onEvent("net.minecraftforge.client.event.RenderTooltipEvent$Color", (event) => {
    if (event.itemStack != "mierno:memory_matrix") return;
    const systemTime = Utils.systemTime;

    const calculateHue = (timeOffset) => ((systemTime + timeOffset) % PERIOD) / PERIOD;

    event.setBorderStart($Color.HSBtoRGB(calculateHue(0), 1, 1));
    event.setBorderEnd($Color.HSBtoRGB(calculateHue(PHASE_OFFSET), 1, 1));
});
