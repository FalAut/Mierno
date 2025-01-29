BlockEvents.rightClicked((event) => {
    const { hand, item, block, player } = event;
    if (hand != "MAIN_HAND") return;

    if (block == "mierno:fired_crucible" && item == "gray_concrete" && !player.isCrouching()) event.cancel();
    if (block == "mierno:oak_crucible" && item.hasTag("leaves") && !player.isCrouching()) event.cancel();
    if (item == "mierno:source_flower" && !block.hasTag("dirt")) event.cancel();
});
