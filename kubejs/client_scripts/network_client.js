NetworkEvents.dataReceived("has_dream_lantern", (event) => {
    const { data, player } = event;
    const hasDreamLantern = data.getBoolean("hasDreamLantern");

    if (hasDreamLantern) {
        player.persistentData.putBoolean("has_dream_lantern", true);
    } else {
        player.persistentData.putBoolean("has_dream_lantern", false);
    }
});

NetworkEvents.dataReceived("display_item_activation", (event) => {
    const { data } = event;

    if (data.displayItem) {
        Client.gameRenderer.displayItemActivation(data.displayItem);
    }
});

ClientEvents.tick((event) => {
    if (Client.isKeyDown(67) && !Client.screen) {
        event.player.sendData("portable_crafting", { portable_crafting: true });
    }
});

NetworkEvents.dataReceived("display_third_eye", (event) => {
    const { data, player } = event;

    if (data.getBoolean("hasThirdEye")) {
        player.paint({
            third_eye: {
                type: "item",
                item: "botania:third_eye",
                w: 32,
                h: 32,
                alignX: "top",
                alignY: "top",
                x: 20,
                y: 20,
            },
        });
    } else if (Painter.getObject("third_eye")) {
        player.paint({ third_eye: { remove: true } });
    }
});

// ClientEvents.loggedIn((event) => {
//     let isFlatField = $ClientLevelData.__javaObject__.getDeclaredField("f_104832_");

//     isFlatField.setAccessible(true);
//     isFlatField.setBoolean(event.level.levelData, true);
// });
