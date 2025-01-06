BlockEvents.broken((event) => {
    const { block } = event;
    if (block.id != "mierno:datura") return;

    block.popItemFromFace("occultism:datura", "up");
    block.popItemFromFace("occultism:datura_seeds", "up");
});

FTBQuestsEvents.customTask("69390B6D020D01A4", (event) => {
    event.maxProgress = 1;

    event.setCheckTimer(20);

    event.setCheck((task, player) => {
        let check = player.inventory.allItems.some((item) => item.hasTag("botania:mystical_flowers"));
        if (check) {
            task.progress++;
        }
    });
});

EntityEvents.spawned("naturesaura:structure_finder", (event) => {
    event.entity.setGlowing(true);
});

ItemEvents.crafted("naturesaura:birth_spirit", (event) => {
    const { player, level } = event;

    if (player != null && !player.isFake()) {
        player.attack(getDamageSource(level, "out_of_world"), 2);
        player.invulnerableTime = 0;
    }
});

// LoquatEvents.playerEnteredArea((event) => {
//     const { area, player } = event;

//     if (area.tags.contains("destroyed_end_portal")) {
//         player.tell(":D");
//     }
// });
