StartupEvents.postInit((event) => {
    if (!Platform.isClientEnvironment()) return;
    const $BiomeColors = Java.loadClass("net.minecraft.client.renderer.BiomeColors");

    let cobbleGens = [
        "mierno:cobble_gen_tier1",
        "mierno:cobble_gen_tier2",
        "mierno:cobble_gen_tier3",
        "mierno:cobble_gen_tier4",
        "mierno:cobble_gen_tier5",
        "mierno:cobble_gen_tier6",
    ];

    Client.blockColors.register(
        (state, env, pos, tintIndex) =>
            tintIndex == 1 ? (env != null && pos != null ? $BiomeColors.getAverageWaterColor(env, pos) : 4159204) : -1,
        cobbleGens
    );

    Client.itemColors.register((stack, index) => (index == 1 ? 4159204 : -1), cobbleGens);
});

// ForgeEvents.onEvent("net.minecraftforge.client.event.RegisterColorHandlersEvent$Block", (event) => {
//     event.register(
//         (state, env, pos, tintIndex) =>
//             tintIndex == 1 ? (env != null && pos != null ? $BiomeColors.getAverageWaterColor(env, pos) : 4159204) : -1,
//         [
//             "mierno:cobble_gen_tier1",
//             "mierno:cobble_gen_tier2",
//             "mierno:cobble_gen_tier3",
//             "mierno:cobble_gen_tier4",
//             "mierno:cobble_gen_tier5",
//             "mierno:cobble_gen_tier6",
//         ]
//     );
// });

// ForgeModEvents.onEvent("net.minecraftforge.client.event.RegisterColorHandlersEvent$Item", (event) => {
//     event.register(
//         (stack, index) => (index == 1 ? 4159204 : -1),
//         [
//             "mierno:cobble_gen_tier1",
//             "mierno:cobble_gen_tier2",
//             "mierno:cobble_gen_tier3",
//             "mierno:cobble_gen_tier4",
//             "mierno:cobble_gen_tier5",
//             "mierno:cobble_gen_tier6",
//         ]
//     );
// });
