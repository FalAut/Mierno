StartupEvents.registry("item", (event) => {
    event
        .create("mierno:unstable_ingot")
        .rarity("epic")
        .barWidth((i) => {
            if (i.nbt && i.nbt.contains("Stable") && i.nbt.getInt("Stable") != 0) {
                return ((i.nbt.getInt("Stable") + 8) / 100) * 13;
            }
            return 100;
        })
        .barColor((i) => {
            if (i.nbt == null || !i.nbt.contains("Stable")) return Color.WHITE;

            let stable = i.nbt.getInt("Stable");
            let greenBlue = Math.floor((stable / 100) * 255);
            return Color.rgba(255, greenBlue, greenBlue, 100);
        });
});
