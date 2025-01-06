StartupEvents.registry("item", (event) => {
    event
        .create("mierno:sun_crystal")
        .rarity("rare")
        .unstackable()
        .barWidth((i) => {
            if (i.nbt && i.nbt.contains("Solar") && i.nbt.getInt("Solar") != 0) {
                return ((i.nbt.getInt("Solar") + 8) / 100) * 13;
            }
            return 0;
        })
        .barColor((i) => Color.GOLD);
});
