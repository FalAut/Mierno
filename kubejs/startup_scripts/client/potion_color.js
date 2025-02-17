ForgeEvents.onEvent('net.minecraftforge.event.entity.living.PotionColorCalculationEvent', (event) => {
    global.test(event);
});

global.test = (event) => {
    console.log(1);
};
