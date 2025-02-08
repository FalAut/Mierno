StartupEvents.registry('item', (event) => {
    event
        .create('mierno:moon_stone')
        .rarity('rare')
        .unstackable()
        .barWidth((i) => {
            if (i.nbt && i.nbt.contains('Lunar') && i.nbt.getInt('Lunar') != 0) {
                return ((i.nbt.getInt('Lunar') + 8) / 100) * 13;
            }
            return 0;
        })
        .barColor((i) => Color.GRAY);
});
