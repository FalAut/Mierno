BlockEvents.rightClicked((event) => {
    const { hand, item, block } = event;
    if (hand != "MAIN_HAND") return;

    if (block == "mierno:fired_crucible" || block == "mierno:oak_crucible") {
        if (item.hasTag("leaves") || item == "gray_concrete") {
            event.cancel();
        }
    }
});
